import React from 'react'

//Importing icons

import ai from '../../assets/icons/ai.png'
import html from '../../assets/icons/html.png'
import css from '../../assets/icons/css.png'
import blender from '../../assets/icons/blender.png'
import unity from '../../assets/icons/unity.png'
import ps from '../../assets/icons/ps.png'
import figma from '../../assets/icons/figma.png'
import kotlin from '../../assets/icons/kotlin.png'
import next from '../../assets/icons/next.png'
import flutter from '../../assets/icons/flutter.png'
import react from '../../assets/icons/react.png'
import node from '../../assets/icons/node.png'
import php from '../../assets/icons/php.png'
import xd from '../../assets/icons/xd.png'
import tailwind from '../../assets/icons/tailwind.png'
import sketch from '../../assets/icons/sketch.png'
import c from '../../assets/icons/c.png'
import laravel from '../../assets/icons/laravel.png'
export const Skills = () => {


  const journey = [
    {
      year: '2022',
      items: [
        "Front-end developer - Salenix",
        "Fullstack developer  - G.O.D"
      ]
    },
    {
      year: '2021',
      items: [
        "Went to Rwanda Coding Academy",
        "Went to Rwanda Coding Academy",
        "Went to Rwanda Coding Academy",
      ]
    },
    {
      year: '2020',
      items: [
        "Learning to code (solo)",
        "Learning to code (solo)",
        "Learning to code (solo)",
      ]
    },
    {
      year: "2019",
      items: [
        "Learning to code solo"
      ]
    }
  ]

  const skills = {
    web: [
      {
        name: "react",
        img: react
      },
      {
        name: "Node JS",
        img: node
      },
      {
        name: "NEXT JS",
        img: next
      },
      {
        name: "PHP",
        img: php
      },
      {
        name: "HTML",
        img: html,
      },
      {
        name: "CSS",
        img: css,
      },
      {
        name: "Tailwindcss",
        img: tailwind
      },
      {
        name: "Laravel",
        img: laravel
      },
    ],
    ux: [
      {
        name: "Figma",
        img: figma
      },
      {
        name: "Photoshop",
        img: ps
      },
      {
        name: "Adobe XD",
        img: xd
      },
      {
        name: "Adobe Illustrator",
        img: ai
      },
      {
        name: "Sketch",
        img: sketch
      }

    ],
    mobile: [
      {
        name: "Kotlin",
        img: kotlin,
      },
      {
        name: "Flutter",
        img: flutter
      },
      {
        name: "React Native",
        img: react
      }
    ],
    game: [
      {
        name: "Unity",
        img: unity
      },
      {
        name: "C#",
        img: c
      },
      {
        name: "Blender",
        img: blender
      }
    ]
  }

  return (
    <div className='pl-[100px] pr-[60px]'>

      <header>
        <h2 className="text-xl  text-center text-[#929C9F]">My coding jurney until now </h2>
      </header>
      <div className="flex gap-2 pt-6 skills">
        <div className="fullw border w-[40%] border-opacity-10 border-[#929C9F] p-4 bg-white backdrop-blur-md bg-opacity-5 rounded-xl">
          {journey.map((item,index)=>{

            return (
              <div key={index} className="text-[#929C9F] relative">
                <p className='text-xl font-semibold'>{item.year}</p>
                <div className=" p-2">
                  <div className="absolute w-3 h-3 rounded-full bg-[#929C9F] bottom-0 left-[4px]"></div>
                  <div className=" p-3 border-l-4 border-[#929C9F]">
                    {item.items.map((item,index)=>{
                      return (
                        <p key={index} className='text-white opacity-60'>{item}</p>
                      )})
            
                    }
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="fullw border w-[60%] border-opacity-10 border-[#929C9F] p-4 bg-white backdrop-blur-md bg-opacity-5 rounded-xl flex flex-col justify-between">
          <div className="mt-2 p-3">
            <h2 className="text-lg text-white opacity-50 font-medium">Website development</h2>
            <div className="flex items-center pt-4 gap-3 flex-wrap">
              {skills.web.map((item,index)=>{
                return <img key={index} className='object-cover cursor-pointer w-16 h-16' src={item.img} title={item.name} alt="skill_icon"/>
              })}
            </div>
          </div>
          <div className="mt-2 p-3">
            <h2 className="text-lg text-white opacity-50 font-medium">UI/UX Design</h2>
            <div className="flex items-center pt-4 gap-3 flex-wrap">
              {skills.ux.map((item,index)=>{
                return <img key={index} className='object-cover cursor-pointer w-14 h-14  ' src={item.img} title={item.name} alt="skill_icon"/>
              })}
            </div>
          </div>
          <div className="mt-2 p-3">
            <h2 className="text-lg text-white opacity-50 font-medium">Mobile apps development</h2>
            <div className="flex items-center pt-4 gap-3 flex-wrap">
              {skills.mobile.map((item,index)=>{
                return <img key={index} className='object-cover cursor-pointer w-14 h-14' src={item.img} title={item.name} alt="skill_icon"/>
              })}
            </div>
          </div>
          
          <div className="mt-2 p-3">
            <h2 className="text-lg text-white opacity-50 font-medium">Game development</h2>
            <div className="flex items-center pt-4 gap-3 flex-wrap">
              {skills.game.map((item,index)=>{
                return <img key={index} className='object-cover cursor-pointer h-10 w-10' src={item.img} title={item.name} alt="skill_icon"/>
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
