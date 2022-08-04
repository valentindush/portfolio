import React from 'react'

export const NavBar = () => {
  return (
    <nav className='p-3 border border-opacity-10 border-[#929C9F] py-4 bg-white backdrop-blur-md bg-opacity-5 fixed top-[32vh] left-5 rounded-full flex flex-col justify-center gap-8'>
        <a href="#about" className='stroke-[#929C9F] hover:stroke-[#05B7EF] transition ease-out hover:scale-[0.9]'>
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.25 12.75L17 2.83333L29.75 12.75V28.3333C29.75 29.0848 29.4515 29.8054 28.9201 30.3368C28.3888 30.8682 27.6681 31.1667 26.9167 31.1667H7.08333C6.33189 31.1667 5.61122 30.8682 5.07986 30.3368C4.54851 29.8054 4.25 29.0848 4.25 28.3333V12.75Z"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12.75 31.1667V17H21.25V31.1667"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
        <a href="#projects" className='stroke-[#929C9F] hover:stroke-[#05B7EF] transition ease-out hover:scale-[0.9]'>
          <svg  width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.8334 2.83333H8.50002C7.74857 2.83333 7.0279 3.13184 6.49655 3.6632C5.9652 4.19455 5.66669 4.91522 5.66669 5.66667V28.3333C5.66669 29.0848 5.9652 29.8054 6.49655 30.3368C7.0279 30.8682 7.74857 31.1667 8.50002 31.1667H25.5C26.2515 31.1667 26.9721 30.8682 27.5035 30.3368C28.0348 29.8054 28.3334 29.0848 28.3334 28.3333V11.3333L19.8334 2.83333Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M19.8333 2.83333V11.3333H28.3333"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.75 21.25H21.25"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
        <a href="#skills" className='stroke-[#929C9F] hover:stroke-[#05B7EF] transition ease-out hover:scale-[0.9]'>
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.3333 9.91667H5.66665C4.10184 9.91667 2.83331 11.1852 2.83331 12.75V26.9167C2.83331 28.4815 4.10184 29.75 5.66665 29.75H28.3333C29.8981 29.75 31.1666 28.4815 31.1666 26.9167V12.75C31.1666 11.1852 29.8981 9.91667 28.3333 9.91667Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22.6666 29.75V7.08333C22.6666 6.33189 22.3681 5.61122 21.8368 5.07986C21.3054 4.54851 20.5848 4.25 19.8333 4.25H14.1666C13.4152 4.25 12.6945 4.54851 12.1632 5.07986C11.6318 5.61122 11.3333 6.33189 11.3333 7.08333V29.75"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
        <a href="#contact" className='stroke-[#929C9F] hover:stroke-[#05B7EF] transition ease-out hover:scale-[0.9]'>
          <svg width="34" height="32" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.1667 23.97V28.22C31.1683 28.6145 31.0874 29.0051 30.9294 29.3666C30.7713 29.7281 30.5395 30.0526 30.2488 30.3193C29.958 30.586 29.6148 30.7891 29.241 30.9155C28.8673 31.0419 28.4713 31.0888 28.0783 31.0533C23.719 30.5797 19.5316 29.09 15.8525 26.7042C12.4296 24.5291 9.52755 21.6271 7.35249 18.2042C4.95829 14.5084 3.46833 10.3006 3.00332 5.92167C2.96792 5.52991 3.01448 5.13508 3.14003 4.7623C3.26558 4.38953 3.46738 4.04698 3.73257 3.75647C3.99776 3.46595 4.32054 3.23384 4.68036 3.07491C5.04017 2.91598 5.42914 2.83371 5.82249 2.83334H10.0725C10.76 2.82657 11.4265 3.07003 11.9478 3.51834C12.4691 3.96665 12.8096 4.58922 12.9058 5.27C13.0852 6.6301 13.4179 7.96553 13.8975 9.25084C14.0881 9.75789 14.1293 10.309 14.0164 10.8387C13.9034 11.3685 13.6409 11.8548 13.26 12.24L11.4608 14.0392C13.4775 17.5859 16.4141 20.5225 19.9608 22.5392L21.76 20.74C22.1452 20.3591 22.6315 20.0966 23.1612 19.9836C23.691 19.8706 24.2421 19.9119 24.7492 20.1025C26.0345 20.5821 27.3699 20.9148 28.73 21.0942C29.4182 21.1913 30.0466 21.5379 30.4959 22.0681C30.9452 22.5984 31.1839 23.2752 31.1667 23.97Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
    </nav>
  )
}
