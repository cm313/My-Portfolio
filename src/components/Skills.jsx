import React from 'react'
import { RiReactjsLine } from "react-icons/ri";
import { FaJava } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { FaJsSquare } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssLine } from "react-icons/ri";
import { FaGitSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { SiJest } from "react-icons/si";

const Skills = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Skills</h1>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <div className="rounded-2xl border-4 border-neutral-800p-4">
        <FaJava className="text-7xl text-cyan-700" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800p-4">
        <GrMysql className="text-7xl text-cyan-900" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800p-4">
        <FaHtml5 className="text-7xl text-red-700" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800p-4">
        <FaCss3Alt className="text-7xl text-blue-700" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800p-4">
        <FaJsSquare className="text-7xl text-yellow-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800p-4">
        <RiReactjsLine className="text-7xl text-cyan-300" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800p-4">
        <RiTailwindCssLine className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800p-4">
        <TbBrandRedux className="text-7xl  text-violet-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800p-4">
        <SiJest className="text-7xl text-red-700" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800p-4">
        <FaGitSquare className="text-7xl text-red-900" />
        </div>
        
        <div className="rounded-2xl border-4 border-neutral-800p-4">
        <FaGithub className="text-7xl " />
        </div>
        
        
      </div>
      
    </div>
  )
}

export default Skills