import React, { useState } from "react";
import Navbar from "../../Component/Navbar";
import SidebarPasien from "../../Component/Pasien/SidebarPasien";

function TabelDataKBPasien() {
  const [tableHeader, setTableHeader] = useState();
  const [initiateTable, setInitiateTable] = useState(1);
  let headerDataKBPasien;
  let contentDataKBPasien;

  const handlerInitiate1 = () => {
    setInitiateTable(1);
  };

  if (initiateTable === 1) {
    headerDataKBPasien = [
      "METODE KB",
      "DIAGNOSA",
      "TINDAKAN",
      "KELUHAN",
      "TANGGAL DATANG",
      "TANGGAL KEMBALI",
      "CATATAN",
      "TEKANAN DARAH",
      "KELUHAN PASIEN",
      "TANGGAL DILAYANI",
      "BERAT BADAN",
      "TINGGI BADAN",
    ];
    contentDataKBPasien = [
      "KB suntik 3 bulan",
      "Mual Mual",
      "-",
      "-",
      "6 Oktober 2022",
      "10 November 2022",
      "-",
      "100/70",
      "-",
      "-6 Oktober 2022",
      "50",
      "160 cm",
    ];
  }
  return (
    <div className="card bg-slate-500">
      <Navbar />
      <SidebarPasien>
        <div className="card w-auto mx-auto bg-white">
          <div className="mt-10 p-4">
            <p className="text-lg font-bold">Data Keluarga Berencana</p>
            <div className="flex flex-row justify-center"></div>
            <div className="overflow-x-auto w-[73rem] mx-auto">
              <table className="table table-zebra border">
                {/* head */}
                <thead>
                  <tr>
                    {headerDataKBPasien.map((item) => (
                      <th>{item}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    {contentDataKBPasien.map((item) => (
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

export default TabelDataKBPasien;
