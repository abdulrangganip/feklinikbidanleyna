import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";

import Navbar from "../../Component/Navbar";
// import SidebarPasien from "../../Component/Admin/SidebarAdminn";
// import TabelDataIbu from "../../Component/Admin/TabelDataIbu";
// import TabelDataAnak from "../../Component/Admin/TabelDataAnak";
// import TabelDataKeluarga from "../../Component/Admin/TabelDataKeluarga";
import SidebarAdminn from "../../Component/Admin/SidebarAdminn";

const DataPasienAnak = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [listDataAgama, setListDataAgama] = useState(null);
  const getListAgama = async () => {
    try {
      const response = await axios.get(`https://f081-140-213-11-117.ngrok-free.app/api/getagama`);
      const data = response.data?.data;

      setListDataAgama(data);
      console.log(data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const [detailPasien, setDetailPasien] = useState();
  const getListPasien = async (id) => {
    try {
      const response = await axios.get(`https://f081-140-213-11-117.ngrok-free.app/api/getpasien/anak/${id}`);
      const data = response.data?.data;

      const currentDate = moment();
      data.UMUR = currentDate.diff(moment(data.TANGGAL_LAHIR, "YYYY-MM-DD"), "year");
      setDetailPasien(data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    console.log(location);
    getListAgama();
    //getListPendidikanTerakhir();
    getListPasien(location?.state?.id_pasien);
    console.log(location.state.id_pasien);
  }, [location]);

  return (
    <div className="bg-slate-500">
      <Navbar />
      <SidebarAdminn>
        <div className="card bg-white my-5">
          <p className="font-bold text-xl text-center py-4">Data Diri Pasien Anak</p>
          <hr />
          <div className="card-body grid grid-cols-2 gap-x-5">
            <div className="flex flex-col gap-y-5">
              <div className="grid grid-cols-2">
                <label className="font-bold">NO RME</label>
                <label className="input input-info">{detailPasien ? detailPasien.NO_RM : "-"}</label>
              </div>
              <div className="grid grid-cols-2">
                <label className="font-bold">NAMA LENGKAP</label>
                <label className="input input-info">{detailPasien ? detailPasien.NAMA_LENGKAP : "-"}</label>
              </div>
              <div className="grid grid-cols-2">
                <label className="font-bold">TEMPAT LAHIR</label>
                <label className="input input-info">{detailPasien ? detailPasien.TEMPAT_LAHIR : "-"}</label>
              </div>

              <div className="grid grid-cols-2">
                <label className="font-bold">TANGGAL LAHIR</label>
                <label className="input input-info">{detailPasien ? detailPasien.TANGGAL_LAHIR : "-"}</label>
              </div>
              <div className="grid grid-cols-2">
                <label className="font-bold">UMUR</label>
                <label className="input input-info">{detailPasien ? detailPasien.UMUR : "-"}</label>
              </div>

              <div className="grid grid-cols-2">
                <label className="font-bold">ALAMAT</label>
                <label className="input input-info">{detailPasien ? detailPasien.ALAMAT : "-"}</label>
              </div>

              <div className="grid grid-cols-2">
                <label className="font-bold">AGAMA </label>
                <label className="input input-info">{detailPasien ? detailPasien.agama.NAMA : "-"}</label>
              </div>
            </div>

            <div className="flex flex-col gap-y-5">
              <div className="grid grid-cols-2">
                <label className="font-bold">GOLONGAN DARAH</label>
                <label className="input input-info">{detailPasien ? detailPasien.GOL_DARAH : "-"}</label>
              </div>
              <div className="grid grid-cols-2">
                <label>RIWAYAT PENYAKIT</label>
                <label className="input input-info">{detailPasien ? detailPasien.RIWAYAT_PENYAKIT : "-"}</label>
              </div>
              <div className="grid grid-cols-2">
                <label>RIWAYAT ALERGI</label>
                <label className="input input-info">{detailPasien ? detailPasien.RIWAYAT_ALERGI : "-"}</label>
              </div>
              <div className="grid grid-cols-2">
                <label className="font-bold">NO NIK</label>
                <label className="input input-info">{detailPasien ? detailPasien.NO_NIK : "-"}</label>
              </div>

              <div className="grid grid-cols-2">
                <label className="font-bold">NO KK</label>
                <label className="input input-info">{detailPasien ? detailPasien.NO_KK : "-"}</label>
              </div>

              <div className="grid grid-cols-2">
                <label>JENIS KELAMIN</label>
                <label className="input input-info">{detailPasien ? detailPasien.JENIS_KELAMIN : "-"}</label>
              </div>

              <div className="grid grid-cols-2">
                <label>NAMA AYAH</label>
                <label className="input input-info">{detailPasien ? detailPasien.NAMA_AYAH : "-"}</label>
              </div>

              <div className="grid grid-cols-2">
                <label>NAMA IBU</label>
                <label className="input input-info">{detailPasien ? detailPasien.NAMA_IBU : "-"}</label>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <button
            class="btn btn-wide"
            onClick={() => {
              navigate("/data-pasien/data-imunisasi", {
                state: { id_pasien: location.state.id_pasien },
              });
            }}
          >
            IMUNISASI
          </button>
        </div>
      </SidebarAdminn>
    </div>
  );
};

export default DataPasienAnak;
