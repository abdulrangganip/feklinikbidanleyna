import { Link } from "react-router-dom";

const TabelDataKeluarga = () => {
  return (
    <>
      <table className="table">
        <tbody>
          <tr>
            <td>
              <label className="font-bold">NAMA SUAMI</label>
            </td>
            <td>
              <label>Steven Cuba</label>
            </td>
            <td>
              <label className="font-bold">PENDIDIKAN SUAMI</label>
            </td>
            <td>
              <label>DIPLOMA III</label>
            </td>
          </tr>
          <tr>
            <td>
              <label className="font-bold">UMUR SUAMI</label>
            </td>
            <td>
              <label>23</label>
            </td>
            <td>
              <label className="font-bold">PEKERJAAN SUAMI</label>
            </td>
            <td>Karyawan Swasta</td>
          </tr>
          <tr>
            <td>
              <label className="font-bold">TEMPAT LAHIR SUAMI</label>
            </td>
            <td>Bandung</td>
            <td>
              <label className="font-bold">GOLONGAN DARAH SUAMI</label>
            </td>
            <td>O</td>
          </tr>
          <tr>
            <td>
              <label className="font-bold">TANGGAL LAHIR SUAMI</label>
            </td>
            <td>12-12-1999</td>
            <td>
              <label className="font-bold">JUMLAH ANAK</label>
            </td>
            <td>1</td>
          </tr>
          <tr>
            <td>
              <label className="font-bold">AGAMA SUAMI</label>
            </td>
            <td>Islam</td>
            <td>
              <label className="font-bold">UMUR ANAK TERAKHIR</label>
            </td>
            <td>2 Tahun</td>
          </tr>
        </tbody>
      </table>
      <hr />
      <div className="card grid grid-cols-2 gap-x-3">
        <div className="card-body bg-white flex flex-row gap-x-3 rounded-lg">
          <p className="p-3">Keluarga Berencana</p>
          <Link to="/cek-rme/data-kb">
            <div className="btn btn-success">LIHAT</div>
          </Link>
        </div>
        <div className="card-body bg-white flex flex-row gap-x-3 rounded-lg">
          <p className="p-3">Kehamilan dan Melahirkan</p>
          <Link to="/cek-rme/data-kehamilan">
            <div className="btn btn-success">LIHAT</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default TabelDataKeluarga;
