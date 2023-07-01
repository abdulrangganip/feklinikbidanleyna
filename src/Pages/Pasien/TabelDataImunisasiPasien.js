import React, { useState } from "react";
import Navbar from "../../Component/Navbar";
import SidebarPasien from "../../Component/Pasien/SidebarPasien";

function TabelDataImunisasiPasien() {
  const [tableHeader, setTableHeader] = useState();
  const [initiateTable, setInitiateTable] = useState(1);
  let headerDataImunisasiPasien;
  let contentDataImunisasiPasien;

  const handlerInitiate1 = () => {
    setInitiateTable(1);
  };

  if (initiateTable === 1) {
    headerDataImunisasiPasien = [
      "JENIS KELAMIN ",
      "TANGGAL PEMBERIAN",
      "JENIS IMUNISASI",
      "TEKANAN DARAH",
      "KELUHAN PASIEN",
      "TANGGAL DATANG",
      "TANGGAL DILAYANI",
      "BERAT BADAN",
      "TINGGI",
    ];
    contentDataImunisasiPasien = [
      "Laki-Laki",
      "12 Juni 2023",
      "DPT HB",
      "100/70",
      "-",
      "12 Juni 2023",
      "12 Juni 2023",
      "45 kg",
      "140 cm",
    ];
  }
  return (
    <div className="card bg-slate-500">
      <Navbar />
      <SidebarPasien>
        <div className="card w-auto mx-auto bg-white">
          <div className="mt-10 p-4">
            <p className="text-lg font-bold">Data Imunisasi</p>
            <div className="flex flex-row justify-center"></div>
            <div className="overflow-x-auto w-[73rem] mx-auto">
              <table className="table table-zebra border">
                {/* head */}
                <thead>
                  <tr>
                    {headerDataImunisasiPasien.map((item) => (
                      <th>{item}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    {contentDataImunisasiPasien.map((item) => (
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

export default TabelDataImunisasiPasien;
