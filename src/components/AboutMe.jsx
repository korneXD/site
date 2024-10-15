import React from "react";
import { Contact } from "./Contact";

import { Header } from "./Header";
import { MyProjects } from "./MyProjects";
import { MyServices } from "./MyServices";

export const AboutMe = () => {
  return (
    <div className="flex flex-col justify-center items-start w-[900px] mx-auto h-auto border border-cyan-500 rounded-lg gap-2 p-2">
      <Header />
      <MyServices />
      <MyProjects />
      <Contact />
    </div>
  );
};
