import { Link } from "react-router-dom";
import Navbar from "../../Component/Navbar";
import SidebarPasien from "../../Component/Pasien/SidebarPasien";

const CekDataPasien = () => {
  return (
    <div className="bg-slate-500">
      <Navbar />
      <SidebarPasien>
        <div className="card bg-white my-5">
          <p className="font-bold text-xl text-center py-4">Data Diri Pasien</p>
          <hr />
          <div className="card-body grid grid-cols-2 gap-x-5">
            <div className="flex flex-col gap-y-5">
              <div className="grid grid-cols-2">
                <label className="font-bold">NO RM</label>
                <label className="input input-info">011-05-LYN-2022</label>
              </div>
              <div className="grid grid-cols-2">
                <label className="font-bold">NAMA LENGKAP</label>
                <label className="input input-info">DINDA NURFAUZI</label>
              </div>
              <div className="grid grid-cols-2">
                <label className="font-bold">TEMPAT LAHIR</label>
                <label className="input input-info">BANDUNG</label>
              </div>

              <div className="grid grid-cols-2">
                <label className="font-bold">TANGGAL LAHIR</label>
                <label className="input input-info">8 JANUARI 1999</label>
              </div>
              <div className="grid grid-cols-2">
                <label className="font-bold">UMUR</label>
                <label className="input input-info">24</label>
              </div>

              <div className="grid grid-cols-2">
                <label className="font-bold">ALAMAT</label>
                <label className="input input-info">JLN MELATI NO 23</label>
              </div>

              <div className="grid grid-cols-2">
                <label className="font-bold">AGAMA </label>
                <label className="input input-info">ISLAM</label>
              </div>
            </div>

            <div className="flex flex-col gap-y-5">
              <div className="grid grid-cols-2">
                <label className="font-bold">GOLONGAN DARAH</label>
                <label className="input input-info">O</label>
              </div>

              <div className="grid grid-cols-2">
                <label className="font-bold">NO NIK</label>
                <label className="input input-info">3273160801990004</label>
              </div>

              <div className="grid grid-cols-2">
                <label className="font-bold">NO KK</label>
                <label className="input input-info">3273163211323320</label>
              </div>

              <div className="grid grid-cols-2">
                <label className="font-bold">RIYAWAT PENYAKIT</label>
                <label className="input input-info">-</label>
              </div>
              <div className="grid grid-cols-2">
                <label className="font-bold">RIWAYAT ALERGI</label>
                <label className="input input-info">GATAL GATAL</label>
              </div>

              <div className="grid grid-cols-2">
                <label className="font-bold">PEKERJAAN</label>
                <label className="input input-info">WIRASWASTA</label>
              </div>

              <div className="grid grid-cols-2">
                <label className="font-bold">PENDIDIKAN TERAKHIR</label>
                <label className="input input-info">SMA</label>
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
                <label className="font-bold">NAMA SUAMI</label>
                <label className="input input-info">REINALDI FAUZI</label>
              </div>

              <div className="grid grid-cols-2">
                <label className="font-bold">UMUR SUAMI</label>
                <label className="input input-info">26</label>
              </div>
              <div className="grid grid-cols-2">
                <label className="font-bold">TEMPAT LAHIR SUAMI</label>
                <label className="input input-info">BANDUNG</label>
              </div>

              <div className="grid grid-cols-2">
                <label className="font-bold">TANGGAL LAHIR SUAMI</label>
                <label className="input input-info">8 JANUARI 1997</label>
              </div>

              <div className="grid grid-cols-2">
                <label className="font-bold">AGAMA</label>
                <label className="input input-info">ISLAM</label>
              </div>
            </div>

            <div className="flex flex-col gap-y-5">
              <div className="grid grid-cols-2">
                <label className="font-bold">PENDIDIKAN SUAMI</label>
                <label className="input input-info">DIPLOMA III</label>
              </div>
              <div className="grid grid-cols-2">
                <label className="font-bold">PEKERJAAN SUAMI</label>
                <label className="input input-info">BUMN</label>
              </div>

              <div className="grid grid-cols-2">
                <label className="font-bold">GOL DARAH SUAMI</label>
                <label className="input input-info">O</label>
              </div>
              <div className="grid grid-cols-2">
                <label className="font-bold">JUMLAH ANAK </label>
                <label className="input input-info">1</label>
              </div>

              <div className="grid grid-cols-2">
                <label className="font-bold">UMUR ANAK TERAKHIR</label>
                <label className="input input-info">5 TAHUN</label>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <button class="btn btn-wide mr-3">
            <Link to="/cek-data-pasien/data-kehamilan-pasien">
              KEHAMILAN DAN MELAHIRKAN
            </Link>
          </button>
          <button class="btn btn-wide">
            <Link to="/cek-data-pasien/data-kb-pasien">KELUARGA BERENCANA</Link>
          </button>
        </div>
      </SidebarPasien>
    </div>
  );
};
export default CekDataPasien;
