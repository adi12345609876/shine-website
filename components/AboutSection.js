"use client";
import { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
function AboutSection() {
  const [tab, SetTab] = useState("partners");
  const [isPending, startTransition] = useTransition();
  const Tab_data = [
    {
      title: "Top Partners",
      id: "partners",
      content: (
        <ul className="list-desc pl-2">
          <li>• PCM</li>
          <li>• Top collages</li>
        </ul>
      ),
    },
    {
      title: "Other services",
      id: "services",
      content: (
        <ul className="list-desc pl-2">
          <li>• London College Admission</li>
          <li>• Abroad Jobs</li>
        </ul>
      ),
    },
  ];
  const handleTabChange = (id) => {
    startTransition(() => {
      SetTab(id);
    });
  };
  const isActive = (currentTab) => {
    return tab == currentTab;
  };

  return (
    <section className="text-black" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
        <Image
          src="/images/about-image.jpg"
          width={400}
          height={400}
          alt="about"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-black mb-4 ">About Us</h2>
          <p className="text-base lg:text-lg">
            We have been in this industry for decades,this made it easier for us
            to find the most effective way to get jobs in abroad countries such
            as Dubai,London,etc.All you need to call us and that&apos;s all . We
            will guide you from there
          </p>
          <div className="flex justify-start flex-row mt-8">
            {Tab_data.map((item, index) => (
              <TabButton
                selectTab={() => handleTabChange(item.id)}
                active={isActive(item.id)}
                key={index}
              >
                {item.title}
              </TabButton>
            ))}
          </div>
          <div className="mt-8">
            {Tab_data.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
