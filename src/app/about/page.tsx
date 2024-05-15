import Image from 'next/image'

// images
import Tiff from '../../assets/tiffany.png'
import star from '../../assets/star.svg'

// fonts
import { monsterrat400, monsterrat700 } from '../fonts' 

// icons
import { PiGraduationCapBold } from 'react-icons/pi' 
import { BiDna } from 'react-icons/bi'
import { AiOutlineLineChart, AiOutlineLaptop } from 'react-icons/ai'
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
          className='text-indigo-400 dark:text-indigo-300 hover:text-purple-400'
        >
          <b className={monsterrat700.className}> Texas A&M Health Science Center</b>
        </a>
      </p>,
    icon: <div className='sm:text-lg text-sm'><BiDna /></div>
  },
  {
    text: 
      <p>
        Leading as the President of 
        <a href='https://winetowatertamu.wixsite.com/website' 
          target="_blank" rel="noopener noreferrer" 
          className='text-indigo-400 dark:text-indigo-300 hover:text-purple-400'
        >
          <b className={monsterrat700.className}> Wine to Water</b>
        </a>
      </p>,
    icon: <div className='text-sm sm:text-xl'><MdOutlineHandshake /></div>
  },
  {
    text: 
      <p>
        Discussing health disparities at the
        <a href='https://www.linkedin.com/company/tamu-eso/' 
          target="_blank" rel="noopener noreferrer" 
          className='text-indigo-400 dark:text-indigo-300 hover:text-purple-400'
        >
          <b className={monsterrat700.className}> Epidemiology Student Organization</b>
        </a>
      </p>,
    icon: <div className='text-md sm:text-xl'><BsPeople /></div>
  },  
  {
    text: 
      <p>
        Fiddling with AI Chatbots at the
        <a href='https://aggiecodingclub.com' 
          target="_blank" rel="noopener noreferrer" 
          className='text-indigo-400 dark:text-indigo-300 hover:text-purple-400'
        >
          <b className={monsterrat700.className}> Aggie Coding Club</b>
        </a>
      </p>,
    icon: <div className='text-md sm:text-xl'><AiOutlineLaptop /></div>
  },
  {
    text: 
      <p>
        Predicting salary outcomes of students at the
        <a href='https://www.aggiedatascience.com/' 
          target="_blank" rel="noopener noreferrer" 
          className='text-indigo-400 dark:text-indigo-300 hover:text-purple-400'
        >
          <b className={monsterrat700.className}> Aggie Data Science Club</b>
        </a>
      </p>,
    icon: <div className='text-lg sm:text-2xl'><AiOutlineLineChart /></div>
  },
]


export default function Page() {
    return (
      <div className={ monsterrat400.className }>
        <div className='flex flex-col lg:flex-row lg:gap-16 items-center lg:items-start'>
          <div className='flex flex-col items-center lg:flex-grow'>
            <Image
              src={Tiff}
              alt="A simplistic illustration of Tiffany Pei"
              className="w-1/2 sm:w-50 min-w-[200px] h-auto rounded-[50%] lg:mx-6"
              priority
            />
            <div className='mt-2 mb-4 text-indigo-400 dark:text-indigo-300 flex gap-2 items-center lg:text-xs'>
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
              <Image
                src={star}
                alt="star"
                className=""
                width={12}
                height={12}
                priority
              />
              <p className={monsterrat700.className}>
                FRN
              </p>
            </div>
          </div>
          
          <div className='text-indigo-950 dark:text-white text-sm sm:text-md'>
            <div className='flex flex-wrap gap-x-2'>
              <p className='mb-4'>
                Hi, I&apos;m Tiffany, a student in my 3rd year of the
                <a href='https://public-health.tamu.edu/degrees/dual/bs-mph.html#tab-panel-2' 
                  target="_blank" rel="noopener noreferrer" 
                  className='text-indigo-400 dark:text-indigo-300 hover:text-purple-400'
                >
                  <b className={monsterrat700.className}> 3+2 Master&apos;s program </b>
                </a>
                at Texas A&M University. Here, I&apos;m obtaining my
                <a href='https://public-health.tamu.edu/index.html' 
                  target="_blank" rel="noopener noreferrer" 
                  className='text-indigo-400 dark:text-indigo-300 hover:text-purple-400'
                >
                  <b className={monsterrat700.className}> Bachelor&apos;s and Master&apos;s in Public Health (BSPH + MPH) </b>
                </a>
                with a minor in 
                <a href='https://engineering.tamu.edu/cse/index.html' 
                  target="_blank" rel="noopener noreferrer" 
                  className='text-indigo-400 dark:text-indigo-300 hover:text-purple-400'
                >
                  <b className={monsterrat700.className}> Computer Science</b>
                </a>
                !
              </p>
              
              <p className='mb-4'>  
                I aspire to make the world better using epidemiology and biostats, 
                and am specifically interested in accessibility,
                infectious disease and maternal health. 
                <span aria-hidden='true'>  (ง •̀ω•́)ง✧</span>
              </p>

              <p className='mb-4'>
                When I&apos;m not testing a new recipe in the community kitchen or 
                learning about niche health insurance policy --
                you&apos;ll find me scrolling away on Tumblr, listening to the Deathnote 
                Musical, or re-watching
                <a href='https://www.youtube.com/technoblade' 
                  target="_blank" rel="noopener noreferrer" 
                  className='text-indigo-400 dark:text-indigo-300 hover:text-purple-400'
                >
                  <b className={monsterrat700.className}> Technoblade </b>
                </a>
                streams late into the night. Thanks for visiting my page
                and I hope this gives a better idea of who I am!
              </p>
            </div>
            
            
            <p className={monsterrat700.className}>
              Currently I am:
            </p>
            <ul className='list-none ml-4 translate-x-[-1rem]'>
              {currently.map((activity, index) => (

              <li key={index} className='my-4'>
                <div className='inline-flex items-baseline sm:items-center gap-2 text-sm sm:text-md'>
                  <div className='translate-y-0.5'>{activity.icon}</div>
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