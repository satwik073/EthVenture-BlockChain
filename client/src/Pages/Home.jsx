import React from 'react'
import { Link } from 'react-router-dom'
import "../Stylesheets/fonts.css"
const Home = () => {
  return (
    <div className='w-full h-full'>
      <div className="text-white text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white items-center justify-center roboto-bold flex w-full  h-[10vh] mt-[6rem]">
        <h1 >Make The Best Projects Known</h1>
     </div>
        <p class="mt-6 md:text-lg text-slate-600  text-center max-w-3xl mx-auto dark:text-slate-400">A utility-first projects funding platform for Investing in groundbreaking <code class="font-mono font-medium text-[#1dc071] dark:text-[#1dc071] ">startups. Empower innovation, support visionary projects </code>using <code class="font-mono font-mediumtext-[#1dc071] ">Ethereum</code> and transform the world with your contributions. that can be composed to build any design, directly in your markup.</p>
    </div>
    
  )
}

export default Home