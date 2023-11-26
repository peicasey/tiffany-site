import Image from 'next/image'
import Link from 'next/link'

// fonts
import { monsterrat400, monsterrat700 } from '../app/fonts' 

// icons
import { HiOutlineExternalLink } from 'react-icons/hi'
import { FaHeart } from 'react-icons/fa'

export default function Footer() {
    return (
        <div className='w-full flex justify-between text-sm sm:text-md text-indigo-500 dark:text-indigo-300'>
            
            <div className={monsterrat700.className}>
                <p className='text-2xl sm:text-3xl'>Contact me!</p>
                <div className={monsterrat400.className}>
                    <div className='flex flex-wrap items-center gap-x-2'>
                        <p className=''>Made with</p>
                        <FaHeart className='text-violet-300' />
                        <p className=''>by Tiffany Pei & Casey Pei</p>
                    </div>            
                </div>
                
            </div>

            <div className={monsterrat400.className}>
                <div className='hover:text-purple-400 flex items-center gap-2'>
                    <a href='mailto:pei.y.tiffany@gmail.com' target="_blank" rel="noopener noreferrer">Email</a>
                    <HiOutlineExternalLink />
                </div>
                <div className='hover:text-purple-400 flex items-center gap-2'>
                    <a href='https://linkedin.com/in/pei-tiffany' target="_blank" rel="noopener noreferrer">Linkedin</a>
                    <HiOutlineExternalLink />
                </div>
                <div className='hover:text-purple-400 flex items-center gap-2'>
                    <Link href="/resume">Resume</Link>
                    <HiOutlineExternalLink />
                </div>
            </div>

        </div>
    )
  }