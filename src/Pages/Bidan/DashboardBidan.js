import React from "react";
import Navbar from "../../Component/Navbar";
import SidebarBidan from "../../Component/Bidan/SidebarBidan";
// import "../Component/style.css";

const DashboardBidan = () => {
  return (
    <div className="bg-slate-500">
      <Navbar />
      <SidebarBidan>
        <div className="p-7">
          <h1 className="text-2xl font-semibold card bg-white w-full card-body flex flex-col">
            Hi! Bidan! Selamat Datang di Aplikasi Bidan Leyna Merlina Sarkosi
            <p className="text-xl font-thin">Dashboard Bidan</p>
          </h1>
        </div>
        {/* <p className="font-bold text-2xl p-3 text-white">Profile Pasien</p>
        <TabelProfile /> */}
      </SidebarBidan>
    </div>
  );
};

export default DashboardBidan;
