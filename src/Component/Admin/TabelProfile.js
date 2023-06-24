import { useState } from "react";

const TabelProfile = () => {
  const [namaDepan, setNamaDepan] = useState("Maudi Ayunyun");
  const namaBelakang = "Nama Belakang";
  const email = "maudiayunyun@email.com";
  const password = "********";
  const alamat = "Jalan Kiara Condong";
  const noTelp = "081234567890";
  const noKK = "3213123451234";
  const noNIK = "3213241324134";

  const handleNama = (e) => {
    setNamaDepan(e.target.value);
  };

  const handleEmail = () => {};

  return (
    <>
      <div className="card bg-white w-full">
        <div className="card-body flex flex-col">
          <div className="grid grid-cols-2 gap-x-3">
            {/* <div>
              <label>Nama Depan</label>
              <span className="input input-bordered w-full max-w-2xl">
                {namaDepan}
              </span>
            </div>
            <div>
              <label>Nama Belakang</label>
              <span className="input input-bordered w-full max-w-2xl">
                {namaBelakang}
              </span>
            </div> */}
          </div>
          <label>Nama Depan</label>
          <input
            type="text"
            value={namaDepan}
            // placeholder={namaDepan}
            onChange={(e) => handleNama(e)}
            className="input input-bordered w-full max-w-8xl"
          />
          {/* {namaDepan} */}
          {/* <label>Nama Belakang</label>
          <span className="input input-bordered w-full max-w-8xl">{email}</span> */}
          <label>Email</label>
          <span className="input input-bordered w-full max-w-8xl">{email}</span>
          <label>Password</label>
          <span className="input input-bordered w-full max-w-8xl">
            {password}
          </span>
          <label>Alamat</label>
          <span className="input input-bordered w-full max-w-8xl">
            {alamat}
          </span>
          <label>No telp</label>
          <span className="input input-bordered w-full max-w-8xl">
            {noTelp}
          </span>
          <label>No KK</label>
          <span className="input input-bordered w-full max-w-8xl">{noKK}</span>
          <label>No NIK</label>
          <span className="input input-bordered w-full max-w-8xl">{noNIK}</span>
          <button className="btn btn-warning">ubah</button>
        </div>
      </div>
    </>
  );
};

export default TabelProfile;
