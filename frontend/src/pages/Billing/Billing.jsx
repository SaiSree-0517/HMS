import { useEffect, useState }
from "react";

import DashboardLayout
from "../../components/templates/DashboardLayout/DashboardLayout";

import {
  getBills,
  createBill
}
from "../../services/billService";

import {
  getAll as getPatients
}
from "../../services/patientService";

export default function Billing(){

  const initialState = {

    patientId:"",

    consultationFee:"",

    medicineFee:"",

    labFee:"",

    tax:"",

    discount:"",

    paymentMethod:""
  };

  const [bills, setBills]
    = useState([]);

  const [patients, setPatients]
    = useState([]);

  const [formData, setFormData]
    = useState(initialState);

  const fetchData = async() => {

    try{

      const billResponse =
        await getBills();

      setBills(
        billResponse.data
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

        consultationFee:
          Number(formData.consultationFee),

        medicineFee:
          Number(formData.medicineFee),

        labFee:
          Number(formData.labFee),

        tax:
          Number(formData.tax),

        discount:
          Number(formData.discount),

        paymentMethod:
          formData.paymentMethod
      };

      await createBill(payload);

      await fetchData();

      setFormData(initialState);

    }catch(error){

      console.log(error);
    }
  };

  return(

    <DashboardLayout>

      <div className="card">

        <h2>Billing Module</h2>

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
            name="consultationFee"
            placeholder="Consultation Fee"
            value={formData.consultationFee}
            onChange={handleChange}
          />

          <input
            name="medicineFee"
            placeholder="Medicine Fee"
            value={formData.medicineFee}
            onChange={handleChange}
          />

          <input
            name="labFee"
            placeholder="Lab Fee"
            value={formData.labFee}
            onChange={handleChange}
          />

          <input
            name="tax"
            placeholder="Tax"
            value={formData.tax}
            onChange={handleChange}
          />

          <input
            name="discount"
            placeholder="Discount"
            value={formData.discount}
            onChange={handleChange}
          />

          <input
            name="paymentMethod"
            placeholder="Payment Method"
            value={formData.paymentMethod}
            onChange={handleChange}
          />

          <button type="submit">

            Generate Bill

          </button>

        </form>

        <br/>

        <table>

          <thead>

            <tr>

              <th>Bill ID</th>

              <th>Patient</th>

              <th>Total</th>

              <th>Payment</th>

            </tr>

          </thead>

          <tbody>

            {bills.map((bill)=>(

              <tr key={bill.id}>

                <td>
                  {bill.billId}
                </td>

                <td>
                  {bill.patient?.name}
                </td>

                <td>
                  ₹ {bill.totalAmount}
                </td>

                <td>
                  {bill.paymentMethod}
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </DashboardLayout>
  )
}