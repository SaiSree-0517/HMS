import { useEffect, useState } from "react";

import DashboardLayout from "../../components/templates/DashboardLayout/DashboardLayout";

import {
  getDoctors,
  createDoctor
} from "../../services/doctorService";

export default function Doctors(){

  const [doctors, setDoctors] = useState([]);

  const [formData, setFormData] = useState({
    doctorId:"",
    doctorName:"",
    specialization:"",
    qualification:"",
    email:"",
    phone:""
  });

  const fetchDoctors = async() => {

    const response = await getDoctors();

    setDoctors(response.data);
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async(e) => {

    e.preventDefault();

    await createDoctor(formData);

    fetchDoctors();
  };

  return(

    <DashboardLayout>

      <div className="card">

        <h2>Doctors Module</h2>

        <form onSubmit={handleSubmit}>

          <input
            name="doctorId"
            placeholder="Doctor ID"
            onChange={handleChange}
          />

          <input
            name="doctorName"
            placeholder="Doctor Name"
            onChange={handleChange}
          />

          <input
            name="specialization"
            placeholder="Specialization"
            onChange={handleChange}
          />

          <input
            name="qualification"
            placeholder="Qualification"
            onChange={handleChange}
          />

          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />

          <input
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
          />

          <button type="submit">
            Save Doctor
          </button>

        </form>

        <table>

          <thead>

            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Specialization</th>
            </tr>

          </thead>

          <tbody>

            {doctors.map((doctor) => (

              <tr key={doctor.id}>
                <td>{doctor.doctorId}</td>
                <td>{doctor.doctorName}</td>
                <td>{doctor.specialization}</td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </DashboardLayout>
  )
}