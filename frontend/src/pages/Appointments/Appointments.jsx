import { useEffect, useState }
from "react";

import DashboardLayout
from "../../components/templates/DashboardLayout/DashboardLayout";

import {
  getAppointments,
  createAppointment
}
from "../../services/appointmentService";

import {
  getAll as getPatients
}
from "../../services/patientService";

import {
  getDoctors
}
from "../../services/doctorService";

export default function Appointments(){

  const [appointments, setAppointments]
    = useState([]);

  const [patients, setPatients]
    = useState([]);

  const [doctors, setDoctors]
    = useState([]);

  const [formData, setFormData]
    = useState({

      patientId:"",

      doctorId:"",

      appointmentDate:"",

      appointmentTime:"",

      symptoms:""
    });

  const fetchData = async() => {

    try{

      const appointmentResponse =
        await getAppointments();

      setAppointments(
        appointmentResponse.data
      );

      const patientResponse =
        await getPatients();

      setPatients(
        patientResponse.data
      );

      const doctorResponse =
        await getDoctors();

      setDoctors(
        doctorResponse.data
      );

    }catch(error){

      console.log(error);
    }
  };

  useEffect(() => {

    fetchData();

  }, []);

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value
    });
  };

  const handleSubmit = async(e) => {

    e.preventDefault();

    try{

      const payload = {

        patient: {
          id: Number(formData.patientId)
        },

        doctor: {
          id: Number(formData.doctorId)
        },

        appointmentDate:
          formData.appointmentDate,

        appointmentTime:
          formData.appointmentTime,

        symptoms:
          formData.symptoms
      };

      await createAppointment(
        payload
      );

      fetchData();

    }catch(error){

      console.log(error);
    }
  };

  return(

    <DashboardLayout>

      <div className="card">

        <h2>Appointments Module</h2>

        <br/>

        <form onSubmit={handleSubmit}>

          <select
            name="patientId"
            onChange={handleChange}
          >

            <option value="">
              Select Patient
            </option>

            {patients.map((patient)=>(
              <option
                key={patient.id}
                value={patient.id}
              >

                {patient.patientId}
                {" - "}
                {patient.name}

              </option>
            ))}

          </select>

          <select
            name="doctorId"
            onChange={handleChange}
          >

            <option value="">
              Select Doctor
            </option>

            {doctors.map((doctor)=>(
              <option
                key={doctor.id}
                value={doctor.id}
              >

                {doctor.doctorName}
                {" - "}
                {doctor.specialization}

              </option>
            ))}

          </select>

          <input
            type="date"
            name="appointmentDate"
            onChange={handleChange}
          />

          <input
            type="time"
            name="appointmentTime"
            onChange={handleChange}
          />

          <input
            name="symptoms"
            placeholder="Symptoms"
            onChange={handleChange}
          />

          <button type="submit">

            Book Appointment

          </button>

        </form>

        <table>

          <thead>

            <tr>

              <th>Appointment ID</th>

              <th>Patient</th>

              <th>Doctor</th>

              <th>Date</th>

              <th>Status</th>

            </tr>

          </thead>

          <tbody>

            {appointments.map((appointment)=>(

              <tr key={appointment.id}>

                <td>
                  {appointment.appointmentId}
                </td>

                <td>
                  {appointment.patient?.name}
                </td>

                <td>
                  {appointment.doctor?.doctorName}
                </td>

                <td>
                  {appointment.appointmentDate}
                </td>

                <td>
                  {appointment.status}
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </DashboardLayout>
  )
}