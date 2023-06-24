import React from "react";
import Navbar from "../../Component/Navbar";
import SidebarPasien from "../../Component/Admin/SidebarAdminn";
import TabelProfile from "../../Component/Admin/TabelProfile";
import SidebarAdminn from "../../Component/Admin/SidebarAdminn";
// import "../Component/style.css";

const DashboardAdminn = () => {
  return (
    <div className="bg-slate-500">
      <Navbar />
      <SidebarAdminn>
        <div className="p-7">
          <h1 className="text-2xl font-semibold card bg-white w-full card-body flex flex-col">
            Hi! Admin! Selamat Datang di Aplikasi Bidan Leyna Merlina Sarkosi
            <p className="text-xl font-thin">Dashboard Admin</p>
          </h1>
        </div>
        {/* <p className="font-bold text-2xl p-3 text-white">Profile Pasien</p>
        <TabelProfile /> */}
      </SidebarAdminn>
    </div>
  );
};

export default DashboardAdminn;
