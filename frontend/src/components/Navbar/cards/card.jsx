import { faAddressCard } from '@fortawesome/free-regular-svg-icons'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function    Card(props) {
      
  return (
  
   
        

<span className=" px-10 block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
<div className='flex justify-evenly'>
<FontAwesomeIcon icon={faAddressCard} size={"5x"} />
<div className="flex flex-col  height-full justify-evenly items-center ">
<h1 className='text-4xl font-bold'>heading</h1>
<h1 className="text-xl font-bold text-gray-700 dark:text-gray-400">10</h1>
</div>
</div>
</span>
   

        
       
        
  )
}

export default Card



{/* <div
                  classNameName="border hover:bg-[#229ED9] w-12 h-12 fill-[#229ED9] hover:fill-white border-sky-200 rounded-full flex items-center justify-center shadow-xl hover:shadow-sky-500/50 cursor-pointer"
                > */}