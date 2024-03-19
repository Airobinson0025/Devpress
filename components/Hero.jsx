import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { FaGithub } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='flex flex-col justify-center items-start sm:items-center h-screen gap-6 bg-background'>
        <div className='flex flex-col sm:items-center gap-6'>
            <h1 className='text-5xl lg:text-6xl'>Welcome to DevPress</h1>
            <h3 className='sm:text-center'>Write. Share. Connect. Markdown Blogging for Developers</h3>
        </div>

        <nav>
            <ul className='flex flex-col items-start sm:items-center gap-4'>
                <li>
                    <Link href='/signup'>
                        <Button size='lg'>Sign Up</Button>
                    </Link>
                </li>
                <li>
                    <Link href='/signup'>
                        <Button size='lg' variant='secondary' className='border'>Sign In With Github <FaGithub className='text-2xl ml-2'/></Button>
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Hero