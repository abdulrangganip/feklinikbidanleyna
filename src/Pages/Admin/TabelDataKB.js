import React, { useState, useEffect } from "react";
import Navbar from "../../Component/Navbar";
import SidebarAdminn from "../../Component/Admin/SidebarAdminn";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function TabelDataKB(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const [listDataKb, setLIstDataKb] = useState([]);

  const [listMetodeKb, setListMetodeKb] = useState(null);
  const getListMetodeKb = async () => {
    try {
      const response = await axios.get(
        `https://f081-140-213-11-117.ngrok-free.app/api/getmetodekb`
      );
      const data = response.data?.data;
      console.log("metode", data);
      setListMetodeKb(data);
      console.log(data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const [dataKB, setDataKb] = useState();
  const getDataKb = async (ID_PASIEN) => {
    try {
      const response = await axios.get(
        `https://f081-140-213-11-117.ngrok-free.app/api/getkesehatanKb/${ID_PASIEN}`
      );
      const data = response.data?.data;
      setDataKb(data);
      setLIstDataKb(data.pelayanan_kb);
      console.log("res", data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(
    () => {
      console.log(location);
      getListMetodeKb();
      //getDataKb(location?.state?.ID_PASIEN);
      // console.log(location.state.id_pelayanan_kb);
      getDataKb(location?.state?.id_pasien);
    },
    [location],
    [props]
  );

  return (
    <div className="card bg-slate-500">
      <Navbar />
      <SidebarAdminn>
        {/* {props.role === "bidan" && (
          <div className="flex gap-x-3">
            <button
              onClick={() => {
                navigate("/input-kb", {
                  state: { id_pasien: location.state.id_pasien },
                });
              }}
              className="btn btn-success"
            >
              TAMBAH
            </button>
          </div>
        )} */}

        <div className="flex gap-x-3">
          <button
            onClick={() => {
              navigate("/input-kb", {
                state: { id_pasien: location.state.id_pasien },
              });
            }}
            className="btn btn-success"
          >
            TAMBAH
          </button>
        </div>

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
                  {listDataKb.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.TANGGAL_DATANG}</td>
                      <td>{item.TANGGAL_DILAYANI}</td>
                      <td>{item.BERAT_BADAN}</td>
                      <td>{item.TINGGI_BADAN}</td>
                      <td>{item.TEKANAN_DARAH}</td>
                      <td>{item.KELUHAN_PASIEN}</td>
                      <td>{item.DIAGNOSA}</td>
                      <td>{item.TINDAKAN}</td>
                      <td>{listMetodeKb[item.ID_METODE_KB - 1].NAMA}</td>
                      {/* (listDataAgama ? listDataAgama[detailPasien.keluarga.AGAMA_SUAMI - 1].NAMA : "-") */}
                      <td>{item.CATATAN}</td>
                      <td>{item.TANGGAL_KEMBALI}</td>
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
