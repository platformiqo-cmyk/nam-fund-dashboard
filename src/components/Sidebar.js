// src/components/Sidebar.js
import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const menuItems = [
    { name: "Dashboard", path: "/" },
    { name: "Investments", path: "/investments" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Reports", path: "/reports" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <div className="bg-gray-900 text-white h-screen w-64 p-5 fixed">
      <h2 className="text-2xl font-bold mb-8">Nam Fund</h2>
      <ul className="space-y-4">
        {menuItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `block px-2 py-1 rounded hover:text-gray-300 transition-all duration-200 ${
                  isActive ? "bg-gray-700 text-white font-semibold" : "text-gray-300"
                }`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
