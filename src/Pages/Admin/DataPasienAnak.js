import { Link, useNavigate } from "react-router-dom";
import SidebarAdminn from "../../Component/Admin/SidebarAdminn";
import Navbar from "../../Component/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import DataPasienAnak from "./DetailDataPasienAnak";

const DataPasien = (props) => {
  const navigate = useNavigate();
  const [listPasien, setLIstPasien] = useState([""]);
  const deleteDataPasien = async (ID_PASIEN) => {
    try {
      const response = await axios.delete(`https://f081-140-213-11-117.ngrok-free.app/api/deletepasien/${ID_PASIEN}`);
      console.log(response);
      alert("Data Pasien Berhasil Dihapus :)");
      getListPasien();
    } catch (error) {
      alert(`GAGAL!`);
    }
  };

  const getListPasien = async () => {
    try {
      const response = await axios.get(`https://f081-140-213-11-117.ngrok-free.app/api/getpasien/anak`);
      setLIstPasien(response.data.data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    getListPasien();
  }, [props]);

  return (
    <div className="bg-slate-500">
      <Navbar />
      <SidebarAdminn>
        <div className="card bg-white">
          <div className="card-body p-5">
            {props.role === "admin" && (
              <div className="flex gap-x-3">
                <Link to="/create-data-ibu">
                  <button className="btn btn-primary">Create Data Ibu</button>
                </Link>
                <Link to="/create-data-anak">
                  <button className="btn btn-primary">Create Data Anak</button>
                </Link>
              </div>
            )}
            <div className="card-body p-5">
              <div className="flex gap-x-3">
                <Link to="/data-pasien">
                  <button className="btn btn-primary">Data Pasien Ibu</button>
                </Link>
                <Link to="/data-pasien-anak">
                  <button className="btn btn-primary">Data Pasien Anak</button>
                </Link>
              </div>
            </div>
            <table className="table">
              <tbody>
                <tr>
                  <td>No</td>
                  <td>Nama Lengkap</td>
                  <td>No RME</td>
                  <td>No Telepon</td>
                  <td>Alamat</td>
                  <td>Aksi</td>
                </tr>
                {listPasien.map((pasien, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{pasien.NAMA_LENGKAP}</td>
                    <td>{pasien.NO_RM}</td>
                    <td>{pasien.NO_TELP}</td>
                    <td>{pasien.ALAMAT}</td>
                    <td>
                      <div>
                        {/* <Link className="mr-3" to="/detail-data-pasien"> */}
                        <button
                          className="btn btn-warning"
                          onClick={() => {
                            const pasienId = pasien.ID_PASIEN;
                            navigate("/detail-data-pasien-anak", {
                              state: { id_pasien: pasienId },
                            });
                          }}
                        >
                          Detail
                        </button>
                        {/* </Link> */}
                        <button
                          className="btn btn-error"
                          onClick={() => {
                            deleteDataPasien(pasien.ID_PASIEN);
                          }}
                        >
                          Hapus
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </SidebarAdminn>
    </div>
  );
};

export default DataPasien;
