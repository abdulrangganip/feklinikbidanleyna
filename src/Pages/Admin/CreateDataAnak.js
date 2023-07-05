import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SidebarAdminn from "../../Component/Admin/SidebarAdminn";
import Navbar from "../../Component/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

const CreateDataAnak = () => {
  const navigate = useNavigate();
  const [noRM, setNoRekamMedis] = useState("");
  const [namaLengkap, setNamaLengkap] = useState("");
  const [tempatLahir, setTempatLahir] = useState("");
  const [tanggalLahir, setTanggalLahir] = useState("");
  const [alamat, setAlamat] = useState("");
  const [golonganDarah, setGolonganDarah] = useState("");
  const [agama, setAgama] = useState(1);
  const [noNIK, setNoNIK] = useState("");
  const [noKK, setNoKK] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("");
  const [namaAyah, setNamaAyah] = useState("");
  const [namaIbu, setNamaIbu] = useState("");

  const handleValue = (setValue, e) => {
    setValue(e.target.value);
  };

  const postDataAnak = async (data) => {
    try {
      const response = await axios.post(
        `https://f081-140-213-11-117.ngrok-free.app/api/addpasienAnak`,
        data
      );
      console.log(response);
      alert("Buat Data Pasien Anak Berhasil!");
      navigate("/data-pasien-anak");
    } catch (error) {
      alert(`Buat Data Pasien Anak Gagal!`);
      console.log(error);
    }
  };

  const handleSimpan = () => {
    let body = {};
    body.no_rm = noRM;
    body.nama_lengkap = namaLengkap;
    body.tempat_lahir = tempatLahir;
    body.tanggal_lahir = tanggalLahir;
    body.alamat = alamat;
    body.gol_darah = golonganDarah;
    body.id_agama = agama;
    body.id_jenis_pelayanan = 2;
    body.no_nik = noNIK;
    body.no_kk = noKK;
    body.jenis_kelamin = jenisKelamin;
    body.nama_ayah = namaAyah;
    body.nama_ibu = namaIbu;

    postDataAnak(body);
  };

  return (
    <div className="bg-slate-500">
      <Navbar />
      <SidebarAdminn>
        <div className="card bg-white my-5">
          <p className="font-bold text-xl text-center py-4">
            Buat Data Diri Pasien Anak
          </p>
          <hr />
          <div className="card-body grid grid-cols-2 gap-x-5">
            <div className="flex flex-col gap-y-5">
              <div className="grid grid-cols-2">
                <label>NO RM</label>
                <input
                  placeholder="Contoh: 01/VII/ANAK/2023"
                  onChange={(e) => handleValue(setNoRekamMedis, e)}
                  className="input input-info"
                />
              </div>
              <div className="grid grid-cols-2">
                <label>NAMA LENGKAP</label>
                <input
                  placeholder="Nama Lengkap Pasien "
                  type="text"
                  onChange={(e) => handleValue(setNamaLengkap, e)}
                  className="input input-info"
                />
              </div>
              <div className="grid grid-cols-2">
                <label>TEMPAT LAHIR</label>
                <input
                  placeholder="Tempat Lahir Pasien "
                  type="text"
                  onChange={(e) => handleValue(setTempatLahir, e)}
                  className="input input-info"
                />
              </div>

              <div className="grid grid-cols-2">
                <label>TANGGAL LAHIR</label>
                <input
                  placeholder="Contoh: YYYY/MM/DD "
                  type="text"
                  onChange={(e) => handleValue(setTanggalLahir, e)}
                  className="input input-info"
                />
              </div>
              <div className="grid grid-cols-2">
                <label>ALAMAT</label>
                <input
                  style={{
                    width: "285px",
                    height: "185px",
                    paddingBottom: "150px",
                  }}
                  placeholder="Alamat Lengkap Pasien "
                  type="text"
                  onChange={(e) => handleValue(setAlamat, e)}
                  className="input input-info"
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-5">
              <div className="grid grid-cols-2">
                <label>GOLONGAN DARAH</label>
                <input
                  placeholder="Golongan Darah Pasien "
                  type="text"
                  onChange={(e) => handleValue(setGolonganDarah, e)}
                  className="input input-info"
                />
              </div>
              <div className="grid grid-cols-2">
                <label>AGAMA</label>
                {/* <input className="input input-info" /> */}
                <select
                  className="input input-info"
                  name="agama"
                  id="agama"
                  onChange={(e) => {
                    handleValue(setAgama, e);
                  }}
                >
                  <option value={1}>Islam</option>
                  <option value={2}>Kristen</option>
                  <option value={3}>Khatolik</option>
                  <option value={4}>Hindu</option>
                  <option value={5}>Budha</option>
                </select>
              </div>
              <div className="grid grid-cols-2">
                <label>NO NIK</label>
                <input
                  placeholder="Angka harus diisi 16 digit "
                  type="text"
                  onChange={(e) => handleValue(setNoNIK, e)}
                  className="input input-info"
                />
              </div>
              <div className="grid grid-cols-2">
                <label>NO KK</label>
                <input
                  placeholder="Angka harus diisi 16 digit "
                  type="text"
                  onChange={(e) => handleValue(setNoKK, e)}
                  className="input input-info"
                />
              </div>
              <div className="grid grid-cols-2">
                <label>JENIS KELAMIN</label>
                <input
                  placeholder="Laki-Laki/Perempuan "
                  type="text"
                  onChange={(e) => handleValue(setJenisKelamin, e)}
                  className="input input-info"
                />
              </div>
              <div className="grid grid-cols-2">
                <label>NAMA AYAH</label>
                <input
                  placeholder="Masukan Nama Ayah "
                  type="text"
                  onChange={(e) => handleValue(setNamaAyah, e)}
                  className="input input-info"
                />
              </div>
              <div className="grid grid-cols-2">
                <label>NAMA IBU</label>
                <input
                  placeholder="Masukan Nama Ibu "
                  type="text"
                  onChange={(e) => handleValue(setNamaIbu, e)}
                  className="input input-info"
                />
              </div>
            </div>
            <div>
              {/* <Link to="/data-pasien"> */}
              <button
                navigate
                className="btn btn-success"
                onClick={() => {
                  handleSimpan();
                }}
              >
                SIMPAN
              </button>
            </div>
          </div>
        </div>
      </SidebarAdminn>
    </div>
  );
};
export default CreateDataAnak;
