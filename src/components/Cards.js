import React from 'react';
import CardItems from './CardItems';
import './Cards.css';

function Cards() {
    return (
      <div className='cards'>
        <div className='cards-intro'>
            <h1>
                Welcome to StratSim! Here you can explore and improve your betting strategies
                for some of the most popular casino table games. While gambling is not guaranteed, a good 
                strategy could allow you to maximize your opportunity in the short term. Our simulation 
                tools can help you learn the ins and outs of Roulette, Craps, Blackjack, and Baccarat 
                and develop a winning strategy. Whether you are a seasoned gambler or a newcomer to 
                the world of table games, our realistic simulations will provide a safe and
                fun environment to try out different betting systems and see how they perform. Stick
                around and start practicing today!
            </h1>
        </div>
        <h1>Check out these classic table games:</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItems
                src='roulettewheel.jpg'
                text='Take a chance on Roulette and see where the ball lands'
                label='Learn More'
                path='/Roulette'
              />
              <CardItems
                src='craps12.png'
                text='Roll the dice and try out Craps'
                label='Learn More'
                path='/Craps'
              />
              <CardItems
                src='bj2.png'
                text='Double down and give Blackjack a hit'
                label='Learn More'
                path='/BlackJack'
              />
              <CardItems
                src='bac8.png'
                text='Be the banker or player in Baccarat'
                label='Learn More'
                path='/Baccarat'
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  export default Cards;