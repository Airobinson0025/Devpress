import React from 'react';
import Hero from '@/components/Hero';
import TodaysPosts from '@/components/TodaysPosts';
import About from '@/components/About';

export default function Home() {
  return (
    <main className='flex flex-col items-center px-4 md:px-14 sm:px-10'>
      <Hero />
      <About />
      <TodaysPosts />
    </main>
  );
}
