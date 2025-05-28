import React from "react";
import HomePage from './HomePage'
import LandingPageServies from './LandingPageServices'
import LandingContact from './LandingContact'

export default function Landing() {
  return (
    <>
    <div className='bg-[url(C:\Users\ersam\OneDrive\Desktop\IEEE-hackathon\IEEE-hackathon\client\public\Hackathon-img1.jpg)] bg-center bg-cover w-full h-full'>
      <HomePage/>
    </div>
    <LandingPageServies/>
    <LandingContact/>
    </>
  )
}
