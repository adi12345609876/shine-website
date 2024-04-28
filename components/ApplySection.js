"use client";
import Link from "next/link";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
function ApplySection() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState();
  const [pnumber, setPnumber] = useState();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`/api/infoApply`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email, name, pnumber }),
      });
      if (res.ok) {
        alert("successfull posted the information");
      } else {
        alert("_ERROR WHILE POSTING_");
      }
    } catch (error) {
      console.log("_ERROR WHILE POSTING_", error);
    }
    setLoading(false);
  };
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 text-black relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500 to to-transparent rounded-full h-80 w-80 blur-lg z-0 absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2 opacity-35" />
      <div className="z-10">
        <h5 className="font-bold text-4xl my-4">Let&apos;s Connect</h5>
        <p className="text-slate-500 text-sm mb-4 max-w-md">
          Hey To Get Our services you can call us via the numbers below or
          Whatsapp us.You can fill the form on the right,We will contact you.
          <br />
          <br />
          <span className="text-lg">Whatsapp/Call Number:</span>
          <span className="text-lg font-bold">+91 7299994115</span>
          <br />
          <span className="text-lg">Email:</span>
          <span className="text-lg font-bold">ramsundar468@gmail.com</span>
        </p>
        <div className="socials flex flex-row gap-2">
          <Link target="_blank" href={"https://wa.me/7299994115"}>
            <FaWhatsapp size={30} />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col gap-1" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="text-black block mb-2 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              className="bg-slate-200 border border-slate-300 placeholder-slate-400 text-slate-900 text-sm rounded-lg w-full p-2.5"
              placeholder="adinath@gmail.com"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="phone"
              className="text-black block mb-2 text-sm font-medium"
            >
              Phone number
            </label>
            <input
              onChange={(e) => setPnumber(e.target.value)}
              type="tel"
              id="phone"
              required
              className="bg-slate-200 border border-slate-300 placeholder-slate-400 text-slate-900 text-sm rounded-lg w-full p-2.5"
              placeholder="+91 7299994115"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="text-black block mb-2 text-sm font-medium"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-slate-200 border border-slate-300 placeholder-slate-400 text-slate-900 text-sm rounded-lg w-full p-2.5"
              placeholder="Adinath"
            />
          </div>
          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            disabled={!setLoading}
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default ApplySection;
