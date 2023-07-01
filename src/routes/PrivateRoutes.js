import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

// Admin
import JadwalLayanan from "../Pages/Admin/JadwalLayanan";
import TabelDataKehamilan from "../Pages/Admin/TabelDataKehamilan";
import TabelDataKB from "../Pages/Admin/TabelDataKB";
import TabelDataImunisasi from "../Pages/Admin/TabelDataImunisasi";
import DashboardAdminn from "../Pages/Admin/DashboardAdminn";
import DataPasien from "../Pages/Admin/DataPasien";
import Bidan from "../Pages/Admin/Bidan";
import CreateDataAnak from "../Pages/Admin/CreateDataAnak";
import CreateDataIbu from "../Pages/Admin/CreateDataIbu";
import DataBidan from "../Pages/Admin/DataBidan";
// Pasien
import DashboardPasien from "../Pages/Pasien/DashboardPasien";
import CekDataPasien from "../Pages/Pasien/CekDataPasien";
import TabelDataKBPasien from "../Pages/Pasien/TabelDataKBPasien";
import TabelDataKehamilanPasien from "../Pages/Pasien/TabelDataKehamilanPasien";
import CekDataPasienAnak from "../Pages/Pasien/CekDataPasienAnak";
import TabelDataImunisasiPasien from "../Pages/Pasien/TabelDataImunisasiPasien";
// Bidan
import DashboardBidan from "../Pages/Bidan/DashboardBidan";
import DataPasienBidan from "../Pages/Bidan/DataPasienBidan";

//TODO:: create constant file for this!
const ROLE_NAME = {
  ADMIN: "ADMIN",
  BIDAN: "BIDAN",
  PASIEN: "PASIEN",
};

const PrivateRoutes = () => {
  const role = useSelector((state) => state.data?.user?.role);
  console.log("[role]: ", role);

  //TODO:: please check again if the routes are correct for each role
  return (
    <Routes>
      {role && role.toUpperCase() === ROLE_NAME.ADMIN ? (
        <>
          <Route path="/dashboard" element={<DashboardAdminn />} />
          <Route path="/jadwal-pelayanan" element={<JadwalLayanan />} />
          <Route path="/data-pasien" element={<DataPasien />} />
          <Route path="/data-pasien-bidan" element={<DataPasienBidan />} />
          <Route path="/create-data-anak" element={<CreateDataAnak />} />
          <Route path="/create-data-ibu" element={<CreateDataIbu />} />
          <Route path="/bidan" element={<Bidan />} />
          <Route path="/cek-data-pasien" element={<CekDataPasien />} />
          <Route path="/cek-data-pasien-anak" element={<CekDataPasienAnak />} />
          <Route path="/data-pasien/data-kehamilan" element={<TabelDataKehamilan />} />
          <Route path="/data-pasien/data-kb" element={<TabelDataKB />} />
          <Route path="/data-pasien/data-imunisasi" element={<TabelDataImunisasi />} />
          <Route path="/data-bidan" element={<DataBidan />} />
          <Route path="/cek-data-pasien/data-kb-pasien" element={<TabelDataKBPasien />} />
          <Route path="/cek-data-pasien/data-kehamilan-pasien" element={<TabelDataKehamilanPasien />} />
          <Route path="/cek-data-pasien/data-imunisasi-pasien" element={<TabelDataImunisasiPasien />} />
        </>
      ) : role && role.toUpperCase() === ROLE_NAME.BIDAN ? (
        <>
          <Route path="/dashboard" element={<DashboardBidan />} />
        </>
      ) : role && role.toUpperCase() === ROLE_NAME.PASIEN ? (
        <>
          <Route path="/dashboard" element={<DashboardPasien />} />
        </>
      ) : (
        // TODO:: need to replace this with error page such as 404 or else
        <>
          <Route path="/dashboard" element={<DashboardAdminn />} />
        </>
      )}
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
};

export default PrivateRoutes;
