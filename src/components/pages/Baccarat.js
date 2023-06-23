import { Footer } from "../Footer";
import '../Roulette.css';
import React from 'react';
import { useState } from 'react';

export default function Baccarat() {

    const cardImages = {
        'Ace of Clubs': 'Ace of Clubs.png',
        'Two of Clubs': 'Two of Clubs.png',
        'Three of Clubs': 'Three of Clubs.png',
        'Four of Clubs': 'Four of Clubs.png',
        'Five of Clubs': 'Five of Clubs.png',
        'Six of Clubs': 'Six of Clubs.png',
        'Seven of Clubs': 'Seven of Clubs.png',
        'Eight of Clubs': 'Eight of Clubs.png',
        'Nine of Clubs': 'Nine of Clubs.png',
        'Ten of Clubs': 'Ten of Clubs.png',
        'Jack of Clubs': 'Jack of Clubs.png',
        'Queen of Clubs': 'Queen of Clubs.png',
        'King of Clubs': 'King of Clubs.png',
        'Ace of Spades': 'Ace of Spades.png',
        'Two of Spades': 'Two of Spades.png',
        'Three of Spades': 'Three of Spades.png',
        'Four of Spades': 'Four of Spades.png',
        'Five of Spades': 'Five of Spades.png',
        'Six of Spades': 'Six of Spades.png',
        'Seven of Spades': 'Seven of Spades.png',
        'Eight of Spades': 'Eight of Spades.png',
        'Nine of Spades': 'Nine of Spades.png',
        'Ten of Spades': 'Ten of Spades.png',
        'Jack of Spades': 'Jack of Spades.png',
        'Queen of Spades': 'Queen of Spades.png',
        'King of Spades': 'King of Spades.png',
        'Ace of Hearts': 'Ace of Hearts.png',
        'Two of Hearts': 'Two of Hearts.png',
        'Three of Hearts': 'Three of Hearts.png',
        'Four of Hearts': 'Four of Hearts.png',
        'Five of Hearts': 'Five of Hearts.png',
        'Six of Hearts': 'Six of Hearts.png',
        'Seven of Hearts': 'Seven of Hearts.png',
        'Eight of Hearts': 'Eight of Hearts.png',
        'Nine of Hearts': 'Nine of Hearts.png',
        'Ten of Hearts': 'Ten of Hearts.png',
        'Jack of Hearts': 'Jack of Hearts.png',
        'Queen of Hearts': 'Queen of Hearts.png',
        'King of Hearts': 'King of Hearts.png',
        'Ace of Diamonds': 'Ace of Diamonds.png',
        'Two of Diamonds': 'Two of Diamonds.png',
        'Three of Diamonds': 'Three of Diamonds.png',
        'Four of Diamonds': 'Four of Diamonds.png',
        'Five of Diamonds': 'Five of Diamonds.png',
        'Six of Diamonds': 'Six of Diamonds.png',
        'Seven of Diamonds': 'Seven of Diamonds.png',
        'Eight of Diamonds': 'Eight of Diamonds.png',
        'Nine of Diamonds': 'Nine of Diamonds.png',
        'Ten of Diamonds': 'Ten of Diamonds.png',
        'Jack of Diamonds': 'Jack of Diamonds.png',
        'Queen of Diamonds': 'Queen of Diamonds.png',
        'King of Diamonds': 'King of Diamonds.png'
    };

    const [value, setValue] = useState('');
    const [playerInfo, setPlayerInfo] = useState('');
    const [bankerInfo, setBankerInfo] = useState('');
    const [resultInfo, setResultInfo] = useState('');
    const [profitInfo, setProfitInfo] = useState('');
    const [playerHand, setPlayerHand] = useState([]);
    const [bankHand, setBankHand] = useState([]);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleFormSubmit = (event, buttonValue, bet) => {
        event.preventDefault();
        if (buttonValue === 'Player') {
            baccaratHand('Player', bet);
        } else if (buttonValue === 'Tie') {
            baccaratHand('Tie', bet);
        } else if (buttonValue === 'Bank') {
            baccaratHand('Bank', bet);
        }
    };

    const baccaratHand = (buttonValue, bet) => {

        let shoe = [];
        let cardvalues = [];
        let cards = [];
        let cardpos = 0;
        let cardrank = 0;
        let cardsuit = '';

        for (let i = 1; i <= (52 * 8); i++) {
            shoe.push(Number(i));
        }

        for (let j = 0; j < 6; j++) {
            let cardidx = Math.floor(Math.random() * (52 * 8));

            shoe[cardidx] = 0;

            if (cardidx < 52) {
                cardpos = cardidx + 1;
            } else if (cardidx < (52 * 2)) {
                cardpos = (cardidx - 52) + 1;
            } else if (cardidx < (52 * 3)) {
                cardpos = (cardidx - 52 * 2) + 1;
            } else if (cardidx < (52 * 4)) {
                cardpos = (cardidx - 52 * 3) + 1;
            } else if (cardidx < (52 * 5)) {
                cardpos = (cardidx - 52 * 4) + 1;
            } else if (cardidx < (52 * 6)) {
                cardpos = (cardidx - 52 * 5) + 1;
            } else if (cardidx < (52 * 7)) {
                cardpos = (cardidx - 52 * 6) + 1;
            } else if (cardidx < (52 * 8)) {
                cardpos = (cardidx - 52 * 7) + 1;
            }

            if (cardpos <= 13) {
                cardrank = cardpos;
                cardsuit = 'Spades';
            } else if (cardpos <= (13 * 2)) {
                cardrank = cardpos - 13;
                cardsuit = 'Diamonds';
            } else if (cardpos <= (13 * 3)) {
                cardrank = cardpos - (13 * 2);
                cardsuit = 'Clubs';
            } else if (cardpos <= (13 * 4)) {
                cardrank = cardpos - (13 * 3);
                cardsuit = 'Hearts';
            }

            if (cardrank === 1) {
                cardvalues.push(1);
                cards.push('Ace of ' + cardsuit);
            } else if (cardrank === 2) {
                cardvalues.push(2);
                cards.push('Two of ' + cardsuit); 
            } else if (cardrank === 3) {
                cardvalues.push(3);
                cards.push('Three of ' + cardsuit);
            } else if (cardrank === 4) {
                cardvalues.push(4);
                cards.push('Four of ' + cardsuit);
            } else if (cardrank === 5) {
                cardvalues.push(5);
                cards.push('Five of ' + cardsuit); 
            } else if (cardrank === 6) {
                cardvalues.push(6);
                cards.push('Six of ' + cardsuit);
            } else if (cardrank === 7) {
                cardvalues.push(7);
                cards.push('Seven of ' + cardsuit); 
            } else if (cardrank === 8) {
                cardvalues.push(8);
                cards.push('Eight of ' + cardsuit); 
            } else if (cardrank === 9) {
                cardvalues.push(9);
                cards.push('Nine of ' + cardsuit);
            } else if (cardrank === 10) {
                cardvalues.push(0);
                cards.push('Ten of ' + cardsuit);
            } else if (cardrank === 11) {
                cardvalues.push(0);
                cards.push('Jack of ' + cardsuit);
            } else if (cardrank === 12) {
                cardvalues.push(0);
                cards.push('Queen of ' + cardsuit);
            } else if (cardrank === 13) {
                cardvalues.push(0);
                cards.push('King of ' + cardsuit); 
            }
        }

        let player1value = cardvalues[0];
        let player1card = cards[0];
        let player2value = cardvalues[1];
        let player2card = cards[1];
        let banker1value = cardvalues[2];
        let banker1card = cards[2];
        let banker2value = cardvalues[3];
        let banker2card = cards[3];
        let addition1value = cardvalues[4];
        let addition1card = cards[4];
        let addition2value = cardvalues[5];
        let addition2card = cards[5];
        let player3value = 0;
        let player3card = '';
        let banker3value = 0;
        let banker3card = '';
        let natural = false;
        let standing = false;
        let playertotal = (Number(player1value) + Number(player2value))%10;
        let bankertotal = (Number(banker1value) + Number(banker2value))%10;

        if (playertotal >= 8 || bankertotal >= 8) {
            natural = true;
        }

        if (!natural) {
            if (playertotal <= 5) {
                player3value = addition1value;
                player3card = addition1card;
            } else if (playertotal <= 7) {
                standing = true;
            }
        }

        if (!natural) {
            if (standing) {
                if (bankertotal <= 5) {
                    banker3value = addition1value;
                    banker3card = addition1card;
                }
            } else if (bankertotal <= 2) {
                banker3value = addition2value;
                banker3card = addition2card;
            } else if (bankertotal === 3) {
                if (player3value !== 8) {
                    banker3value = addition2value;
                    banker3card = addition2card;
                }	
            } else if (bankertotal === 4) {
                if (player3value >= 2 && player3value <= 7) {
                    banker3value = addition2value;
                    banker3card = addition2card;
                }	
            } else if (bankertotal === 5) {
                if (player3value >= 4 && player3value <= 7) {
                    banker3value = addition2value;
                    banker3card = addition2card;
                }	
            } else if (bankertotal === 6) {
                if (player3value === 6 || player3value === 7) {
                    banker3value = addition2value;
                    banker3card = addition2card;
                }	
            }
        }

        playertotal += player3value;
        bankertotal += banker3value;
        playertotal = playertotal%10;
        bankertotal = bankertotal%10;
        setPlayerInfo(playertotal);
        setBankerInfo(bankertotal);
        if (playertotal > bankertotal) {
            setResultInfo("Player wins");
            if (buttonValue === 'Player') {
                setProfitInfo('Win of $ ' + bet);
            } else {
                setProfitInfo('Loss of $ ' + bet);
            }
        } else if (bankertotal > playertotal) {
            setResultInfo("Bank wins");
            if (buttonValue === 'Bank') {
                setProfitInfo('Win of $ ' + (Number(bet) * 0.95));
            } else {
                setProfitInfo('Loss of $ ' + bet);
            }
        } else {
            setResultInfo("Tie");
            if (buttonValue === 'Tie') {
                setProfitInfo('Win of $ ' + (Number(bet) * 8));
            } else {
                setProfitInfo('Loss of $ ' + bet);
            }
        }
        
        let player = [player1card, player2card, player3card];
        let banker = [banker1card, banker2card, banker3card];
        setPlayerHand(player);
        setBankHand(banker);

    };

    return (
        <>
            <nav className="r-page">
                <div className="r-intro-box-title">
                    <p>Baccarat</p>
                </div>
                <div className="r-intro-box-info">
                    <p>
                    Baccarat is a card game that originated in Italy in the 15th century. The game was later introduced to France, where it gained popularity among the nobility and has since spread to casinos around the world. Baccarat is a game played between two hands, the "player" and the "banker". The goal of the game is to predict which hand will have a higher score, with the highest score being nine. Players can also place bets on a tie between the two hands. The game is played with a deck of cards, with the face cards and tens having a value of zero and the rest of the cards having their face value. The value of a hand is determined by adding up the values of the individual cards and then taking only the last digit of the sum as the score. Baccarat is often considered a sophisticated and high-class game, and it is often associated with the wealthy and elite. It is often played in a separate, roped-off area of the casino known as the "baccarat pit", which is typically reserved for high rollers and VIPs. The game is often associated with luxury and glamour, and it has been featured in many movies and television shows as a symbol of sophistication and exclusivity.
                    </p>
                </div>
                <div className="r-intro-box-title">
                    <p>Rules</p>
                </div>
                <div className="r-intro-box-info">
                    <p>
                    Table layout:<br/><br/>
                    In Baccarate player sit at a curved table all facing a dealer. The table is divided into three betting areas, labeled "player". "banker", and "tie". Each betting area corresponds to one of the three possible outcomes of the game. In front of that there are two sections for the dealer to play out the player and banker hands respectively.<br/><br/>
                    <img src="baccarat.jpg" alt="Rlayout" class="round-center"></img><br/>
                    Types of bets:<br/><br/>
                    Baccarat is one of the most simple games in the casino and there are traditionally only three things that you can bet on. This is banker, player and tie. Betting on a tie has a payout of 8 to 1. Betting on player or banker has a payout of 1 to 1 except for banker has a 5% comission. The banker holds a slight advantage in Baccarat.<br/><br/>
                    How the game works:<br/><br/>
                    Here is a guide to when the player or banker hits and stands. I feel the game is easier to follow with the guide below rather than writing out the rules step by step.<br/>
                    <br/><img src="baccaratrules.jpg" alt="Rlayout" class="medium-center"></img>
                    </p>
                </div>
                <div className="r-intro-box-title">
                    <p>Gameplay</p>
                </div>
                <div className="r-intro-box-info">
                    <p>
                    Getting chips:<br/><br/>
                    When you walk up to a Baccarat table you can either give the dealer cash or chips that you previously had from a different game. They will then give you chips at face value in the denomination breakdown of your choosing. For example, if you walk up with $500 you can ask for $100 in $5 chips and $400 in $25 dollar chips.<br/><br/>
                    Placing bets:<br/><br/>
                    Before the hand is delt you place your wager on what you think the outcome will be. Once the dealer begin you cannot change your bet.<br/><br/>
                    Dealing:<br/><br/>
                    In Baccarat there is no input from the player after the dealing starts. The dealer will do everything themselves. All the player does is simply predict the result. For the exaclt rules of the game and how the game is dealt specifically see the above rules section.<br/><br/>
                    Collecting Winnings:<br/><br/>
                    After the dealer has paid out all the players at the table you can tell the dealer that you are done playing and would like to "color up". They will take your chips, count them, report the amount and give you the highest denomination chips possible for the amount that you have. You can take these chips to another game or cash them out at the cage.
                    </p>
                </div>
                <div className="r-intro-box-title">
                    <p>Simulator</p>
                </div>
                <div className="r-strat-box-info">
                    <p>Place a wager and select an outcome</p>
                    <form onSubmit={event => handleFormSubmit(event, 'Player', value)}>
                        Bet amount: <input className='input-box' type="text" value={value} onChange={handleChange} />
                        <br /><br />
                        <div className="buttons">
                            <button type="submit" className="sub-button" onClick={event => handleFormSubmit(event, 'Player', value)}>Player</button>
                            <button type="submit" className="sub-button" onClick={event => handleFormSubmit(event, 'Tie', value)}>Tie</button>
                            <button type="submit" className="sub-button" onClick={event => handleFormSubmit(event, 'Bank', value)}>Bank</button>
                        </div>
                    </form>
                    <div>
                        <h1 style={{ textAlign: 'center' }}>Player: {playerInfo} &nbsp;&nbsp;&nbsp;&nbsp;vs &nbsp;&nbsp;&nbsp;&nbsp;Bank: {bankerInfo}</h1>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            {playerHand.map((card) => (
                                <img
                                src={cardImages[card]}
                                alt=''
                                style={{ borderRadius: '10px', transform: 'scale(0.8)', border: '2px solid white' }}
                                />
                            ))}
                            </div>
                            <div
                            style={{
                                borderLeft: '2px solid white',
                                height: '100px',
                                margin: '0 20px',
                            }}
                            />
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            {bankHand.map((card) => (
                                <img
                                src={cardImages[card]}
                                alt=''
                                style={{ borderRadius: '10px', transform: 'scale(0.8)', border: '2px solid white' }}
                                />
                            ))}
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>{resultInfo}<br /></h2>
                        <h2>{profitInfo}</h2>
                    </div>
                    <br />
                </div>
            </nav>
            <Footer />
        </>
    )
}