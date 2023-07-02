import { Link } from "react-router-dom";
import SidebarAdminn from "../../Component/Admin/SidebarAdminn";
import Navbar from "../../Component/Navbar";
import SidebarBidan from "./SidebarBidan";

const TabelInputImunisasi = () => {
  return (
    <div className="bg-slate-500">
      <Navbar />
      <SidebarBidan>
        <div className="card bg-white my-5">
          <p className="font-bold text-xl text-center py-4">IMUNISASI</p>
          <hr />
          <div className="card-body grid grid-cols-2 gap-x-5">
            <div className="flex flex-col gap-y-5">
              <div className="grid grid-cols-2">
                <label>JENIS KELAMIN</label>
                <input className="input input-info" />
              </div>

              <div className="grid grid-cols-2">
                <label>TANGGAL PEMBERIAN </label>
                <input className="input input-info" />
              </div>
              <div className="grid grid-cols-2">
                <label>JENIS IMUNISASI</label>
                <input className="input input-info" />
              </div>

              <div className="grid grid-cols-2">
                <label>TEKANAN DARAH</label>
                <input className="input input-info" />
              </div>
              <div className="grid grid-cols-2">
                <label>KELUHAN PASIEN</label>
                <input className="input input-info" />
              </div>

              <div className="grid grid-cols-2">
                <label>TANGGAL DATANG</label>
                <input className="input input-info" />
              </div>

              <div className="grid grid-cols-2">
                <label>TANGGAL DILAYANI</label>
                <input className="input input-info" />
              </div>

              <div className="grid grid-cols-2">
                <label>BERAT BADAN</label>
                <input className="input input-info" />
              </div>

              <div className="grid grid-cols-2">
                <label>TINGGI BADAN</label>
                <input className="input input-info" />
              </div>
              <button class="btn btn-warning btn-wide mr-3">
                <Link to="/data-pasien/data-kehamilan">SIMPAN</Link>
              </button>
            </div>
          </div>
        </div>
      </SidebarBidan>
    </div>
  );
};
export default TabelInputImunisasi;
