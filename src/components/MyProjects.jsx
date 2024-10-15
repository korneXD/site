import React from "react";
import { Cards } from "./Cards";
import { projects } from "../data";

export const MyProjects = () => {
  return (
    <div className="flex items-start justify-center mx-auto border border-cyan-500 rounded-lg h-full w-[550px] p-2">
      <div className="flex flex-col gap-4 w-full">
        <div>
          <div className="flex flex-row gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-7 text-cyan-500 stroke-2 hover:fill-cyan-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
              />
            </svg>
            <h1 className="text-white text-2xl font-bold text-left">
              My Projects
            </h1>
          </div>
          <p className="text-neutral-400 text-md">
            My recent projects can be viewed in the following points below
          </p>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {projects.map((item) => (
            <Cards
              key={item.id}
              id={item.id}
              title={item.title}
              descr={item.descr}
              openLink={item.openLink}
              gitLink={item.gitLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
