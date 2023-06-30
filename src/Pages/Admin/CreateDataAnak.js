import React, { useEffect, useState } from "react";
import SidebarAdminn from "../../Component/Admin/SidebarAdminn";
import Navbar from "../../Component/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

const baseURL = "http://127.0.0.1:8000/api/addpasien";

const CreateDataAnak = () => {
  const [post, setPost] = useState(null);
  // const [noRM, setNoRM] = useState();
  const [namaLengkap, setNamaLengkap] = useState();
  const [tempatLahir, setTempatLahir] = useState();
  const [tanggalLahir, setTanggalLahir] = useState();
  const [umur, setUmur] = useState();
  const [alamat, setAlamat] = useState();
  const [golonganDarah, setGolonganDarah] = useState();
  const [noNIK, setNoNIK] = useState();
  const [noKK, setNoKK] = useState();
  const [jenisKelamin, setJenisKelamin] = useState();
  const [namaAyah, setNamaAyah] = useState();
  const [namaIbu, setNamaIbu] = useState();
  const createPost = () => {
    axios.post(baseURL, {
      nama_lengkap: namaLengkap,
      tempat_lahir: tempatLahir,
      tanggal_lahir: tanggalLahir,
      //   umur,
      alamat: alamat,
      gol_darah: golonganDarah,
      no_nik: noNIK,
      no_kk: noKK,
      jenis_kelammin: jenisKelamin,
      nama_ayah: namaAyah,
      nama_ibu: namaIbu,
    });
  };

  return (
    <div className="bg-slate-500">
      <Navbar />
      <SidebarAdminn>
        <div className="card bg-white">
          <p className="font-bold text-xl text-center py-4">Data Diri Anak</p>
          <hr />
          <div className="card-body grid grid-cols-2 gap-x-5">
            <div className="flex flex-col gap-y-5">
              <div className="grid grid-cols-2">
                <label>NO RM</label>
                <input className="input input-info" />
              </div>

              <div className="grid grid-cols-2">
                <label>NAMA LENGKAP</label>
                <input
                  value={namaLengkap}
                  onChange={(e) => setNamaLengkap(e.target.value)}
                  className="input input-info"
                />
              </div>
              <div className="grid grid-cols-2">
                <label>TEMPAT LAHIR</label>
                <input
                  value={tempatLahir}
                  onChange={(e) => setTempatLahir(e.target.value)}
                  className="input input-info"
                />
              </div>

              <div className="grid grid-cols-2">
                <label>TANGGAL LAHIR</label>
                <input
                  value={tanggalLahir}
                  onChange={(e) => setTanggalLahir(e.target.value)}
                  className="input input-info"
                />
              </div>
              <div className="grid grid-cols-2">
                <label>UMUR</label>
                <input
                  value={umur}
                  onChange={(e) => setUmur(e.target.value)}
                  className="input input-info"
                />
              </div>

              <div className="grid grid-cols-2">
                <label>ALAMAT</label>
                <input
                  value={alamat}
                  onChange={(e) => setAlamat(e.target.value)}
                  className="input input-info"
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-5">
              <div className="grid grid-cols-2">
                <label>GOLONGAN DARAH</label>
                <input
                  value={golonganDarah}
                  onChange={(e) => setGolonganDarah(e.target.value)}
                  className="input input-info"
                />
              </div>

              <div className="grid grid-cols-2">
                <label>NO NIK</label>
                <input
                  value={noNIK}
                  onChange={(e) => setNoNIK(e.target.value)}
                  className="input input-info"
                />
              </div>

              <div className="grid grid-cols-2">
                <label>NO KK</label>
                <input
                  value={noKK}
                  onChange={(e) => setNoKK(e.target.value)}
                  className="input input-info"
                />
              </div>

              <div className="grid grid-cols-2">
                <label>JENIS KELAMIN</label>
                <input
                  value={jenisKelamin}
                  onChange={(e) => setJenisKelamin(e.target.value)}
                  className="input input-info"
                />
              </div>

              <div className="grid grid-cols-2">
                <label>NAMA AYAH</label>
                <input
                  value={namaAyah}
                  onChange={(e) => setNamaAyah(e.target.value)}
                  className="input input-info"
                />
              </div>

              <div className="grid grid-cols-2">
                <label>NAMA IBU</label>
                <input
                  value={namaIbu}
                  onChange={(e) => setNamaIbu(e.target.value)}
                  className="input input-info"
                />
              </div>
            </div>
            <div>
              <Link to="/data-pasien">
                <button navigate className="btn btn-success">
                  SIMPAN
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <button class="btn btn-wide mr-3">
            <Link to="/data-pasien/data-imunisasi">IMUNISASI</Link>
          </button>
        </div>
      </SidebarAdminn>
    </div>
  );
};
export default CreateDataAnak;
