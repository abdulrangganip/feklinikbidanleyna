import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../Pages/Login";
import Register from "../Pages/Register";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default PublicRoutes;
