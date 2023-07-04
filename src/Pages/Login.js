import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { login, loginPasien } from "../redux/crud";
import { setUser, setUserPasien } from "../redux/action";

const Login = () => {
  const [loginType, setLoginType] = useState("Pasien");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [no_nik, setNoNIK] = useState("");
  const [no_rm, setNoRM] = useState("");

  const dispatch = useDispatch();
  const handleLogin = async () => {
    try {
      const response = await login(username, password);
      console.log(response);
      if (response.status !== 200) {
        throw new Error(response.message);
      }
      dispatch(setUser(response.data?.data));
    } catch (err) {
      console.log("[login-error]: ", err);
    }
  };

  const handleLoginPasien = async () => {
    try {
      const response = await loginPasien(no_nik, no_rm);
      console.log(response);
      if (response.status !== 200) {
        throw new Error(response.message);
      }

      dispatch(setUserPasien({ ...response.data?.data, TIPE_USER: "pasien" }));
    } catch (err) {
      console.log("[login-error]: ", err);
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row gap-x-5">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-orange-500">
            Hallo <br /> Bunda,
          </h1>
          <p className="py-6 text-orange-500 font-semibold">Selamat datang di aplikasi Bidan Leyna Merlina Sarkosi</p>
        </div>
        <div className="card flex-shrink-0 border border-black w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div>
              <figure>
                <img src="/img/logo.png" alt="" width="120" />
              </figure>
              <p className="text-center font-bold text-xl">Login</p>
              <p className="text-center">Sign in to your account</p>
            </div>
            <div style={{ display: "flex", minWidth: "100%", flexDirection: "row" }}>
              <div
                onClick={() => {
                  setLoginType("Admin/Bidan");
                }}
                style={{ color: loginType === "Admin/Bidan" ? "#F0F0F0" : "#000", cursor: "pointer" }}
              >
                ADMIN/BIDAN
              </div>
              <div>|</div>
              <div
                onClick={() => {
                  setLoginType("Pasien");
                }}
                style={{ color: loginType === "Pasien" ? "#F0F0F0" : "#000", cursor: "pointer" }}
              >
                PASIEN
              </div>
            </div>
            {loginType === "Pasien" ? (
              <>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">No. NIK</span>
                  </label>
                  <input type="text" placeholder="No. NIK" className="input input-bordered" value={no_nik} onChange={(e) => setNoNIK(e.target.value)} />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">No. Rekam Medis</span>
                  </label>
                  <input type="text" placeholder="No. Rekam Medis" className="input input-bordered" value={no_rm} onChange={(e) => setNoRM(e.target.value)} />
                  <label className="label flex flex-row-reverse"></label>
                </div>
              </>
            ) : (
              <>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Username</span>
                  </label>
                  <input type="text" placeholder="username" className="input input-bordered" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" placeholder="password" className="input input-bordered" value={password} onChange={(e) => setPassword(e.target.value)} />
                  <label className="label flex flex-row-reverse"></label>
                </div>
              </>
            )}
            <div className="form-control mt-6">
              <div className="w-full max-w-2xl">
                <button onClick={loginType === "Pasien" ? handleLoginPasien : handleLogin} className="btn w-full bg-orange-500">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
