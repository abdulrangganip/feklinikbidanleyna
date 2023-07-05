import react, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import SidebarAdminn from "../../Component/Admin/SidebarAdminn";
import Navbar from "../../Component/Navbar";
import moment from "moment";

const CreateDataIbu = () => {
  const navigate = useNavigate();

  // FORM STATE DATA DIRI
  const [jenisPelayanan, setJenisPelayanan] = useState(1);
  const [pendidikanTerakhir, setPendidikanTerakhir] = useState(1);
  const [agama, setAgama] = useState(1);
  const [noRekamMedis, setNoRekamMedis] = useState("");
  const [namaLengkap, setNamaLengkap] = useState("");
  const [tempatLahir, setTempatLahir] = useState("");
  const [tanggalLahir, setTanggalLahir] = useState("");
  const [alamat, setAlamat] = useState("");
  const [golDarah, setGolDarah] = useState("");
  const [noNik, setNoNik] = useState("");
  const [noKK, setNoKK] = useState("");
  const [noTelp, setNoTelp] = useState("");
  const [riwayatPenyakit, setRiwayatPenyakit] = useState("");
  const [riwayatAlergi, setRiwayatAlergi] = useState("");
  const [pekerjaan, setPekerjaan] = useState("");
  //const [jenisKelamin, setJenisKelamin] = useState("");
  //FORM STATE KELUARGA
  const [namaSuami, setNamaSuami] = useState("");
  const [tempatLahirSuami, setTempatLahirSuami] = useState("");
  const [tanggalLahirSuami, setTanggalLahirSuami] = useState("");
  const [agamaSuami, setAgamaSuami] = useState("");
  const [pendidikanSuami, setPendidikanSuami] = useState("");
  const [pekerjaanSuami, setPekerjaanSuami] = useState("");
  const [golDarahSuami, setGolDarahSuami] = useState("");
  const [jumlahAnak, setJumlahAnak] = useState("");
  const [umurAnakTerakhir, setUmurAnakTerakhir] = useState("");

  const handleValue = (setValue, e) => {
    setValue(e.target.value);
  };

  const postDataIbu = async (data) => {
    try {
      const response = await axios.post(`https://f081-140-213-11-117.ngrok-free.app/api/addpasien`, data);
      console.log(response);
      alert("Buat Data Pasien Berhasil!");
      navigate("/data-pasien");
    } catch (error) {
      alert(`Buat Data Pasien Gagal!`);
    }
  };

  const handleSimpan = () => {
    let body = {};
    body.id_jenis_pelayanan = jenisPelayanan;
    body.no_rm = noRekamMedis;
    body.nama_lengkap = namaLengkap;
    body.tempat_lahir = tempatLahir;
    body.tanggal_lahir = tanggalLahir;
    body.alamat = alamat;
    body.gol_darah = golDarah;
    body.no_nik = noNik;
    body.no_kk = noKK;
    body.no_telp = noTelp;
    body.pekerjaan = pekerjaan;
    body.jenis_kelamin = "wanita";
    body.riwayat_penyakit = riwayatPenyakit;
    body.riwayat_alergi = riwayatAlergi;
    body.id_agama = agama;
    body.id_pendidikan_terakhir = parseInt(pendidikanTerakhir);
    body.keluarga = {
      nama_suami: namaSuami,
      tempat_lahir_suami: tempatLahirSuami,
      tanggal_lahir_suami: tanggalLahirSuami,
      agama_suami: agamaSuami,
      pendidikan_suami: parseInt(pendidikanSuami),
      pekerjaan_suami: pekerjaanSuami,
      gol_darah_suami: golDarahSuami,
      jumlah_anak: jumlahAnak,
      umur_anak_terakhir: umurAnakTerakhir,
    };

    postDataIbu(body);
  };

  useEffect(() => {
    console.log(agama);
    console.log(noRekamMedis);
    console.log(namaLengkap);
  }, [agama, noRekamMedis, namaLengkap]);

  return (
    <div className="bg-slate-500">
      <Navbar />
      <SidebarAdminn>
        <div className="card bg-white my-5">
          <p className="font-bold text-xl text-center py-4">Buat Data Diri Pasien Ibu</p>
          <hr />
          <div className="card-body grid grid-cols-2 gap-x-5">
            <div className="flex flex-col gap-y-5">
              <div className="grid grid-cols-2">
                <label>NO RM</label>
                <input placeholder="Contoh: 01/VII/IBU/2023 " type="text" className="input input-info" onChange={(e) => handleValue(setNoRekamMedis, e)} />
              </div>
              <div className="grid grid-cols-2">
                <label>NAMA LENGKAP</label>
                <input placeholder="Nama Lengkap Pasien " type="text" className="input input-info" onChange={(e) => handleValue(setNamaLengkap, e)} />
              </div>
              <div className="grid grid-cols-2">
                <label>TEMPAT LAHIR</label>
                <input placeholder="Tempat Lahir Pasien " type="text" className="input input-info" onChange={(e) => handleValue(setTempatLahir, e)} />
              </div>

              <div className="grid grid-cols-2">
                <label>TANGGAL LAHIR</label>
                <input placeholder="Contoh: YYYY/MM/DD " type="text" className="input input-info" onChange={(e) => handleValue(setTanggalLahir, e)} />
              </div>

              <div className="grid grid-cols-2">
                <label>ALAMAT</label>
                <input placeholder="Alamat Lengkap Pasien " type="text" className="input input-info" onChange={(e) => handleValue(setAlamat, e)} />
              </div>
            </div>

            <div className="flex flex-col gap-y-5">
              <div className="grid grid-cols-2">
                <label>NO.TELPON</label>
                <input placeholder="No Telp Pasien " type="text" className="input input-info" onChange={(e) => handleValue(setNoTelp, e)} />
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
            </div>

            <div className="flex flex-col gap-y-5">
              <div className="grid grid-cols-2">
                <label>GOLONGAN DARAH</label>
                <input placeholder="Golongan Darah Pasien " type="text" className="input input-info" onChange={(e) => handleValue(setGolDarah, e)} />
              </div>

              <div className="grid grid-cols-2">
                <label>RIWAYAT PENYAKIT</label>
                <input placeholder="Riwayat Penyakit" type="text" className="input input-info" onChange={(e) => handleValue(setRiwayatPenyakit, e)} />
              </div>

              <div className="grid grid-cols-2">
                <label>RIWAYAT Alergi</label>
                <input placeholder="Riwayat Alergi" type="text" className="input input-info" onChange={(e) => handleValue(setRiwayatAlergi, e)} />
              </div>

              <div className="grid grid-cols-2">
                <label>NO NIK</label>
                <input placeholder="Angka harus diisi 16 digit " type="text" className="input input-info" onChange={(e) => handleValue(setNoNik, e)} />
              </div>

              <div className="grid grid-cols-2">
                <label>NO KK</label>
                <input placeholder="Angka harus diisi 16 digit " type="text" className="input input-info" onChange={(e) => handleValue(setNoKK, e)} />
              </div>

              <div className="grid grid-cols-2">
                <label>PEKERJAAN</label>
                <input placeholder="Pekerjaan Pasien " type="text" className="input input-info" onChange={(e) => handleValue(setPekerjaan, e)} />
              </div>

              <div className="grid grid-cols-2">
                <label>PENDIDIKAN TERAKHIR</label>
                <select
                  className="input input-info"
                  name="pendidikanTerakhir"
                  id="pendidikanTerakhir"
                  onChange={(e) => {
                    handleValue(setPendidikanTerakhir, e);
                  }}
                >
                  <option value={1}>SD</option>
                  <option value={2}>SMP</option>
                  <option value={3}>SMA/SMK</option>
                  <option value={4}>D3</option>
                  <option value={5}>D4</option>
                  <option value={6}>S1</option>
                  <option value={7}>S2</option>
                  <option value={8}>S3</option>
                </select>
              </div>
              <div className="grid grid-cols-2">
                <label>NO.TELPON</label>
                <input placeholder="No Telp Pasien " type="text" className="input input-info" onChange={(e) => handleValue(setNoTelp, e)} />
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-white">
          <p className="font-bold text-xl text-center py-4">Buat Data Keluarga Pasien Ibu</p>
          <hr />
          <div className="card-body grid grid-cols-2 gap-x-5">
            <div className="flex flex-col gap-y-5">
              <div className="grid grid-cols-2">
                <label>NAMA SUAMI</label>
                <input placeholder="Masukan Nama " type="text" className="input input-info" onChange={(e) => handleValue(setNamaSuami, e)} />
              </div>

              <div className="grid grid-cols-2">
                <label>TEMPAT LAHIR SUAMI</label>
                <input placeholder="Masukan Tempat Lahir " type="text" className="input input-info" onChange={(e) => handleValue(setTempatLahirSuami, e)} />
              </div>

              <div className="grid grid-cols-2">
                <label>TANGGAL LAHIR SUAMI</label>
                <input placeholder="Contoh: YYYY/MM/DD " type="text" className="input input-info" onChange={(e) => handleValue(setTanggalLahirSuami, e)} />
              </div>

              <div className="grid grid-cols-2">
                <label>AGAMA SUAMI</label>
                <select
                  className="input input-info"
                  name="agamaSuami"
                  id="agamaSuami"
                  onChange={(e) => {
                    handleValue(setAgamaSuami, e);
                  }}
                >
                  <option value={1}>Islam</option>
                  <option value={2}>Kristen</option>
                  <option value={3}>Khatolik</option>
                  <option value={4}>Hindu</option>
                  <option value={5}>Budha</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-y-5">
              <div className="grid grid-cols-2">
                <label>PENDIDIKAN SUAMI</label>
                {/* <input className="input input-info" /> */}
                <select
                  className="input input-info"
                  name="pendidikanTerakhirSuami"
                  id="pendidikanTerakhirSuami"
                  onChange={(e) => {
                    handleValue(setPendidikanSuami, e);
                  }}
                >
                  <option value={1}>SD</option>
                  <option value={2}>SMP</option>
                  <option value={3}>SMA/SMK</option>
                  <option value={4}>D3</option>
                  <option value={5}>D4</option>
                  <option value={6}>S1</option>
                  <option value={7}>S2</option>
                  <option value={8}>S3</option>
                </select>
              </div>

              <div className="grid grid-cols-2">
                <label>PEKERJAAN SUAMI</label>
                <input placeholder="Pekerjaan Suami Pasien " type="text" className="input input-info" onChange={(e) => handleValue(setPekerjaanSuami, e)} />
              </div>

              <div className="grid grid-cols-2">
                <label>GOL DARAH SUAMI</label>
                <input placeholder="Golongan Darah Suami " type="text" className="input input-info" onChange={(e) => handleValue(setGolDarahSuami, e)} />
              </div>

              <div className="grid grid-cols-2">
                <label>JUMLAH ANAK</label>
                <input placeholder=" Jumlah Anak" type="text" className="input input-info" onChange={(e) => handleValue(setJumlahAnak, e)} />
              </div>

              <div className="grid grid-cols-2">
                <label>UMUR ANAK TERAKHIR</label>
                <input placeholder="Umur Anak Terakhir (tahun) " type="text" className="input input-info" onChange={(e) => handleValue(setUmurAnakTerakhir, e)} />
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
              {/* </Link> */}
            </div>
          </div>
        </div>
      </SidebarAdminn>
    </div>
  );
};

export default CreateDataIbu;
