import React from 'react'
import EffetAnnime from './effet/TextAnnime'
import RotateAnnime from './effet/RotateAnnime'


const Hero = () => {
  return (

        <div className=' max-w-6xl  '>
        <div className=" flex items-center max-md:justify-center ">
                <h1 className="text-4xl md:text-7xl font-extrabold text-center 
                bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 
                bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                Diene Thiam
            </h1>
        </div>
            <RotateAnnime
            lines={["Développeur Frontend", "Graphiste", "Monteur Video"]}
            speed={70}
            pause={1600}
        />
            
            
        </div>
 
  
  )
}

export default Hero
