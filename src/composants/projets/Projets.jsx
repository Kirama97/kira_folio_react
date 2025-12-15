import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { usekiraContext } from '../../hook/user_kira'


function Projets() {

  const { projets} = usekiraContext()

  const [filtrePojet  , setFilterProjet] = useState("All")

  const domaines = ['All', "Web", "Mobile","Wordpress"]

  

   const projetsFiltre = filtrePojet === "All" 
   ? projets 
   : projets.filter((p) => p.type === filtrePojet)



  return (
    <section className=' mt-[10%]'>
      <h1 className='max-md:mx-auto   text-center text-white shadow-xl py-2 rounded-full w-40 bg-gray-900 ' >Mes projets</h1>
          <div className="flex flex-wrap mx-auto items-center justify-center mb-10 p-4 rounded-2xl gap-4 md:gap-6 mt-10">
       {/* filtre des domaines */}
        {
          domaines.map((d, index) => (
            <button
              key={index}
              onClick={() => setFilterProjet(d)}
              className={`rounded-full text-sm font-semibold px-4 py-1.5 shadow-md transition-all duration-300 
                ${
                  filtrePojet === d ? 'bg-gradient-to-r from-indigo-600 to-purple-700 scale-105'
                  : 'bg-gray-700 hover:bg-indigo-500'
                }

                text-white cursor-pointer`}
               >
              {d}
            </button>
          ))
        }
    </div>

     {/* projets */}

     <div className="w-full  bg-neutral-700 p-5 rounded-lg ">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ">
           
           { 
             projetsFiltre.map((projet) => (
                <NavLink
                  to={`/projet/${projet.id}`}
                  key={projet.id}
                  className="relative bg-neutral-900 h-40 rounded-lg overflow-hidden
                            shadow-lg group hover:scale-105 transition-all  duration-300 group"
                >
                  {/* Image */}
                   
                   <img src={projet.image} alt="{projet.title}"  
                     className='w-full h-full object-cover group-hover:scale-105 duration-300 transition-transform'
                   />
                 
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center duration-300 transition-all justify-center ">
                     <h3 className='text-white font-semibold text-sm md:text-base'>{projet.title}</h3>
                  </div>
              
                </NavLink>

             ) )
           }
        </div>
        

     </div> 

    
      
      
    </section>
  )
}

export default Projets
