import React from 'react'

export const Blurred = ({pos}) => {
    const left = pos[0]
    const top = pos[1]
    console.log(left, top)
  return (
    <div className={`w-[100px] h-[100px] bg-cyan-500 blur-3xl fixed top-[${top}] left-[${left}]`}>

    </div>
  )
}
