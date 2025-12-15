import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='flex py-5 items-center justify-between px-[5%] md:px-[10%]  '>
      <h1 className='text-xl md:text-2xl text-textColor font-bold'>Kira dev</h1>
      <div className="navLink hidden md:flex items-center  gap-10">
         <NavLink to="/" className="text-textColor hover:text-textHover" >Accueil</NavLink>
         <NavLink to="projets" className="text-textColor hover:text-textHover" >Projets</NavLink>
         <NavLink to="competences" className="text-textColor hover:text-textHover" >Competences</NavLink>
         <NavLink to="contact" className="text-textColor hover:text-textHover" >contact</NavLink>
      </div>
      <div className="nav_btn flex items-center gap-5">
        <div className="flex items-center gap-5  ">
            
          <button className="rounded-full bg-white group   hover:bg-slate-200 p-2 transition duration-700 ease-in-out">
                <svg className='text-primary group-hover:text-textHover w-7 h-5 ' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </button>

        </div>
        
       <button className=' bg-gray-900  w-10 h-10 py-2 flex md:hidden group hover:bg-neutral-200 duration-200 rounded-lg shadow-lg items-center justify-center'>
            <svg className='  h-4 w-4 text-primary group-hover:text-textHover' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-library-icon lucide-library"><path d="m16 6 4 14"/><path d="M12 6v14"/><path d="M8 8v12"/><path d="M4 4v16"/></svg>
       </button>

      </div>
      
    </nav>
  )
}

export default Header
