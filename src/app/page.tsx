import Image from 'next/image'
import Link from 'next/link'

// fonts
import { inter, croissant, augillion, monsterrat400, monsterrat700 } from './fonts' 

// components
import TextSlider from '@/components/textSlider'

// images
import star from './../assets/star.svg'

// icons
import { BiDna } from 'react-icons/bi'
import { AiOutlineLaptop } from 'react-icons/ai'
import { MdOutlineHandshake } from 'react-icons/md'
import { BsPeople } from 'react-icons/bs'
import { PiBowlFood } from 'react-icons/pi'

// slider items
const whoAmI = [
  {
    text: 'do biostats research',
    icon: <div className='sm:text-xl'><BiDna /></div>
  },
  {
    text: 'lead at a university nonprofit',
    icon: <div className='text-lg sm:text-2xl'><MdOutlineHandshake /></div>
  },
  {
    text: 'talk on health disparities',
    icon: <div className='text-lg sm:text-2xl'><BsPeople /></div>
  },
  {
    text: 'find trends in maternal diet',
    icon: <div className='text-lg sm:text-2xl'><PiBowlFood /></div>
  },
  {
    text: 'code new R programs',
    icon: <div className='text-lg sm:text-2xl'><AiOutlineLaptop /></div>
  },
]

export default function Home() {
  return (
    <main className="">
        <div className={augillion.className}>
          <div className='flex gap-2 md:gap-4 duration-100'>
            <h1 className='text-4xl md:text-7xl text-indigo-300 dark:text-white'>
              <a className='text-3xl leading-10 md:text-6xl'>H</a>i! <a className='text-3xl md:text-6xl'>I</a>&apos;m
            </h1>
            <span className='translate-y-[-1.5rem] md:translate-y-[-1.5rem] select-none' 
              aria-hidden="true"
            >
              <Image
                src={star}
                alt="Tiffany&apos;s Logo"
                className="scale-50 md:scale-100"
                width={38}
                height={38}
                priority
              />
            </span>
          </div>
          <div className='text-7xl md:text-9xl text-indigo-500 dark:text-lilac flex gap-2 md:gap-6 duration-100'>
            <span className='absolute translate-x-[-1rem] translate-y-[3rem]
              md:translate-x-[-1.5rem] md:translate-y-[6rem] select-none' 
              aria-hidden="true"
            >
              <Image
                src={star}
                alt="Tiffany&apos;s Logo"
                className="scale-75 md:scale-100"
                width={22}
                height={22}
                priority
              />
            </span>
            <span className='absolute translate-x-[-2.5rem] translate-y-[1rem]
              md:translate-x-[-3rem] md:translate-y-[3rem] select-none' 
            aria-hidden="true">
              <Image
                src={star}
                alt="Tiffany&apos;s Logo"
                className="scale-75 md:scale-100"
                width={32}
                height={32}
                priority
              />
            </span>
            <h1 className='translate-y-[-0.75rem] md:translate-y-0'>
              <a className='text-6xl md:text-[7rem] text-purple-400'>T</a>
              <a className='text-clementime'>i</a>
              <a className='text-amber-600'>f</a>
              <a className='text-mustard'>f</a>
              <a className='text-[4rem] sm:text-md text-indigo-300'>a</a>
              <a className='text-[4rem] sm:text-md text-magenta'>n</a>
              <a className='text-clementime'>y</a>
            </h1>
            <h1 className='translate-y-[-0.75rem] md:translate-y-0'>
              <a className='text-6xl md:text-[7rem] text-mustard'>P</a>
              <a className='text-[4rem] sm:text-md text-blurple'>e</a>
              <a className='text-[4rem] sm:text-md text-indigo-300'>i</a>
            </h1>
            <span className='translate-y-[2rem] md:translate-y-[4rem] select-none' aria-hidden="true">
              <Image
                src={star}
                alt="Tiffany&apos;s Logo"
                className="scale-75 md:scale-100" 
                width={28}
                height={28}
                priority
              />
            </span>
          </div>
        </div>
        <div className={ monsterrat400.className }>
          <div className='ml-2 md:ml-4 text-indigo-500 dark:text-indigo-200 md:text-2xl flex flex-wrap gap-x-2 md:gap-x-4'>
            <p className=''>I study public health and </p>
            <div className={ monsterrat700.className }>
              <TextSlider items={whoAmI} fontsize={2} scrollsize={2.5} />
            </div>
          </div>
        </div>
        
        
      <div className='w-full h-full'>
        
      </div>
    </main>
  )
}
