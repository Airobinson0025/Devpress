import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { ModeToggle } from '../ModeToggle'
import { GiHamburgerMenu } from 'react-icons/gi'


const Navbar = () => {
  return (
    <nav className='flex items-center justify-between fixed w-full p-3'>
        <div className='flex gap-3 items-center'>
            <Link href='/'>
                <h3>DevPress</h3>
            </Link>
            <ModeToggle />
        </div>

        {/* <div className='hidden lg:flex items-center gap-8'>
            <ul className='flex items-center gap-5 font-medium'>
                <li className='hover:text-primary hover:scale-105 transition duration-200'>
                    <Link href='/'>Home</Link>
                </li>
                <li className='hover:text-primary hover:scale-105 transition duration-200'>
                    <Link href='/explore'>Explore</Link>
                </li>
            </ul>
            <Button>Sign Up</Button>
        </div> */}

        <div className='hidden lg:inline'>
            <ul>
                <li>
                    <Link href='/signup'>
                        <Button>Sign Up</Button>
                    </Link>
                </li>
            </ul>
        </div>

        <div className='lg:hidden text-3xl'>
            <GiHamburgerMenu className='cursor-pointer'/>
        </div>
    </nav>
  )
}

export default Navbar