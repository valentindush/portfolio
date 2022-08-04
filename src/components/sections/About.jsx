import React from 'react'
import img from '../../assets/eleeh.png'
import kotlinImg from '../../assets/kotlin.png'
import ReactImg from '../../assets/react.png'
import unityImg from '../../assets/unity.png'
import pythonImg from '../../assets/R.png'
import kaliLogo from '../../assets/kali.png'
import pop from '../../assets/pop.jpg'

export const About = () => {
  return (
    <div className='pl-[100px]'>
      <div className="z-10">
        <div className="border mt-20 border-opacity-10 border-[#929C9F] p-4 bg-white backdrop-blur-md bg-opacity-5 rounded-xl max-w-md">
          <p className='text-[#929C9F]'>
            Hello friends, I'm
            <p className='text-xl font-bold'>Valentin Dushime</p>
            <p className='mt-3'>
              I’m a software developer, web developer , ux designer and game dev rookie.
            </p>
            <p className='mt-4 '>
              I make websites and mobile apps.  <br />
              I Iike to learn new things and I’m looking forward to work with others.
            </p>
          </p>
        </div>
        <div className="border mt-5 border-opacity-10 border-[#929C9F] p-4 bg-white backdrop-blur-md bg-opacity-5 rounded-xl max-w-md">
          <p className='text-[#929C9F]'>
            “I don’t sleep. I got an opportunity to make a dream become a reality. People often say I have so much energy, that I never stop; but that’s what it takes to accomplish your goals. If it ain’t making me money, making me better or making me happy… ain’t making time for it.” – 50 Cent
          </p>
        </div>
      </div>
      <div className="absolute right-0 top-24 -z-10">
        <div className="img max-w-lg  pr-12">
          <img src={img} alt="eleeh"/>
        </div>
          {/* KOTLIN REACT PYTON AND UNITY */}

        <div className="absolute top-0 animate-bounce shadow-lg -left-5 border border-opacity-10 w-[150px] h-[150px] border-[#929C9F] p-7 bg-white backdrop-blur-md bg-opacity-5 rounded-full">
          <img src={kotlinImg} className="w-full h-full object-cover" alt="kotlin" />
        </div>

        <div className="absolute animate-bounce shadow-lg top-24 -left-[225px] border border-opacity-10 w-[130px] h-[130px] border-[#929C9F] p-7 bg-white backdrop-blur-md bg-opacity-5 rounded-full">
          <img src={ReactImg} className="w-full h-full object-cover" alt="kotlin" />
        </div>
        <div className="absolute animate-bounce shadow-lg top-[300px] -left-[100px] border border-opacity-10 w-[100px] h-[100px] border-[#929C9F] p-7 bg-white backdrop-blur-md bg-opacity-5 rounded-full">
          <img src={unityImg} className="w-full h-full object-cover" alt="kotlin" />
        </div>



        <div className="absolute top-0 animate-ping shadow-lg -left-[400px] border border-opacity-10 w-[150px] h-[150px] border-[#929C9F] p-7 bg-white backdrop-blur-md bg-opacity-5 rounded-full">
          <img src={pythonImg} className="w-full h-full object-cover" alt="kotlin" />
        </div>

        <div className="absolute animate-ping shadow-lg top-[150px] -left-[425px] border border-opacity-10 w-[130px] h-[130px] border-[#929C9F] p-7 bg-white backdrop-blur-md bg-opacity-5 rounded-full">
          <img src={pop} className="w-full rounded-full h-full object-cover" alt="kotlin" />
        </div>
        <div className="absolute animate-ping shadow-lg top-[300px] -left-[300px] border border-opacity-10 w-[100px] h-[100px] border-[#929C9F] p-7 bg-white backdrop-blur-md bg-opacity-5 rounded-full">
          <img src={kaliLogo} className="w-full h-full object-cover" alt="kotlin" />
        </div>


      </div>
    </div>
  )
}
