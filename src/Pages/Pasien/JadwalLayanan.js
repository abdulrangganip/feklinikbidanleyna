import React from "react";
import Navbar from "../../Component/Navbar";
import SidebarPasien from "../../Component/Pasien/SidebarPasien";
import TabelDataIbu from "../../Component/Pasien/TabelDataIbu";
import TabelDataKeluarga from "../../Component/Pasien/TabelDataKeluarga";
import JadwalDataLayanan from "../../Component/Pasien/JadwalDataLayanan";

const JadwalLayanan = () => {
  return (
    <div className="bg-slate-500">
      <Navbar />
      <SidebarPasien>
        <div className="flex flex-col gap-y-3">
          <p className="font-bold text-2xl text-white p-3">Jadwal Pelayanan</p>
          <div className="card bg-white w-full">
            <div className="">
              {/* <label className="pt-3">NIK</label>
              <input
                type="text"
                placeholder="Masukan NIK anda"
                className="input input-bordered w-full max-w-2xl"
              ></input> */}
              {/* <button className="btn btn-primary">Cek</button> */}
            </div>
            {/* <div className="flex flex-col p-5 gap-y-3">
              <p className="font-bold text-center">Data Diri Ibu</p>
              <hr />
              <TabelDataIbu />
            </div> */}
          </div>
          <div className="card bg-white p-5 gap-y-3">
            <hr />
            <JadwalDataLayanan />
          </div>
        </div>
      </SidebarPasien>
    </div>
  );
};
export default JadwalLayanan;
