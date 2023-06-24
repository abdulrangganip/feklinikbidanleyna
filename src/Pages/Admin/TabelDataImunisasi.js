import React, { useState } from "react";
import Navbar from "../../Component/Navbar";
import SidebarPasien from "../../Component/Admin/SidebarAdminn";
import SidebarAdminn from "../../Component/Admin/SidebarAdminn";

function TabelDataImunisasi() {
  const [tableHeader, setTableHeader] = useState();
  const [initiateTable, setInitiateTable] = useState(1);
  let headerDataImunisasi;
  let contentDataImunisasi;

  const handlerInitiate1 = () => {
    setInitiateTable(1);
  };

  if (initiateTable === 1) {
    headerDataImunisasi = [
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
    contentDataImunisasi = [
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
      <SidebarAdminn>
        <button className="btn btn-success">TAMBAH</button>
        <div className="card w-auto mx-auto bg-white">
          <div className="mt-10 p-4">
            <p className="text-lg font-bold">Data Imunisasi</p>
            <div className="flex flex-row justify-center"></div>
            <div className="overflow-x-auto w-[73rem] mx-auto">
              <table className="table table-zebra border">
                {/* head */}
                <thead>
                  <tr>
                    {headerDataImunisasi.map((item) => (
                      <th>{item}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    {contentDataImunisasi.map((item) => (
                      <td>{item}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </SidebarAdminn>
    </div>
  );
}

export default TabelDataImunisasi;
