import React from 'react'

export const Projects = () => {


    const projects = [
        {
            name: "Taker",
            desc: "A task management app",
            img: ""
        },
        {
            name: "Salenix",
            desc: "An online trading platform for both business owners and their clients",
            img: ""
        },
        {
            name: "Viigram",
            desc: "A simple instagram clone app",
            img: ""
        },
        {
            name: "Dush Forms",
            desc: "A web form builder similar to popular google forms",
            img: ""
        },
        {
            name: "DUSH",
            desc: "A UX design for a social network app",
            img: ""
        },
        {
            name: "Tesla App",
            desc: "A neuromorphic UX design of a Tesla App",
            img: ""
        },
        {
            name: "1k restaurant",
            desc: "An application for food and drinks delivery",
            img: ""
        },
    ]

  return (
    <div className='pl-[120px] pr-[90px]'>
        <h2 className="text-xl  text-center text-[#929C9F]">Projects I’ve worked on so far👌😉! </h2>
        <div className="flex justify-center gap-4 pt-6 flex-wrap">
            {projects.map((project,index)=>{
                return (
                    <div key={index} className="border min-w-[250px] cursor-pointer h-[250px] border-opacity-10 border-[#929C9F] p-4 bg-white backdrop-blur-md bg-opacity-5 rounded-xl">
                        
                    </div>
                )
            })}
        </div>
        <p className='text-[#929C9F]'>For more projects check out my GITHUB </p>
    </div>
  )
}
