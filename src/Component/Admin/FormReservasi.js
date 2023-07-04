import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import SidebarAdminn from "../../Component/Admin/SidebarAdminn";
import Navbar from "../../Component/Navbar";

const FormReservasi = () => {
  const navigate = useNavigate();

  const [nip, setNip] = useState("");
  const [nama, setNama] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alamat, setAlamat] = useState("");
  const [noTelp, setNoTelp] = useState("");

  const handleValue = (setValue, e) => {
    setValue(e.target.value);
  };
  const postFormReservasi = async (data) => {
    try {
      const response = await axios.post(
        `https://f081-140-213-11-117.ngrok-free.app/api/addbidan`,
        data
      );
      console.log(response);
      alert("Akun Bidan Berhasil Dibuat");
      navigate("/data-bidan");
    } catch (error) {
      alert(`Buat Akun Gagal!`);
      console.log(error);
    }
  };

  const handleSimpan = () => {
    let body = {};
    body.nip = nip;
    body.nama = nama;
    body.username = username;
    body.email = email;
    body.password = password;
    body.alamat = alamat;
    body.no_telp = noTelp;
    postFormReservasi(body);
  };

  useEffect(() => {
    console.log();
  });

  return (
    <div className="card bg-slate-500">
      <Navbar />
      <SidebarAdminn>
        <div className="card bg-white">
          <div className="card-body flex flex-col">
            <p className="font-bold text-xl text-center">
              REGISTRASIdsadsad AKUN BIDAN
            </p>
            <hr />
            {/* <form onSubmit={handleSubmit}> */}
            <label>NIP</label>
            <input
              placeholder="masukan nip anda"
              type="text"
              className="input input-bordered w-full max-w82xl"
              value={nip}
              onChange={(e) => setNip(e.target.value)}
            />
            <label>Username</label>
            <input
              placeholder="masukan nip anda"
              type="text"
              className="input input-bordered w-full max-w82xl"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              // value={alamat}
              // onChange={(e) => setAlamat(e.target.value)}
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
              <button
                navigate
                type="submit"
                className="btn btn-primary"
                onClick={() => {
                  handleSimpan();

                  console.log("masuk");
                }}
              >
                DAFTAR
              </button>
            </div>
            {/* </form> */}
          </div>
        </div>
      </SidebarAdminn>
    </div>
  );
};

export default FormReservasi;
