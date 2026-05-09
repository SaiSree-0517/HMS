import { useEffect, useState } from "react";

import DashboardLayout from "../../components/templates/DashboardLayout/DashboardLayout";

import {
  getAll,
  createData
} from "../../services/patientService";

export default function Patients() {

  const [patients, setPatients] = useState([]);

  const [formData, setFormData] = useState({
    patientId: "",
    name: "",
    age: "",
    gender: "",
    phone: "",
    address: "",
    bloodGroup: ""
  });

  const fetchPatients = async () => {

    try {

      const response = await getAll();

      setPatients(response.data);

    } catch (error) {

      console.log(error);
    }
  };

  useEffect(() => {

    fetchPatients();

  }, []);

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await createData(formData);

      setFormData({
        patientId: "",
        name: "",
        age: "",
        gender: "",
        phone: "",
        address: "",
        bloodGroup: ""
      });

      fetchPatients();

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <DashboardLayout>

      <div className="card">

        <h2>Patients Module</h2>

        <br/>

        <form onSubmit={handleSubmit}>

          <input
            name="patientId"
            placeholder="Patient ID"
            value={formData.patientId}
            onChange={handleChange}
          />

          <input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
          />

          <input
            name="gender"
            placeholder="Gender"
            value={formData.gender}
            onChange={handleChange}
          />

          <input
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
          />

          <input
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
          />

          <input
            name="bloodGroup"
            placeholder="Blood Group"
            value={formData.bloodGroup}
            onChange={handleChange}
          />

          <button type="submit">

            Save Patient

          </button>

        </form>

        <table>

          <thead>

            <tr>
              <th>Patient ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Blood Group</th>
            </tr>

          </thead>

          <tbody>

            {patients.map((patient) => (

              <tr key={patient.id}>

                <td>{patient.patientId}</td>
                <td>{patient.name}</td>
                <td>{patient.age}</td>
                <td>{patient.gender}</td>
                <td>{patient.phone}</td>
                <td>{patient.address}</td>
                <td>{patient.bloodGroup}</td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </DashboardLayout>
  );
}