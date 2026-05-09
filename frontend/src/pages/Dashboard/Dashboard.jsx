import { useEffect, useState } from "react";

import DashboardLayout from "../../components/templates/DashboardLayout/DashboardLayout";

import { getDashboard } from "../../services/dashboardService";

export default function Dashboard(){

  const [data, setData] = useState({});

  const fetchDashboard = async() => {

    try{

      const response = await getDashboard();

      setData(response.data);

    }catch(error){

      console.log(error);
    }
  }

  useEffect(() => {
    fetchDashboard();
  }, []);

  return(

    <DashboardLayout>

      <div className="grid">

        <div className="stat">
          <h3>Total Patients</h3>
          <h1>{data.totalPatients || 0}</h1>
        </div>

        <div className="stat">
          <h3>Total Doctors</h3>
          <h1>{data.totalDoctors || 0}</h1>
        </div>

        <div className="stat">
          <h3>Total Appointments</h3>
          <h1>{data.totalAppointments || 0}</h1>
        </div>

      </div>

    </DashboardLayout>
  )
}