import React, { useState } from "react";
import Navbar from "../../Component/Navbar";
import SidebarPasien from "../../Component/Admin/SidebarAdminn";
import SidebarAdminn from "../../Component/Admin/SidebarAdminn";

function DataBidan() {
  const [tableHeader, setTableHeader] = useState();
  const [initiateTable, setInitiateTable] = useState(1);
  let headerDataImunisasi;
  let contentDataImunisasi;

  const handlerInitiate1 = () => {
    setInitiateTable(1);
  };

  if (initiateTable === 1) {
    headerDataImunisasi = ["NO", "NIP ", "NAMA", "EMAIL", "ALAMAT", "NO TELP"];
    contentDataImunisasi = [
      "1",
      "197002042002212022",
      "RINA SULANJANA",
      "RINA SULANJANA@GMAIL.COM",
      "JLN PANIKA ASIH NO 24 RT 02 RW 09",
      "089516175704",
    ];
  }

  return (
    <div className="card bg-slate-500">
      <Navbar />
      <SidebarAdminn>
        <div className="card w-auto mx-auto bg-white">
          <div className="mt-10 p-4">
            <p className="text-lg font-bold">DATA AKUN BIDAN</p>
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

export default DataBidan;
