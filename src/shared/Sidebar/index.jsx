import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";

const Sidebar = () => {
  const data = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Automation", link: "/automation" },
    { name: "Profile", link: "/profile" },
    { name: "Contact", link: "/contact" },
  ];
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <div
        className="absolute top-2 z-20 cursor-pointer lg:hidden"
        onClick={() => setIsSidebarOpen((prev) => !prev)}
      >
        <IoIosMenu color="white" size={28} />
      </div>

      {/* Sidebar */}
      <div
        className={`bg-slate-950 w-64 fixed h-full px-3 py-3 top-0 z-10 transition-transform duration-300 
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0 lg:block`}
      >
        <div className="text-white text-3xl text-center mb-4 font-bold">
          LOGO
        </div>
        <div className="flex flex-col justify-between h-full">
          <ul className="text-white">
            {data.map((item, i) => (
              <li key={i} className="text-xl mb-3">
                <NavLink
                  to={item.link}
                  className={({ isActive }) =>
                    `block px-2 py-2 rounded-sm cursor-pointer ${
                      isActive
                        ? "bg-blue-600"
                        : "bg-slate-700 hover:bg-slate-500"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mb-14 text-red-600 text-xl bg-red-300 px-2 py-2 rounded-sm cursor-pointer hover:bg-red-400">
            Logout
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
