import React, { Children } from "react";
import Sidebar from "../../shared/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-yellow-50">
      <div>
        <Sidebar />
      </div>
      <main className="bg-white h-[100vh] mt-20 mb-3 mr-3 ml-66">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
