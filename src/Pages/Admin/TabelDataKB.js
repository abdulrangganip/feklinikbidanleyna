import React, { useState, useEffect } from "react";
import Navbar from "../../Component/Navbar";
import SidebarPasien from "../../Component/Admin/SidebarAdminn";
import SidebarAdminn from "../../Component/Admin/SidebarAdminn";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function TabelDataKB() {
  const navigate = useNavigate();
  const location = useLocation();
  const [listDataKb, setLIstDataKb] = useState([""]);

  // const [listMetodeKb, setListMetodeKb] = useState(null);
  // const getListMetodeKb = async () => {
  //   try {
  //     const response = await axios.get(`https://82de-180-244-138-171.ngrok-free.app/api/getmetodekb`);
  //     const data = response.data?.data;

  //     setListMetodeKb(data);
  //     console.log(data);
  //   } catch (error) {
  //     console.log("Error:", error);
  //   }
  // };

  const [dataKB, setDataKb] = useState();
  const getDataKb = async (ID_PASIEN) => {
    try {
      const response = await axios.get(`https://82de-180-244-138-171.ngrok-free.app/api/getkesehatanKb/${ID_PASIEN}`);
      const data = response.data?.data;

      setDataKb(data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    // console.log(location);
    //getListMetodeKb();
    //getDataKb(location?.state?.ID_PASIEN);
    // console.log(location.state.id_pelayanan_kb);
    getDataKb();
  });

  return (
    <div className="card bg-slate-500">
      <Navbar />
      <SidebarAdminn>
        <button
          onClick={() => {
            navigate("/input-kb", {
              state: { id_pasien: location.state.ID_PASIEN },
            });
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
                    <td>NO.</td>
                    <td>Tanggal Datang</td>
                    <td>Tanggal Dilayani</td>
                    <td>Berat Badan</td>
                    <td>Tinggi Badan</td>
                    <td>Tekanan Darah</td>
                    <td>Keluhan Pasien</td>
                    <td>Diagnosa</td>
                    <td>Tindakan</td>
                    <td>Metode KB</td>
                    <td>Catatan</td>
                    <td>Tanggal Kembali</td>
                    {/* <td>Aksi</td> */}
                  </tr>
                </thead>
                <tbody>
                  {listDataKb.map((dataKB, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{dataKB.TANGGAL_DATANG}</td>
                      <td>{dataKB.TANGGAL_DILAYANI}</td>
                      <td>{dataKB.BERAT_BADAN}</td>
                      <td>{dataKB.TINGGI_BADAN}</td>
                      <td>{dataKB.TEKANAN_DARAH}</td>
                      <td>{dataKB.KELUHAN_PASIEN}</td>
                      <td>{dataKB.DIAGNOSA}</td>
                      <td>{dataKB.TINDAKAN}</td>
                      {/* <td>{dataKB.metodekb.NAMA}</td> */}
                      <td>{dataKB.CATATAN}</td>
                      <td>{dataKB.TANGGAL_KEMBALI}</td>
                      <td>
                        {/* <div>
                          {/* <Link className="mr-3" to="/detail-data-pasien"> */}
                        {/* <button
                            className="btn btn-warning"
                            onClick={() => {
                              const pasienId = pasien.ID_PASIEN;
                              navigate("/detail-data-pasien", {
                                state: { id_pasien: pasienId },
                              });
                            }}
                          >
                            Detail
                          </button> */}
                        {/* </Link>
                          <button
                            className="btn btn-error"
                            onClick={() => {
                              deleteDataPasien(pasien.ID_PASIEN);
                            }}
                          >
                            Hapus
                          </button> */}
                        {/* </div> */}
                      </td>
                    </tr>
                  ))}
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
