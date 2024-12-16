import Feed from '@components/Feed'
import React from 'react'

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
        <h1 className='head_text text-center'>Discover & Share
        <br />
        <span className='orange_gradient'>AI-Powered Prompts</span>
        </h1>
        <p className='desc text-center'>
            Open-source AI Prompting tool
        </p>
        {/* Feed Component  */}
        <Feed />
    </section>
  )
}

export default Home
