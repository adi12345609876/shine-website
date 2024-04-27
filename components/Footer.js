import React from "react";

function Footer() {
  return (
    <footer className="footer  border border-t-slate-300 border-l-transparent border-r-transparent text-black z-10">
      <div className="container p-12 flex justify-between">
        <span className="text-slate-500">SHINE</span>
        <p className="text-slate-400">
          Made by{" "}
          <a
            href="https://linktr.ee/rAdinath"
            target="_blank"
            className="text-slate-500 font-bold"
          >
            R.Adinath
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
