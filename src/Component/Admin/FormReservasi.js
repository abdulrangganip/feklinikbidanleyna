const FormReservasi = () => {
  return (
    <div className="card bg-white">
      <div className="card-body flex flex-col">
        <p className="font-bold text-xl text-center">REGISTRASI AKUN BIDAN</p>
        <hr />

        <label>NIP</label>
        <input
          placeholder="masukan nip anda"
          type="text"
          className="input input-bordered w-full max-w82xl"
        />

        <label>Nama Lengkap</label>
        <input
          placeholder="masukan nama anda"
          type="text"
          className="input input-bordered w-full max-w82xl"
        />

        <label>Email</label>
        <input
          placeholder="masukan email anda"
          type="text"
          className="input input-bordered w-full max-w-8xl"
        />

        <label>Password</label>
        <input
          placeholder="masukan password anda"
          type="text"
          className="input input-bordered w-full max-w-8xl"
        />
        <label>Alamat</label>
        <input
          placeholder="masukan alamat anda"
          type="text"
          className="input input-bordered w-full max-w-8xl"
        />
        <label>No Telp</label>
        <input
          placeholder="masukan no telp anda"
          type="text"
          className="input input-bordered w-full max-w-8xl"
        />
        <div className="flex flex-row-reverse">
          <button className="btn btn-primary">DAFTAR</button>
        </div>
      </div>
    </div>
  );
};

export default FormReservasi;
