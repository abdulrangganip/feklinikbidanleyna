import React, { useState } from "react";
import Navbar from "../../Component/Navbar";
import SidebarPasien from "../../Component/Pasien/SidebarPasien";

function TabelDataKehamilanPasien() {
  const [tableHeader, setTableHeader] = useState();
  const [initiateTable, setInitiateTable] = useState(1);
  let headerCatatanKehamilanPasien;
  let contentCatatanKehamilanPasien;

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
    headerCatatanKehamilanPasien = [
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
    contentCatatanKehamilanPasien = [
      "2 Juli 2021",
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
      "2 Juli 2021",
      "2 Juli 2021",
      "60",
      "165",
    ];
  }
  if (initiateTable === 2) {
    headerCatatanKehamilanPasien = [
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
    contentCatatanKehamilanPasien = [
      "13 Mei 2022",
      "20 Februari 2022",
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
    headerCatatanKehamilanPasien = [
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
    contentCatatanKehamilanPasien = [
      "10 November 2018",
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
    headerCatatanKehamilanPasien = [
      "TANGGAL RENCANA",
      "RENCANA PENOLONG",
      "RENCANA PENDONOR",
      "RENCANA PENDAMPING",
      "RENCANA TRANSPORTASI",
    ];
    contentCatatanKehamilanPasien = [
      "20 Agustus 2021",
      "Bidan",
      "Suami",
      "Suami",
      "Mobil Pribadi",
    ];
  }
  if (initiateTable === 5) {
    headerCatatanKehamilanPasien = [
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
    contentCatatanKehamilanPasien = [
      "24 Maret 2021",
      "23.00",
      "25 Maret 2021",
      "03.00",
      "25 Maret 2021",
      "05.00",
      "2500 Gram",
      "30 Cm",
      "10",
      "Laki-Laki",
      "25 Maret 2021",
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
                className="bg-slate-200 border border-black py-2 px-4 mt-4 rounded-md hover:bg-slate-300"
                onClick={handlerInitiate1}
              >
                CATATAN KEHAMILAN
              </button>
              <button
                className="bg-slate-200 border border-black py-2 px-4 mt-4 rounded-md hover:bg-slate-300"
                onClick={handlerInitiate2}
              >
                KEHAMILAN SEKARANG
              </button>
              <button
                className="bg-slate-200 border border-black py-2 px-4 mt-4 rounded-md hover:bg-slate-300"
                onClick={handlerInitiate3}
              >
                KEHAMILAN SEBELUMNYA
              </button>
              <button
                className="bg-slate-200 border border-black py-2 px-4 mt-4 rounded-md hover:bg-slate-300"
                onClick={handlerInitiate4}
              >
                RENCANA PERSALINAN
              </button>
              <button
                className="bg-slate-200 border border-black py-2 px-4 mt-4 rounded-md hover:bg-slate-300"
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
                    {headerCatatanKehamilanPasien.map((item) => (
                      <th>{item}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    {contentCatatanKehamilanPasien.map((item) => (
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

export default TabelDataKehamilanPasien;
