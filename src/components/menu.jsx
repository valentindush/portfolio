import { useState } from "react"



const Menu = ()=>{
    const menuItems = [
        {
            name: "About",
            to: "/about"
        },
        {
            name: "Projects",
            to: "/projects"
        },
        {
            name: "Contact",
            to: "/contact"
        }
    ]

    const [activeItem, setActiveItem] = useState("About")

    return (
        <nav className="flex gap-12 mt-10 mb-3 p-4  border rounded-xl sticky top-0 bg-white">
            {menuItems.map((item, i)=>(
                <div key={i} className="" onClick={()=>setActiveItem(item.name)}>
                    <a className={`font-medium ${activeItem.name === item.name? "text-blue-500": "text-gray-800"}`} href={item.to}>{item.name}</a>
                </div>
            ))}
        </nav>
    )
}

export default Menu