import Image from 'next/image'

// images
import Tiff from '../../assets/tiffany.png'
import star from '../../assets/star.svg'

// fonts
import { monsterrat400, monsterrat700 } from '../fonts' 

// icons
import { PiGraduationCapBold } from 'react-icons/pi' 
import { BiDna } from 'react-icons/bi'
import { AiOutlineLaptop } from 'react-icons/ai'
import { MdOutlineHandshake } from 'react-icons/md'
import { BsPeople } from 'react-icons/bs'
import { PiBowlFood } from 'react-icons/pi'

// components
import TextSwitch from '@/components/textSwitch'


// slider items
const currently = [
  {
    text: 
      <p>
        Conducting biostats research at the 
        <a href='https://ibt.tamu.edu/faculty/kurt-zhang.html' 
          target="_blank" rel="noopener noreferrer" 
          className='text-indigo-300 hover:text-purple-400'
        >
          <b className={monsterrat700.className}> Texas A&M Health Science Center</b>
        </a>
      </p>,
    icon: <div className='sm:text-lg text-sm'><BiDna /></div>
  },
  {
    text: 
      <p>
        Serving as Treasurer of 
        <a href='https://winetowatertamu.wixsite.com/website' 
          target="_blank" rel="noopener noreferrer" 
          className='text-indigo-300 hover:text-purple-400'
        >
          <b className={monsterrat700.className}> Wine to Water</b>
        </a>
      </p>,
    icon: <div className='text-sm sm:text-xl'><MdOutlineHandshake /></div>
  },
  {
    text: 'talk on health disparities',
    icon: <div className='text-md sm:text-xl'><BsPeople /></div>
  },
  {
    text: 'find trends in maternal diet',
    icon: <div className='text-md sm:text-xl'><PiBowlFood /></div>
  },
  {
    text: 'code new R programs',
    icon: <div className='text-md sm:text-xl'><AiOutlineLaptop /></div>
  },
]


export default function Page() {
    return (
      <div className={ monsterrat400.className }>
       <div className='flex flex-col items-center'>
          <Image
            src={Tiff}
            alt="A simplistic illustration of Tiffany Pei"
            className="rounded-[50%]"
            width={248}
            height={248}
            priority
          />
          <div className='mt-2 mb-4 text-indigo-700 dark:text-indigo-300 flex gap-2'>
            <p className={monsterrat700.className}>
              she/her
            </p>
            <Image
              src={star}
              alt="star"
              className=""
              width={12}
              height={12}
              priority
            />
            <p className={monsterrat700.className}>
              中文
            </p>
            <Image
              src={star}
              alt="star"
              className=""
              width={12}
              height={12}
              priority
            />
            <p className={monsterrat700.className}>
              ENG
            </p>
          </div>
          
          <div className='text-black dark:text-white'>
            <div className='flex flex-wrap gap-x-2'>
              <p className='mb-4'>
                Hi, I'm Tiffany, a student in my 3rd year of the
                <a href='https://public-health.tamu.edu/degrees/dual/bs-mph.html#tab-panel-2' 
                  target="_blank" rel="noopener noreferrer" 
                  className='text-indigo-300 hover:text-purple-400'
                >
                  <b className={monsterrat700.className}> 3+2 Master's program </b>
                </a>
                at Texas A&M University. Here, I'm obtaining my
                <a href='https://public-health.tamu.edu/index.html' 
                  target="_blank" rel="noopener noreferrer" 
                  className='text-indigo-300 hover:text-purple-400'
                >
                  <b className={monsterrat700.className}> Bachelor's and Master's in Public Health (BSPH + MPH) </b>
                </a>
                with a minor in 
                <a href='https://engineering.tamu.edu/cse/index.html' 
                  target="_blank" rel="noopener noreferrer" 
                  className='text-indigo-300 hover:text-purple-400'
                >
                  <b className={monsterrat700.className}> Computer Science</b>
                </a>
                !
              </p>
              
              <p className='mb-4'>  
                I aspire to make the world better using epidemiology and biostats, 
                and am specifically interested in accessibility,
                infectious disease and maternal health. 
              </p>

              <p className='mb-4'>
                When I'm not testing a new recipe in the community kitchen or 
                learning about niche health insurance policy,
                you'll find me scrolling away on Tumblr, listening to
              </p>
            </div>
            
            
            <p className={monsterrat700.className}>
              Currently:
            </p>
            <ul className='list-disc ml-4'>
              {currently.map((activity, index) => (

              <li key={index}>
                <div className='inline-flex items-center gap-2'>
                  {activity.icon}
                  {activity.text}                   
                </div>
              </li>

              ))}
            
            </ul>
          </div>
          

        </div>
      </div>
      
    )
  }