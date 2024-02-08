import React from "react";
import { NavLink, Outlet, Link } from "react-router-dom";

export default function CareersLayout() {
  return (
    <div className="careers-layout">
      <h2>Careers</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non
        sagittis odio.
      </p>
      <Outlet />
    </div>
  );
}
