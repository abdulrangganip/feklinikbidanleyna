import React, { useState } from "react";
import Navbar from "../../Component/Navbar";
import SidebarPasien from "../../Component/Admin/SidebarAdminn";
import SidebarAdminn from "../../Component/Admin/SidebarAdminn";
import { useNavigate } from "react-router-dom";

function TabelDataKB() {
  const navigate = useNavigate();
  const [tableHeader, setTableHeader] = useState();
  const [initiateTable, setInitiateTable] = useState(1);
  let headerDataKB;
  let contentDataKB;

  const handlerInitiate1 = () => {
    setInitiateTable(1);
  };
  // const handlerInitiate2 = () => {
  //   setInitiateTable(2);
  // };
  // const handlerInitiate3 = () => {
  //   setInitiateTable(3);
  // };
  // const handlerInitiate4 = () => {
  //   setInitiateTable(4);
  // };
  // const handlerInitiate5 = () => {
  //   setInitiateTable(5);
  // };

  if (initiateTable === 1) {
    headerDataKB = ["METODE KB", "DIAGNOSA", "TINDAKAN", "KELUHAN", "TANGGAL DATANG", "TANGGAL KEMBALI", "CATATAN", "TEKANAN DARAH", "KELUHAN PASIEN", "TANGGAL DILAYANI", "BERAT BADAN", "TINGGI BADAN"];
    contentDataKB = ["KB suntik 3 bulan", "Mual Mual", "-", "-", "6 Oktober 2022", "10 November 2022", "-", "100/70", "-", "-6 Oktober 2022", "50", "160 cm"];
  }
  return (
    <div className="card bg-slate-500">
      <Navbar />
      <SidebarAdminn>
        <button
          onClick={() => {
            navigate("/input-kb");
          }}
          className="btn btn-success"
        >
          TAMBAH
        </button>
        <div className="card w-auto mx-auto bg-white">
          <div className="mt-10 p-4">
            <p className="text-lg font-bold">Data Keluarga Berencana</p>
            <div className="flex flex-row justify-center"></div>
            <div className="overflow-x-auto w-[73rem] mx-auto">
              <table className="table table-zebra border">
                {/* head */}
                <thead>
                  <tr>
                    {headerDataKB.map((item) => (
                      <th>{item}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    {contentDataKB.map((item) => (
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

export default TabelDataKB;
