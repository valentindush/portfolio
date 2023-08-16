import React from 'react'
import img from '../../assets/eleeh.png'
import kotlinImg from '../../assets/kotlin.png'
import ReactImg from '../../assets/react.png'
import unityImg from '../../assets/unity.png'
import pythonImg from '../../assets/R.png'
import kaliLogo from '../../assets/kali.png'
import pop from '../../assets/pop.jpg'
import logo from '../../assets/logo.svg'



const details = {
  name: "Valentin Dushime",
  nickname: "Dush",
  title: "Software Engineer & Starter Machine Learning Engineer",
  dob: new Date("2006-05-23"),
  nationality: "Rwandan"
}

export const About = () => {
  return (
    <div className='border p-4 rounded-xl mt-6'>
      <header>
        <h2 className='font-semibold text-xl'>About myself</h2>
      </header>
      <div className="mt-2 flex gap-3 md:flex-col ">
        <img className='rounded-xl w-[20rem] h-[10rem] object-cover md:w-full md:h-[20rem]' src="/img/me.jpg" alt="" />
        <p className='text-gray-800 font-light'>
        I am a full stack web developer with over 4 years of experience, adept in designing and maintaining
        web applications. Proficient in front-end (HTML, CSS, JS, frameworks) and back-end (Java, Python,
        Node.js, databases) web development, I can create visually appealing, responsive, and secure web
        apps with seamless user experience. Skilled in software development best practices and cloud
        infrastructure, I can debug, optimize and deploy web apps. I am passionate about creating high
        quality, user-friendly web applications that exceed customer expectations.
        </p>
      </div>

      <header className='mt-6'>
        <h2 className='font-semibold text-lg'>Details</h2>

        <div className="flex flex-col gap-1">
          <div className="text-sm font-medium">Name: {details.name}</div>
          <div className="text-sm font-medium">Nickname: {details.nickname}</div>
          <div className="text-sm font-medium">title: {details.title}</div>
          <div className="text-sm font-medium">DOB: {details.dob.toLocaleDateString('en-US')}</div>
          <div className="text-sm font-medium">Nationality: {details.nationality}</div>
        </div>
      </header>
    </div>
  )
}
