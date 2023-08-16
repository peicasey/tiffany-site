import Link from 'next/link'
import './navItem.css'

// fonts
import { monsterrat400, monsterrat700 } from '../app/fonts' 

interface NavItemProps{
  link: string;
  name: string;
}


export default function NavItem(props: NavItemProps) {

  const angle = Math.floor(Math.random() * 20) - 10;
  const test = 'translate-y-20';

  return (
    <div className="check group hover:cursor-pointer flex items-center justify-center" >

      <svg className={'absolute group-hover:opacity-100 opacity-0' } // scale-y-[0.2] scale-x-[0.3] translate-x-4 rotate-[' + angle + 'deg] ' + test
        style={{'zIndex': 0, 'transform': 'scale(0.3, 0.2) translateX(3rem) rotate(' + angle + 'deg)'}}
      >
        <g transform="matrix(0.35 0 0 0.3 110 80)">
        <path d="M -260.40554 -179.14302 C -250.52899999999997 -191.98253 -297.9364 -25.315860000000015 -281.14628 -28.03191000000001 C -264.35616 -30.74796000000001 -156.45492 -181.61216000000002 -103.36849999999998 -208.77265 C -50.282079999999986 -235.93314 -240.65245 94.43723 -250.52899 183.32612 C -260.40553 272.21501 15.643850000000015 -162.59981 59.59447000000003 -190.00721 C 103.54509000000003 -217.41461999999999 -44.35614999999997 76.90637000000004 -66.82527999999996 192.21501 C -89.29441999999996 307.52365 202.55744000000004 -163.58746000000002 256.13768000000005 -190.00721 C 309.71793 -216.42695999999998 148.97719000000006 101.84464000000003 159.34756000000004 177.40020000000004 C 169.71793000000005 252.95576000000005 284.77966000000004 48.017480000000035 284.77966000000004 48.017480000000035"
          stroke="#5566a7" fill="none" className="path" strokeWidth="3" stroke-linecap="round" 
          vector-effect="non-scaling-stroke"
        />
        </g>
      </svg>

      <div className='group-hover:text-indigo-100 text-indigo-300 duration-200' style={{'zIndex': 1}}>
        <div className={monsterrat700.className}>
          <Link href={props.link}>{props.name}</Link>
        </div>
      </div> 

    </div>
  )
}


{/* <svg className='absolute' width="200" height="50" viewBox="0 0 100 100">
    <g transform="translate(0,-972.36216)">
      <path d="m 150,980 -166,10 c -110,50 90,89 165,18 0,-36 -150,-50 -208,-10" 
        stroke="#f26f00" fill="none" className="path" stroke-width="3" 
      />
    </g>
</svg> */}