import React from "react";
import Navbar from "../../Component/Navbar";
import SidebarPasien from "../../Component/Admin/SidebarAdminn";
import FormReservasi from "../../Component/Admin/FormReservasi";
import SidebarAdminn from "../../Component/Admin/SidebarAdminn";

const Bidan = () => {
  return (
    <div className="card bg-slate-500">
      <Navbar />
      <SidebarAdminn>
        <div className="">
          <button className="btn btn-warning">LIST DATA BIDAN</button>
        </div>
        <div className="card-body">
          <FormReservasi />
        </div>
      </SidebarAdminn>
    </div>
  );
};

export default Bidan;
