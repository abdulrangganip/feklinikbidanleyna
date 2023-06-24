import React, { useState } from "react";
import Navbar from "../../Component/Navbar";
import SidebarPasien from "../../Component/Admin/SidebarAdminn";
import TabelDataIbu from "../../Component/Admin/TabelDataIbu";
import TabelDataAnak from "../../Component/Admin/TabelDataAnak";
import TabelDataKeluarga from "../../Component/Admin/TabelDataKeluarga";
import SidebarAdminn from "../../Component/Admin/SidebarAdminn";

const DataPasien = () => {
  const [nik, setNik] = useState("");
  const [showIbuComponent, setShowIbuComponent] = useState(false);

  console.log("nik", nik);

  const handleCek = () => {
    if (nik === "ibu") {
      setShowIbuComponent(true);
    } else {
      setShowIbuComponent(false);
    }
  };

  return (
    <div className="bg-slate-500">
      <Navbar />
      <SidebarAdminn>
        <div className="flex flex-col gap-y-3">
          <p className="font-bold text-2xl text-white p-3">Data Pasien</p>
          <div className="card bg-white w-full">
            <div className="card-body flex flex-row">
              <label className="pt-3">NIK</label>
              <input
                type="text"
                placeholder="Masukan NIK anda"
                value={nik}
                onChange={(e) => setNik(e.target.value)}
                className="input input-bordered w-full max-w-2xl"
              />
              <button className="btn btn-primary" onClick={handleCek}>
                Cek
              </button>
            </div>
            {showIbuComponent ? (
              <div className="flex flex-col p-5 gap-y-9">
                <div>
                  <p className="font-bold text-center">Data Diri Ibu</p>
                  <hr />
                  <TabelDataIbu />
                </div>
                <div>
                  <p className="font-bold text-center">Data Diri Keluarga</p>
                  <hr />
                  <TabelDataKeluarga />
                </div>
              </div>
            ) : (
              <div className="flex flex-col p-5 gap-y-3">
                <p className="font-bold text-center">Data Diri Anak</p>
                <hr />
                <TabelDataAnak />
              </div>
            )}
          </div>
        </div>
      </SidebarAdminn>
    </div>
  );
};

export default DataPasien;
