import React from 'react'
import NavBar from './NavBar.jsx'

const Header = () => {
  return (
    <div 
      className='relative min-h-screen bg-cover bg-center flex flex-col w-full overflow-hidden' 
      style={{backgroundImage:"url('/header_img.png')"}} 
      id='Header'
    >
        <NavBar />
        <div className='flex-grow flex items-center justify-center'>
          {/* Optional: Add content over the background image */}
          <div className='text-center text-white'>
            <h1 className='text-4xl md:text-6xl font-bold mb-4'>Welcome to Yiuyahegfuol</h1>
            <p className='text-xl md:text-2xl'>Shos</p>
          </div>
        </div>
    </div>
  )
}

export default Header