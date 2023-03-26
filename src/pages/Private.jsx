import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function Private() {
    const[status,setStatus]=useState(true);
  return status ? <Outlet /> : <Navigate to="/" />;
}
