import { Link, useNavigate } from "react-router-dom";
import SidebarAdminn from "../../Component/Admin/SidebarAdminn";
import Navbar from "../../Component/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

const DataPasien = () => {
  const navigate = useNavigate();
  const [listPasien, setLIstPasien] = useState([""]);

  useEffect(() => {
    const getListPasien = async () => {
      try {
        const response = await axios.get(`https://82de-180-244-138-171.ngrok-free.app/api/getpasien`);
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
      <SidebarAdminn>
        <div className="card bg-white">
          <div className="card-body p-5">
            <div className="flex gap-x-3">
              <Link to="/create-data-ibu">
                <button className="btn btn-primary">Create Data Ibu</button>
              </Link>
              <Link to="/create-data-anak">
                <button className="btn btn-primary">Create Data Anak</button>
              </Link>
            </div>
            <table className="table">
              <tbody>
                <tr>
                  <td>No</td>
                  <td>Nama Lengkap</td>
                  <td>No RME</td>
                  <td>No NIK</td>
                  <td>No KK</td>
                  <td>Aksi</td>
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
                        {/* <Link className="mr-3" to="/detail-data-pasien"> */}
                        <button
                          className="btn btn-warning"
                          onClick={() => {
                            const pasienId = pasien.ID_PASIEN;
                            navigate("/detail-data-pasien", { state: { id_pasien: pasienId } });
                          }}
                        >
                          Detail
                        </button>
                        {/* </Link> */}
                        <Link to="/data-pasien">
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
      </SidebarAdminn>
    </div>
  );
};
export default DataPasien;
