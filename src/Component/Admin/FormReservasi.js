import React, { useState } from "react";
import axios from "axios";

const FormReservasi = () => {
  const [nip, setNip] = useState("");
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alamat, setAlamat] = useState("");
  const [noTelp, setNoTelp] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/signup", {
        username: nip,
        nama: nama,
        email: email,
        password: password,
        // alamat,
        no_telp: noTelp,
        tipe_user: "bidan",
      });

      console.log(response.data);

      // Lakukan tindakan setelah berhasil mendaftar, seperti menampilkan notifikasi atau mengarahkan pengguna ke halaman lain
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="card bg-white">
      <div className="card-body flex flex-col">
        <p className="font-bold text-xl text-center">REGISTRASI AKUN BIDAN</p>
        <hr />

        <form onSubmit={handleSubmit}>
          <label>NIP</label>
          <input
            placeholder="masukan nip anda"
            type="text"
            className="input input-bordered w-full max-w82xl"
            value={nip}
            onChange={(e) => setNip(e.target.value)}
          />

          <label>Nama Lengkap</label>
          <input
            placeholder="masukan nama anda"
            type="text"
            className="input input-bordered w-full max-w82xl"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />

          <label>Email</label>
          <input
            placeholder="masukan email anda"
            type="text"
            className="input input-bordered w-full max-w-8xl"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            placeholder="masukan password anda"
            type="password"
            className="input input-bordered w-full max-w-8xl"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>Alamat</label>
          <input
            placeholder="masukan alamat anda"
            type="text"
            className="input input-bordered w-full max-w-8xl"
            value={alamat}
            onChange={(e) => setAlamat(e.target.value)}
          />

          <label>No Telp</label>
          <input
            placeholder="masukan no telp anda"
            type="text"
            className="input input-bordered w-full max-w-8xl"
            value={noTelp}
            onChange={(e) => setNoTelp(e.target.value)}
          />

          <div className="flex flex-row-reverse">
            <button type="submit" className="btn btn-primary">
              DAFTAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormReservasi;
