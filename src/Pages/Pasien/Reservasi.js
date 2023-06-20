import React from "react";
import Navbar from "../../Component/Navbar";
import SidebarPasien from "../../Component/Pasien/SidebarPasien";
import FormReservasi from "../../Component/Pasien/FormReservasi";

const Reservasi = () => {
  return (
    <div className="card bg-slate-500">
      <Navbar />
      <SidebarPasien>
        <div className="card-body">
          <FormReservasi />
        </div>
      </SidebarPasien>
    </div>
  );
};

export default Reservasi;
