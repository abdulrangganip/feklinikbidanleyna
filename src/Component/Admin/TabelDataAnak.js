import { Link } from "react-router-dom";

const TabelDataAnak = () => {
  return (
    <>
      <table className="table">
        <tbody>
          <tr>
            <td>
              <label className="font-bold">NO RM</label>
            </td>
            <td>
              <label>99-86-33</label>
            </td>
            <td>
              <label className="font-bold">GOLONGAN DARAH</label>
            </td>
            <td>
              <label>O</label>
            </td>
          </tr>
          <tr>
            <td>
              <label className="font-bold">NAMA LENGKAP</label>
            </td>
            <td>
              <label>Devasha Rizki</label>
            </td>
            <td>
              <label className="font-bold">NO NIK</label>
            </td>
            <td>3273160811010066</td>
          </tr>
          <tr>
            <td>
              <label className="font-bold">TEMPAT LAHIR</label>
            </td>
            <td>Garut</td>
            <td>
              <label className="font-bold">NO KK</label>
            </td>
            <td>3213819488110366</td>
          </tr>
          <tr>
            <td>
              <label className="font-bold">TANGGAL LAHIR </label>
            </td>
            <td>18 April 2022</td>
            <td>
              <label className="font-bold">JENIS KELAMIN</label>
            </td>
            <td>Perempuan</td>
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
          <Link to="/data-pasien/data-imunisasi">
            <div className="btn btn-success">LIHAT</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default TabelDataAnak;
