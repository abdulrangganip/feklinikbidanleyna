import React from "react";
import Navbar from "../../Component/Navbar";
import SidebarPasien from "../../Component/Admin/SidebarAdminn";
import FormReservasi from "../../Component/Admin/FormReservasi";
import SidebarAdminn from "../../Component/Admin/SidebarAdminn";
import { Link } from "react-router-dom";
import TabelDataAnak from "../../Component/Admin/TabelDataAnak";

const Bidan = () => {
  return (
    <div className="card bg-slate-500">
      <Navbar />
      <SidebarAdminn>
        <Link to="/data-bidan">
          <button className="btn btn-primary">LIST DATA BIDAN</button>
        </Link>
        <div className="card-body">
          <FormReservasi />
          <TabelDataAnak />
        </div>
      </SidebarAdminn>
    </div>
  );
};

export default Bidan;
