import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard/Dashboard";
import Patients from "../pages/Patients/Patients";
import Doctors from "../pages/Doctors/Doctors";
import Appointments from "../pages/Appointments/Appointments";
import Billing from "../pages/Billing/Billing";
import Pharmacy from "../pages/Pharmacy/Pharmacy";
import Laboratory from "../pages/Laboratory/Laboratory";

export default function AppRoutes(){

  return(

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Dashboard />}
        />

        <Route
          path="/patients"
          element={<Patients />}
        />

        <Route
          path="/doctors"
          element={<Doctors />}
        />

        <Route
          path="/appointments"
          element={<Appointments />}
        />

        <Route
          path="/billing"
          element={<Billing />}
        />

        <Route
          path="/pharmacy"
          element={<Pharmacy />}
        />

        <Route
          path="/laboratory"
          element={<Laboratory />}
        />

      </Routes>

    </BrowserRouter>
  )
}