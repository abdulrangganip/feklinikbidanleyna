import Navbar from "../../Component/Navbar";
import { useSelector } from "react-redux";
import SidebarAdminn from "../../Component/Admin/SidebarAdminn";
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";

const CekDataPasien = () => {
  const idUser = useSelector((state) => state.data?.user);

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

  const [listDataPendidikanTerakhir, setListDataPendidikanTerakhir] = useState(null);
  const getListPendidikanTerakhir = async () => {
    try {
      const response = await axios.get(`https://f081-140-213-11-117.ngrok-free.app/api/getpendidikan`);
      const data = response.data?.data;

      setListDataPendidikanTerakhir(data);
      console.log(data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const [detailPasien, setDetailPasien] = useState();
  const getPasien = async (id, tipe_pasien) => {
    try {
      const response = await axios.get(`https://f081-140-213-11-117.ngrok-free.app/api/getpasien/${tipe_pasien}/${id}`);
      const data = response.data?.data;
      console.log("data", response);
      const currentDate = moment();
      data.UMUR = currentDate.diff(moment(data.TANGGAL_LAHIR, "YYYY-MM-DD"), "year");
      data.keluarga.UMUR_SUAMI = currentDate.diff(moment(data.keluarga.TANGGAL_LAHIR_SUAMI, "YYYY-MM-DD"), "year");
      setDetailPasien(data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const getDataPasien = (id) => {};

  console.log("Cek Data Pasien");
  useEffect(() => {
    console.log(idUser);
    const dataUser = JSON.parse(sessionStorage.getItem("user"));
    getListAgama();
    getListPendidikanTerakhir();
    getPasien(dataUser.id_pasien, dataUser.tipe_pasien);
    // getDataPasien(idUser)
  }, []);
  return (
    <div className="bg-slate-500">
      <Navbar />
      <SidebarAdminn>
        {/* {dataUser.tipe_pasien === "ibu" ? (<></>):(<></>) } */}
        <div className="card bg-white my-5">
          <p className="font-bold text-xl text-center py-4">Data Diri Pasien</p>
          <hr />
          <div className="card-body grid grid-cols-2 gap-x-5">
            <div className="flex flex-col gap-y-5">
              <div className="grid grid-cols-2">
                <label className="font-bold">NO RM</label>
                <label className="input input-info">011-05-LYN-2022</label>
              </div>
              <div className="grid grid-cols-2">
                <label className="font-bold">NAMA LENGKAP</label>
                <label className="input input-info">DINDA NURFAUZI</label>
              </div>
              <div className="grid grid-cols-2">
                <label className="font-bold">TEMPAT LAHIR</label>
                <label className="input input-info">BANDUNG</label>
              </div>

              <div className="grid grid-cols-2">
                <label className="font-bold">TANGGAL LAHIR</label>
                <label className="input input-info">8 JANUARI 1999</label>
              </div>
              <div className="grid grid-cols-2">
                <label className="font-bold">UMUR</label>
                <label className="input input-info">24</label>
              </div>

              <div className="grid grid-cols-2">
                <label className="font-bold">ALAMAT</label>
                <label className="input input-info">JLN MELATI NO 23</label>
              </div>

              <div className="grid grid-cols-2">
                <label className="font-bold">AGAMA </label>
                <label className="input input-info">ISLAM</label>
              </div>
            </div>

            <div className="flex flex-col gap-y-5">
              <div className="grid grid-cols-2">
                <label className="font-bold">GOLONGAN DARAH</label>
                <label className="input input-info">O</label>
              </div>

              <div className="grid grid-cols-2">
                <label className="font-bold">NO NIK</label>
                <label className="input input-info">3273160801990004</label>
              </div>

              <div className="grid grid-cols-2">
                <label className="font-bold">NO KK</label>
                <label className="input input-info">3273163211323320</label>
              </div>

              <div className="grid grid-cols-2">
                <label className="font-bold">RIYAWAT PENYAKIT</label>
                <label className="input input-info">-</label>
              </div>
              <div className="grid grid-cols-2">
                <label className="font-bold">RIWAYAT ALERGI</label>
                <label className="input input-info">GATAL GATAL</label>
              </div>

              <div className="grid grid-cols-2">
                <label className="font-bold">PEKERJAAN</label>
                <label className="input input-info">WIRASWASTA</label>
              </div>

              <div className="grid grid-cols-2">
                <label className="font-bold">PENDIDIKAN TERAKHIR</label>
                <label className="input input-info">SMA</label>
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
                <label className="input input-info">REINALDI FAUZI</label>
              </div>

              <div className="grid grid-cols-2">
                <label className="font-bold">UMUR SUAMI</label>
                <label className="input input-info">26</label>
              </div>
              <div className="grid grid-cols-2">
                <label className="font-bold">TEMPAT LAHIR SUAMI</label>
                <label className="input input-info">BANDUNG</label>
              </div>

              <div className="grid grid-cols-2">
                <label className="font-bold">TANGGAL LAHIR SUAMI</label>
                <label className="input input-info">8 JANUARI 1997</label>
              </div>

              <div className="grid grid-cols-2">
                <label className="font-bold">AGAMA</label>
                <label className="input input-info">ISLAM</label>
              </div>
            </div>

            <div className="flex flex-col gap-y-5">
              <div className="grid grid-cols-2">
                <label className="font-bold">PENDIDIKAN SUAMI</label>
                <label className="input input-info">DIPLOMA III</label>
              </div>
              <div className="grid grid-cols-2">
                <label className="font-bold">PEKERJAAN SUAMI</label>
                <label className="input input-info">BUMN</label>
              </div>

              <div className="grid grid-cols-2">
                <label className="font-bold">GOL DARAH SUAMI</label>
                <label className="input input-info">O</label>
              </div>
              <div className="grid grid-cols-2">
                <label className="font-bold">JUMLAH ANAK </label>
                <label className="input input-info">1</label>
              </div>

              <div className="grid grid-cols-2">
                <label className="font-bold">UMUR ANAK TERAKHIR</label>
                <label className="input input-info">5 TAHUN</label>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <button class="btn btn-wide mr-3">
            <Link to="/cek-data-pasien/data-kehamilan-pasien">KEHAMILAN DAN MELAHIRKAN</Link>
          </button>
          <button class="btn btn-wide">
            <Link to="/cek-data-pasien/data-kb-pasien">KELUARGA BERENCANA</Link>
          </button>
        </div>
      </SidebarAdminn>
    </div>
  );
};
export default CekDataPasien;
