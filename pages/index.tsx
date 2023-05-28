import Header from './Header'
import Login from './login'
import React from 'react'

export default function Home() {
  return (
    <div className="bg-[rgb(22,22,21)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0
    scrollbar-thin scrollbar-track-gray/20 scrollbar-thumb-[#F7AB0A]/80">
      <Header />
      <Login />
    </div>
  )
}
