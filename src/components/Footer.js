import React from 'react'
import './Footer.css'
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='color-border-muted'>
        <div className='footer-links'>
          <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
              <Link to='/'>Home</Link>
              <Link to='/Roulette'>Roulette</Link>
              <Link to='/Craps'>Craps</Link>
              <Link to='/BlackJack'>Blackjack</Link>
              <Link to='/Baccarat'>Baccarat</Link>
            </div>
          </div>
        </div>
      </div>
        <h1>2022 StratSim. Site Created by John Huber</h1>
    </div>
  )
}
