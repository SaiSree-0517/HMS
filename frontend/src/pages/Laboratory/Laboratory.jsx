import { useEffect, useState }
from "react";

import DashboardLayout
from "../../components/templates/DashboardLayout/DashboardLayout";

import {
  getLabReports,
  createLabReport
}
from "../../services/labReportService";

import {
  getAll as getPatients
}
from "../../services/patientService";

export default function Laboratory(){

  const initialState = {

    patientId:"",

    testName:"",

    result:"",

    remarks:""
  };

  const [reports, setReports]
    = useState([]);

  const [patients, setPatients]
    = useState([]);

  const [formData, setFormData]
    = useState(initialState);

  const fetchData = async() => {

    try{

      const reportResponse =
        await getLabReports();

      setReports(
        reportResponse.data
      );

      const patientResponse =
        await getPatients();

      setPatients(
        patientResponse.data
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

        testName:
          formData.testName,

        result:
          formData.result,

        remarks:
          formData.remarks
      };

      await createLabReport(
        payload
      );

      await fetchData();

      setFormData(initialState);

    }catch(error){

      console.log(error);
    }
  };

  return(

    <DashboardLayout>

      <div className="card">

        <h2>Laboratory Module</h2>

        <br/>

        <form onSubmit={handleSubmit}>

          <select
            name="patientId"
            value={formData.patientId}
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

          <input
            name="testName"
            placeholder="Test Name"
            value={formData.testName}
            onChange={handleChange}
          />

          <input
            name="result"
            placeholder="Result"
            value={formData.result}
            onChange={handleChange}
          />

          <input
            name="remarks"
            placeholder="Remarks"
            value={formData.remarks}
            onChange={handleChange}
          />

          <button type="submit">

            Save Report

          </button>

        </form>

        <br/>

        <table>

          <thead>

            <tr>

              <th>Report ID</th>

              <th>Patient</th>

              <th>Test</th>

              <th>Result</th>

              <th>Status</th>

            </tr>

          </thead>

          <tbody>

            {reports.map((report)=>(

              <tr key={report.id}>

                <td>
                  {report.reportId}
                </td>

                <td>
                  {report.patient?.name}
                </td>

                <td>
                  {report.testName}
                </td>

                <td>
                  {report.result}
                </td>

                <td>
                  {report.status}
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </DashboardLayout>
  )
}