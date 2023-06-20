import React from "react";
import Navbar from "../../Component/Navbar";
import SidebarPasien from "../../Component/Pasien/SidebarPasien";
import TabelProfile from "../../Component/Pasien/TabelProfile";
// import "../Component/style.css";

const DashboardPasien = () => {
  return (
    <div className="bg-slate-500">
      <Navbar />
      <SidebarPasien>
        <p className="font-bold text-2xl p-3 text-white">Profile Pasien</p>
        <TabelProfile />
      </SidebarPasien>
    </div>
  );
};

export default DashboardPasien;
