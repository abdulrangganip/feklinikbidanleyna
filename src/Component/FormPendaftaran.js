import { Children } from "react";

const FormPendaftaran = ({ children, handleClick }) => {
  return (
    <>
      <div className="card bg-white w-full">
        <div className="card-body flex flex-col">
          <div className="grid grid-cols-2 gap-x-3">
            <div>
              <label>Nama Depan</label>
              <input
                type="text"
                placeholder="Inputkan Nama Depan"
                className="input input-bordered w-full max-w-2xl"
              />
            </div>
            <div>
              <label>Nama Belakang</label>
              <input
                type="text"
                placeholder="Inputkan Nama Belakang"
                className="input input-bordered w-full max-w-2xl"
              />
            </div>
          </div>
          <label>Email</label>
          <input
            type="text"
            placeholder="Inputkan email"
            className="input input-bordered w-full max-w-8xl"
          />
          <label>Password</label>
          <input
            type="text"
            placeholder="Inputkan password"
            className="input input-bordered w-full max-w-8xl"
          />
          <label>Alamat</label>
          <input
            type="text"
            placeholder="Inputkan alamat"
            className="input input-bordered w-full max-w-8xl"
          />
          <label>No telp</label>
          <input
            type="number"
            placeholder="Inputkan no telp"
            className="input input-bordered w-full max-w-8xl"
          />
          <label>No KK</label>
          <input
            type="number"
            placeholder="Inputkan no kk"
            className="input input-bordered w-full max-w-8xl"
          />
          <label>No NIK</label>
          <input
            type="number"
            placeholder="Inputkan no nik"
            className="input input-bordered w-full max-w-8xl"
          />
          <button onClick={handleClick} className="btn btn-warning">
            {children}
          </button>
        </div>
      </div>
    </>
  );
};
export default FormPendaftaran;
