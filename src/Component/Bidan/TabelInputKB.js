import react, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../Component/Navbar";
import SidebarBidan from "./SidebarBidan";

const CreateDataKB = () => {
  const navigate = useNavigate();
  const { id_pasien } = useParams();

  const [tanggalDatang, setTanggalDatang] = useState("");
  const [tanggalDilayani, setTanggalDilayani] = useState("");
  const [beratBadan, setberatBadan] = useState("");
  const [tinggiBadan, setTinggiBadan] = useState("");
  const [tekananDarah, setTekananDarah] = useState("");
  const [keluhanPasien, setKeluhanPasien] = useState("");
  const [diagnosa, setDiagnosa] = useState("");
  const [tindakan, setTindakan] = useState("");
  const [metodeKb, setmetodeKb] = useState("1");
  const [catatan, setCatatan] = useState("");
  const [tanggalKembali, setTanggalKembali] = useState("");

  const handleValue = (setValue, e) => {
    setValue(e.target.value);
  };

  const postDataKB = async (id_pasien) => {
    try {
      const response = await axios.post(`https://f081-140-213-11-117.ngrok-free.app/api/pasien/${id_pasien}/pelayanan_kb`);
      console.log(response);
      alert("Data KB Berhasil Ditambahkan!");
      navigate("/data-pasien/data-kb");
    } catch (error) {
      alert(`Simpan Data KB Gagal!`);
    }
  };

  const handleSimpan = () => {
    let body = {};
    body.tanggal_datang = tanggalDatang;
    body.tanggal_dilayani = tanggalDilayani;
    body.berat_badan = beratBadan;
    body.tinggi_badan = tinggiBadan;
    body.tekanan_darah = tekananDarah;
    body.keluhan_pasien = keluhanPasien;
    body.diagnosa = diagnosa;
    body.tindakan = tindakan;
    body.id_metode_kb = metodeKb;
    body.catatan = catatan;
    body.tanggal_kembali = tanggalKembali;

    postDataKB(body);
  };

  return (
    <div className="bg-slate-500">
      <Navbar />
      <SidebarBidan>
        <div className="card bg-white my-5">
          <p className="font-bold text-xl text-center py-4">KELUARGA BERENCANA</p>
          <hr />
          <div className="card-body grid grid-cols-2 gap-x-5">
            <div className="flex flex-col gap-y-5">
              <div className="grid grid-cols-2">
                <label>TANGGAL DATANG</label>
                <input className="input input-info" onChange={(e) => handleValue(setTanggalDatang, e)} />
              </div>
              <div className="grid grid-cols-2">
                <label>TANGGAL DILAYANI</label>
                <input className="input input-info" onChange={(e) => handleValue(setTanggalDilayani, e)} />
              </div>
              <div className="grid grid-cols-2">
                <label>BERAT BADAN</label>
                <input className="input input-info" onChange={(e) => handleValue(setberatBadan, e)} />
              </div>
              <div className="grid grid-cols-2">
                <label>TINGGI BADAN</label>
                <input className="input input-info" onChange={(e) => handleValue(setTinggiBadan, e)} />
              </div>
              <div className="grid grid-cols-2">
                <label>TEKANAN DARAH</label>
                <input className="input input-info" onChange={(e) => handleValue(setTekananDarah, e)} />
              </div>
              <div className="grid grid-cols-2">
                <label>KELUHAN</label>
                <input className="input input-info" onChange={(e) => handleValue(setKeluhanPasien, e)} />
              </div>
              <div className="grid grid-cols-2">
                <label>DIAGNOSA</label>
                <input className="input input-info" onChange={(e) => handleValue(setDiagnosa, e)} />
              </div>
              <div className="grid grid-cols-2">
                <label>TINDAKAN</label>
                <input className="input input-info" onChange={(e) => handleValue(setTindakan, e)} />
              </div>
              <div className="grid grid-cols-2">
                <label>METODE KB</label>
                {/* <input className="input input-info" /> */}
                <select
                  className="input input-info"
                  name="metodeKb"
                  id="metodeKb"
                  onChange={(e) => {
                    handleValue(setmetodeKb, e);
                  }}
                >
                  <option value={1}>Suntik</option>
                  <option value={2}>Pil</option>
                  <option value={3}>IUD</option>
                  <option value={4}>Implant</option>
                </select>
              </div>
              <div className="grid grid-cols-2">
                <label>CATATAN</label>
                <input className="input input-info" onChange={(e) => handleValue(setCatatan, e)} />
              </div>
              <div className="grid grid-cols-2">
                <label>TANGGAL_KEMBALI</label>
                <input className="input input-info" onChange={(e) => handleValue(setTanggalKembali, e)} />
              </div>
              <button
                class="btn btn-warning btn-wide mr-3"
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
      </SidebarBidan>
    </div>
  );
};

export default CreateDataKB;
