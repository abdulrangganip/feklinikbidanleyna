// import DashboardPasien from "./Pages/Admin/DashboardAdminn";
// import Cekrme from "./Pages/Admin/DataPasien";
// import Reservasi from "./Pages/Admin/Bidan";
// import DashboardAdmin from "./Pages/Pasien/DashboardPasien";
// Admin
import Register from "./Pages/Register";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JadwalLayanan from "./Pages/Admin/JadwalLayanan";
import Login from "./Pages/Login";
import TabelDataKehamilan from "./Pages/Admin/TabelDataKehamilan";
import TabelDataKB from "./Pages/Admin/TabelDataKB";
import TabelDataImunisasi from "./Pages/Admin/TabelDataImunisasi";
import DashboardAdminn from "./Pages/Admin/DashboardAdminn";
import DataPasien from "./Pages/Admin/DataPasien";
import Bidan from "./Pages/Admin/Bidan";
import CreateDataAnak from "./Pages/Admin/CreateDataAnak";
import CreateDataIbu from "./Pages/Admin/CreateDataIbu";
import DataBidan from "./Pages/Admin/DataBidan";
// Pasien
import DashboardPasien from "./Pages/Pasien/DashboardPasien";
import CekDataPasien from "./Pages/Pasien/CekDataPasien";
import TabelDataKBPasien from "./Pages/Pasien/TabelDataKBPasien";
import TabelDataKehamilanPasien from "./Pages/Pasien/TabelDataKehamilanPasien";
import CekDataPasienAnak from "./Pages/Pasien/CekDataPasienAnak";
import TabelDataImunisasiPasien from "./Pages/Pasien/TabelDataImunisasiPasien";
import DashboardBidan from "./Pages/Bidan/DashboardBidan";
import DataPasienBidan from "./Pages/Bidan/DataPasienBidan";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/dashboard-admin" element={<DashboardAdmin />} /> */}
        {/* Tambahkan rute untuk DashboardAdmin */}
        {/* Admin */}
        <Route path="/jadwal-pelayanan" element={<JadwalLayanan />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Dashboard" element={<DashboardAdminn />} />
        <Route path="/data-pasien" element={<DataPasien />} />
        <Route path="/data-pasien-bidan" element={<DataPasienBidan />} />
        <Route path="/create-data-anak" element={<CreateDataAnak />} />
        <Route path="/create-data-ibu" element={<CreateDataIbu />} />
        <Route path="/bidan" element={<Bidan />} />
        <Route path="/dashboard-pasien" element={<DashboardPasien />} />
        <Route path="/dashboard-bidan" element={<DashboardBidan />} />
        <Route path="/cek-data-pasien" element={<CekDataPasien />} />
        <Route path="/cek-data-pasien-anak" element={<CekDataPasienAnak />} />
        <Route
          path="/data-pasien/data-kehamilan"
          element={<TabelDataKehamilan />}
        />
        <Route path="/data-pasien/data-kb" element={<TabelDataKB />} />
        <Route
          path="/data-pasien/data-imunisasi"
          element={<TabelDataImunisasi />}
        />
        <Route path="/data-bidan" element={<DataBidan />} />
        <Route
          path="/cek-data-pasien/data-kb-pasien"
          element={<TabelDataKBPasien />}
        />
        <Route
          path="/cek-data-pasien/data-kehamilan-pasien"
          element={<TabelDataKehamilanPasien />}
        />
        <Route
          path="/cek-data-pasien/data-imunisasi-pasien"
          element={<TabelDataImunisasiPasien />}
        />

        {/* Tambahkan rute lain jika diperlukan */}
      </Routes>
    </Router>
  );
};

export default App;
