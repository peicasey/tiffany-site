"use client"

// fonts
import { monsterrat400, monsterrat700 } from '../fonts' 

import SubstackFeed from '@/components/subStackFeed';

export default function Page() {
  return (
    <div className='flex flex-col gap-8 w-full min-h-[50vh] '>
      <p className='text-indigo-950 dark:text-white ' 
        style={monsterrat400.style}
      >
        I&apos;ve set up 
        a <a 
          style={monsterrat700.style}
          className='text-indigo-400 dark:text-indigo-300 hover:text-purple-400'
          href="https://peiytiffany.substack.com/" target="_blank" rel="noopener noreferrer"
        >
          substack
        </a> to make write out my thoughts on certain
        topics. I&apos;m still figuring it out but let me cook :P
      </p>
      <div className='rounded-xl overflow-hidden border-[#37314a] hover:border-indigo-300 border-[1px] duration-200'>
        <SubstackFeed />
      </div>
    </div>
  )
}