import React from 'react'

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
        img: ""
      },
      {
        name: "Node JS",
        img: ""
      },
      {
        name: "NEXT JS",
        img: ""
      },
      {
        name: "PHP",
        img: ""
      },
      {
        name: "HTML",
        img: "",
      },
      {
        name: "CSS",
        img: "",
      },
      {
        name: "Tailwindcss",
        img:""
      },
      {
        name: "Laravel",
        img: ""
      },
    ],
    ux: [
      {
        name: "Figma",
        img: ""
      },
      {
        name: "Photoshop",
        img: ""
      },
      {
        name: "Adobe XD",
        img: ""
      },
      {
        name: "Adobe Illustrator",
        img: ""
      },
      {
        name: "Sketch",
        img: ""
      }

    ],
    mobile: [
      {
        name: "Kotlin",
        img: "",
      },
      {
        name: "Flutter",
        img: ""
      },
      {
        name: "React Native",
        img: ""
      }
    ],
    game: [
      {
        name: "Unity",
        img: ""
      },
      {
        name: "C#",
        img: ""
      },
      {
        name: "Blender",
        img: ""
      }
    ]
  }

  return (
    <div className='pl-[100px] pr-[60px]'>

      <header>
        <h2 className="text-xl  text-center text-[#929C9F]">My coding jurney until now </h2>
      </header>
      <div className="flex gap-2 pt-6">
        <div className="border w-[40%] border-opacity-10 border-[#929C9F] p-4 bg-white backdrop-blur-md bg-opacity-5 rounded-xl">
          {journey.map((item,index)=>{

            return (
              <div className="text-[#929C9F] relative">
                <p className='text-xl font-semibold'>{item.year}</p>
                <div className=" p-2">
                  <div className="absolute w-3 h-3 rounded-full bg-[#929C9F] bottom-0 left-[4px]"></div>
                  <div className=" p-3 border-l-4 border-[#929C9F]">
                    {item.items.map((item,index)=>{
                      return (
                        <p className='text-white opacity-60'>{item}</p>
                      )})
            
                    }
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="border w-[60%] border-opacity-10 border-[#929C9F] p-4 bg-white backdrop-blur-md bg-opacity-5 rounded-xl flex flex-col justify-between">
          <div className="mt-2 p-3">
            <h2 className="text-lg text-white opacity-50 font-medium">Website development</h2>
          </div>
          <div className="mt-2 p-3">
            <h2 className="text-lg text-white opacity-50 font-medium">Website development</h2>
          </div>
          <div className="mt-2 p-3">
            <h2 className="text-lg text-white opacity-50 font-medium">Website development</h2>
          </div>
          <div className="mt-2 p-3">
            <h2 className="text-lg text-white opacity-50 font-medium">Website development</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
