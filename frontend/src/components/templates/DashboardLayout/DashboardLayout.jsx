import Sidebar from "../../organisms/Sidebar/Sidebar";
import Navbar from "../../molecules/Navbar/Navbar";

export default function DashboardLayout({children}){

  return(
    <div className="layout">

      <Sidebar />

      <div className="content">

        <Navbar />

        {children}

      </div>

    </div>
  )
}