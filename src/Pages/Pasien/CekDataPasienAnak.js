import { Link } from "react-router-dom";
import Navbar from "../../Component/Navbar";
import SidebarPasien from "../../Component/Pasien/SidebarPasien";

const CekDataPasienAnak = () => {
  return (
    <div className="bg-slate-500">
      <Navbar />
      <SidebarPasien>
        <div className="card bg-white my-5">
          <p className="font-bold text-xl text-center py-4">Data Diri Anak</p>
          <hr />
          <div className="card-body grid grid-cols-2 gap-x-5">
            <div className="flex flex-col gap-y-5">
              <div className="grid grid-cols-2">
                <label className="font-bold">NO RM</label>
                <label className="input input-info">012-05-LYN-2022</label>
              </div>
              <div className="grid grid-cols-2">
                <label className="font-bold">NAMA LENGKAP</label>
                <label className="input input-info">CUSRON</label>
              </div>
              <div className="grid grid-cols-2">
                <label className="font-bold">TEMPAT LAHIR</label>
                <label className="input input-info">BANDUNG</label>
              </div>

              <div className="grid grid-cols-2">
                <label className="font-bold">TANGGAL LAHIR</label>
                <label className="input input-info">8 MEI 2020</label>
              </div>
              <div className="grid grid-cols-2">
                <label className="font-bold">UMUR</label>
                <label className="input input-info">3 TAHUN</label>
              </div>

              <div className="grid grid-cols-2">
                <label className="font-bold">ALAMAT</label>
                <label className="input input-info">JLN MELATI NO 23</label>
              </div>
            </div>

            <div className="flex flex-col gap-y-5">
              <div className="grid grid-cols-2">
                <label className="font-bold">GOLONGAN DARAH</label>
                <label className="input input-info">O</label>
              </div>

              <div className="grid grid-cols-2">
                <label className="font-bold">NO NIK</label>
                <label className="input input-info">3273160805200001</label>
              </div>

              <div className="grid grid-cols-2">
                <label className="font-bold">NO KK</label>
                <label className="input input-info">3273163211323330</label>
              </div>

              <div className="grid grid-cols-2">
                <label className="font-bold">JENIS KELAMIN</label>
                <label className="input input-info">LAKI-LAKI</label>
              </div>
              <div className="grid grid-cols-2">
                <label className="font-bold">NAMA AYAH</label>
                <label className="input input-info">REINAL FAUZI</label>
              </div>

              <div className="grid grid-cols-2">
                <label className="font-bold">NAMA IBU</label>
                <label className="input input-info">DINDA NURFAUZI</label>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <button class="btn btn-wide mr-3">
            <Link to="/cek-data-pasien/data-imunisasi-pasien">IMUNISASI</Link>
          </button>
        </div>
      </SidebarPasien>
    </div>
  );
};
export default CekDataPasienAnak;
