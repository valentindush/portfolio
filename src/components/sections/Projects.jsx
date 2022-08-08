import React from 'react'
import rest from '../../assets/projects/1k.png'
import salenix from '../../assets/projects/salenix.png'
import dush from '../../assets/projects/dush.png'
import tasker from '../../assets/projects/tasker.png'

export const Projects = () => {


    const projects = [
        {
            name: "Taker",
            desc: "A task management app",
            img: tasker,
            url: "http://tasker-frontend.vercel.app/",
            sourceCode: "https://github.com/valentindush/tasker-frontend"
        },
        {
            name: "Salenix",
            desc: "An online trading platform for both business owners and their clients",
            img: salenix,
            url: "https://salenix.vercel.app/",
            sourceCode: "#"
        },
        {
            name: "Viigram",
            desc: "A simple instagram clone app",
            img: "",
            url: "https://viigram.vercel.app/",
            sourceCode: "https://github.com/valentindush/viiiGram"
        },
        {
            name: "Dush Forms",
            desc: "A web form builder similar to popular google forms",
            img: "",
            url: "https://dush-forms.vercel.app/",
            sourceCode:"https://github.com/valentindush/dush-forms"

        },
        {
            name: "DUSH",
            desc: "A UX design for a social network app",
            img: dush,
            url: "https://dush.vercel.app/",
            sourceCode: "#"
        },
        {
            name: "Tesla App",
            desc: "A neuromorphic UX design of a Tesla App",
            img: "",
            url: "https://tesla-app.vercel.app/",
            sourceCode: "#"
        },
        {
            name: "1k restaurant",
            desc: "An application for food and drinks delivery",
            img: rest,
            url: "https://1k-restaurant.vercel.app/",
            sourceCode: "https://github.com/back-ticks/1k-restaurant"
        },
    ]

  return (
    <div className='pl-[120px] pr-[90px]'>
        <h2 className="text-xl  text-center text-[#929C9F]">Projects I’ve worked on so far👌😉! </h2>
        <div className="flex justify-center gap-4 pt-6 flex-wrap">
            {projects.map((project,index)=>{
                return (
                    <a href={project.url} key={index} className="border relative pb-5 w-[250px] min-w-[250px] cursor-pointer h-[250px] border-opacity-10 border-[#929C9F] p-2 bg-white backdrop-blur-md bg-opacity-5 hover:bg-opacity-10 transition duration-200 rounded-xl">
                        <img src={project.img} className="w-full rounded-lg h-[70%] object-cover" alt="" />
                        <p className='text-center mt-1 text-gray-300 font-medium text-lg'>{project.name}</p>
                        <p className='text-center  text-gray-300'>{project.desc}</p>

                        <a href={project.sourceCode} className='absolute top-2 right-2 p-2 bg-white rounded-full bg-opacity-50 backdrop-brightness-20 backdrop-blur-md hover:scale-105 transition'>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_61_43)">
                                    <path d="M9 18.9999C4 20.4999 4 16.4999 2 15.9999M16 21.9999V18.1299C16.0375 17.6531 15.9731 17.1737 15.811 16.7237C15.6489 16.2737 15.3929 15.8634 15.06 15.5199C18.2 15.1699 21.5 13.9799 21.5 8.51994C21.4997 7.12376 20.9627 5.78114 20 4.76994C20.4559 3.54844 20.4236 2.19829 19.91 0.999938C19.91 0.999938 18.73 0.649938 16 2.47994C13.708 1.85876 11.292 1.85876 9 2.47994C6.27 0.649938 5.09 0.999938 5.09 0.999938C4.57638 2.19829 4.54414 3.54844 5 4.76994C4.03013 5.78864 3.49252 7.1434 3.5 8.54994C3.5 13.9699 6.8 15.1599 9.94 15.5499C9.611 15.8899 9.35726 16.2953 9.19531 16.7399C9.03335 17.1844 8.96681 17.658 9 18.1299V21.9999" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_61_43">
                                        <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </a>
                )
            })}
        </div>
        <p className='text-[#929C9F]'>For more projects check out my GITHUB </p>
    </div>
  )
}
