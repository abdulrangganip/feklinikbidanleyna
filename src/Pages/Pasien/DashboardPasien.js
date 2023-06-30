import React from "react";
import Navbar from "../../Component/Navbar";
import SidebarPasien from "../../Component/Pasien/SidebarPasien";
// import "../Component/style.css";

const DashboardPasien = () => {
  return (
    <div className="bg-slate-500">
      <Navbar />
      <SidebarPasien>
        <div className="p-7">
          <h1 className="text-2xl font-semibold card bg-white w-full card-body flex flex-col">
            Hi! Pasien! Selamat Datang di Aplikasi Bidan Leyna Merlina Sarkosi
            <p className="text-xl font-thin">Dashboard Pasien</p>
          </h1>
        </div>
        {/* <p className="font-bold text-2xl p-3 text-white">Profile Pasien</p>
        <TabelProfile /> */}
      </SidebarPasien>
    </div>
  );
};

export default DashboardPasien;
