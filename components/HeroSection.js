"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
function HeroSection() {
  const router = useRouter();
  return (
    <section id="hero">
      <div class="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          class="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 class="text-black mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            Get your Next
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
              {""} Job {""}
            </span>
            in Abroad
          </h1>
          <p class="text-slate-500 text-base sm:text-lg mb-6 lg:text-lg ">
            EXPLORE GLOBAL CAREERS.Find Your Path Abroad! Discover Exciting
            Opportunities Worldwide with SHINE. Unlock Your Potential, Expand
            Your Horizons, and Thrive in International Careers. Start Your
            Journey Today!
          </p>
          <button
            onClick={() => router.push("/#contact")}
            className="px-6 py-3 rounded-full sm:w-fit w-full mr-4 text-white bg-gradient-to-br from-cyan-500 to-blue-500 opacity-90 hover:opacity-100 ease-in-out duration-300"
          >
            Contact Us
          </button>
          <button
            onClick={() => router.push("/#about")}
            className="px-1 py-1 rounded-full sm:w-fit w-full bg-gradient-to-br from-cyan-500 to-blue-500 opacity-90 hover:opacity-100  ease-in-out duration-300 mt-3 text-black"
          >
            <span class="block bg-slate-200 rounded-full px-5 py-2">
              About Us
            </span>
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-4"
        >
          <div class="rounded-full bg-gradient-radial to-blue-400 via-cyan-400  from-cyan-200   w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
