"use client"; // This is a client component 👈🏽

import { AnyRecord } from "dns";
import { useState, useEffect, useRef } from "react";
import { CgScrollV } from 'react-icons/cg'

interface TextItem {
    text: string
    icon: any
}

interface TextSliderProps{
    items: TextItem[],
    fontsize: number,
    scrollsize: number,
}



export default function TextSlider(props: TextSliderProps) {

    const delay = 2500;

    const [index, setIndex] = useState(0);
    const timeoutRef:any = useRef(null);
  
    function resetTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }

    useEffect(() => {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === props.items.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );
  
      return () => {
        resetTimeout();
      };
    }, [index, props.items.length]);

    function scrollNext() {
        setIndex((index+1) % props.items.length)
    }

    // overflow-hidden
    return (
        <div className="flex gap-2 items-center">
            <button className="rounded-lg py-1 text-indigo-900 bg-indigo-400
                text-xs md:text-sm sm:translate-y-[-4px] md:translate-y-0
                hover:text-indigo-300 hover:bg-indigo-500"
                onClick={scrollNext}
            >
                <CgScrollV/>
            </button>
            <div className="w-full overflow-hidden"
                style={{ height: props.fontsize + 'rem' }}
            > 
                <div
                    className="hidden md:flex flex-col no-wrap gap-2 duration-500 ease-in-out "
                    style={{ transform: `translate3d(0, ${-index * props.scrollsize}rem, 0)` }}
                >
                    {props.items.map((item, index) => (

                        <div key={index} className='flex items-center mt-1 sm:mt-0 gap-2'>
                            <div>
                                {item.text}
                            </div>
                            <div className="translate-y-[0.5px]">
                                {item.icon}
                            </div>                            
                        </div>

                    ))}
                </div>
                <div
                    className="flex flex-col no-wrap gap-2 duration-500 ease-in-out md:hidden"
                    style={{ transform: `translate3d(0, ${-index * props.fontsize}rem, 0)` }}
                >
                    {props.items.map((item, index) => (

                        <div key={index} className='flex items-center mt-[1px] sm:mt-0 gap-2'>
                            <div>
                                {item.text}
                            </div>
                            <div className="translate-y-[0.5px]">
                                {item.icon}
                            </div>                            
                        </div>

                    ))}
                </div>
            </div>
        </div>        
        
    )
}