import { useEffect, useState } from "react";

import DashboardLayout from "../../components/templates/DashboardLayout/DashboardLayout";

import {
  getMedicines,
  createMedicine
} from "../../services/medicineService";

export default function Pharmacy(){

  const [medicines, setMedicines] =
    useState([]);

  const [formData, setFormData] = useState({
    medicineId:"",
    medicineName:"",
    stock:"",
    price:""
  });

  const fetchMedicines = async() => {

    const response =
      await getMedicines();

    setMedicines(response.data);
  };

  useEffect(() => {
    fetchMedicines();
  }, []);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async(e) => {

    e.preventDefault();

    await createMedicine(formData);

    fetchMedicines();
  };

  return(

    <DashboardLayout>

      <div className="card">

        <h2>Pharmacy Module</h2>

        <form onSubmit={handleSubmit}>

          <input
            name="medicineId"
            placeholder="Medicine ID"
            onChange={handleChange}
          />

          <input
            name="medicineName"
            placeholder="Medicine Name"
            onChange={handleChange}
          />

          <input
            name="stock"
            placeholder="Stock"
            onChange={handleChange}
          />

          <input
            name="price"
            placeholder="Price"
            onChange={handleChange}
          />

          <button type="submit">
            Save Medicine
          </button>

        </form>

        <table>

          <thead>

            <tr>
              <th>Medicine ID</th>
              <th>Name</th>
              <th>Stock</th>
              <th>Price</th>
            </tr>

          </thead>

          <tbody>

            {medicines.map((medicine)=>(
              <tr key={medicine.id}>

                <td>{medicine.medicineId}</td>

                <td>{medicine.medicineName}</td>

                <td>{medicine.stock}</td>

                <td>{medicine.price}</td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </DashboardLayout>
  )
}