import React, { useState } from 'react'
import { MapContainer, TileLayer, useMap,Marker,Popup } from 'react-leaflet'
import emailjs from 'emailjs-com'
export const Contact = () => {

    const position = [-1.9134189568469118, 30.044717809847754]

    const [email, setEmail] = useState("")
    const [message,setMessage] = useState("")
    const [name,setName] = useState("")

    const sendMail = (e) => {
        e.preventDefault()
        console.log("ssssssss")
        emailjs.send(
            "service_mjdt91g",
            "template_m2h9jgg",
            {
                from_name: name,
                email: email,
                message: message,
            },
            "mzp79RR93zKnhxXEh"
        ).then((response) => {
            if(response) alert("Message sent successfully")
        }).catch((err)=>{
            console.log(err)
            alert("Error sending message")
        })
        
        
    }

  return (
    <div className='px-[100px]'>
        <header><h1 className='text-[#929C9F] text-lg text-center'>Contact me</h1></header>

        <div className="flex contact flex-wrap gap-12 justify-center">
            <div className="flex flex-col gap-4 pt-24 px-6">
                <div className="flex gap-3 items-center">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5583 5.83342C18.6979 6.05574 19.7451 6.61305 20.5661 7.43401C21.387 8.25496 21.9443 9.30222 22.1667 10.4417M17.5583 1.16675C19.9258 1.42976 22.1335 2.48995 23.819 4.17326C25.5044 5.85656 26.5673 8.06293 26.8333 10.4301M25.6667 19.7401V23.2401C25.668 23.565 25.6014 23.8866 25.4713 24.1843C25.3411 24.482 25.1502 24.7493 24.9108 24.9689C24.6713 25.1886 24.3887 25.3558 24.0809 25.4599C23.7731 25.564 23.4469 25.6027 23.1233 25.5734C19.5333 25.1833 16.0848 23.9566 13.055 21.9917C10.2361 20.2005 7.84623 17.8106 6.055 14.9917C4.08331 11.9482 2.85629 8.48291 2.47334 4.87675C2.44418 4.55413 2.48252 4.22897 2.58592 3.92198C2.68932 3.61498 2.8555 3.33289 3.0739 3.09364C3.29229 2.85439 3.55811 2.66324 3.85443 2.53236C4.15074 2.40147 4.47107 2.33372 4.795 2.33341H8.295C8.86119 2.32784 9.41009 2.52834 9.83939 2.89754C10.2687 3.26673 10.5491 3.77944 10.6283 4.34008C10.7761 5.46016 11.05 6.55993 11.445 7.61842C11.602 8.03599 11.6359 8.48982 11.5429 8.92611C11.4498 9.3624 11.2337 9.76288 10.92 10.0801L9.43834 11.5617C11.0992 14.4826 13.5175 16.9009 16.4383 18.5617L17.92 17.0801C18.2372 16.7664 18.6377 16.5502 19.074 16.4572C19.5103 16.3641 19.9641 16.3981 20.3817 16.5551C21.4402 16.9501 22.5399 17.224 23.66 17.3717C24.2267 17.4517 24.7443 17.7372 25.1143 18.1738C25.4843 18.6105 25.6809 19.1679 25.6667 19.7401Z" stroke="#929C9F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p className='text-[#929C9F]'>+250788401749</p>
                </div>
                <div className="flex gap-3 items-center">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.66665 4.66675H23.3333C24.6166 4.66675 25.6666 5.71675 25.6666 7.00008V21.0001C25.6666 22.2834 24.6166 23.3334 23.3333 23.3334H4.66665C3.38331 23.3334 2.33331 22.2834 2.33331 21.0001V7.00008C2.33331 5.71675 3.38331 4.66675 4.66665 4.66675Z" stroke="#929C9F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M25.6666 7L14 15.1667L2.33331 7" stroke="#929C9F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p className='text-[#929C9F]'>codesvalentin@gmail.com</p>
                </div>
                <div className="flex gap-3 items-center">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26.25 12.5C26.25 21.25 15 28.75 15 28.75C15 28.75 3.75 21.25 3.75 12.5C3.75 9.51631 4.93526 6.65483 7.04505 4.54505C9.15483 2.43526 12.0163 1.25 15 1.25C17.9837 1.25 20.8452 2.43526 22.955 4.54505C25.0647 6.65483 26.25 9.51631 26.25 12.5Z" stroke="#929C9F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15 16.25C17.0711 16.25 18.75 14.5711 18.75 12.5C18.75 10.4289 17.0711 8.75 15 8.75C12.9289 8.75 11.25 10.4289 11.25 12.5C11.25 14.5711 12.9289 16.25 15 16.25Z" stroke="#929C9F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p className='text-[#929C9F]'>KG 234st, Kigali, Rwanda</p>
                </div>
            </div>
            <div className="pt-24 w-[500px]">
                <form onSubmit={sendMail} className='contacForm' action="#">
                    <input value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name: e.g josh doe' className="border block w-full border-opacity-10 border-[#929C9F]  p-3 bg-white backdrop-blur-md bg-opacity-5 rounded-xl outline-none focus:border-cyan-500 focus:border-opacity-30 text-[#929C9F] text-md"/>
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email: e.g josh@doe.com' className="border mt-2  block w-full border-opacity-10 border-[#929C9F]  p-3 bg-white backdrop-blur-md bg-opacity-5 rounded-xl outline-none focus:border-cyan-500 focus:border-opacity-30 text-[#929C9F] text-md"/>
                    <textarea value={message} onChange={(e)=>setMessage(e.target.value)} placeholder='Write Message' className="border h-[230px] w-full block resize-y mt-2 border-opacity-10 border-[#929C9F]  p-4 bg-white backdrop-blur-md bg-opacity-5 rounded-xl outline-none focus:border-cyan-500 focus:border-opacity-30 text-[#929C9F] text-md"/>
                    <button type='submit' className="bg-cyan-500 p-2 font-medium text-gray-800 w-full rounded-lg shadow-2xl mt-2">Send Message</button>
                </form>
            </div>
            <div className="">
                {/* <MapContainer style={{width:"300px", height:"300px"}} center={position} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                    </Marker>
                </MapContainer> */}
            </div>
        </div>
    </div>
  )
}
