import React from 'react'
import { GrGroup } from 'react-icons/gr'
import { IoCreateOutline } from 'react-icons/io5'
import { BsChatRightQuote } from 'react-icons/bs'
import AboutCard from './cards/AboutCard'

const abouts = [
    {
        icon: <IoCreateOutline />,
        title: 'Build Your Blog',
        description: 'Craft your own blog posts using markdown language, allowing developers to create and personalize their digital spaces.',
    },
    {
        icon: <GrGroup />,
        title: 'Community',
        description: 'Forge connections with fellow developers, share insights, collaborate on projects, and build a supportive community of like-minded individuals.',
    },
    {
        icon: <BsChatRightQuote />,
        title: 'The Mission',
        description: 'Our mission is to cultivate a thriving developer community by facilitating connections, knowledge-sharing, and access to resources.',
    }
]


const About = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-44 max-w-6xl'>
        { abouts.map((about, index) => (
            <div key={about.index}>
                <AboutCard icon={about.icon} title={about.title} description={about.description}/>
            </div>

        ))}
    </div>
  )
}

export default About