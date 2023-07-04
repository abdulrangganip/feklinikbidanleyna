import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../../Component/Navbar";
import SidebarPasien from "../../Component/Admin/SidebarAdminn";
import SidebarAdminn from "../../Component/Admin/SidebarAdminn";
import Bidan from "./Bidan";

const DataBidan = (props) => {
  const navigate = useNavigate();
  const [listBidan, setLIstBidan] = useState([""]);
  const deleteDataBidan = async (ID_USERNAME) => {
    try {
      const response = await axios.delete(`https://f081-140-213-11-117.ngrok-free.app/api/deletebidan/${ID_USERNAME}`);
      console.log(response);
      alert("Data Bidan Berhasil Dihapus");
      getListBidan();
    } catch (error) {
      alert(`GAGAL!`);
    }
  };

  const getListBidan = async () => {
    try {
      const response = await axios.get(`https://f081-140-213-11-117.ngrok-free.app/api/getbidan`);
      setLIstBidan(response.data.data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    console.log("TES: ", props);
    const getListBidan = async () => {
      try {
        const response = await axios.get(`https://f081-140-213-11-117.ngrok-free.app/api/getbidan`);
        setLIstBidan(response.data.data);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    getListBidan();
  }, [props]);

  return (
    <div className="card bg-slate-500">
      <Navbar />
      <SidebarAdminn>
        <div className="card w-auto mx-auto bg-white">
          <div className="mt-10 p-4">
            <p className="text-lg font-bold">DATA BIDAN</p>
            <div className="flex flex-row justify-center"></div>
            <div className="overflow-x-auto w-[73rem] mx-auto">
              <table className="table table-zebra border">
                <tbody>
                  <tr>
                    <td>No</td>
                    <td>Nama Bidan</td>
                    <td>Username</td>
                    <td>Password</td>
                    {/* <td>Alamat</td>
                  <td>No. Telepon</td>
                  <td>No. NIP</td> */}
                    <td>Aksi</td>
                  </tr>
                  {listBidan.map((bidan, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{bidan.NAMA}</td>
                      <td>{bidan.USERNAME}</td>
                      <td>{bidan.PASSWORD}</td>
                      {/* <td>{pasien.NO_NIK}</td> */}
                      <td>
                        <div>
                          {/* </Link> */}
                          <button
                            className="btn btn-error"
                            onClick={() => {
                              deleteDataBidan(bidan.ID_USER);
                            }}
                          >
                            Hapus
                          </button>
                          {/* <Link to="/data-pasien">
                            <button navigate className="btn btn-error">
                              Hapus
                            </button>
                          </Link> */}
                        </div>
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
};

export default DataBidan;
