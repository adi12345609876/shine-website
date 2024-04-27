"use client";
import Image from "next/image";
import { useRef, useState, useTransition } from "react";
import ImageCard from "./ImageCard";
import TabButton from "./TabButton";
import { motion, useInView } from "framer-motion";
function DetailedSection() {
  const [tab, SetTab] = useState("countries");
  const [isPending, startTransition] = useTransition();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardVariants = {
    initial: { y: 10, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  const handleTabChange = (id) => {
    startTransition(() => {
      SetTab(id);
    });
  };
  const isActive = (currentTab) => {
    return tab == currentTab;
  };
  const Detailed_DATA_Countries = [
    {
      src: "/images/Countries/dubai.jpg",
      hovertitle: "Dubai",
    },
    {
      src: "/images/Countries/singapore.jpg",
      hovertitle: "Singapore",
    },
    {
      src: "/images/Countries/london.jpg",
      hovertitle: "London",
    },
    {
      src: "/images/Countries/crotia.jpg",
      hovertitle: "Europe",
    },

    {
      src: "/images/Countries/malaysia.jpg",
      hovertitle: "Malaysia",
    },
  ];
  const Detailed_DATA_Jobs = [
    {
      src: "/images/Jobs/electrician.jpg",
      hovertitle: "Electrician",
    },
    {
      src: "/images/Jobs/plumber.jpg",
      hovertitle: "Plumber",
    },
    {
      src: "/images/Jobs/waiter.jpg",
      hovertitle: "Waiter",
    },
    {
      src: "/images/Jobs/welder.jpg",
      hovertitle: "Welder",
    },
    {
      src: "/images/Jobs/scaffolder.jpg",
      hovertitle: "Scaffolder",
    },
  ];
  const Tab_data = [
    {
      title: "Countries",
      id: "countries",
      data: Detailed_DATA_Countries,
    },
    {
      title: "Jobs",
      id: "jobs",
      data: Detailed_DATA_Jobs,
    },
  ];
  return (
    <section id="expertise">
      <h2 className=" text-5xl font-bold text-black my-20 text-center">
        Our Expertise
      </h2>
      <div className="text-center mb-9">
        {Tab_data.map((item, index) => {
          const buttonClasses = isActive(item.id)
            ? "text-slate-900 border border-cyan-500 rounded-full border-5"
            : "text-slate-500";
          return (
            <button onClick={() => handleTabChange(item.id)}>
              <p
                className={`mr-3 text-xl py-1 px-2 font-semibold hover:text-slate-700 cursor-pointer ${buttonClasses}`}
              >
                {item.title}
              </p>
            </button>
          );
        })}
      </div>
      <ul
        ref={ref}
        className="container bg-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {Tab_data?.find((t) => t.id === tab).data.map((item, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            transition={{ duration: 0.2, delay: index * 0.3 }}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
          >
            <ImageCard
              src={item.src}
              hovertitle={item.hovertitle}
              key={index}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default DetailedSection;
