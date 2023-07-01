import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { login } from "../redux/crud";
import { setUser } from "../redux/action";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const handleLogin = async () => {
  //   try {
  //     const response = await fetch("http://127.0.0.1:8000/api/signin", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ username, password }),
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       const { tipe_user } = data;

  //       if (tipe_user === "admin") {
  //         // Redirect ke halaman dashboard admin
  //         navigate("/dashboard");
  //       } else if (tipe_user === "bidan") {
  //         // Redirect ke halaman dashboard bidan
  //         navigate("/dashboardBidan");
  //       }
  //     } else {
  //       // Login gagal, tangani kesalahan
  //       console.log("Login failed");
  //     }
  //   } catch (error) {
  //     console.log("Error:", error);
  //   }
  // };

  const handleLogin = async () => {
    try {
      const response = await login(username, password);
      if (response.status !== 200) {
        throw new Error(response.message);
      }
      dispatch(setUser(response.data));
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
              <label className="label flex flex-row-reverse">
                {/* <a
                  href="#"
                  className="label-text-alt link link-hover text-orange-500"
                >
                  Forgot password?
                </a> */}
              </label>
            </div>
            <div className="form-control mt-6">
              <div className="w-full max-w-2xl">
                <button onClick={handleLogin} className="btn w-full bg-orange-500">
                  Login
                </button>
              </div>

              {/* <p className="text-center">Belum punya akun?</p>
              <a
                href="/register"
                className="text-center text-orange-500 hover:text-black"
              >
                Daftar
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
