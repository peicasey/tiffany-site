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
      <div className="mb-4 text-indigo-700 dark:text-indigo-300">
        { isLoading ? 
          <div className='flex gap-2 items-center'>
            <p>Retrieving resume...</p>
            <AiOutlineLoading3Quarters className="animate-spin"/>

          </div>
          : 
          <div className='flex gap-2'>
            <p>Huzzah! Here it is</p>
            <p aria-hidden="true">\( ﾟヮﾟ)/</p>
          </div>
        }
      </div>
      <iframe src="https://drive.google.com/file/d/1ftjgwtEejwKk3NVNTiOyEWj78l0ll13g/preview" width="640" height="850" allow="autoplay" onLoad={() => setIsLoading(false)} />
    </div>
  );
}
