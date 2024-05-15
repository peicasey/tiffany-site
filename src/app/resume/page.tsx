"use client"; // This is a client component
import { useState } from 'react'

// https://drive.google.com/file/d/1ftjgwtEejwKk3NVNTiOyEWj78l0ll13g/view?usp=sharing

// fonts
import { monsterrat400, monsterrat700 } from '../fonts' 

// icons
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className={ monsterrat400.className }>
      <div className="mb-4 text-indigo-950 dark:text-white">
        { isLoading ? 
          <div className='flex gap-2 items-center'>
            <p>Retrieving resume...</p>
            <AiOutlineLoading3Quarters className="animate-spin"/>

          </div>
          : 
          <div className='flex gap-2'>
            <p>Huzzah! Here it is</p>
            <p aria-hidden="true">ᐠ( ᐛ )ᐟ</p>
          </div>
        }
      </div>
      <div className='rounded-2xl overflow-hidden'>
        <iframe 
          src="https://drive.google.com/file/d/1ftjgwtEejwKk3NVNTiOyEWj78l0ll13g/preview" 
          className='w-full h-[22rem] sm:h-[50rem]'
          width="640" height="850" 
          allow="autoplay" onLoad={() => setIsLoading(false)} 
        />
      </div>
      <p className='mt-4 text-indigo-950 dark:text-white'>
        Last updated: 
        <span className='text-indigo-400 dark:text-indigo-300 hover:text-purple-400'> 
          <b className={monsterrat700.className}> 05/15/2024</b>
        </span>
      </p>
    </div>
  );
}
