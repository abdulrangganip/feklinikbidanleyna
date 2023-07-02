import { Link } from "react-router-dom";
import Navbar from "../../Component/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import SidebarBidan from "../../Component/Bidan/SidebarBidan";

const DataPasienBidan = () => {
  const [listPasien, setLIstPasien] = useState([""]);

  useEffect(() => {
    const getListPasien = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/getpasien`);
        setLIstPasien(response.data.data);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    getListPasien();
  }, []);

  return (
    <div className="bg-slate-500">
      <Navbar />
      <SidebarBidan>
        <div className="card bg-white">
          <div className="card-body p-5">
            <div className="flex gap-x-6">
              {/* <Link to="/create-data-ibu">
                <button className="btn btn-primary">Create Data Ibu</button>
              </Link>
              <Link to="/create-data-anak">
                <button className="btn btn-primary">Create Data Anak</button>
              </Link> */}
            </div>
            <div className="">
              <h1 className="text-3xl font-semibold card bg-white w-full card-body flex flex-col">
                DATA PASIEN
              </h1>
            </div>

            <table className="table">
              <tbody>
                <tr>
                  <td>NO</td>
                  <td>NAMA LENGKAP</td>
                  <td>NO RME</td>
                  <td>NO NIK</td>
                  <td>NO KK</td>
                  <td>AKSI</td>
                </tr>
                {listPasien.map((pasien, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{pasien.NAMA_LENGKAP}</td>
                    <td>{pasien.NO_RME}</td>
                    <td>{pasien.NO_KK}</td>
                    <td>{pasien.NO_NIK}</td>
                    <td>
                      <div>
                        <Link className="mr-3" to="/input-kehamilan">
                          <button navigate className="btn btn-warning">
                            Detail
                          </button>
                        </Link>
                        <Link to="/input-imunisasi">
                          <button navigate className="btn btn-error">
                            Hapus
                          </button>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </SidebarBidan>
    </div>
  );
};
export default DataPasienBidan;
