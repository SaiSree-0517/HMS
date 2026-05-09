import { Link } from "react-router-dom";

export default function Sidebar(){

  return(

    <div className="sidebar">

      <h2>HMS</h2>

      <Link to="/">Dashboard</Link>

      <Link to="/patients">
        Patients
      </Link>

      <Link to="/doctors">
        Doctors
      </Link>

      <Link to="/appointments">
        Appointments
      </Link>

      <Link to="/billing">
        Billing
      </Link>

      <Link to="/pharmacy">
        Pharmacy
      </Link>

      <Link to="/laboratory">
        Laboratory
      </Link>

    </div>
  )
}