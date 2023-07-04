import React from "react";
import Navbar from "../../Component/Navbar";
import SidebarPasien from "../../Component/Admin/SidebarAdminn";
import FormReservasi from "../../Component/Admin/FormReservasi";
import SidebarAdminn from "../../Component/Admin/SidebarAdminn";
import { Link } from "react-router-dom";
import DataBidan from "./DataBidan";

const Bidan = () => {
  return (
    <div className="card bg-slate-500">
      <Navbar />
      <SidebarAdminn>
        <Link to="/form-reservasi">
          <button className="btn btn-primary font-bold">
            REGISTRASI AKUN BIDAN
          </button>
        </Link>
        <div className="card-body">
          <DataBidan />
        </div>
      </SidebarAdminn>
    </div>
  );
};

export default Bidan;
