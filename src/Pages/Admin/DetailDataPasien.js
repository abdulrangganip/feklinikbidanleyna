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

const DataPasien = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  // const [nik, setNik] = useState("");
  // const [showIbuComponent, setShowIbuComponent] = useState(false);

  // console.log("nik", nik);

  // const handleCek = () => {
  //   if (nik === "ibu") {
  //     setShowIbuComponent(true);
  //   } else {
  //     setShowIbuComponent(false);
  //   }
  // };

  const [listDataAgama, setListDataAgama] = useState(null);
  const getListAgama = async () => {
    try {
      const response = await axios.get(`https://82de-180-244-138-171.ngrok-free.app/api/getagama`);
      const data = response.data?.data;

      setListDataAgama(data);
      console.log(data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const [listDataPendidikanTerakhir, setListDataPendidikanTerakhir] = useState(null);
  const getListPendidikanTerakhir = async () => {
    try {
      const response = await axios.get(`https://82de-180-244-138-171.ngrok-free.app/api/getpendidikan`);
      const data = response.data?.data;

      setListDataPendidikanTerakhir(data);
      console.log(data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const [detailPasien, setDetailPasien] = useState();
  const getListPasien = async (id) => {
    try {
      const response = await axios.get(`https://82de-180-244-138-171.ngrok-free.app/api/getpasien/${id}`);
      const data = response.data?.data;

      const currentDate = moment();
      data[0].UMUR = currentDate.diff(moment(data[0].TANGGAL_LAHIR, "YYYY-MM-DD"), "year");
      data[0].keluarga.UMUR_SUAMI = currentDate.diff(moment(data[0].keluarga.TANGGAL_LAHIR_SUAMI, "YYYY-MM-DD"), "year");
      setDetailPasien(data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    console.log(location);
    getListAgama();
    getListPendidikanTerakhir();
    getListPasien(location?.state?.id_pasien);
    console.log(location.state.id_pasien);
  }, [location]);

  return (
    <div className="bg-slate-500">
      <Navbar />
      <SidebarAdminn>
        <div className="card bg-white my-5">
          <p className="font-bold text-xl text-center py-4">Data Diri Pasien</p>
          <hr />
          <div className="card-body grid grid-cols-2 gap-x-5">
            <div className="flex flex-col gap-y-5">
              <div className="grid grid-cols-2">
                <label className="font-bold">NO RM</label>
                <label className="input input-info">{detailPasien ? detailPasien[0].NO_RM : "-"}</label>
              </div>
              <div className="grid grid-cols-2">
                <label className="font-bold">NAMA LENGKAP</label>
                <label className="input input-info">{detailPasien ? detailPasien[0].NAMA_LENGKAP : "-"}</label>
              </div>
              <div className="grid grid-cols-2">
                <label className="font-bold">TEMPAT LAHIR</label>
                <label className="input input-info">{detailPasien ? detailPasien[0].TEMPAT_LAHIR : "-"}</label>
              </div>

              <div className="grid grid-cols-2">
                <label className="font-bold">TANGGAL LAHIR</label>
                <label className="input input-info">{detailPasien ? detailPasien[0].TANGGAL_LAHIR : "-"}</label>
              </div>
              <div className="grid grid-cols-2">
                <label className="font-bold">UMUR</label>
                <label className="input input-info">{detailPasien ? detailPasien[0].UMUR : "-"}</label>
              </div>

              <div className="grid grid-cols-2">
                <label className="font-bold">ALAMAT</label>
                <label className="input input-info">{detailPasien ? detailPasien[0].ALAMAT : "-"}</label>
              </div>

              <div className="grid grid-cols-2">
                <label className="font-bold">AGAMA </label>
                <label className="input input-info">{detailPasien ? detailPasien[0].agama.NAMA : "-"}</label>
              </div>
            </div>

            <div className="flex flex-col gap-y-5">
              <div className="grid grid-cols-2">
                <label className="font-bold">GOLONGAN DARAH</label>
                <label className="input input-info">{detailPasien ? detailPasien[0].GOL_DARAH : "-"}</label>
              </div>

              <div className="grid grid-cols-2">
                <label className="font-bold">NO NIK</label>
                <label className="input input-info">{detailPasien ? detailPasien[0].NO_NIK : "-"}</label>
              </div>

              <div className="grid grid-cols-2">
                <label className="font-bold">NO KK</label>
                <label className="input input-info">{detailPasien ? detailPasien[0].NO_KK : "-"}</label>
              </div>

              <div className="grid grid-cols-2">
                <label className="font-bold">PEKERJAAN</label>
                <label className="input input-info">{detailPasien ? detailPasien[0].PEKERJAAN : "-"}</label>
              </div>

              <div className="grid grid-cols-2">
                <label className="font-bold">PENDIDIKAN TERAKHIR</label>
                <label className="input input-info">{detailPasien ? detailPasien[0].pendidikan_terakhir.NAMA : "-"}</label>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-white">
          <p className="font-bold text-xl text-center py-4">Data Keluarga Ibu</p>
          <hr />
          <div className="card-body grid grid-cols-2 gap-x-5">
            <div className="flex flex-col gap-y-5">
              <div className="grid grid-cols-2">
                <label className="font-bold">NAMA SUAMI</label>
                <label className="input input-info">{detailPasien ? detailPasien[0].keluarga.NAMA_SUAMI : "-"}</label>
              </div>

              <div className="grid grid-cols-2">
                <label className="font-bold">UMUR SUAMI</label>
                <label className="input input-info">{detailPasien ? detailPasien[0].keluarga.UMUR_SUAMI : "-"}</label>
              </div>
              <div className="grid grid-cols-2">
                <label className="font-bold">TEMPAT LAHIR SUAMI</label>
                <label className="input input-info">{detailPasien ? detailPasien[0].keluarga.TEMPAT_LAHIR_SUAMI : "-"}</label>
              </div>

              <div className="grid grid-cols-2">
                <label className="font-bold">TANGGAL LAHIR SUAMI</label>
                <label className="input input-info">{detailPasien ? detailPasien[0].keluarga.TANGGAL_LAHIR_SUAMI : "-"}</label>
              </div>

              <div className="grid grid-cols-2">
                <label className="font-bold">AGAMA</label>
                <label className="input input-info">{detailPasien ? (listDataAgama ? listDataAgama[detailPasien[0].keluarga.AGAMA_SUAMI - 1].NAMA : "-") : "-"}</label>
              </div>
            </div>

            <div className="flex flex-col gap-y-5">
              <div className="grid grid-cols-2">
                <label className="font-bold">PENDIDIKAN SUAMI</label>
                <label className="input input-info">{detailPasien ? (listDataPendidikanTerakhir ? listDataPendidikanTerakhir[detailPasien[0].keluarga.PENDIDIKAN_SUAMI - 1].NAMA : "-") : "-"}</label>
              </div>

              <div className="grid grid-cols-2">
                <label className="font-bold">PEKERJAAN SUAMI</label>
                <label className="input input-info">{detailPasien ? detailPasien[0].keluarga.PEKERJAAN_SUAMI : "-"}</label>
              </div>

              <div className="grid grid-cols-2">
                <label className="font-bold">GOL DARAH SUAMI</label>
                <label className="input input-info">{detailPasien ? detailPasien[0].keluarga.GOL_DARAH_SUAMI : "-"}</label>
              </div>
              <div className="grid grid-cols-2">
                <label className="font-bold">JUMLAH ANAK </label>
                <label className="input input-info">{detailPasien ? detailPasien[0].keluarga.JUMLAH_ANAK : "-"}</label>
              </div>

              <div className="grid grid-cols-2">
                <label className="font-bold">UMUR ANAK TERAKHIR</label>
                <label className="input input-info">{detailPasien ? detailPasien[0].keluarga.UMUR_ANAK_TERAKHIR : "-"}</label>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <button class="btn btn-wide mr-3">
            <Link to="/data-pasien/data-kehamilan">KEHAMILAN DAN MELAHIRKAN</Link>
          </button>
          <button
            class="btn btn-wide"
            onClick={() => {
              navigate("/data-pasien/data-kb", {
                state: { id_pasien: location.state.id_pasien },
              });
            }}
          >
            KELUARGA BERENCANA
          </button>
        </div>
      </SidebarAdminn>
    </div>
  );
};

export default DataPasien;
