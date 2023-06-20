import React, { useState } from "react";
import Navbar from "../../Component/Navbar";
import SidebarPasien from "../../Component/Pasien/SidebarPasien";

function TabelDataKehamilan() {
  const [tableHeader, setTableHeader] = useState();
  const [initiateTable, setInitiateTable] = useState(1);
  let headerCatatanKehamilan;
  let contentCatatanKehamilan;

  const handlerInitiate1 = () => {
    setInitiateTable(1);
  };
  const handlerInitiate2 = () => {
    setInitiateTable(2);
  };
  const handlerInitiate3 = () => {
    setInitiateTable(3);
  };
  const handlerInitiate4 = () => {
    setInitiateTable(4);
  };
  const handlerInitiate5 = () => {
    setInitiateTable(5);
  };

  if (initiateTable === 1) {
    headerCatatanKehamilan = [
      "TANGGAL PEMERIKSAAN ",
      "KELUHAN SEKARANG",
      "UMUR KEHAMILAN SEKARANG",
      "TINGGI FUNDUS",
      "LETAK JANIN",
      "DENYUT JANTUNG",
      "KAKIK BENGKAK",
      "HASIL LAB",
      "TINDAKAN",
      "NASIHAT",
      "KETERANGAN",
      "TANGGAL KEMBALI",
      "CATATAN KHUSUS",
      "TEKANAN DARAH",
      "TANGGAL DATANG",
      "TANGGAL DILAYANI",
      "BERAT BADAN",
      "TINGGI BADAN",
    ];
    contentCatatanKehamilan = [
      "2 Juli 2023",
      "Mual Mual",
      "33 Minggu",
      "29 Cm",
      "180 kali/menit",
      "Ya",
      "-",
      "-",
      "Jangan terlalu banyak kegiatan",
      "-Bidan Leyna Merlina Sarkosi",
      "2 Agustus 2023",
      "-",
      "100/70",
      "2 Juli 2023",
      "2 Juli 2023",
      "60",
      "165",
    ];
  }
  if (initiateTable === 2) {
    headerCatatanKehamilan = [
      "HPHT",
      "HTP",
      "RIWAYAT OBAT",
      "RIWAYAT KONTRASEPSI",
      "RIWAYAT PENYAKIT",
      "RIWAYAT ALERGI",
      "STATUS IMUNISASI",
      "TANGGAL PEMERIKSAAN",
      "KEGUGURAN",
      "PREMATUR",
      "ABORSI",
      "USIA KEHAMILAN",
      "KELUHAN",
      "JARAK KEHAMILAN",
    ];
    contentCatatanKehamilan = [
      "13 Mei 2021",
      "20 Februari 2023",
      "-",
      "-",
      "-",
      "-",
      "-",
      "26 Desember 2022",
      "2",
      "1",
      "24 Minggu",
      "Pendarahan",
      "1 Tahun",
    ];
  }
  if (initiateTable === 3) {
    headerCatatanKehamilan = [
      "TAHUN PARTUS SEBELUMNYA",
      "TEMPAT PARTUS SEBELUMNYA",
      "UMUR HAMIL SEBELUMNYA",
      "JENIS PERSALINAN",
      "PENOLONG SEBELUMNYA",
      "KENDALA SEBELUMNYA",
      "BERAT BADAN BAYI",
      "JENIS KELAMIN BAYI",
      "KONDISI BAYI",
      "KONDISI IBU",
    ];
    contentCatatanKehamilan = [
      "10 November 2028",
      "Bidan",
      "9 Bulan",
      "Normal",
      "Bidan",
      "-",
      "3200 Gram",
      "Laki-Laki",
      "Sehat",
      "Sehat",
    ];
  }
  if (initiateTable === 4) {
    headerCatatanKehamilan = [
      "TANGGAL RENCANA",
      "RENCANA PENOLONG",
      "RENCANA PENDONOR",
      "RENCANA PENDAMPING",
      "RENCANA TRANSPORTASI",
    ];
    contentCatatanKehamilan = [
      "20 Agustus 2023",
      "Bidan",
      "Suami",
      "Suami",
      "Mobil Pribadi",
    ];
  }
  if (initiateTable === 5) {
    headerCatatanKehamilan = [
      "TANGGAL KALA SATU",
      "JAM KALA SATU",
      "TANGGAL KALA DUA",
      "JAM KALA DUA",
      "TANGGAL BAYI LAHIR",
      "JAM BAYI LAHIR",
      "BERAT BADAN BAYI",
      "TINGGI BADAN BAYI",
      "NILAI APGAR",
      "JENIS KELAMIN BAYI",
      "TANGGAL PLASENTA LAHIR",
      "JAM PLASENTA LAHIR",
      "TEMPAT PERSALINAN",
      "PENOLONG PERSALINAN",
      "KOMPLIKASI PERSALINAN",
      "ALAMAT BERSALIN",
    ];
    contentCatatanKehamilan = [
      "24 Maret 2023",
      "23.00",
      "25 Maret 2023",
      "03.00",
      "25 Maret 2023",
      "05.00",
      "4500 Gram",
      "55 Cm",
      "10",
      "Laki-Laki",
      "25 Maret 2023",
      "05.15",
      "Praktik Bidan Mandiri Leyna Merlina Sarkosi",
      "Bidan",
      "Pendarahan",
      "Jl.Cibiru Hilir",
    ];
  }

  return (
    <div className="card bg-slate-500">
      <Navbar />
      <SidebarPasien>
        <div className="card w-auto mx-auto bg-white">
          <div className="mt-10 p-4">
            <p className="text-lg font-bold">Data Kehamilan</p>
            <div className="flex flex-row justify-center">
              <button
                className="bg-slate-200 border border-black"
                onClick={handlerInitiate1}
              >
                CATATAN KEHAMILAN
              </button>
              <button
                className="bg-slate-200 border border-black"
                onClick={handlerInitiate2}
              >
                KEHAMILAN SEKARANG
              </button>
              <button
                className="bg-slate-200 border border-black"
                onClick={handlerInitiate3}
              >
                KEHAMILAN SEBELUMNYA
              </button>
              <button
                className="bg-slate-200 border border-black"
                onClick={handlerInitiate4}
              >
                RENCANA PERSALINAN
              </button>
              <button
                className="bg-slate-200 border border-black"
                onClick={handlerInitiate5}
              >
                PERSALINAN
              </button>
            </div>
            <div className="overflow-x-auto w-[73rem] mx-auto">
              <table className="table table-zebra border">
                {/* head */}
                <thead>
                  <tr>
                    {headerCatatanKehamilan.map((item) => (
                      <th>{item}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    {contentCatatanKehamilan.map((item) => (
                      <td>{item}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </SidebarPasien>
    </div>
  );
}

export default TabelDataKehamilan;
