import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import moment from "moment";

import Navbar from "../../Component/Navbar";
import SidebarPasien from "../../Component/Admin/SidebarAdminn";
import TabelDataIbu from "../../Component/Admin/TabelDataIbu";
import TabelDataAnak from "../../Component/Admin/TabelDataAnak";
import TabelDataKeluarga from "../../Component/Admin/TabelDataKeluarga";
import SidebarAdminn from "../../Component/Admin/SidebarAdminn";

const DataPasien = (props) => {
  const location = useLocation();
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

  const [detailPasien, setDetailPasien] = useState();
  const getListPasien = async (id) => {
    try {
      const response = await axios.get(`https://82de-180-244-138-171.ngrok-free.app/api/getpasien/${id}`);
      const data = response.data?.data;

      const currentDate = moment();
      data[0].UMUR = currentDate.diff(moment(data[0].TANGGAL_LAHIR, "YYYY-MM-DD"), "year");
      setDetailPasien(data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    console.log(location);
    getListAgama();
    getListPasien(location?.state?.id_pasien);
  }, [location]);

  return (
    <div className="bg-slate-500">
      <Navbar />
      <SidebarAdminn>
        {/* <div className="flex flex-col gap-y-3">
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
        </div> */}
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
                {console.log("AGAMA: ", detailPasien && detailPasien[0].ID_AGAMA)}
                {console.log("LIST AGAMA: ", listDataAgama)}
                <label className="input input-info">{detailPasien ? (listDataAgama ? listDataAgama[detailPasien[0].ID_AGAMA - 1].NAMA : "-") : "-"}</label>
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

              {/* <div className="grid grid-cols-2">
                <label className="font-bold">RIYAWAT PENYAKIT</label>
                <label className="input input-info">-</label>
              </div> */}
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

export default DataPasien;
