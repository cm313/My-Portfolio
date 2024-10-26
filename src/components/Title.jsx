import React from 'react'
import profilePic from "../assets/ChandraMaheshProfile.jpg"
import { TITLE_CONTENT } from '../constants/index';
import { motion } from "framer-motion";

const Title = () => {
  return (
    <div>
      <div className="border-b ☐ border-neutral-900 pb-4 lg:mb-35">
<div className="flex flex-wrap">
<div className="w-full lg:w-1/2">
<div className="flex flex-col items-center lg:items-start">
<h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16
lg: text-8x1">
Chandra Mahesh
</h1>
<span className="bg-gradient-to-r from-pink-300 ☐ via-slate-500
to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
Aspiring Frontend Developer
</span>
<p className="my-2 max-w-xl py-6 font-light tracking-tighter">
{TITLE_CONTENT}
</p>
</div>
</div>
<div className="w-full lg:w-1/2 lg:p-8">
<div className="flex justify-center">
<img className="brightness-75 h-96  rounded-3xl object-fill" src={profilePic} alt="Kevin Rush"/>
</div>
</div>
</div>
</div>
    </div>
  )
};

export default Title