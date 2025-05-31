import React from "react";

const Header = () => {
  return (
   <header className="fixed left-64 right-0 top-0">
     <div className="flex justify-between w-full bg-slate-950 text-white px-3 py-3">
      <div className="">
        <h2>Hi Welcome!</h2>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className="flex gap-1">
        <button>Login</button>
        <button>Register</button>
      </div>
    </div>
   </header>
  );
};

export default Header;
