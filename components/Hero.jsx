import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'


const Hero = () => {
  return (
    <div className='flex flex-col justify-center items-start sm:items-center h-[650px] gap-6 bg-background pt-16'>
        <div className='flex flex-col sm:items-center gap-6'>
            <h1 className='text-5xl lg:text-6xl'>Welcome to DevPress</h1>
            <h4 className='sm:text-center'>Write. Share. Connect. Markdown Blogging for Developers</h4>
        </div>

        <nav>
            <ul className='flex flex-col items-start sm:items-center gap-4'>
                <li>
                    <Link href='/signup'>
                        <Button size='lg'>Join Our Community</Button>
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Hero