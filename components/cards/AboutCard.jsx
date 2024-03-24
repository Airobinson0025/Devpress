import React from 'react'

const AboutCard = ({ icon, title, description }) => {
  return (
    <div className='flex flex-col items-center text-center'>
        <i className='text-[3rem] text-primary mb-4'>{icon}</i>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}

export default AboutCard