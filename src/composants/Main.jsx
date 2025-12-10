import React from 'react'
import Hero from './Hero';



const Main = () => {
  return (
    <div className='px-[5%] py-[10%] md:px-[10%]'>
       <Hero></Hero>
        
        <button className='block mx-auto mt-10 text-white/90 border border-white/20 py-2 px-3 rounded-full hover:bg-white/10 transition animate-bounce'>
             <svg className="w-6 h-6 text-white ..." xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down-icon lucide-arrow-down"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
        </button>
        
            
    </div>
  )
}

export default Main
