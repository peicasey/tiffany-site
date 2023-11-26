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
      <div className="mb-4 text-black dark:text-white">
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
      <iframe src="https://drive.google.com/file/d/1ftjgwtEejwKk3NVNTiOyEWj78l0ll13g/preview" width="640" height="850" allow="autoplay" onLoad={() => setIsLoading(false)} />
      <p className='mt-4 text-black dark:text-white'>
        Last updated: 
        <span className='text-indigo-300 hover:text-purple-400'> 
          <b className={monsterrat700.className}> 11/25/2023</b>
        </span>
      </p>
    </div>
  );
}
