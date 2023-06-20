const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row gap-x-5">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-orange-500">
            Hallo <br /> Sayang,
          </h1>
          <p className="py-6 text-orange-500 font-semibold">
            Selamat datang di aplikasi Bidan Leyna Merlina Sarkosi mamah lubban
          </p>
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
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label flex flex-row-reverse">
                <a
                  href="#"
                  className="label-text-alt link link-hover text-orange-500"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <a className="w-full max-w-2xl" href="/profile">
                <button className="btn w-full bg-orange-500">Login</button>
              </a>

              <p className="text-center">Belum punya akun?</p>
              <a
                href="/register"
                className="text-center text-orange-500 hover:text-black"
              >
                Daftar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
