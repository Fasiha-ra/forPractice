import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./src/components/Layout";
import Dashboard from "./src/pages/Dashboard";
import About from "./src/pages/About";
import Automation from "./src/pages/Automation";
import Profile from "./src/pages/Profile";
import Contact from "./src/pages/Contact";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="about" element={<About />} />
          <Route path="automation" element={<Automation />} />
          <Route path="profile" element={<Profile />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
};

export default Routers;
