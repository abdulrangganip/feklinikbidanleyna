import FormPendaftaran from "../Component/FormPendaftaran";
import { useNavigate } from "react-router-dom";

const Register = ({ children }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/profile");
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row gap-x-5">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-orange-500">
            Hallo <br /> Bunda,
          </h1>
          <p className="py-6 text-orange-500 font-semibold">
            Selamat datang di aplikasi Bidan Leyna Merlina Sarkosi
          </p>
        </div>
        <div className="card flex-shrink-0 border border-black w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div>
              <figure>
                <img src="/img/logo.png" alt="" width="120" />
              </figure>
              <p className="text-center font-bold text-xl">Register</p>
              <p className="text-center">Sign Up </p>
            </div>
            <FormPendaftaran handleClick={handleClick} children={"register"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
