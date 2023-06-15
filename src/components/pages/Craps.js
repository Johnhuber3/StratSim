import { Footer } from "../Footer";
import '../Roulette.css';

export default function Craps() {
    return (
        <>
            <nav className="r-page">
                <div className="r-intro-box-title">
                    <p>Craps</p>
                </div>
                <div className="r-intro-box-info">
                    <p>
                    Craps is a dice game that has a long history and is believed to have originated in the United States. It is thought to have evolved from a variety of earlier dice games, including the English game of hazard and the French game of crapaud, which means "toad" in English. In the modern version of craps, players take turns rolling two dice on a table and try to achieve certain combinations of numbers. The goal of the game is to correctly predict the outcome of each roll or series of rolls. Players can place bets on a variety of things ranging from single roll outcomes such as field bets or series outcomes like pass line bets. Craps is a fast-paced, exciting game that is popular in casinos around the world. It can be played with a group of friends or at a casino, and it is a game that is enjoyed by people of all ages.
                    </p>
                </div>
                <div className="r-intro-box-title">
                    <p>Rules</p>
                </div>
                <div className="r-intro-box-info">
                    <p>
                    Table layout:<br/><br/>
                    At a Craps table there will be three dealers. One is called a "stick man" and their job is to collect the dice after each roll. The other two dealers are called "boxman" and are positioned at opposite sides of the table to assisst with placing and paying out players bets. At a full size Craps table there is two symmetric halfs of the table. There are various betting areas on the craps table, including areas for placing "come" and "don't come" bets, "pass line" and "don't pass" bets, "place" bets, "field" bets and a few others.<br/><br/>
                    <img src="craplay.svg" alt="Rlayout" class="bigger-center"></img><br/>
                    There is a wall surrounding a craps tabble that is lined with pyramid rubber. The wall is about 10-11 inches high and is there to add randomness as the dice bounce off of it. Because of this wall the players are not allowed to reach into the the playing field and must keep their chips on a rack positioned on top of the table.<br/><br/>
                    <img src="craps3d.jpg" alt="Rlayout" class="round-center"></img><br/>
                    Types of bets:<br/><br/>
                    <img src="crapsbets.jpg" alt="Rlayout" class="big-center"></img><br/>
                    Place bets:<br/><br/>
                    You can place bets on the 4, 5, 6, 8, 9 and 10. When the point in on these bets only lose if a seven is rolled. For example if you place a bet on the 5 you will win everytime a 5 is rolled before the seven comes. When the seven come the bet loses. When amking a place bet your wager needs to be divisible by the payout. Also, it is common to see player bet across all the place bets. You may see someone bet $52 across meaning that they are placing $10 on the 4, 5, 9, 10 and $12 on the 8 for a point of 6. Bets placed on numbers 4, 5, 9 and 10 must be divisible by 5 while bets placed on 6 and 8 must be divisible by 6.<br/><br/>
                    Payouts by number:<br/><br/>
                    4 & 10 - Pays 9:5. You can "buy" these numbers giving a payout of 2:1 at the cost of a 5% commission.<br/><br/>
                    5 & 9 - Pays 7:5 | 6 & 8 - Pays 7:6.<br/><br/>
                    </p>
                </div>
                <div className="r-intro-box-title">
                    <p>Gameplay</p>
                </div>
                <div className="r-intro-box-info">
                    <p>
                    Getting chips:<br/><br/>
                    When you walk up to a Craps table you can either give the dealer cash or chips that you previously had from a different game. They will then give you chips at face value in the denomination breakdown of your choosing. For example, if you walk up with $500 you can ask for $100 in $5 chips and $400 in $25 dollar chips.<br/><br/>
                    Placing bets:<br/><br/>
                    When making pass line bets you must wait for the point to be off before placing your bets. These you can set down in front of you yourself. When making place bets you have to inform the dealer what you want to do and they will set it up for you. Field bets can be placed on your own as well. When the point is on you can adjust your place bets as you wish either pressing, regressing or pulling them off. Horn bets and hardways you toss your chips towards the dealer and tell them what you would like to bet and they will place them accordingly.<br/><br/>
                    Gameplay:<br/><br/>
                    The shooter rotates around the table clockwise and the shooter stays the same throughout the entirety of the point. You can elect to pass if you wish and not become the shooter. The shooter is required to play the pass line. you can play just field bets for example but you are not allowed to be the shooter if that is all you are playing. The shooter will keep rolling until the point is made or they seven out. When the shooter seven outs all placebets lose.<br/><br/>
                    Collecting winnings:<br/><br/>
                    If you win a fiel bet the dealer will typically place you winnings next to where you bet was placed and you can reach down to collect them yourself. When place bets win the dealer with ask you what you would like to do with it meaning collect, press or some sort of rearragment of you rexisting place bets. If you choose to collect they will place the chips close to you so you can easily pick them up and place them in your rack. When you are finished playing you should wait until the point is off and tell the dealer that you are done playing and would like to "color up". They will take your chips, count them, report the amount and give you the highest denomination chips possible for the amount that you have. You can take these chips to another game or cash them out at the cage.
                    </p>
                </div>
                <div className="r-intro-box-title">
                    <p>Simulator</p>
                </div>
                <div className="r-intro-box-info">
                    <p>Coming Soon</p>
                </div>
            </nav>
            <Footer />
        </>
    )
}