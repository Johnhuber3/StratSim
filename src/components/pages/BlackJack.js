import { Footer } from "../Footer";
import '../Roulette.css';
import React from 'react';
import { useState } from 'react';

export default function Blackjack() {

    const [isShown, setIsShown] = useState(false);
    const [value, setValue] = useState('');

    const handleClick = event => {
        setIsShown(current => !current);
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <>
            <nav className="r-page">
                <div className="r-intro-box-title">
                    <p>Blackjack</p>
                </div>
                <div className="r-intro-box-info">
                    <p>
                    Blackjack, also known as 21, is a card game that is believed to have originated in France in the early 18th century. The game was later introduced to the United States, where it became popular in casinos. In blackjack, the goal is to have a hand value of 21 or as close to 21 as possible without going over but above all beat the dealer's hand. Players are dealt two cards and the value of their hand is determined by the sum of the values of those cards. Face cards (jack, queen, king) are worth 10, and all other cards are worth their face value with an Ace being worth 1/11. The player can choose to "hit" and receive additional cards in an attempt to improve their hand, or "stand" and keep their current hand. There are a few more actions a player can take such as "doubling down", "splitting" or "taking insurance". The dealer must follow a set of rules, known as the "house rules" when deciding when to hit or stand. Blackjack is a simple and exciting game that has become a popular choice for players.
                    </p>
                </div>
                <div className="r-intro-box-title">
                    <p>Rules</p>
                </div>
                <div className="r-intro-box-info">
                    <p>
                    Table layout:<br/><br/>
                    A blackjack table will typically seat around 7 players and they are positioned on a curve all facing the dealer. There is a area for the dealer to display their hand so all players can see. In front of the players there is a designated area that the player will place their bets. In between where the player sits and the dealer there is a section that displays the house rules. Below is an example blackjack table layout.<br/><br/>
                    <img src="bjtable.jpg" alt="Rlayout" class="round-center"></img><br/>
                    Terms:<br/><br/>
                    Blackjack - This happens when the first two cards make 21. This will happen if the two cards are an A paired with a 10 or face card. The payout for this is typically 3 to 2.<br/><br/>
                    Bust - This happens when you hit and the new card makes your total more than 21. When this happens you immediatly lose regardless of what the dealer has.<br/><br/>
                    Push - This happens when both the player and the dealer finish on the same total. When this happens you simply get your money back neither winning or losing.<br/><br/>
                    Hard - This means that the Aces are already being used as a 1 and cannot be reduced any further. Hitting and going over 21 will result in bust.<br/><br/>
                    Soft - This means that there is an Ace and it is being used as an 11 and not a 1. For example if you have an Ace & 7 that is a soft 18. If you were to hit and got a 6 then the Ace would become a 1 and you would have a hard 14.<br/><br/>
                    Perfect Basic Strategy:<br/><br/>
                    Perfect basic strategy in blackjack is a set of rules that determines the optimal way to play every possible hand in the game. It takes into account the player's hand, the dealer's up card, and the rules of the game. The goal is to minimize the house edge. By following basic strategy, players can reduce the house edge to a minimum and improve their chances of winning.<br/><br/>
                    <img src="bjstrat2.png" alt="Rlayout" class="round-center"></img><br/>
                    Actions:<br/><br/>
                    Original Bet - At every table there will be a minimum and maximum bet and you must place a wager within the given range.<br/><br/>
                    Hit - This means that you would like to recieve another card. You can do this by saying it or tapping your finger on the table.<br/><br/>
                    Stand - This means that you don't want anymore cards and you would like to stay where you are at. You can do this by saying it or waying your and side to side horizontally above the table.<br/><br/>
                    Double down - This mean that you are doubling your original wager and will be reveiving one more card. You can do this by saying it and placing an additional bet next to your original one.<br/><br/>
                    Split - This can be done when your orginal cards are of the same value. To do this you have to place another bet of the same amount as your original bet thus creating two separate hands.<br/><br/>
                    Take Insurance - You can make this bet when the dealer is showing an Ace. By doing this you believe that the dealer has blackjack and can recieve some money back from it. Insurance typically pays 2 to 1.
                    </p>
                </div>
                <div className="r-intro-box-title">
                    <p>Gameplay</p>
                </div>
                <div className="r-intro-box-info">
                    <p>
                    Getting chips:<br/><br/>
                    When you walk up to a Blackjack table you can either give the dealer cash or chips that you previously had from a different game. They will then give you chips at face value in the denomination breakdown of your choosing. For example, if you walk up with $500 you can ask for $100 in $5 chips and $400 in $25 dollar chips.<br/><br/>
                    Placing bets:<br/><br/>
                    Before the hand begins you place your chips in the designated area. This is done to prevent the confusion of what chips were being wagered and what chips were just on the table out of play. Once the dealer begin you cannot change your bet.<br/><br/>
                    Dealing:<br/><br/>
                    The dealer give each player one card face up from left to right and then themselve a card face down. On the second pass the dealer again give each player a second face up card followed by the dealers only face up card. At the point if the dealer's up card is a 10, face, or Ace they will ask the players if they want insurance and then check the down card for blackjack. If the dealer has blackjack then everyone at the table immediately loses unless the player also has blackjack. If the dealer does not have blackjack then the action goes from left to right and does not move on to the next player until the cuirrent player finishes. If the player has blackjack then they are paid immediately as well as if the player busts their wager and cards are taken immediatly. In the case that the player stands they wait for the dealer to finish running out their hand before paying the player or taking their chips. Typical house rules will be that the dealer must hit a soft 17 and stand on a hard one. This means that the dealer will continue to hit until they have reached a number at or freater than 17 unless the 17 is soft. Also, it is common to see Blackjack being played with an 8 deck shoe and a card stuck somewhere in between to signify a stopping point and to reshuffle. This is done to make counting cards more difficult.<br/><br/>
                    Collecting Winnings:<br/><br/>
                    After the dealer has paid out all the players at the table you can tell the dealer that you are done playing and would like to "color up". They will take your chips, count them, report the amount and give you the highest denomination chips possible for the amount that you have. You can take these chips to another game or cash them out at the cage.
                    </p>
                </div>
                <div className="r-intro-box-title">
                    <p>Simulator</p>
                </div>
                <div className="r-strat-box-info">
                <p>*** Place a wager and select deal to start the hand ***</p>
                    <div>
                        Bet amount: <input className='input-box' type="text" value={value} onChange={handleChange} />
                        <br /><br />
                        <div className="buttons">
                            <button style={{ backgroundColor: isShown ? 'rgb(89, 0, 255)' : '' }} class="b-1" onClick={handleClick}>Start</button>
                        </div>
                    </div>
                </div>
                {isShown && <SimulateGame />}
            </nav>
            <Footer />
        </>
    )
}

function SimulateGame() {

    const [optionInfo, setOptionInfo] = useState('');
    const [resultInfo, setResultInfo] = useState('');

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

    const getCard = (shoe, cardData) => {
        
        let cardidx = -1;

        do {
            cardidx = Math.floor(Math.random() * (52 * 8));
        } while (shoe[cardidx] === 0)

        shoe[cardidx] = 0;

        if (cardidx < 52) {
            cardData.cardpos = cardidx + 1;
        } else if (cardidx < (52 * 2)) {
            cardData.cardpos = (cardidx - 52) + 1;
        } else if (cardidx < (52 * 3)) {
            cardData.cardpos = (cardidx - 52 * 2) + 1;
        } else if (cardidx < (52 * 4)) {
            cardData.cardpos = (cardidx - 52 * 3) + 1;
        } else if (cardidx < (52 * 5)) {
            cardData.cardpos = (cardidx - 52 * 4) + 1;
        } else if (cardidx < (52 * 6)) {
            cardData.cardpos = (cardidx - 52 * 5) + 1;
        } else if (cardidx < (52 * 7)) {
            cardData.cardpos = (cardidx - 52 * 6) + 1;
        } else if (cardidx < (52 * 8)) {
            cardData.cardpos = (cardidx - 52 * 7) + 1;
        }

        if (cardData.cardpos <= 13) {
            cardData.cardrank = cardData.cardpos;
            cardData.cardsuit = 'Spades';
        } else if (cardData.cardpos <= (13 * 2)) {
            cardData.cardrank = cardData.cardpos - 13;
            cardData.cardsuit = 'Diamonds';
        } else if (cardData.cardpos <= (13 * 3)) {
            cardData.cardrank = cardData.cardpos - (13 * 2);
            cardData.cardsuit = 'Clubs';
        } else if (cardData.cardpos <= (13 * 4)) {
            cardData.cardrank = cardData.cardpos - (13 * 3);
            cardData.cardsuit = 'Hearts';
        }

        if (cardData.cardrank === 1) {
            cardData.cardvalue = 11;
            cardData.card = 'Ace of ' + cardData.cardsuit;
        } else if (cardData.cardrank === 2) {
            cardData.cardvalue = 2;
            cardData.card = 'Two of ' + cardData.cardsuit; 
        } else if (cardData.cardrank === 3) {
            cardData.cardvalue = 3;
            cardData.card = 'Three of ' + cardData.cardsuit;
        } else if (cardData.cardrank === 4) {
            cardData.cardvalue = 4;
            cardData.card = 'Four of ' + cardData.cardsuit;
        } else if (cardData.cardrank === 5) {
            cardData.cardvalue = 5;
            cardData.card = 'Five of ' + cardData.cardsuit; 
        } else if (cardData.cardrank === 6) {
            cardData.cardvalue = 6;
            cardData.card = 'Six of ' + cardData.cardsuit;
        } else if (cardData.cardrank === 7) {
            cardData.cardvalue = 7;
            cardData.card = 'Seven of ' + cardData.cardsuit; 
        } else if (cardData.cardrank === 8) {
            cardData.cardvalue = 8;
            cardData.card = 'Eight of ' + cardData.cardsuit; 
        } else if (cardData.cardrank === 9) {
            cardData.cardvalue = 9;
            cardData.card = 'Nine of ' + cardData.cardsuit;
        } else if (cardData.cardrank === 10) {
            cardData.cardvalue = 10;
            cardData.card = 'Ten of ' + cardData.cardsuit;
        } else if (cardData.cardrank === 11) {
            cardData.cardvalue = 10;
            cardData.card = 'Jack of ' + cardData.cardsuit;
        } else if (cardData.cardrank === 12) {
            cardData.cardvalue = 10;
            cardData.card = 'Queen of ' + cardData.cardsuit;
        } else if (cardData.cardrank === 13) {
            cardData.cardvalue = 10;
            cardData.card = 'King of ' + cardData.cardsuit; 
        }
    }

    const getTotal = (hand) => {

        let value = hand.reduce((sum, cardValue) => sum + cardValue, 0);
        let numAces = hand.filter(cardValue => cardValue === 11).length;

        while (value > 21 && numAces > 0) {
            value -= 10;
            numAces--;
        }

        return value;
    }

    const handleMove = (move) => {
        if (move === 'hit') {
            let option = 'Hit';
            setOptionInfo(option);
            //const card = dealCard(deck);
            //setPlayerHand([...playerHand, card]);
        } else if (move === 'stand') {
            let option = 'Stand';
            setOptionInfo(option);
            //setGameOver(true);
            // Proceed to dealer's turn
            // ...
        } else if (move === 'double') {
            let option = 'Double';
            setOptionInfo(option);
            // Handle doubling down logic
            // ...
        } else if (move === 'split') {
            let option = 'Split';
            setOptionInfo(option);
            // Handle splitting logic
            // ...
        }
    };

    let shoe = [];

    let cardData = {
        cardvalue: 0,
        card: '',
        cardpos: 0,
        cardrank: 0,
        cardsuit: ''
    };

    let dealerValues = [];
    let playerValues = [];
    //let playerValuesS1 = [];
    //let playerValuesS2 = [];
    //let playerValuesS3 = [];
    let dealerCards = [];
    let playerCards = [];
    //let playerCardsS1 = [];
    //let playerCardsS2 = [];
    //let playerCardsS3 = [];
    let dealerTotal = 0;
    let playerTotal = 0;
    //let playerTotalS1 = 0;
    //let playerTotalS2 = 0;
    //let playerTotalS3 = 0;

    for (let i = 1; i <= (52 * 8); i++) {
        shoe.push(Number(i));
    }

    getCard(shoe, cardData);
    playerValues.push(cardData.cardvalue);
    playerCards.push(cardData.card);
    getCard(shoe, cardData);
    dealerValues.push(cardData.cardvalue);
    dealerCards.push(cardData.card);
    getCard(shoe, cardData);
    playerValues.push(cardData.cardvalue);
    playerCards.push(cardData.card);
    getCard(shoe, cardData);
    dealerValues.push(cardData.cardvalue);
    dealerCards.push(cardData.card);

    dealerTotal = getTotal(dealerValues);
    playerTotal = getTotal(playerValues);

    // later on offer incurance if I have time to add it
    /*
    if (dealerTotal === 21 || playerTotal === 21) {
        if (dealerTotal === 21 && playerTotal === 21) {
            setResultInfo('Push');
        } else if (dealerTotal === 21) {
            setResultInfo('Dealer Wins wiith Blackjack' + dealerTotal);
        } else {
            setResultInfo('You win with Blackjack');
        }
    }
    */
    // later on check for splits if I have time to add it

    if (dealerTotal > playerTotal) {
        setResultInfo('Dealer Wins with ' + dealerTotal + dealerCards);
    } else if (playerTotal > dealerTotal) {
        // player wins
    } else {
        setResultInfo('Push');
    }

    const renderDealerCards = () => {
        return dealerCards.map((card, index) => (
          <img
            key={index}
            src={cardImages[card]}
            alt={card}
            className="card-image"
          />
        ));
    };
    
    return (
        <div>
            <div className="r-intro-box-title">
                <p>Blackjack Game</p>
            </div>
            <div className="r-intro-box-info">
                <div>
                    <h1>Blackjack Game</h1>
                    <div style={{ justifyContent: 'center' }}>
                        <h1>Dealer</h1>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <div>{renderDealerCards()}</div>
                        </div>
                        <h1>Player</h1>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        {playerCards.map((card) => (
                            <img
                            src={cardImages[card]}
                            alt=''
                            style={{ borderRadius: '10px', transform: 'scale(0.8)', border: '2px solid white' }}
                            />
                        ))}
                        </div>
                    </div>
                    <button onClick={() => handleMove('hit')}>
                        Hit
                    </button>
                    <button onClick={() => handleMove('stand')}>
                        Stand
                    </button>
                    <button onClick={() => handleMove('double')}>
                        Double
                    </button>
                    <button onClick={() => handleMove('split')}>
                        Split
                    </button>
                    {/* Render player's hand, dealer's hand, and game results  disabled={gameOver}*/ }
                </div>
                <p>{optionInfo}</p>
                <p>{resultInfo}</p>
            </div>
        </div>
    )
}


// up to three splits creating 4 hands