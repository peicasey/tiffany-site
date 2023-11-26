import Image from 'next/image'
import Link from 'next/link'

import NavItem from './navItem'

export default function Navbar() {
    return (
        <div className='w-full flex justify-between items-center'>
            <Link className='hover:scale-110 duration-200' href="/">
                <Image
                    src="/logo.svg"
                    alt="Tiffany's Logo"
                    className=""
                    width={48}
                    height={48}
                    priority
                />
            </Link>
            <div className='flex gap-6'>
                <NavItem name="About" link="/about" />
                <NavItem name="Blog" link="/blog" />
                <NavItem name="Resume" link="/resume" />
            </div>
        </div>
    )
  }