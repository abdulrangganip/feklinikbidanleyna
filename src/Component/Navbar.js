import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { deleteUser } from "../redux/action";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <div className="flex flex-row rounded-full">
          <img className="w-20" src="/img/logo.png" />
          {/* <p>My Klik</p> */}
        </div>
        {/* <a className="btn btn-ghost normal-case text-xl">My Klik</a> */}
      </div>
      <div>
        <Link to="/" onClick={() => dispatch(deleteUser())}>
          <div className="btn btn-ghost">Sign Out</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
