import React from 'react'
import heroVideo from '../assets/videos/RM_Hero.mp4'
import './assets/hero.css'

function Hero() {
  return (
    <div className="hero__container">
      <video className="hero__video" autoPlay loop muted playsInline>
        <source src={heroVideo} type="video/mp4"/>
        Tu navegador no soporta videos en HTML5
      </video>
    </div>
  )
}

export default Hero
