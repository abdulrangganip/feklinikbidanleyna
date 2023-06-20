import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardAdmin from "./Pages/Admin/DashboardAdmin";
import DashboardPasien from "./Pages/Pasien/DashboardPasien";
import Cekrme from "./Pages/Pasien/Cekrme";
import Reservasi from "./Pages/Pasien/Reservasi";
import JadwalLayanan from "./Pages/Pasien/JadwalLayanan";
import Login from "./Pages/Login";
import TabelDataKehamilan from "./Pages/Pasien/TabelDataKehamilan";
import TabelDataKB from "./Pages/Pasien/TabelDataKB";
import TabelDataImunisasi from "./Pages/Pasien/TabelDataImunisasi";
import Register from "./Pages/Register";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Tambahkan rute untuk DashboardAdmin */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard-admin" element={<DashboardAdmin />} />
        <Route path="/profile" element={<DashboardPasien />} />
        <Route path="/cek-rme" element={<Cekrme />} />
        <Route path="/reservasi-kunjungan" element={<Reservasi />} />
        <Route path="/jadwal-pelayanan" element={<JadwalLayanan />} />
        <Route
          path="/cek-rme/data-kehamilan"
          element={<TabelDataKehamilan />}
        />
        <Route path="/cek-rme/data-kb" element={<TabelDataKB />} />
        <Route
          path="/cek-rme/data-imunisasi"
          element={<TabelDataImunisasi />}
        />

        {/* Tambahkan rute lain jika diperlukan */}
      </Routes>
    </Router>
  );
};

export default App;
