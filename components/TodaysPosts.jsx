import React from 'react'
import { Skeleton } from './ui/skeleton'
import { Button } from './ui/button'

const TodaysPosts = () => {
  return (
    <div className=''>
        <div className='flex items-center justify-between'>
            <h1>Most Recent Posts</h1>
            <Button>View All</Button>
        </div>

        <div className="flex items-center space-x-4 p-6 border-2 border-secondary hover:border-primary transition duration-300 rounded-md mt-6">
            <Skeleton className="h-36 w-36 rounded-md" />
            <div>
                <h3>Title Goes Here</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptatum.</p>
            </div>
        </div>
        <div className="flex items-center space-x-4 p-6 border-2 border-secondary hover:border-primary transition duration-300 rounded-md mt-6">
            <Skeleton className="h-36 w-36 rounded-md" />
            <div>
                <h3>Title Goes Here</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptatum.</p>
            </div>
        </div>
        <div className="flex items-center space-x-4 p-6 border-2 border-secondary hover:border-primary transition duration-300 rounded-md mt-6">
            <Skeleton className="h-36 w-36 rounded-md" />
            <div className="space-y-2">
                <h3>Title Goes Here</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptatum.</p>
            </div>
        </div>
        
    </div>
  )
}

export default TodaysPosts