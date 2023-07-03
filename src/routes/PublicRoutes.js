import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../Pages/Login";
import Register from "../Pages/Register";

const PublicRoutes = () => {
  const user = useSelector((state) => state.data?.user);
  const role = user ? user["TIPE_USER"] : null;
  console.log("[role]: ", role);
  console.log(user);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default PublicRoutes;
