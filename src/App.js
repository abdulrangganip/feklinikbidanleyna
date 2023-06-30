import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardAdmin from "./Pages/Pasien/DashboardPasien";
// import DashboardPasien from "./Pages/Admin/DashboardAdminn";
// import Cekrme from "./Pages/Admin/DataPasien";
// import Reservasi from "./Pages/Admin/Bidan";
import JadwalLayanan from "./Pages/Admin/JadwalLayanan";
import Login from "./Pages/Login";
import TabelDataKehamilan from "./Pages/Admin/TabelDataKehamilan";
import TabelDataKB from "./Pages/Admin/TabelDataKB";
import TabelDataImunisasi from "./Pages/Admin/TabelDataImunisasi";
import Register from "./Pages/Register";
import DashboardAdminn from "./Pages/Admin/DashboardAdminn";
import DataPasien from "./Pages/Admin/DataPasien";
import Bidan from "./Pages/Admin/Bidan";
import CreateDataAnak from "./Pages/Admin/CreateDataAnak";
import CreateDataIbu from "./Pages/Admin/CreateDataIbu";
import DataBidan from "./Pages/Admin/DataBidan";
import DashboardPasien from "./Pages/Pasien/DashboardPasien";
import CekDataPasien from "./Pages/Pasien/CekDataPasien";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Tambahkan rute untuk DashboardAdmin */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard-admin" element={<DashboardAdmin />} />
        <Route path="/Dashboard" element={<DashboardAdminn />} />
        <Route path="/dashboard-pasien" element={<DashboardPasien />} />
        <Route path="/cek-data-pasien" element={<CekDataPasien />} />
        <Route path="/data-pasien" element={<DataPasien />} />
        <Route path="/create-data-anak" element={<CreateDataAnak />} />
        <Route path="/create-data-ibu" element={<CreateDataIbu />} />
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
        <Route path="/data-bidan" element={<DataBidan />} />

        {/* Tambahkan rute lain jika diperlukan */}
      </Routes>
    </Router>
  );
};

export default App;
