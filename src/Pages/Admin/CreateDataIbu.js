import { Link } from "react-router-dom";
import SidebarAdminn from "../../Component/Admin/SidebarAdminn";
import Navbar from "../../Component/Navbar";

const CreateDataIbu = () => {
  return (
    <div className="bg-slate-500">
      <Navbar />
      <SidebarAdminn>
        <div className="card bg-white my-5">
          <p className="font-bold text-xl text-center py-4">Data Diri Ibu</p>
          <hr />
          <div className="card-body grid grid-cols-2 gap-x-5">
            <div className="flex flex-col gap-y-5">
              <div className="grid grid-cols-2">
                <label>NO RM</label>
                <input className="input input-info" />
              </div>

              <div className="grid grid-cols-2">
                <label>NAMA LENGKAP</label>
                <input className="input input-info" />
              </div>
              <div className="grid grid-cols-2">
                <label>TEMPAT LAHIR</label>
                <input className="input input-info" />
              </div>

              <div className="grid grid-cols-2">
                <label>TANGGAL LAHIR</label>
                <input className="input input-info" />
              </div>
              <div className="grid grid-cols-2">
                <label>UMUR</label>
                <input className="input input-info" />
              </div>

              <div className="grid grid-cols-2">
                <label>ALAMAT</label>
                <input className="input input-info" />
              </div>

              <div className="grid grid-cols-2">
                <label>AGAMA</label>
                <input className="input input-info" />
              </div>
            </div>

            <div className="flex flex-col gap-y-5">
              <div className="grid grid-cols-2">
                <label>GOLONGAN DARAH</label>
                <input className="input input-info" />
              </div>

              <div className="grid grid-cols-2">
                <label>NO NIK</label>
                <input className="input input-info" />
              </div>

              <div className="grid grid-cols-2">
                <label>NO KK</label>
                <input className="input input-info" />
              </div>

              <div className="grid grid-cols-2">
                <label>RIWAYAT PENYAKIT</label>
                <input className="input input-info" />
              </div>

              <div className="grid grid-cols-2">
                <label>RIWAYAT ALERGI</label>
                <input className="input input-info" />
              </div>

              <div className="grid grid-cols-2">
                <label>PEKERJAAN</label>
                <input className="input input-info" />
              </div>

              <div className="grid grid-cols-2">
                <label>PENDIDIKAN TERAKHIR</label>
                <input className="input input-info" />
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-white">
          <p className="font-bold text-xl text-center py-4">
            Data Keluarga Ibu
          </p>
          <hr />
          <div className="card-body grid grid-cols-2 gap-x-5">
            <div className="flex flex-col gap-y-5">
              <div className="grid grid-cols-2">
                <label>NAMA SUAMI</label>
                <input className="input input-info" />
              </div>

              <div className="grid grid-cols-2">
                <label>UMUR SUAMI</label>
                <input className="input input-info" />
              </div>
              <div className="grid grid-cols-2">
                <label>TEMPAT LAHIR SUAMI</label>
                <input className="input input-info" />
              </div>

              <div className="grid grid-cols-2">
                <label>TANGGAL LAHIR SUAMI</label>
                <input className="input input-info" />
              </div>

              <div className="grid grid-cols-2">
                <label>AGAMA SUAMI</label>
                <input className="input input-info" />
              </div>
            </div>

            <div className="flex flex-col gap-y-5">
              <div className="grid grid-cols-2">
                <label>PENDIDIKAN SUAMI</label>
                <input className="input input-info" />
              </div>

              <div className="grid grid-cols-2">
                <label>PEKERJAAN SUAMI</label>
                <input className="input input-info" />
              </div>

              <div className="grid grid-cols-2">
                <label>GOL DARAH SUAMI</label>
                <input className="input input-info" />
              </div>

              <div className="grid grid-cols-2">
                <label>JUMLAH ANAK</label>
                <input className="input input-info" />
              </div>

              <div className="grid grid-cols-2">
                <label>UMUR ANAK TERAKHIR</label>
                <input className="input input-info" />
              </div>
            </div>
            <div>
              <Link to="/data-pasien">
                <button navigate className="btn btn-success">
                  SIMPAN
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <button class="btn btn-wide mr-3">
            <Link to="/data-pasien/data-kehamilan">
              KEHAMILAN DAN MELAHIRKAN
            </Link>
          </button>
          <button class="btn btn-wide">
            <Link to="/data-pasien/data-kb">KELUARGA BERENCANA</Link>
          </button>
        </div>
      </SidebarAdminn>
    </div>
  );
};
export default CreateDataIbu;
