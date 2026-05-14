import React from "react";

const Header = () => {
  return (
    <header className="font-bold text-sm sm:text-xl flex flex-wrap">
      <span className="text-slate-500">Sahand</span>
      <span className="text-slate-700">Estate</span>
      <form>
        <input type="text" placeholder="Search..." />
      </form>
    </header>
  );
};

export default Header;
