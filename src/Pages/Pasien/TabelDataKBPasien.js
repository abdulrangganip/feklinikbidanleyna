import React, { useState, useEffect } from "react";
import Navbar from "../../Component/Navbar";
import SidebarAdminn from "../../Component/Admin/SidebarAdminn";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function TabelDataKB() {
  const navigate = useNavigate();
  const idUser = useSelector((state) => state.data?.user);
  const dataUser = JSON.parse(sessionStorage.getItem("user"));
  // const location = useLocation();
  const [listDataKb, setLIstDataKb] = useState([]);

  const [listMetodeKb, setListMetodeKb] = useState([]);
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
  const getDataKb = async (id_pasien, tipe_pasien) => {
    try {
      const response = await axios.get(
        `https://f081-140-213-11-117.ngrok-free.app/api/getkesehatanKb/${id_pasien}`
      );
      const data = response.data?.data;
      setDataKb(data);
      setLIstDataKb(data.pelayanan_kb);
      console.log("res", data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    // console.log(id_pasien);
    getListMetodeKb();
    //getDataKb(location?.state?.ID_PASIEN);
    // console.log(location.state.id_pelayanan_kb);
    getDataKb(dataUser.id_pasien, dataUser.tipe_pasien);
  }, []);

  return (
    <div className="card bg-slate-500">
      <Navbar />
      <SidebarAdminn>
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
                      {/* <td>{listMetodeKb[item.ID_METODE_KB - 1].NAMA}</td> */}
                      <td>{item.CATATAN}</td>
                      <td>{item.TANGGAL_KEMBALI}</td>
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
