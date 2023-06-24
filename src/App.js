import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardAdmin from "./Pages/Pasien/DashboardAdmin";
import DashboardPasien from "./Pages/Admin/DashboardAdminn";
import Cekrme from "./Pages/Admin/DataPasien";
import Reservasi from "./Pages/Admin/Bidan";
import JadwalLayanan from "./Pages/Admin/JadwalLayanan";
import Login from "./Pages/Login";
import TabelDataKehamilan from "./Pages/Admin/TabelDataKehamilan";
import TabelDataKB from "./Pages/Admin/TabelDataKB";
import TabelDataImunisasi from "./Pages/Admin/TabelDataImunisasi";
import Register from "./Pages/Register";
import DashboardAdminn from "./Pages/Admin/DashboardAdminn";
import DataPasien from "./Pages/Admin/DataPasien";
import Bidan from "./Pages/Admin/Bidan";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Tambahkan rute untuk DashboardAdmin */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard-admin" element={<DashboardAdmin />} />
        <Route path="/Dashboard" element={<DashboardAdminn />} />
        <Route path="/data-pasien" element={<DataPasien />} />
        <Route path="/bidan" element={<Bidan />} />
        <Route path="/jadwal-pelayanan" element={<JadwalLayanan />} />
        <Route
          path="/data-pasien/data-kehamilan"
          element={<TabelDataKehamilan />}
        />
        <Route path="/data-pasien/data-kb" element={<TabelDataKB />} />
        <Route
          path="/data-pasien/data-imunisasi"
          element={<TabelDataImunisasi />}
        />

        {/* Tambahkan rute lain jika diperlukan */}
      </Routes>
    </Router>
  );
};

export default App;
