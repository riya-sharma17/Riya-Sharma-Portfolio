"use client";
import React from "react";
import HeadingButton from "../ui/HeadingButton";
import SkillCard from "../ui/SkillCard";

const frontendSkills = [
  { name: "HTML5", icon: "/html.svg" },
  { name: "CSS3", icon: "/css.svg" },
  { name: "JavaScript", icon: "/js.svg" },
  { name: "TypeScript", icon: "/typescript.svg" },
  { name: "React", icon: "/re.svg" },
  { name: "Next.js", icon: "/next-js.svg" },
  { name: "Tailwind CSS", icon: "/tailwind.svg" },
];

const backendSkills = [
  { name: "Node.js", icon: "/nodejs.svg" },
  { name: "Express.js", icon: "/express-js.svg" },
  { name: "MongoDB", icon: "/mongodb-icon.svg" },
  { name: "NestJS", icon: "/nest js.png" },
  { name: "Socket.io", icon: "/socket.png" },
];

const toolsSkills = [
  { name: "GSAP", icon: "/gsap.svg" },
  { name: "Git", icon: "/git.svg" },
  { name: "Java", icon: "/java.svg" },
  { name: "Python", icon: "/cpp.svg" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full bg-gray-background md:px-[16vw] px-6 py-14 flex flex-col items-center gap-10"
    >
      <HeadingButton text="Skills" />

      <div className="w-full flex flex-col gap-10">
        <SkillCard heading="Frontend" usingNowSkills={frontendSkills} />
        <SkillCard heading="Backend & APIs" usingNowSkills={backendSkills} />
        <SkillCard heading="Tools & Libraries" usingNowSkills={toolsSkills} />
      </div>
    </section>
  );
};

export default Skills;
