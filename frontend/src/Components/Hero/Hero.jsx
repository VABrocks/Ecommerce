import React from 'react'

import hand_icon from "../Assets/hand_icon.png"
import arrow_icon from "../Assets/arrow.png"
import hero_image from "../Assets/hero_image.png"
import './hero.css'
export const Hero = () => {
  return (
    <div>
        <div className="hero">
            <div className="hero-left">
                <h2>New Arrivals Only</h2>
                <div className='heroleft-cont'>
                    <div className="hand-hand-icon">
                        <p>new</p>
                        <img src={hand_icon} alt="" />
                    </div>
                    <p>collections</p>
                    <p>for everyone</p>
                </div>
            <div className="hero-latest-btn">
            <button >
            <p>Latest Collection </p>
            <img src={arrow_icon} alt="Thisis arrow icon" />
            </button>
            </div>
            </div>
        <div className="hero-right">
            <img src={hero_image} alt="" />
        </div>
        </div>
    </div>
  )
}
