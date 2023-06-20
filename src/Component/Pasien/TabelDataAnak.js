import { Link } from "react-router-dom";

const TabelDataAnak = () => {
  return (
    <>
      <table className="table">
        <tbody>
          <tr>
            <td>
              <label className="font-bold">NAMA SUAMI</label>
            </td>
            <td>
              <label>98277632423</label>
            </td>
            <td>
              <label className="font-bold">PENDIDIKAN SUAMI</label>
            </td>
            <td>
              <label>98277632423</label>
            </td>
          </tr>
          <tr>
            <td>
              <label className="font-bold">UMUR SUAMI</label>
            </td>
            <td>
              <label>Abdul Rangga</label>
            </td>
            <td>
              <label className="font-bold">PEKERJAAN SUAMI</label>
            </td>
            <td>penyakit hati</td>
          </tr>
          <tr>
            <td>
              <label className="font-bold">TEMPAT LAHIR SUAMI</label>
            </td>
            <td>Bandung</td>
            <td>
              <label className="font-bold">GOLONGAN DARAH SUAMI</label>
            </td>
            <td>Gatal gatal</td>
          </tr>
          <tr>
            <td>
              <label className="font-bold">TANGGAL LAHIR SUAMI</label>
            </td>
            <td>12-12-1999</td>
            <td>
              <label className="font-bold">JUMLAH ANAK</label>
            </td>
            <td>Mahasiswa</td>
          </tr>
          <tr>
            <td>
              <label className="font-bold">AGAMA SUAMI</label>
            </td>
            <td>21</td>
            <td>
              <label className="font-bold">UMUR ANAK TERAKHIR</label>
            </td>
            <td>Diploma</td>
          </tr>
        </tbody>
      </table>
      <hr />
      <div className="card grid grid-cols-2 gap-x-3">
        <div className="card-body bg-white flex flex-row gap-x-3 rounded-lg">
          <p className="p-3">Imunisasi</p>
          <Link to="/cek-rme/data-imunisasi">
            <div className="btn btn-success">LIHAT</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default TabelDataAnak;
