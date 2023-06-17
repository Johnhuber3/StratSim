import { Footer } from "../Footer";
import '../Roulette.css';
import React from 'react';
import {useState} from 'react';

export default function Roulette() {
    const [isShown, setIsShown] = useState(false);
    const [isShown2, setIsShown2] = useState(false);
    const [isShown3, setIsShown3] = useState(false);
    const [isShown4, setIsShown4] = useState(false);
    const [isShown5, setIsShown5] = useState(false);
    const [isShown6, setIsShown6] = useState(false);
    const [isShown7, setIsShown7] = useState(false);
    const [isShown8, setIsShown8] = useState(false);
    const [isShown9, setIsShown9] = useState(false);
    const [isShown10, setIsShown10] = useState(false);
    const [isShown11, setIsShown11] = useState(false);
    const [isShown12, setIsShown12] = useState(false);
    const [isShown13, setIsShown13] = useState(false);
    const [isShown14, setIsShown14] = useState(false);
    const [isShown15, setIsShown15] = useState(false);
    const [isShown16, setIsShown16] = useState(false);

    const handleClick = event => {
        setIsShown(current => !current);
        // setIsShown(true);
    };

    const handleClick2 = event2 => {
        setIsShown2(current => !current);
    }

    const handleClick3 = event2 => {
        setIsShown3(current => !current);
    }

    const handleClick4 = event2 => {
        setIsShown4(current => !current);
    }

    const handleClick5 = event => {
        setIsShown5(current => !current);
    };

    const handleClick6 = event2 => {
        setIsShown6(current => !current);
    }

    const handleClick7 = event2 => {
        setIsShown7(current => !current);
    }

    const handleClick8 = event2 => {
        setIsShown8(current => !current);
    }

    const handleClick9 = event => {
        setIsShown9(current => !current);
    };

    const handleClick10 = event2 => {
        setIsShown10(current => !current);
    }

    const handleClick11 = event2 => {
        setIsShown11(current => !current);
    }

    const handleClick12 = event2 => {
        setIsShown12(current => !current);
    }

    const handleClick13 = event => {
        setIsShown13(current => !current);
    };

    const handleClick14 = event2 => {
        setIsShown14(current => !current);
    }

    const handleClick15 = event2 => {
        setIsShown15(current => !current);
    }

    const handleClick16 = event2 => {
        setIsShown16(current => !current);
    }

    return (
        <>
            <nav className="r-page">
                <div className="r-intro-box-title">
                    <p>Roulette</p>
                </div>
                <div className="r-intro-box-info">
                    <p>
                    Roulette is a casino game that is believed to have originated in France in the 18th century. The game is named after the French word for "little wheel", and it is played with a wheel that consists of numbered slots of altenating color. Players place bets on what they think the winning number will be as a ball is spun around the wheel. If the ball lands on a number that a player has bet on, the player wins the associated payout. The earliest version of roulette was played with a single zero on the wheel. In the 19th century, a version of the game with a double zero was introduced in the United States. This version of roulette, which is known as American roulette, is still played today and is distinguished from the original French version, which is known as European roulette, by the presence of the extra zero. Roulette is known for its simplicity and the wide range of betting options that are available to players, making it a popular choice for both novice and experienced gamblers.
                    </p>
                </div>
                <div className="r-intro-box-title">
                    <p>Rules</p>
                </div>
                <div className="r-intro-box-info">
                    <p>
                    Table layout:<br/><br/>American:
                    <img src="rlayout1.png" alt="Rlayout" class="center"></img>
                    European:
                    <img src="erlayout.png" alt="ERlayout" class="center"></img><br/>
                    American and European Roulette layouts are identical aside from the zeros.<br/><br/>
                    Wheels:
                    <img src="eawheel.png" alt="ERlayout" class="center"></img><br/>
                    The layout is much different on the wheels compared to the table.<br/><br/>
                    Types of bets:<br/><br/>
                    Straight-up bet - This is a bet on a single number. Pays 35 to 1.<br/>
                    Split bet - This is a bet on two adjacent numbers. Pays 17 to 1.<br/>
                    Corner bet - This is a bet on four numbers that form a square. Pays 8 to 1.<br/>
                    Basket bet - This is a bet on 0, 00, 1, 2 and 3. Pays 6 to 1.<br/>
                    Street bet - This is a bet on three numbers in a row. Pays 11 to 1.<br/>
                    Double-street bet - This is a bet on 2 adjacent streets. Pays 5 to 1.<br/>
                    Column bet - This is a bet on one of the columns of numbers. Pays 2 to 1.<br/>
                    Dozen bet - This is a bet on one of the three dozen groups. Pays 2 to 1.<br/>
                    Even-money bet - This is a bet on Red-Black, Even-Odd or High-Low. Pays 1 to 1.<br/><br/>
                    Sectors & Neighbors:<br/><br/>
                    The neighbors or sector bet is a unique bet and one that you typically only find at a European Roulette table. Sector bets utilize the position of the numbers on the wheel rather than the way they are positioned on the table. There are four main types of sector bets: Jeu Zero, Orphelins, Voisins du Zero and Le Tiers du Cylindre. The specific layout and numbers covered by these bets may vary by casino but they usually pretty consistent. Below is an example betting layout and how it looks on the wheel. 
                    <img src="sectorbetsR2.png" alt="ERlayout" class="center"></img><br/>
                    <img src="sectorwheel.png" alt="ERlayout" class="smaller-center"></img><br/>
                    Jeu Zero - This bet covers 7 numbers including the 26 and the 3 neighbors on each side. 12, 35, 3, 26, 0, 32, 15. The bet must be divisible by 4 and are placed as follows: 1 unit straight-up on the 26 and 3 units spliting the remaining 6 numbers.<br/><br/>
                    Orphelins - This bets covers two non connected sections of the wheel. These are the numbers 17 to 6 and 1 to 9 on the wheel. Bets must be divisible by 5 and are placed as follows: 1 unit straigh-up on 1, and 4 units covering these splits: 6-9, 14-17, 17-20 and 31-34.<br/><br/>
                    Voisins du zero - This bet covers the 17 numbers from 22 to 25 on the wheel. Bets must be divisible by 9 and are placed as follows: 2 units on 0, 2 and 3, 5 units splitting the numbers 4, 7, 12, 15, 18, 21, 19, 22, 32 and 35, and finally 2 units on a corner bet with 22, 26, 28 and 29.<br/><br/>
                    Le Tiers du Cylindre - This bet covers 12 numbers from 27 to 33 on the wheel. Bets must be evenly divisible by 6. The bets are placed with using all 6 units splitting these numbers: 5, 8, 10, 11, 13, 16, 23, 24, 27, 30, 33 and 36.<br/><br/>
                    Neighbors - This bet is when you choose a number on the wheel and bet it and its 2 neighbors on either side. Your bet must be divisible by 5. You place this bet by telling the dealer that you would like the neighbors of the number that you choose and the amount. For example if the number is 17 and you want to bet €100 you would say "Could I have the neighbors of 17 for €100" and the dealer would place the bet for you. Doing this would effectively place €20 straight-up bet on each of the 5 numbers of 2, 25, 17, 34 and 6.
                    </p>
                </div>
                <div className="r-intro-box-title">
                    <p>Gameplay</p>
                </div>
                <div className="r-intro-box-info">
                    <p>
                    Getting chips:<br/><br/>When you walk up to a Roulette table you can either give the dealer cash or chips that you previously had from a different game. If you will primarily be placing bets on the inside then they will give you "Dollars" in an assigned color. However they can make these chips any denomination if you want to play at higher stakes. They do this in order to differentiate you from other players as the table can get crowded and avoid confusion in regards to who's bet it is. If you are playing outside bets only then you will typically revieve face value chips of your choosing. For example, if you walk up with $500 you can ask for $100 in $5 chips and $400 in $25 dollar chips.<br/><br/>
                    Placing bets:<br/><br/>You can only place bets in a given window. You cannot place bets until the dealer lifts the dolly from the winning number. Once this has been done you can place your betting on the table as you wish or if needed ask the dealer to place them for you. The dealer will monitor how much time is needed for everyone at the table to place their bets and at some point will spin the ball in the opposite direction the that wheel is spinning. You can still place bets while the ball is spinning but as the ball gets closer to the dropping the dealer will waive their arm over the table and say "no more bets". Any bets that are placed after this point will not be counted.
                    <br/><br/>
                    Collecting winnings:<br/><br/>When the ball comes to rest the dealer will place the dolly on the winning number. They will then payout all the winning bets. You cannot collect your winnings until all bets have been payed out. This is done so people cannot collect their winnings and then say they haven't been payed. When the dealer is finished they will pick up the dolly and you can then collect your chips. When you are finished playing you tell the dealer that you are done or would like to "color up". They will take your chips, count them, report the amount and give you the highest denomination chips possible for the amount that you have. You can take these chips to another game or cash them out at the cage.
                    </p>
                </div>
                <div className="r-intro-box-title">
                    <p>Simulator</p>
                </div>
                <div className="r-strat-box-info">
                    <p>Click on a system to try it out:</p>
                    <div className="buttons">
                        <button style={{ backgroundColor: isShown ? 'rgb(89, 0, 255)' : '' }} class="b-1" onClick={handleClick}>Martingale</button>
                        <button style={{ backgroundColor: isShown2 ? 'rgb(89, 0, 255)' : '' }} class="b-1" onClick={handleClick2}>Hopscotch</button>
                        <button style={{ backgroundColor: isShown3 ? 'rgb(89, 0, 255)' : '' }} class="b-1" onClick={handleClick3}>MG Lover</button>
                        <button style={{ backgroundColor: isShown4 ? 'rgb(89, 0, 255)' : '' }} class="b-1" onClick={handleClick4}>Boardwalk</button>
                    </div>
                    <div className="buttons">
                        <button style={{ backgroundColor: isShown5 ? 'rgb(89, 0, 255)' : '' }} class="b-1" onClick={handleClick5}>Double Loss</button>
                        <button style={{ backgroundColor: isShown6 ? 'rgb(89, 0, 255)' : '' }} class="b-1" onClick={handleClick6}>Rumple</button>
                        <button style={{ backgroundColor: isShown7 ? 'rgb(89, 0, 255)' : '' }} class="b-1" onClick={handleClick7}>Chamba</button>
                        <button style={{ backgroundColor: isShown8 ? 'rgb(89, 0, 255)' : '' }} class="b-1" onClick={handleClick8}>Chamba 2 + R</button>
                    </div>
                    <div className="buttons">
                        <button style={{ backgroundColor: isShown9 ? 'rgb(89, 0, 255)' : '' }} class="b-1" onClick={handleClick9}>MVP</button>
                        <button style={{ backgroundColor: isShown10 ? 'rgb(89, 0, 255)' : '' }} class="b-1" onClick={handleClick10}>2 Dozen MG</button>
                        <button style={{ backgroundColor: isShown11 ? 'rgb(89, 0, 255)' : '' }} class="b-1" onClick={handleClick11}>1 Until</button>
                        <button style={{ backgroundColor: isShown12 ? 'rgb(89, 0, 255)' : '' }} class="b-1" onClick={handleClick12}>Romanovsky</button>
                    </div>
                    <div className="buttons">
                        <button style={{ backgroundColor: isShown13 ? 'rgb(89, 0, 255)' : '' }} class="b-1" onClick={handleClick13}>1 Until MG</button>
                        <button style={{ backgroundColor: isShown14 ? 'rgb(89, 0, 255)' : '' }} class="b-1" onClick={handleClick14}>Tai Fighter</button>
                        <button style={{ backgroundColor: isShown15 ? 'rgb(89, 0, 255)' : '' }} class="b-1" onClick={handleClick15}>Everytime MG</button>
                        <button style={{ backgroundColor: isShown16 ? 'rgb(89, 0, 255)' : '' }} class="b-1" onClick={handleClick16}>Chamba 2 MG</button>
                    </div>
                </div> 
                {isShown && <Martingale />}
                {isShown2 && <Hopscotch />}
                {isShown3 && <MGLover />}
                {isShown4 && <Boardwalk />}
                {isShown5 && <DoubleLoss />}
                {isShown6 && <Rumple />}
                {isShown7 && <Chamba />}
                {isShown8 && <Chamba2PR />}
                {isShown9 && <MVP />}
                {isShown10 && <TwoDozenMG />}
                {isShown11 && <AnyUntil />}
                {isShown12 && <Romanovsky />}
                {isShown13 && <OneUntilMG />}
                {isShown14 && <TaiFighter />}
                {isShown15 && <EveryTimeMG />}
                {isShown16 && <Chamba2MG />}
            </nav>
            <Footer />
        </>
    )
}

function Martingale() {
    const [value, setValue] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');
    const [output, setOutput] = useState([]);

    const handleChange = (event) => {
        setValue(event.target.value);
    };
      
    const handleChange2 = (event) => {
        setValue2(event.target.value);
    };
      
    const handleChange3 = (event) => {
        setValue3(event.target.value);
    };

    const handleChange4 = (event) => {
        setValue4(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        anotherFunction(value, value2, value3, value4);
    };
    
    const anotherFunction = (spins, roll, unit, levels) => {
        const data = [];
        let unit_level = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1028, 2056, 4112];
        let level_count = 0;
        let high_bet = Number(unit);
        let curr_profit = Number(roll);
        let i = 0;
        let curr_result = 0;
        
        for (i = 0; i < spins; i++) {
            var n = Math.floor(Math.random() * 37);
            const row = {};
            row.spinNumber = i + 1;
            row.actualNumber = n;
            row.betAmount = "$ " + high_bet;

            if (n >= 19 && n <= 36) {
                row.wonOrLoss = 'Win';
                curr_result = 1;
                curr_profit = Number(curr_profit) + Number(high_bet);
                high_bet = Number(unit);
                level_count = 0;
            } else {
                row.wonOrLoss = 'Loss';
                curr_result = 0;
                curr_profit = Number(curr_profit) - Number(high_bet);
                high_bet *= 2;
                level_count += 1;
            }

            row.bankroll = "$ " + Number(curr_profit);
            data.push(row);

            if (level_count === (Number(levels) + 1)) {
                level_count = 0;
                high_bet = Number(unit);
                if ((unit_level[levels] * Number(unit)) > Number(curr_profit)) {
                    break;
                }
            }
        }

        i += 1;

        while (!curr_result) {
            n = Math.floor(Math.random() * 37);
            const row = {};
            row.spinNumber = i;
            i += 1;
            row.actualNumber = n;
            row.betAmount = "$ " + Number(high_bet);
            if (n >= 19 && n <= 36) {
                row.wonOrLoss = 'Win';
                curr_profit = Number(curr_profit) + Number(high_bet);
                row.bankroll = "$ " + Number(curr_profit);
                data.push(row);
                break;
            } else {
                row.wonOrLoss = 'Loss';
                curr_profit = Number(curr_profit) - Number(high_bet);
                high_bet *= 2;
                level_count += 1;
            }
            row.bankroll = "$ " + Number(curr_profit);
            data.push(row);
            if (level_count === Number(levels) + 1) {
                break;
            }
        }
        setOutput(data);
    };

    return (
        <div>
            <div className="r-intro-box-title">
                <p>Martingale System</p>
            </div>
            <div className="r-intro-box-info">
                <h2>Overview:</h2>
                <p>
                    The Martingale system is arguably the most well known betting system. The system involes having a base unit and everytime you lose you double your bet. Once you win go back down to your base unit. Everytime you win it comes out to a profit of your base unit. 
                </p>
                <h2>How to play:</h2>
                <p>
                    First you need to determine how many levels of Martingale you will be doing. For example, If you are doing three levels of Martingale with a base unit of $10 then it would look like this.
                    <ul>
                        <li>Bet 1: $10, do this until you lose.</li>
                        <li>Bet 2: $20, this is the 1st level of Martingale. If you win then your next bet will go back to $10.</li>
                        <li>Bet 3: $40, same process as bet 2.</li>
                        <li>Bet 4: $80, for 3 levels this is the final bet no matter what. Win or lose.</li>
                    </ul>
                    You will do this same process for whatever amount of levels that you choose. But the number of levels just corresponds to how many times you will continue to double you bet.
                </p>
                <h2>Input fields for simulator:</h2>
                <p>
                    <ul>
                        <li>Spins: How many spins you want to simulate.</li>
                        <li>Bankroll: How much money you are bringing to the table.</li>
                        <li>Unit Size: How much is your original bet going to be. In this system how much is your first bet before any doubling.</li>
                        <li>Levels: How many times do you want to keep doubling your bet on a losing streak. Your bankroll should be able to cover the amount needed to place all the bets. If you have 3 levels you will need to cover 1 + 2 + 4 + 8 = 15 units worth of bets. 1 for original then 2, 4, and 8 for 3 levels of Martingale.</li>
                    </ul>
                </p><br />
            </div>
            <div className="r-intro-box-title">
                <p>Recommendation</p>
            </div>
            <div className="r-intro-box-info">
                <p>
                    Everyone will tell you not to play the Martingale system because it will always get you eventually. But in the short term I think it is a good in and out system with a high chance of winning.
                </p>
            </div>
            <div className="r-intro-box-title">
                <p>Simulation</p>
            </div>
            <div className="r-sim-box-info">
                <form onSubmit={handleFormSubmit}>
                    <p>Enter some values to get started</p>
                    <p>*** For this simulation bets will be placed on the (19-36) outside bet ***</p>
                    Spins: <input className='input-box' type="text" value={value} onChange={handleChange} />
                    Bankroll: <input className='input-box' type="text" value={value2} onChange={handleChange2} />
                    Unit size: <input className='input-box' type="text" value={value3} onChange={handleChange3} />
                    Levels: <input className='input-box' type="text" value={value4} onChange={handleChange4} />
                    <br /><br />
                    <button type="submit" className="sub-button">Simulate</button>
                </form>
                <div>
                    <table className="output-table">
                        <thead>
                            <tr>
                            <th>Spin</th>
                            <th>Number</th>
                            <th>Bet Amount</th>
                            <th>Won/Loss</th>
                            <th>Bankroll</th>
                            </tr>
                        </thead>
                        <tbody>
                            {output.map((row, index) => (
                            <tr key={index}>
                                <td>{row.spinNumber}</td>
                                <td>{row.actualNumber}</td>
                                <td>{row.betAmount}</td>
                                <td>{row.wonOrLoss}</td>
                                <td>{row.bankroll}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

function Hopscotch() {
    const [value, setValue] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [output, setOutput] = useState([]);

    const handleChange = (event) => {
        setValue(event.target.value);
    };
      
    const handleChange2 = (event) => {
        setValue2(event.target.value);
    };
      
    const handleChange3 = (event) => {
        setValue3(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        anotherFunction(value, value2, value3);
    };
    
    const anotherFunction = (spins, roll, unit) => {
        const data = [];
        for (let i = 0; i < spins; i++) {
            let incremental = 1;
            while (true) {
                var n = Math.floor(Math.random() * 37);
                if (n >= 19 && n <= 36) {
                    const row = {};
                    row.spinNumber = i + 1;
                    row.actualNumber = n;
                    row.betAmount = "$ " + (Number(unit) * incremental) + " -- (19-36)";
                    row.wonOrLoss = 'Win';
                    roll = Number(roll) + (Number(unit) * incremental);
                    row.bankroll = "$ " + roll;
                    data.push(row);
                    i += 1;
                    n = Math.floor(Math.random() * 37);
                    if (n >= 13 && n <= 36) {
                        const row = {};
                        row.spinNumber = i + 1;
                        row.actualNumber = n;
                        row.betAmount = "$ " + (Number(unit) * 2 * incremental) + " -- Dozens";
                        row.wonOrLoss = 'Win';
                        roll = Number(roll) + (Number(unit) * incremental);
                        row.bankroll = "$ " + roll;
                        data.push(row);
                        i += 1;
                        n = Math.floor(Math.random() * 37);
                    } else {
                        const row = {};
                        row.spinNumber = i + 1;
                        row.actualNumber = n;
                        row.betAmount = "$ " + (Number(unit) * 2 * incremental) + " -- Dozens";
                        row.wonOrLoss = 'Loss';
                        roll = Number(roll) - (Number(unit) * 2 * incremental);
                        row.bankroll = "$ " + roll;
                        data.push(row);
                        break;
                    }
                } else {
                    const row = {};
                    row.spinNumber = i + 1;
                    row.actualNumber = n;
                    row.betAmount = "$ " + (Number(unit) * incremental) + " -- (19-36)";
                    row.wonOrLoss = 'Loss';
                    roll = Number(roll) - (Number(unit) * incremental);
                    row.bankroll = "$ " + roll;
                    data.push(row);
                    break;
                }
                incremental *= 2;
            }
        }
        setOutput(data);
    };

    return (
        <div>
            <div className="r-intro-box-title">
                <p>Hopscotch</p>
            </div>
            <div className="r-intro-box-info">
                <p>
                    This strategy is a two step system that repeats as long as you keep winning. The first step is to bet 1 unit on an even money bet such as black. If that wins step 2 is to bet on two dozens placing 1 unit on each. Step 3 is to collect 1 unit and repeat from step one but this time starting with 2 units and so on. if you lose at any point go back to step one at 1 unit. 
                </p>
            </div>
            <div className="r-intro-box-title">
                <p>Recommendation</p>
            </div>
            <div className="r-intro-box-info">
                <p>
                    This is a grinder system. You won't win a lot but you also won't lose a lot. Potentially a good system if you are trying to get hotel comps or something like that and want to be betting money consistently but don't want to risk losing a lot of money. I think the downfall to this system is that there is no cash out point. You just keep climbing. When you are a few levels in and lose it takes a large porion of your profits with it. I think it would be better if after the 3rd or 4th level you took the profit and reset down to 1 unit.
                </p>
            </div>
            <div className="r-intro-box-title">
                <p>Simulation</p>
            </div>
            <div className="r-sim-box-info">
                <form onSubmit={handleFormSubmit}>
                    <p>Enter some values to get started</p>
                    # of spins: <input className='input-box' type="text" value={value} onChange={handleChange} />
                    Bankroll: <input className='input-box' type="text" value={value2} onChange={handleChange2} />
                    Unit amount: <input className='input-box' type="text" value={value3} onChange={handleChange3} />
                    <br /><br />
                    <button type="submit" className="sub-button">Simulate</button>
                </form>
                <div>
                    <table className="output-table">
                        <thead>
                            <tr>
                            <th>Spin</th>
                            <th>Number</th>
                            <th>Bet</th>
                            <th>Won/Loss</th>
                            <th>Bankroll</th>
                            </tr>
                        </thead>
                        <tbody>
                            {output.map((row, index) => (
                            <tr key={index}>
                                <td>{row.spinNumber}</td>
                                <td>{row.actualNumber}</td>
                                <td>{row.betAmount}</td>
                                <td>{row.wonOrLoss}</td>
                                <td>{row.bankroll}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

function MGLover() {
    const [value, setValue] = useState('');
    const [output, setOutput] = useState([]);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        anotherFunction(value);
    };
    
    const anotherFunction = (unit) => {
        let redFlag = 0;
		let blackFlag = 0;
		let evenFlag = 0;
		let oddFlag = 0;
		let lowFlag = 0;
		let highFlag = 0;
		let firstDozFlag = 0;
		let secDozFlag = 0;
		let thirdDozFlag = 0;
		let column1Flag = 0;
		let column2Flag = 0;
		let column3Flag = 0;

		let flags = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

		const data = [];
		let inc = 1;
		let spin = 1;
		let currProfit = 0;
		let bet = 0;

		while (true) {
			const row = {};
			var n = Math.floor(Math.random() * 37);
			row.spinNumber = spin;
			row.actualNumber = n;
			for (let i = 0; i < 12; i++) {
				if (flags[i] === 0)
					bet += (Number(unit) * inc);
			}
			row.betAmount = bet;
			let winners = "";
			if (n === 0) {
        		inc *= 2;
		        spin += 1;
				row.winningNumbers = '';
				row.currProfit = currProfit - bet;
				bet = 0;
				continue;
			}
			if (n >= 0 && n <= 18 && lowFlag === 0) {
				winners = winners + " Low ";
				lowFlag = 1;
                flags[0] = 1;
				currProfit = currProfit + (Number(unit) * inc);
			}
			if (n >= 19 && n <= 36 && highFlag === 0) {
				winners = winners + " High ";
				highFlag = 1;
                flags[1] = 1;
				currProfit = currProfit + (Number(unit) * inc);
			}
			if ((n % 2) === 0 && evenFlag === 0) {
				winners = winners + " Even ";
				evenFlag = 1;
                flags[2] = 1;
				currProfit = currProfit + (Number(unit) * inc);
			}
			if ((n % 2) === 1 && oddFlag === 0) {
				winners = winners + " Odd ";
				oddFlag = 1;
                flags[3] = 1;
				currProfit = currProfit + (Number(unit) * inc);
			}
			if (n >= 1 && n <= 12 && firstDozFlag === 0) {
				winners = winners + " 1st-Dozen ";
				firstDozFlag = 1;
                flags[4] = 1;
				currProfit = currProfit + (Number(unit) * inc * 2);
			}
			if (n >= 13 && n <= 24 && secDozFlag === 0) {
				winners = winners + " 2nd-Dozen ";
				secDozFlag = 1;
                flags[5] = 1;
				currProfit = currProfit + (Number(unit) * inc * 2);
			}
			if (n >= 25 && n <= 36 && thirdDozFlag === 0) {
				winners = winners + " 3rd-Dozen ";
				thirdDozFlag = 1;
                flags[6] = 1;
				currProfit = currProfit + (Number(unit) * inc * 2);
			}
			if ((n === 1 || n === 3 || n === 5 || n === 7 || n === 9 || n === 12 || n === 14 || n === 16 || n === 18 || n === 19 || n === 21 || n === 23 || n === 25 || n === 27 || n === 30 || n === 32 || n === 34 || n === 36) && redFlag === 0) {
				winners = winners + " Red ";
				redFlag = 1;
                flags[7] = 1;
		    	currProfit = currProfit + (Number(unit) * inc);
			}
			if ((n === 2 || n === 4 || n === 6 || n === 8 || n === 10 || n === 11 || n === 13 || n === 15 || n === 17 || n === 20 || n === 22 || n === 24 || n === 26 || n === 28 || n === 29 || n === 31 || n === 33 || n === 35) && blackFlag === 0) {
				winners = winners + " Black ";
				blackFlag = 1;
                flags[8] = 1;
				currProfit = currProfit + (Number(unit) * inc);
			}
			if ((n === 1 || n === 4 || n === 7 || n === 10 || n === 13 || n === 16 || n === 19 || n === 22 || n === 25 || n === 28 || n === 31 || n === 34) && column1Flag === 0) {
				winners = winners + " Column-1 ";
				column1Flag = 1;
                flags[9] = 1;
				currProfit = currProfit + (Number(unit) * inc * 2);
			}
			if ((n === 2 || n === 5 || n === 8 || n === 11 || n === 14 || n === 17 || n === 20 || n === 23 || n === 26 || n === 29 || n === 32 || n === 35) && column2Flag === 0) {
				winners = winners + " Column-2 ";
				column2Flag = 1;
                flags[10] = 1;
				currProfit = currProfit + (Number(unit) * inc * 2);
			}
			if ((n % 3) === 0 && column3Flag === 0) {
				winners = winners + " Column-3 ";
				column3Flag = 1;
                flags[11] = 1;
				currProfit = currProfit + (Number(unit) * inc * 2);
			}
			row.winningNumbers = winners;
			for (let i = 0; i < 12; i++) {
				if (flags[i] === 0)
					currProfit = currProfit - (Number(unit) * inc);
			}
			row.profit = currProfit;
			data.push(row);
			if (redFlag === 1 && blackFlag === 1 && evenFlag === 1 && oddFlag === 1 && lowFlag === 1 && highFlag === 1 && firstDozFlag === 1 && secDozFlag === 1 && thirdDozFlag === 1 && column1Flag === 1 && column2Flag === 1 && column3Flag === 1)
				break;
			inc *= 2;
			spin += 1;
			bet = 0;
		}
        setOutput(data);
    };

    return (
        <div>
            <div className="r-intro-box-title">
                <p>Martingale Lover</p>
            </div>
            <div className="r-intro-box-info">
                <p>
                    This strategy starts by placing a 1 unit bet on every outside bet. When each bet wins you clear it and don't bet it agian. Martingale all the losing bets. Stop when all bets have won. 
                </p>
            </div>
            <div className="r-intro-box-title">
                <p>Recommendation</p>
            </div>
            <div className="r-intro-box-info">
                <p>
                    This is an exiting system. You are gaurunteed to place some big bets and start to get nervous about losing a lot of money. However, if you can survive you will come out with a nice profit.
                </p>
            </div>
            <div className="r-intro-box-title">
                <p>Simulation</p>
            </div>
            <div className="r-sim-box-info">
                <form onSubmit={handleFormSubmit}>
                    <p>Enter some values to get started</p>
                    <p>*** For this system only enter the initial 1 unit bet size that will be on all the outside bets ***</p>
                    Unit amount: <input className='input-box' type="text" value={value} onChange={handleChange} />
                    <br /><br />
                    <button type="submit" className="sub-button">Simulate</button>
                </form>
                <div>
                    <table className="output-table">
                        <thead>
                            <tr>
                            <th>Spin</th>
                            <th>Number</th>
                            <th>Bet Amount</th>
                            <th>Winners</th>
                            <th>Profit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {output.map((row, index) => (
                            <tr key={index}>
                                <td>{row.spinNumber}</td>
                                <td>{row.actualNumber}</td>
                                <td>{row.betAmount}</td>
                                <td>{row.winningNumbers}</td>
                                <td>{row.profit}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

function Boardwalk() {
    const [value, setValue] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [output, setOutput] = useState([]);

    const handleChange = (event) => {
        setValue(event.target.value);
    };
      
    const handleChange2 = (event) => {
        setValue2(event.target.value);
    };
      
    const handleChange3 = (event) => {
        setValue3(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        anotherFunction(value, value2, value3);
    };

    const anotherFunction = (spins, roll, unit) => {
        const data = [];
        for (let i = 0; i < spins; i++) {
            let bet = Number(unit);
            var n = Math.floor(Math.random() * 37);
            if (n >= 1 && n <= 12) {
                const row = {};
                row.spinNumber = i + 1;
                row.actualNumber = n;
                row.betAmount = "$ " + Number(bet);
                row.wonOrLoss = 'Win';
                roll = Number(roll) + (Number(unit) * 2);
                row.bankroll = "$ " + roll;
                data.push(row);
                i += 1;
                n = Math.floor(Math.random() * 37);
                if (n >= 13 && n <= 24) {
                    const row = {};
                    row.spinNumber = i + 1;
                    row.actualNumber = n;
                    row.betAmount = "$ " + (Number(bet) * 3);
                    row.wonOrLoss = 'Win';
                    roll = Number(roll) + (Number(unit) * 6);
                    row.bankroll = "$ " + roll;
                    data.push(row);
                    i += 1;
                    n = Math.floor(Math.random() * 37);
                    if (n >= 25 && n <= 36) {
                        const row = {};
                        row.spinNumber = i + 1;
                        row.actualNumber = n;
                        row.betAmount = "$ " + (Number(bet) * 9);
                        row.wonOrLoss = 'Win';
                        roll = Number(roll) + (Number(unit) * 18);
                        row.bankroll = "$ " + roll;
                        data.push(row);
                    } else {
                        const row = {};
                        row.spinNumber = i + 1;
                        row.actualNumber = n;
                        row.betAmount = "$ " + (Number(bet) * 9);
                        row.wonOrLoss = 'Loss';
                        roll = Number(roll) - (Number(unit) * 9);
                        row.bankroll = "$ " + roll;
                        data.push(row);
                    }
                } else {
                    const row = {};
                    row.spinNumber = i + 1;
                    row.actualNumber = n;
                    row.betAmount = "$ " + (Number(bet) * 3);
                    row.wonOrLoss = 'Loss';
                    roll = Number(roll) - (Number(unit) * 3);
                    row.bankroll = "$ " + roll;
                    data.push(row);
                }
            } else {
                const row = {};
                row.spinNumber = i + 1;
                row.actualNumber = n;
                row.betAmount = "$ " + Number(bet);
                row.wonOrLoss = 'Loss';
                roll = Number(roll) - Number(unit);
                row.bankroll = "$ " + roll;
                data.push(row);
            }
        }
        setOutput(data);
    };

    return (
        <div>
            <div className="r-intro-box-title">
                <p>Boardwalk</p>
            </div>
            <div className="r-intro-box-info">
                <p>
                    This strategy involves placing a 1 unit bet on a dozen. once it wins then bet 3 units on a 2nd dozen. if that wins bet 9 units on a 3rd dozen. If that comes you win 27 units and reset down to 1 unit for the nex spin. If you lose at any step you reset back to the first step. 
                </p>
            </div>
            <div className="r-intro-box-title">
                <p>Recommendation</p>
            </div>
            <div className="r-intro-box-info">
                <p>
                    This system is okay. It is good for being able to turn 1 unit into 27 units with only 3 reasonable wins. However, it is also a bit of a grinder system and I'm not a big fan of those. You can allow yourself many chances at it given it is just 1 unit per spin you are risking. 
                </p>
            </div>
            <div className="r-intro-box-title">
                <p>Simulation</p>
            </div>
            <div className="r-sim-box-info">
                <form onSubmit={handleFormSubmit}>
                    <p>Enter some values to get started</p>
                    # of spins: <input className='input-box' type="text" value={value} onChange={handleChange} />
                    Bankroll: <input className='input-box' type="text" value={value2} onChange={handleChange2} />
                    Unit amount: <input className='input-box' type="text" value={value3} onChange={handleChange3} />
                    <br /><br />
                    <button type="submit" className="sub-button">Simulate</button>
                </form>
                <div>
                    <table className="output-table">
                        <thead>
                            <tr>
                            <th>Spin</th>
                            <th>Number</th>
                            <th>Bet Amount</th>
                            <th>Won/Loss</th>
                            <th>Bankroll</th>
                            </tr>
                        </thead>
                        <tbody>
                            {output.map((row, index) => (
                            <tr key={index}>
                                <td>{row.spinNumber}</td>
                                <td>{row.actualNumber}</td>
                                <td>{row.betAmount}</td>
                                <td>{row.wonOrLoss}</td>
                                <td>{row.bankroll}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

function DoubleLoss() {
    const [value, setValue] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');
    const [output, setOutput] = useState([]);

    const handleChange = (event) => {
        setValue(event.target.value);
    };
      
    const handleChange2 = (event) => {
        setValue2(event.target.value);
    };
      
    const handleChange3 = (event) => {
        setValue3(event.target.value);
    };

    const handleChange4 = (event) => {
        setValue4(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        anotherFunction(value, value2, value3, value4);
    };
    
    const anotherFunction = (spins, roll, unit, levels) => {
        const data = [];
        let unit_level = [1, 2, 6, 18, 54, 162, 486, 1458, 4374, 13122];
        let level_count = 0;
        let high_bet = Number(unit);
        let curr_profit = Number(roll);
        let i = 0;
        let curr_result = 0;
        
        for (i = 0; i < spins; i++) {
            var n = Math.floor(Math.random() * 37);
            const row = {};
            row.spinNumber = i + 1;
            row.actualNumber = n;
            row.betAmount = "$ " + high_bet;

            if (Number(level_count) > 0) {
                if (n >= 19 && n <= 36) {
                    row.wonOrLoss = 'Win';
                    curr_result = 1;
                    curr_profit = Number(curr_profit) + Number(high_bet);
                    high_bet = Number(unit);
                    level_count = 0;
                } else {
                    row.wonOrLoss = 'Loss';
                    curr_result = 0;
                    curr_profit = Number(curr_profit) - Number(high_bet);
                    high_bet *= 3;
                    level_count += 1;
                }
            }

            if (level_count === 0) {
                if (n >= 19 && n <= 36) {
                    row.wonOrLoss = 'Win';
                    curr_result = 1;
                    curr_profit = Number(curr_profit) + Number(high_bet);
                    high_bet = Number(unit);
                    level_count = 0;
                } else {
                    row.wonOrLoss = 'Loss';
                    curr_result = 0;
                    curr_profit = Number(curr_profit) - Number(high_bet);
                    high_bet *= 2;
                    level_count += 1;
                }
            }

            row.bankroll = "$ " + Number(curr_profit);
            data.push(row);

            if (level_count === (Number(levels) + 1)) {
                level_count = 0;
                high_bet = Number(unit);
                if ((unit_level[levels] * Number(unit)) > Number(curr_profit)) {
                    break;
                }
            }
        }

        i += 1;

        while (!curr_result) {
            n = Math.floor(Math.random() * 37);
            const row = {};
            row.spinNumber = i;
            i += 1;
            row.actualNumber = n;
            row.betAmount = "$ " + Number(high_bet);
            if (n >= 19 && n <= 36) {
                row.wonOrLoss = 'Win';
                curr_profit = Number(curr_profit) + Number(high_bet);
                row.bankroll = "$ " + Number(curr_profit);
                data.push(row);
                break;
            } else {
                row.wonOrLoss = 'Loss';
                curr_profit = Number(curr_profit) - Number(high_bet);
                high_bet *= 3;
                level_count += 1;
            }
            row.bankroll = "$ " + Number(curr_profit);
            data.push(row);
            if (level_count === Number(levels) + 1) {
                break;
            }
        }
        setOutput(data);
    };

    return (
        <div>
            <div className="r-intro-box-title">
                <p>Double your loss Martingale</p>
            </div>
            <div className="r-intro-box-info">
            <h2>Overview:</h2>
                <p>
                    This strategy is the same as regular Martingale system however instead of doubleing your bet each time you lose you double your entire amount lost to that point.
                </p>
                <h2>How to play:</h2>
                <p>
                    First you need to determine how many levels of Martingale you will be doing. For example, If you are doing four levels of Martingale with a base unit size of $10 then it would look like this.
                    <ul>
                        <li>Bet 1: $10, do this until you lose.</li>
                        <li>Bet 2: $20, this is the 1st level of Martingale. Current loss to this point is $10 so our bet is $20.</li>
                        <li>Bet 3: $60, 2nd level of Martingale. Current loss to this point is $10 + $20 = $30, so our bet is $60.</li>
                        <li>Bet 4: $180, same process as bet 3.</li>
                        <li>Bet 5: $540, for 4 levels this is the final bet no matter what. Win or lose.</li>
                    </ul>
                    You will do this same process for whatever amount of levels that you choose. The number of levels just corresponds to how many times you will continue to double your loss. Basically for this system the first time you lose you double your bet and everytime after that you triple it. If at any point you win you got back to the original bet size for the next spin.
                </p>
                <h2>Input fields for simulator:</h2>
                <p>
                    <ul>
                        <li>Spins: How many spins you want to simulate.</li>
                        <li>Bankroll: How much money you are bringing to the table.</li>
                        <li>Unit Size: How much is your original bet going to be. In this system it's your first bet before any Martingaleing.</li>
                        <li>Levels: How many times do you want to keep doubling your bet on a losing streak. Your bankroll should be able to cover the amount needed to place all the bets. If you have 3 levels you will need to cover 1 + 2 + 6 + 18 = 27 units worth of bets. 1 for original then 2, 6, and 18 for 3 levels of double your loss Martingale.</li>
                    </ul>
                </p><br />
            </div>
            <div className="r-intro-box-title">
                <p>Recommendation</p>
            </div>
            <div className="r-intro-box-info">
                <p>
                    If you like Martingale but don't like how you bet a lot just to win your money back then this is a good variation because as the bets go up you make more profit. 
                </p>
            </div>
            <div className="r-intro-box-title">
                <p>Simulation</p>
            </div>
            <div className="r-sim-box-info">
                <form onSubmit={handleFormSubmit}>
                    <p>Enter some values to get started</p>
                    <p>*** For this simulation bets will be placed on the (19-36) outside bet ***</p>
                    Spins: <input className='input-box' type="text" value={value} onChange={handleChange} />
                    Bankroll: <input className='input-box' type="text" value={value2} onChange={handleChange2} />
                    Unit size: <input className='input-box' type="text" value={value3} onChange={handleChange3} />
                    Levels: <input className='input-box' type="text" value={value4} onChange={handleChange4} />
                    <br /><br />
                    <button type="submit" className="sub-button">Simulate</button>
                </form>
                <div>
                    <table className="output-table">
                        <thead>
                            <tr>
                            <th>Spin</th>
                            <th>Number</th>
                            <th>Bet Amount</th>
                            <th>Won/Loss</th>
                            <th>Bankroll</th>
                            </tr>
                        </thead>
                        <tbody>
                            {output.map((row, index) => (
                            <tr key={index}>
                                <td>{row.spinNumber}</td>
                                <td>{row.actualNumber}</td>
                                <td>{row.betAmount}</td>
                                <td>{row.wonOrLoss}</td>
                                <td>{row.bankroll}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

function Rumple() {
    const [value, setValue] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [output, setOutput] = useState([]);

    const handleChange = (event) => {
        setValue(event.target.value);
    };
      
    const handleChange2 = (event) => {
        setValue2(event.target.value);
    };
      
    const handleChange3 = (event) => {
        setValue3(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        anotherFunction(value, value2, value3);
    };
    
    const anotherFunction = (spins, roll, unit) => {
        const data = [];
        for (let i = 0; i < spins; i++) {
            const row = {};
            var n = Math.floor(Math.random() * 37);
            row.spinNumber = i + 1;
            row.actualNumber = n;
            row.betAmount = "$ " + (Number(unit) * 6);
            if (n === 1 || n === 2 || n === 4 || n === 5 || n === 8 || n === 9 || n === 11 || n === 12 || n === 13 || n === 14 || n === 16 || n === 17 || n === 20 || n === 21 || n === 23 || n === 24 || n === 25 || n === 26 || n === 28 || n === 29 || n === 32 || n === 33 || n === 35 || n === 36) {
                row.wonOrLoss = 'Win';
                roll = Number(roll) + (Number(unit) * 3);
            } else {
                row.wonOrLoss = 'Loss';
                roll = Number(roll) - (Number(unit) * 6);
            }
            row.bankroll = "$ " + roll;
            data.push(row);
            if (roll < Number(unit) * 6) {
                break;
            }
        }
        setOutput(data);
    };

    return (
        <div>
            <div className="r-intro-box-title">
                <p>Rumple</p>
            </div>
            <div className="r-intro-box-info">
                <h2>Overview:</h2>
                <p>
                    This strategy involves betting 1 unit on 6 different corners. Just make sure thar none of the corner bets overlap. If a corner bet wins then you win a profit of 1 unit and it all corner bets lose then you lose 6 units.
                </p>
                <h2>How to play:</h2>
                <p>
                    If you are playing this systems with a base unit of $10 then it would look like this.
                    <ul>
                        <li>Place a $10 bet on 6 corners of your choice as long as there is not overlap.</li>
                        <li>Example 6 corner bets: [1,2,4,5], [8,9,11,12], [13,14,16,17], [20,21,23,24], [25,26,28,29], [32,33,35,36].</li>
                    </ul>
                    You will do the same bet every spin regardless if you win or lose the previous spin. You can change which corners you play ever spin if you want so long as you make sure there is no over lap in the corner bets.
                </p>
                <h2>Input fields for simulator:</h2>
                <p>
                    <ul>
                        <li>Spins: How many spins you want to simulate.</li>
                        <li>Bankroll: How much money you are bringing to the table.</li>
                        <li>Unit Size: How much are you placing on each individual corner bet.</li>
                    </ul>
                </p><br />
            </div>
            <div className="r-intro-box-title">
                <p>Recommendation</p>
            </div>
            <div className="r-intro-box-info">
                <p>
                    This is a flat betting system with no 2nd step which I typically wouldn't go for myself. However, it is a very simple system so if that is what you're after then this could be good. Also, if you just want to collect some casino comps then this could be good as well. 
                </p>
            </div>
            <div className="r-intro-box-title">
                <p>Simulation</p>
            </div>
            <div className="r-sim-box-info">
                <form onSubmit={handleFormSubmit}>
                    <p>Enter some values to get started</p>
                    Spins: <input className='input-box' type="text" value={value} onChange={handleChange} />
                    Bankroll: <input className='input-box' type="text" value={value2} onChange={handleChange2} />
                    Unit size: <input className='input-box' type="text" value={value3} onChange={handleChange3} />
                    <br /><br />
                    <button type="submit" className="sub-button">Simulate</button>
                </form>
                <div>
                    <table className="output-table">
                        <thead>
                            <tr>
                            <th>Spin</th>
                            <th>Number</th>
                            <th>Bet Amount</th>
                            <th>Won/Loss</th>
                            <th>Bankroll</th>
                            </tr>
                        </thead>
                        <tbody>
                            {output.map((row, index) => (
                            <tr key={index}>
                                <td>{row.spinNumber}</td>
                                <td>{row.actualNumber}</td>
                                <td>{row.betAmount}</td>
                                <td>{row.wonOrLoss}</td>
                                <td>{row.bankroll}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

function Chamba() {
    const [value, setValue] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [output, setOutput] = useState([]);

    const handleChange = (event) => {
        setValue(event.target.value);
    };
      
    const handleChange2 = (event) => {
        setValue2(event.target.value);
    };

    const handleChange3 = (event) => {
        setValue3(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        anotherFunction(value, value2, value3);
    };
    
    const anotherFunction = (spins, roll, unit) => {
        const data = [];
        let curr_profit = Number(roll);
        for (let i = 0; i < spins; i++) {
            const row = {};
            var n = Math.floor(Math.random() * 37);
            row.spinNumber = i + 1;
            row.actualNumber = n;
            row.betAmount = "$ " + (Number(unit) * 35);
            if ((n >= 1 && n <= 4) || n === 6 || n === 7 || (n >= 9 && n <= 16) || n === 18 || n === 19 || (n >= 21 && n <= 24) || n === 28 || n === 30 || n === 31 || n === 33) {
                row.wonOrLoss = 'Win';
                curr_profit = Number(curr_profit) + (Number(unit) * 7);
            } else if ((n >= 25 && n <= 27) || (n >= 34 && n <= 36)) {
                row.wonOrLoss = 'Win';
                curr_profit = Number(curr_profit) + Number(unit);
            } else if (n === 5 || n === 8 || n === 17 || n === 20 || n === 29 || n === 32) {
                row.wonOrLoss = 'Loss';
                curr_profit = Number(curr_profit) - (Number(unit) * 29);
            } else {
                row.wonOrLoss = 'Loss';
                curr_profit = Number(curr_profit) - (Number(unit) * 35);
            }
            row.bankroll = "$ " + curr_profit;
            data.push(row);
            if (curr_profit < Number(unit) * 35) {
                break;
            }
        }
        setOutput(data);
    };

    return (
        <div>
            <div className="r-intro-box-title">
                <p>Chamba</p>
            </div>
            <div className="r-intro-box-info">
                <h2>Overview:</h2>
                <p>
                    This strategy involves placing a 1 unit bet on 30 numbers straigh up. Leaving 7 numbers open on a Euro wheel. On top of that you play Chamba 2.0 which is betting on two dozens with 2 units on each and a 1 unit bet on a double street that covers the 2 open numbers in the third dozen that were not covered by the straight up bets. By doing this you will win something on every number except for 0. Not every number will be profit but it will minimize loss on non straight up hits.
                </p>
                <h2>How to play:</h2>
                <p>
                    If you are playing this systems with a base unit of $10 then it would look like this.
                    <ul>
                        <li>Place a $10 bet on every number straight up except for: [0,5,8,17,20,29,32].</li>
                        <li>Place a $20 bet on 1st $ and 2nd dozen each.</li>
                        <li>Place a $10 bet on th double street of: [28,29,30,31,32,33].</li>
                    </ul>
                    You will place the same bet for every spin regardless if you win or lose the previous spin.
                </p>
                <h2>Input fields for simulator:</h2>
                <p>
                    <ul>
                        <li>Spins: How many spins you want to simulate.</li>
                        <li>Bankroll: How much money you are bringing to the table.</li>
                        <li>Unit Size: How much are you placing on each individual number straight up. Also the amount for the double street.</li>
                    </ul>
                </p><br />
            </div>
            <div className="r-intro-box-title">
                <p>Recommendation</p>
            </div>
            <div className="r-intro-box-info">
                <p>
                    I usually don't like systems that cover the entire board because I feel it is usually a bit unecessary and is a bit too much. I probably wouldn't recomend this system. It is also a flat bet system which I am also not a fan of. 
                </p>
            </div>
            <div className="r-intro-box-title">
                <p>Simulation</p>
            </div>
            <div className="r-sim-box-info">
                <form onSubmit={handleFormSubmit}>
                    <p>Enter some values to get started</p>
                    # of spins: <input className='input-box' type="text" value={value} onChange={handleChange} />
                    Bankroll: <input className='input-box' type="text" value={value2} onChange={handleChange2} />
                    Unit amount: <input className='input-box' type="text" value={value3} onChange={handleChange3} />
                    <br /><br />
                    <button type="submit" className="sub-button">Simulate</button>
                </form>
                <div>
                    <table className="output-table">
                        <thead>
                            <tr>
                            <th>Spin</th>
                            <th>Number</th>
                            <th>Bet Amount</th>
                            <th>Won/Loss</th>
                            <th>Bankroll</th>
                            </tr>
                        </thead>
                        <tbody>
                            {output.map((row, index) => (
                            <tr key={index}>
                                <td>{row.spinNumber}</td>
                                <td>{row.actualNumber}</td>
                                <td>{row.betAmount}</td>
                                <td>{row.wonOrLoss}</td>
                                <td>{row.bankroll}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

function Chamba2PR() {
    const [value, setValue] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [output, setOutput] = useState([]);

    const handleChange = (event) => {
        setValue(event.target.value);
    };
      
    const handleChange2 = (event) => {
        setValue2(event.target.value);
    };
      
    const handleChange3 = (event) => {
        setValue3(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        anotherFunction(value, value2, value3);
    };
    
    const anotherFunction = (spins, roll, unit) => {
        const data = [];
        for (let i = 0; i < spins; i++) {
            const row = {};
            var n = Math.floor(Math.random() * 37);
            row.spinNumber = i + 1;
            row.actualNumber = n;
            row.betAmount = "$ " + (Number(unit) * 31);
            if (n >= 1 && n <= 30) {
                if ((n % 3) === 0) {
                    row.wonOrLoss = 'Loss';
                    roll = Number(roll) - Number(unit);
                } else {
                    row.wonOrLoss = 'Win';
                    roll = Number(roll) + (Number(unit) * 8);
                }
            } else if (n === 31 || n === 32 || n === 34 || n === 35) {
                row.wonOrLoss = 'Loss';
                roll = Number(roll) - (Number(unit) * 22);
            } else {
                row.wonOrLoss = 'Loss';
                roll = Number(roll) - (Number(unit) * 31);
            }
            row.bankroll = "$ " + roll;
            data.push(row);
            if (roll < Number(unit) * 31) {
                break;
            }
        }
        setOutput(data);
    };

    return (
        <div>
            <div className="r-intro-box-title">
                <p>Chamba 2.0 plus Rumple</p>
            </div>
            <div className="r-intro-box-info">
                <h2>Overview:</h2>
                <p>
                    This strategy involves playing two strategies at the same time. You play Chamba 2.0 betting 10 units on the 1st and 2nd dozens each with 5 units on a double street in the 3rd dozen. On top of that you play Rumple with 1 unit on six corners each. This is a flat bet system.
                </p>
                <h2>How to play:</h2>
                <p>
                    If you are playing this systems with a base unit of $10 then it would look like this.
                    <ul>
                        <li>Place a $10 bet on 6 corners individually. See the Rumple section for more information if still unsure.</li>
                        <li>Place a $100 bet on the 1st & 2nd dozen each.</li>
                        <li>Place a $50 bet on a double street in the 3rd dozen.</li>
                    </ul>
                    You will place the same bet for every spin regardless if you win or lose the previous spin.
                </p>
                <h2>Input fields for simulator:</h2>
                <p>
                    <ul>
                        <li>Spins: How many spins you want to simulate.</li>
                        <li>Bankroll: How much money you are bringing to the table.</li>
                        <li>Unit Size: How much are you placing on each corner individually.</li>
                    </ul>
                </p><br />
            </div>
            <div className="r-intro-box-title">
                <p>Recommendation</p>
            </div>
            <div className="r-intro-box-info">
                <p>
                    This is another flat bet system which I am not a fan of. It is also more complicated than other flat bet systems since it involves playing two systems at the same time. It covers a large portion of the board Similar to Chamba and I feel it is a bit unecessary.
                </p>
            </div>
            <div className="r-intro-box-title">
                <p>Simulation</p>
            </div>
            <div className="r-sim-box-info">
                <form onSubmit={handleFormSubmit}>
                    <p>Enter some values to get started</p>
                    Spins: <input className='input-box' type="text" value={value} onChange={handleChange} />
                    Bankroll: <input className='input-box' type="text" value={value2} onChange={handleChange2} />
                    Unit size: <input className='input-box' type="text" value={value3} onChange={handleChange3} />
                    <br /><br />
                    <button type="submit" className="sub-button">Simulate</button>
                </form>
                <div>
                    <table className="output-table">
                        <thead>
                            <tr>
                            <th>Spin</th>
                            <th>Number</th>
                            <th>Bet Amount</th>
                            <th>Won/Loss</th>
                            <th>Bankroll</th>
                            </tr>
                        </thead>
                        <tbody>
                            {output.map((row, index) => (
                            <tr key={index}>
                                <td>{row.spinNumber}</td>
                                <td>{row.actualNumber}</td>
                                <td>{row.betAmount}</td>
                                <td>{row.wonOrLoss}</td>
                                <td>{row.bankroll}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

function MVP() {
    const [value, setValue] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');
    const [value5, setValue5] = useState('');
    const [output, setOutput] = useState([]);

    const handleChange = (event) => {
        setValue(event.target.value);
    };
      
    const handleChange2 = (event) => {
        setValue2(event.target.value);
    };
      
    const handleChange3 = (event) => {
        setValue3(event.target.value);
    };

    const handleChange4 = (event) => {
        setValue4(event.target.value);
    };

    const handleChange5 = (event) => {
        setValue5(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        anotherFunction(value, value2, value3, value4, value5);
    };
    
    const anotherFunction = (n1, n2, n3, n4, unit) => {
        const data = [];
        const row = {};
        row.avoiding = String(n1) + " - " + String(n2) + " - " + String(n3) + " - " + String(n4);
        var n = Math.floor(Math.random() * 37);
        row.actualNumber = n;
        row.betAmount = "$ " + (Number(unit) * 33);
        if (n !== Number(n1) && n !== Number(n2) && n !== Number(n3) && n !== Number(n4)) {
            row.wonOrLoss = "Win $ " + (Number(unit) * 3);
        } else {
            row.wonOrLoss = "Lose $ " + (Number(unit) * 33);
        }
        data.push(row);
        setOutput(data);
    };

    return (
        <div>
            <div className="r-intro-box-title">
                <p>MVP System</p>
            </div>
            <div className="r-intro-box-info">
                <h2>Overview:</h2>
                <p>
                    This strategy involves betting 1 unit on every number except 4 of them. By doing this you bet on 33 numbers. If you avoid the 4 numbers that you pick then you will win a profit of 3 units. This strategy is a one spin system.
                </p>
                <h2>How to play:</h2>
                <p>
                    If you are playing this systems with a base unit of $10 then it would look like this.
                    <ul>
                        <li>Place a $10 bet on every number except for the 4 numbers that you selected to leave open.</li>
                    </ul>
                    You will place the same bet for every spin regardless if you win or lose the previous spin.
                </p>
                <h2>Input fields for simulator:</h2>
                <p>
                    <ul>
                        <li>1st, 2nd, 3rd, and 4th #: These are the 4 numbers on the board that you will not bet.</li>
                        <li>Unit size: How much you are betting on each number straight up.</li>
                    </ul>
                </p><br />
            </div>
            <div className="r-intro-box-title">
                <p>Recommendation</p>
            </div>
            <div className="r-intro-box-info">
                <p>
                    This strategy is a true gamble. Walk up to a table, slelect 4 numbers and hope they don't come up for a quick profit. However, the downside is that if one of those numbers come up you are out 33 units.
                </p>
            </div>
            <div className="r-intro-box-title">
                <p>Simulation</p>
            </div>
            <div className="r-sim-box-info">
                <form onSubmit={handleFormSubmit}>
                    <p>Enter some values to get started</p>
                    1st #: <input className='input-box' type="text" value={value} onChange={handleChange} />
                    2nd #: <input className='input-box' type="text" value={value2} onChange={handleChange2} />
                    3rd #: <input className='input-box' type="text" value={value3} onChange={handleChange3} />
                    4th #: <input className='input-box' type="text" value={value4} onChange={handleChange4} /><br />
                    Unit size: <input className='input-box' type="text" value={value5} onChange={handleChange5} />
                    <br /><br />
                    <button type="submit" className="sub-button">Simulate</button>
                </form>
                <div>
                    <table className="output-table">
                        <thead>
                            <tr>
                            <th>Avoiding</th>
                            <th>Number</th>
                            <th>Bet Amount</th>
                            <th>Won/Loss</th>
                            </tr>
                        </thead>
                        <tbody>
                            {output.map((row, index) => (
                            <tr key={index}>
                                <td>{row.avoiding}</td>
                                <td>{row.actualNumber}</td>
                                <td>{row.betAmount}</td>
                                <td>{row.wonOrLoss}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

function TwoDozenMG() {
    const [value, setValue] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');
    const [output, setOutput] = useState([]);

    const handleChange = (event) => {
        setValue(event.target.value);
    };
      
    const handleChange2 = (event) => {
        setValue2(event.target.value);
    };
      
    const handleChange3 = (event) => {
        setValue3(event.target.value);
    };

    const handleChange4 = (event) => {
        setValue4(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        anotherFunction(value, value2, value3, value4);
    };
    
    const anotherFunction = (spins, roll, unit, levels) => {
        const data = [];
        let unit_level = [1, 3, 9, 27, 81, 243, 729, 2187, 6561, 19683];
        let level_count = 0;
        let curr_profit = Number(roll);
        let bet_unit = Number(unit);
        let i = 0;
        let curr_result = 0;
        
        for (i = 0; i < spins; i++) {
            var n = Math.floor(Math.random() * 37);
            const row = {};
            row.spinNumber = i + 1;
            row.actualNumber = n;
            row.betAmount = "$ " + (Number(bet_unit) * 2);

            if ((n % 3) !== 0) {
                row.wonOrLoss = 'Win';
                curr_result = 1;
                curr_profit = Number(curr_profit) + Number(bet_unit);
                bet_unit = Number(unit);
                level_count = 0;
            } else {
                row.wonOrLoss = 'Loss';
                curr_result = 0;
                curr_profit = Number(curr_profit) - (Number(bet_unit) * 2);
                bet_unit *= 3;
                level_count += 1;
            }

            row.bankroll = "$ " + Number(curr_profit);
            data.push(row);

            if (level_count === (Number(levels) + 1)) {
                level_count = 0;
                bet_unit = Number(unit);
                if ((unit_level[levels] * Number(unit)) > Number(curr_profit)) {
                    break;
                }
            }
        }

        i += 1;

        while (!curr_result) {
            n = Math.floor(Math.random() * 37);
            const row = {};
            row.spinNumber = i;
            i += 1;
            row.actualNumber = n;
            row.betAmount = "$ " + (Number(bet_unit) * 2);
            if (n >= 19 && n <= 36) {
                row.wonOrLoss = 'Win';
                curr_profit = Number(curr_profit) + Number(bet_unit);
                row.bankroll = "$ " + Number(curr_profit);
                data.push(row);
                break;
            } else {
                row.wonOrLoss = 'Loss';
                curr_profit = Number(curr_profit) - (Number(bet_unit) * 2);
                bet_unit *= 3;
                level_count += 1;
            }
            row.bankroll = "$ " + Number(curr_profit);
            data.push(row);
            if (level_count === Number(levels) + 1) {
                break;
            }
        }
        setOutput(data);
    };

    return (
        <div>
            <div className="r-intro-box-title">
                <p>Two Doezen Martingale</p>
            </div>
            <div className="r-intro-box-info">
            <h2>Overview:</h2>
                <p>
                    This strategy involves betting on two dozens and when you lose you triple Martingale.
                </p>
                <h2>How to play:</h2>
                <p>
                    First you need to determine how many levels of Martingale you will be doing. For example, If you are doing four levels of Martingale with a base unit size of $10 then it would look like this.
                    <ul>
                        <li>Bet 1: $10 on dozen 1, $10 on dozen 2, so $20 total bet. Do this until you lose.</li>
                        <li>Bet 2: $30 on dozen 1, $30 on dozen 2, so $60 total bet. This is the 1st level of Martingale.</li>
                        <li>Bet 3: $90 on dozen 1, $90 on dozen 2, so $180 total bet. 2nd level of Martingale.</li>
                        <li>Bet 4: $270 on dozen 1, $270 on dozen 2, so $540 total bet. same process as bet 3.</li>
                        <li>Bet 5: $810 on dozen 1, $810 on dozen 2, so $1620 total bet. For 4 levels this is the final bet no matter what. Win or lose.</li>
                    </ul>
                    You will do this same process for whatever amount of levels that you choose. The number of levels just corresponds to how many times you will continue to keep triple Martingaleing your bet. Basically, for this system the first time you triple your bet each time you lose. If at any point you win, go back to the original bet size for the next spin.
                </p>
                <h2>Input fields for simulator:</h2>
                <p>
                    <ul>
                        <li>Spins: How many spins you want to simulate.</li>
                        <li>Bankroll: How much money you are bringing to the table.</li>
                        <li>Unit Size: How much is your original bet going to be. In this system it's your first bet on each dozen before any Martingaleing.</li>
                        <li>Levels: How many times do you want to keep tripleing your bet on a losing streak. Your bankroll should be able to cover the amount needed to place all the bets. If you have 3 levels you will need to cover 2 + 6 + 18 + 54 = 80 units worth of bets. 1 unit on each doezen so 2 untis total for original bet then 6, 18, and 54 for 3 levels of triple Martingale.</li>
                    </ul>
                </p><br />
            </div>
            <div className="r-intro-box-title">
                <p>Recommendation</p>
            </div>
            <div className="r-intro-box-info">
                <p>
                    This one is not bad because you have a roughly 2/3 chance each time and then have Martingales on top. 
                </p>
            </div>
            <div className="r-intro-box-title">
                <p>Simulation</p>
            </div>
            <div className="r-sim-box-info">
                <form onSubmit={handleFormSubmit}>
                    <p>Enter some values to get started</p>
                    <p>*** For this simulation bets will be placed on the 1st and 2nd columns. Not betting the column with 3, 6, 9, 12, etc. ***</p>
                    Spins: <input className='input-box' type="text" value={value} onChange={handleChange} />
                    Bankroll: <input className='input-box' type="text" value={value2} onChange={handleChange2} />
                    Unit size: <input className='input-box' type="text" value={value3} onChange={handleChange3} />
                    Levels: <input className='input-box' type="text" value={value4} onChange={handleChange4} />
                    <br /><br />
                    <button type="submit" className="sub-button">Simulate</button>
                </form>
                <div>
                    <table className="output-table">
                        <thead>
                            <tr>
                            <th>Spin</th>
                            <th>Number</th>
                            <th>Bet Amount</th>
                            <th>Won/Loss</th>
                            <th>Bankroll</th>
                            </tr>
                        </thead>
                        <tbody>
                            {output.map((row, index) => (
                            <tr key={index}>
                                <td>{row.spinNumber}</td>
                                <td>{row.actualNumber}</td>
                                <td>{row.betAmount}</td>
                                <td>{row.wonOrLoss}</td>
                                <td>{row.bankroll}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

function AnyUntil() {
    const [value, setValue] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [output, setOutput] = useState([]);

    const handleChange = (event) => {
        setValue(event.target.value);
    };
      
    const handleChange2 = (event) => {
        setValue2(event.target.value);
    };
      
    const handleChange3 = (event) => {
        setValue3(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        anotherFunction(value, value2, value3);
    };
    
    const anotherFunction = (num, roll, unit) => {
        const data = [];
        let i = 1
        while (true) {
            const row = {};
            var n = Math.floor(Math.random() * 37);
            row.spinNumber = i;
            row.actualNumber = n;
            row.betAmount = "$ " + Number(unit);
            if (n === Number(num)) {
                row.wonOrLoss = 'Win';
                roll = Number(roll) + (Number(unit) * 35);
                row.bankroll = "$ " + roll;
                data.push(row);
                break;
            } else {
                row.wonOrLoss = 'Loss';
                roll = Number(roll) - Number(unit);
            }
            row.bankroll = "$ " + roll;
            data.push(row);
            if (roll < Number(unit)) {
                break;
            }
            i += 1;
        }
        setOutput(data);
    };

    return (
        <div>
            <div className="r-intro-box-title">
                <p>Bet one number until it comes</p>
            </div>
            <div className="r-intro-box-info">
                <p>
                    This strategy involves picking a single number and betting it every spin until it comes up. You place 1 unit each spin. If the number comes within 35 spins then you make a profit. The earlier it comes the better. Every spin after 35 that it takes to come up you lose an additional 1 unit. I would recomend having atleast 70 units available.
                </p>
            </div>
            <div className="r-intro-box-title">
                <p>Recommendation</p>
            </div>
            <div className="r-intro-box-info">
                <p>
                    This system should only be used 1 time. I would not advise playing this strategy all day. However, I have myself played this system and think it is not bad. It provides many chances and the opportunity to win big off of a small wager. If you get lucky and the number comes up early you win a large profit. And if it comes much later you can get away with minimal loss. I think if you don't want to be bothered with a complicated system then this is good. I personally played strategy while on vacation in Monte Carlo, Monaco and the number came on just the 2nd spin. I got lucky and was rewarded with a large profit. However, the important part is that I walked away after it came up and took the profit.
                </p>
            </div>
            <div className="r-intro-box-title">
                <p>Simulation</p>
            </div>
            <div className="r-sim-box-info">
                <form onSubmit={handleFormSubmit}>
                    <p>Enter some values to get started</p>
                    Number to bet: <input className='input-box' type="text" value={value} onChange={handleChange} />
                    Bankroll: <input className='input-box' type="text" value={value2} onChange={handleChange2} />
                    Unit amount: <input className='input-box' type="text" value={value3} onChange={handleChange3} />
                    <br /><br />
                    <button type="submit" className="sub-button">Simulate</button>
                </form>
                <div>
                    <table className="output-table">
                        <thead>
                            <tr>
                            <th>Spin</th>
                            <th>Number</th>
                            <th>Bet Amount</th>
                            <th>Won/Loss</th>
                            <th>Bankroll</th>
                            </tr>
                        </thead>
                        <tbody>
                            {output.map((row, index) => (
                            <tr key={index}>
                                <td>{row.spinNumber}</td>
                                <td>{row.actualNumber}</td>
                                <td>{row.betAmount}</td>
                                <td>{row.wonOrLoss}</td>
                                <td>{row.bankroll}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

function Romanovsky() {
    const [value, setValue] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [output, setOutput] = useState([]);

    const handleChange = (event) => {
        setValue(event.target.value);
    };
      
    const handleChange2 = (event) => {
        setValue2(event.target.value);
    };
      
    const handleChange3 = (event) => {
        setValue3(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        anotherFunction(value, value2, value3);
    };
    
    const anotherFunction = (spins, roll, unit) => {
        const data = [];
        for (let i = 0; i < spins; i++) {
            const row = {};
            var n = Math.floor(Math.random() * 37);
            row.spinNumber = i + 1;
            row.actualNumber = n;
            row.betAmount = "$ " + (Number(unit) * 8);
            if ((n > 0 && n < 25) || (n === 26 || n === 27 || n === 29 || n === 30 || n === 31 || n === 32 || n === 34 || n === 35)) {
                row.wonOrLoss = 'Win';
                roll = Number(roll) + Number(unit);
            } else {
                row.wonOrLoss = 'Loss';
                roll = Number(roll) - (Number(unit) * 8);
            }
            row.bankroll = "$ " + roll;
            data.push(row);
            if (roll < Number(unit) * 8) {
                break;
            }
        }
        setOutput(data);
    };

    return (
        <div>
            <div className="r-intro-box-title">
                <p>Romanovsky</p>
            </div>
            <div className="r-intro-box-info">
                <h2>Overview:</h2>
                <p>
                    This strategy involves placing 3 units on two dozen then 1 unit on two different corner bets each. Total 8 units. Any winning number results in a profit of 1 unit. There are 6 whacks or 5 on Euro.
                </p>
                <h2>How to play:</h2>
                <p>
                    If you are playing this systems with a base unit of $10 then it would look like this.
                    <ul>
                        <li>Place a $30 bet on the 1st & 2nd dozen each.</li>
                        <li>Place a $10 bet on two non overlapping corner bets in the 3rd dozen. Usually: [25,26,28,29] & [32,33,35,36].</li>
                    </ul>
                    You will place the same bet for every spin regardless if you won or lost on the previous spin.
                </p>
                <h2>Input fields for simulator:</h2>
                <p>
                    <ul>
                        <li>Spins: How many spins you want to simulate.</li>
                        <li>Bankroll: How much money you are bringing to the table.</li>
                        <li>Unit Size: How much are you placing on each corner individually and 1/3 of each dozen bet.</li>
                    </ul>
                </p><br />
            </div>
            <div className="r-intro-box-title">
                <p>Recommendation</p>
            </div>
            <div className="r-intro-box-info">
                <p>
                    I'm not a big fan of this strategy and would not recomend it. Risking 8 units to win 1 and there is no 2nd step. Too much of a grinder system which is not what you want. The only way I would play this is as a one spin system. But there are better systems for that as well.
                </p>
            </div>
            <div className="r-intro-box-title">
                <p>Simulation</p>
            </div>
            <div className="r-sim-box-info">
                <form onSubmit={handleFormSubmit}>
                    <p>Enter some values to get started</p>
                    # of Spins: <input className='input-box' type="text" value={value} onChange={handleChange} />
                    Bankroll: <input className='input-box' type="text" value={value2} onChange={handleChange2} />
                    Unit amount: <input className='input-box' type="text" value={value3} onChange={handleChange3} />
                    <br /><br />
                    <button type="submit" className="sub-button">Simulate</button>
                </form>
                <div>
                    <table className="output-table">
                        <thead>
                            <tr>
                            <th>Spin</th>
                            <th>Number</th>
                            <th>Bet Amount</th>
                            <th>Won/Loss</th>
                            <th>Bankroll</th>
                            </tr>
                        </thead>
                        <tbody>
                            {output.map((row, index) => (
                            <tr key={index}>
                                <td>{row.spinNumber}</td>
                                <td>{row.actualNumber}</td>
                                <td>{row.betAmount}</td>
                                <td>{row.wonOrLoss}</td>
                                <td>{row.bankroll}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

function OneUntilMG() {
    const [value, setValue] = useState('');
    const [value2, setValue2] = useState('');
    const [output, setOutput] = useState([]);

    const handleChange = (event) => {
        setValue(event.target.value);
    };
      
    const handleChange2 = (event) => {
        setValue2(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        anotherFunction(value, value2);
    };
    
    const anotherFunction = (num, unit) => {
        const data = [];
        let i = 1
        let roll = 273 * Number(unit);
        while (true) {
            if (i <= 35) {
                const row = {};
                var n = Math.floor(Math.random() * 37);
                row.spinNumber = i;
                row.actualNumber = n;
                row.betAmount = "$ " + Number(unit);
                if (n === Number(num)) {
                    row.wonOrLoss = 'Win';
                    roll = Number(roll) + (Number(unit) * 35);
                    row.bankroll = "$ " + roll;
                    data.push(row);
                    break;
                } else {
                    row.wonOrLoss = 'Loss';
                    roll = Number(roll) - Number(unit);
                }
                row.bankroll = "$ " + roll;
                data.push(row);
                i += 1;
            } else if (i <= 52) {
                const row = {};
                n = Math.floor(Math.random() * 37);
                row.spinNumber = i;
                row.actualNumber = n;
                row.betAmount = "$ " + (Number(unit) * 2);
                if (n === Number(num)) {
                    row.wonOrLoss = 'Win';
                    roll = Number(roll) + (Number(unit) * 70);
                    row.bankroll = "$ " + roll;
                    data.push(row);
                    break;
                } else {
                    row.wonOrLoss = 'Loss';
                    roll = Number(roll) - (Number(unit) * 2);
                }
                row.bankroll = "$ " + roll;
                data.push(row);
                i += 1;
            } else if (i <= 69) {
                const row = {};
                n = Math.floor(Math.random() * 37);
                row.spinNumber = i;
                row.actualNumber = n;
                row.betAmount = "$ " + (Number(unit) * 4);
                if (n === Number(num)) {
                    row.wonOrLoss = 'Win';
                    roll = Number(roll) + (Number(unit) * 140);
                    row.bankroll = "$ " + roll;
                    data.push(row);
                    break;
                } else {
                    row.wonOrLoss = 'Loss';
                    roll = Number(roll) - (Number(unit) * 4);
                }
                row.bankroll = "$ " + roll;
                data.push(row);
                i += 1;
            } else {
                const row = {};
                n = Math.floor(Math.random() * 37);
                row.spinNumber = i;
                row.actualNumber = n;
                row.betAmount = "$ " + (Number(unit) * 8);
                if (n === Number(num)) {
                    row.wonOrLoss = 'Win';
                    roll = Number(roll) + (Number(unit) * 280);
                    row.bankroll = "$ " + roll;
                    data.push(row);
                    break;
                } else {
                    row.wonOrLoss = 'Loss';
                    roll = Number(roll) - (Number(unit) * 8);
                }
                row.bankroll = "$ " + roll;
                data.push(row);
                if (roll < Number(unit)) {
                    break;
                }
                i += 1;
            }
        }
        setOutput(data);
    };

    return (
        <div>
            <div className="r-intro-box-title">
                <p>Bet one number until it comes with a three level Martingale</p>
            </div>
            <div className="r-intro-box-info">
                <p>
                    This strategy is the same as the original 1 until except for every 35 spins without the number coming you double your bet. So for the first 35 spins you bet 1 unit. If the number does not come then from spins 36-52 you bet 2 units, 4 units for spins 53-69, and 8 units for spins 70-86. You stop after the number comes. Using this betting strategy as long as the number comes within the first 86 spins then you make a profit.
                </p>
            </div>
            <div className="r-intro-box-title">
                <p>Recommendation</p>
            </div>
            <div className="r-intro-box-info">
                <p>
                    Anything using the Martingale system should be used with caution as it leaves you vulnerable to a large loss. If we take a $10 unit for example if the number does not come after 86 spins then you will take a loss of $2,730. However the odds are low. So if you want a high percentage strategy and willing to risk a big loss then this is a good strategy. Similar to the original version I would not play this system for long. Considering this one allows for 105 spins I would say you could get a away with playing this for maybe 3 rounds. I wouldn't advise doing this for a long time but in the short term it could be a good play. Martingales should be played quick. In and out.
                </p>
            </div>
            <div className="r-intro-box-title">
                <p>Simulation</p>
            </div>
            <div className="r-sim-box-info">
                <form onSubmit={handleFormSubmit}>
                    <p>Enter some values to get started</p>
                    <p>*** For this simulation I will automatically set the bankroll to be 273 times the starting unit ***</p>
                    Number to bet: <input className='input-box' type="text" value={value} onChange={handleChange} />
                    Starting Unit: <input className='input-box' type="text" value={value2} onChange={handleChange2} />
                    <br /><br />
                    <button type="submit" className="sub-button">Simulate</button>
                </form>
                <div>
                    <table className="output-table">
                        <thead>
                            <tr>
                            <th>Spin</th>
                            <th>Number</th>
                            <th>Bet Amount</th>
                            <th>Won/Loss</th>
                            <th>Bankroll</th>
                            </tr>
                        </thead>
                        <tbody>
                            {output.map((row, index) => (
                            <tr key={index}>
                                <td>{row.spinNumber}</td>
                                <td>{row.actualNumber}</td>
                                <td>{row.betAmount}</td>
                                <td>{row.wonOrLoss}</td>
                                <td>{row.bankroll}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

function TaiFighter() {
    const [value, setValue] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [output, setOutput] = useState([]);

    const handleChange = (event) => {
        setValue(event.target.value);
    };
      
    const handleChange2 = (event) => {
        setValue2(event.target.value);
    };
      
    const handleChange3 = (event) => {
        setValue3(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        anotherFunction(value, value2, value3);
    };
    
    const anotherFunction = (spins, roll, unit) => {
        const data = [];
        for (let i = 0; i < spins; i++) {
            const row = {};
            var n = Math.floor(Math.random() * 37);
            row.spinNumber = i + 1;
            row.actualNumber = n;
            row.betAmount = "$ " + (Number(unit) * 35);
            if ((n >= 1 && n <= 8) || n === 10 || n === 11 || n === 25 || n === 26 || n === 28 || n === 29 || (n >= 31 && n <= 36)) {
                row.wonOrLoss = 'Win';
                roll = Number(roll) + (Number(unit) * 5);
            } else if (n >= 13 && n <= 24) {
                row.wonOrLoss = 'Win';
                roll = Number(roll) + (Number(unit) * 2);
            } else {
                row.wonOrLoss = 'Loss';
                roll = Number(roll) - (Number(unit) * 31);
            }
            row.bankroll = "$ " + roll;
            data.push(row);
            if (roll < Number(unit) * 31) {
                break;
            }
        }
        setOutput(data);
    };

    return (
        <div>
            <div className="r-intro-box-title">
                <p>Tai Fighter</p>
            </div>
            <div className="r-intro-box-info">
                <h2>Overview:</h2>
                <p>
                    This strategy involves for left to right placing 6 units on a double street, 4 units on a corner, 11 units on the middle dozen, 4 units on a corner and 6 units on a double street. Flat bet system.
                </p>
                <h2>How to play:</h2>
                <p>
                    If you are playing this systems with a base unit of $10 then it would look like this.
                    <ul>
                        <li>Place a $60 bet on 2 different double streets. Usually the first and last. [1-6] & [31-36].</li>
                        <li>Place a $40 bet on 2 different corner bets each. Usually [7,8,10,11] & [25,26,28,29].</li>
                        <li>Place a $110 bet on the 2nd dozen.</li>
                    </ul>
                    You will place the same bet for every spin regardless if you win or lose on the previous spin.
                </p>
                <h2>Input fields for simulator:</h2>
                <p>
                    <ul>
                        <li>Spins: How many spins you want to simulate.</li>
                        <li>Bankroll: How much money you are bringing to the table.</li>
                        <li>Unit Size: The unit size will be 1/6 of the double street bet, 1/4 of the corner bet, and 1/11 of the dozen bet.</li>
                    </ul>
                </p><br />
            </div>
            <div className="r-intro-box-title">
                <p>Recommendation</p>
            </div>
            <div className="r-intro-box-info">
                <p>
                    Another flat bet system. I think this one is better than a lot of other flat bet systems and while covering a lot of the board still is remains relatively simple. If you are going to play a flat bet system then this is not a terrible one. That being said, I would not play this system personally since I don't like flat bet systems.
                </p>
            </div>
            <div className="r-intro-box-title">
                <p>Simulation</p>
            </div>
            <div className="r-sim-box-info">
                <form onSubmit={handleFormSubmit}>
                    <p>Enter some values to get started</p>
                    Spins: <input className='input-box' type="text" value={value} onChange={handleChange} />
                    Bankroll: <input className='input-box' type="text" value={value2} onChange={handleChange2} />
                    Unit size: <input className='input-box' type="text" value={value3} onChange={handleChange3} />
                    <br /><br />
                    <button type="submit" className="sub-button">Simulate</button>
                </form>
                <div>
                    <table className="output-table">
                        <thead>
                            <tr>
                            <th>Spin</th>
                            <th>Number</th>
                            <th>Bet Amount</th>
                            <th>Won/Loss</th>
                            <th>Bankroll</th>
                            </tr>
                        </thead>
                        <tbody>
                            {output.map((row, index) => (
                            <tr key={index}>
                                <td>{row.spinNumber}</td>
                                <td>{row.actualNumber}</td>
                                <td>{row.betAmount}</td>
                                <td>{row.wonOrLoss}</td>
                                <td>{row.bankroll}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

function EveryTimeMG() {
    const [value, setValue] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');
    const [output, setOutput] = useState([]);

    const handleChange = (event) => {
        setValue(event.target.value);
    };
      
    const handleChange2 = (event) => {
        setValue2(event.target.value);
    };
      
    const handleChange3 = (event) => {
        setValue3(event.target.value);
    };

    const handleChange4 = (event) => {
        setValue4(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        anotherFunction(value, value2, value3, value4);
    };
    
    const anotherFunction = (spins, roll, unit, levels) => {
        const data = [];
        let unit_level = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1028];;
        let level_count = 0;
        let low_bet = Number(unit);
        let high_bet = Number(unit) * 2;
        let curr_profit = Number(roll);
        let stop_flag = 0;
        let i = 0;
        
        for (i = 0; i < spins; i++) {
            var n = Math.floor(Math.random() * 37);
            const row = {};
            row.spinNumber = i + 1;
            row.actualNumber = n;
            row.betLow = "$ " + low_bet;
            row.betHigh = "$ " + high_bet;

            if (n === 0) {
                row.wonOrLoss = 'Loss';
                curr_profit = (Number(curr_profit) - ((Number(low_bet) + Number(high_bet))));
                row.bankroll = "$ " + Number(curr_profit);
                low_bet *= 2;
                high_bet *= 2;
                data.push(row);
                continue;
            }
            
            if (low_bet > high_bet && n >= 1 && n <= 18) {
                row.wonOrLoss = 'Win';
                level_count = 0;
            } else if (high_bet > low_bet && n >= 19 && n <= 36) {
                row.wonOrLoss = 'Win';
                level_count = 0;
            } else {
                row.wonOrLoss = 'Loss';
                level_count += 1;
            }

            if (n >= 19 && n <= 36) {
                curr_profit = Number(curr_profit) + (Number(high_bet) - Number(low_bet));
                high_bet = Number(unit);
                low_bet *= 2;
            } else {
                curr_profit = (Number(curr_profit) - Number(high_bet)) + Number(low_bet);
                high_bet *= 2;
                low_bet = Number(unit);
            }

            row.bankroll = "$ " + Number(curr_profit);
            data.push(row);
            if (level_count === Number(levels)) {
                level_count = 0;
                if (low_bet > high_bet) {
                    low_bet = Number(unit) * 2;
                } else {
                    high_bet = Number(unit) * 2;
                }
            }
            if ((unit_level[levels] * Number(unit)) > Number(roll)) {
                stop_flag = 1;
                break;
            }
        }
        i += 1;
        while (stop_flag === 0) {
            n = Math.floor(Math.random() * 37);
            const row = {};
            row.spinNumber = i;
            i += 1;
            row.actualNumber = n;
            if (Number(low_bet) > Number(high_bet)) {
                if (n >= 1 && n <= 18) {
                    curr_profit = Number(curr_profit) + Number(low_bet);
                    row.betLow = "$ " + Number(low_bet);
                    row.betHigh = "$ 0";
                    row.wonOrLoss = 'Win';
                    row.bankroll = "$ " + Number(curr_profit);
                    data.push(row);
                    break;
                } else {
                    curr_profit = Number(curr_profit) - Number(low_bet);
                    row.betLow = "$ " + Number(low_bet);
                    row.betHigh = "$ 0";
                    row.wonOrLoss = 'Loss';
                    low_bet *= 2;
                }
            } else {
                if (n >= 19 && n <= 36) {
                    curr_profit = Number(curr_profit) + Number(high_bet);
                    row.betLow = "$ 0";
                    row.betHigh = "$ " + Number(high_bet);
                    row.wonOrLoss = 'Win';
                    row.bankroll = "$ " + Number(curr_profit);
                    data.push(row);
                    break;
                } else {
                    curr_profit = Number(curr_profit) - Number(high_bet);
                    row.betLow = "$ 0";
                    row.betHigh = "$ " + Number(high_bet);
                    row.wonOrLoss = 'Loss';
                    high_bet *= 2;
                }
            }
            row.bankroll = "$ " + Number(curr_profit);
            data.push(row);
            level_count += 1;
            if (level_count >= levels) {
                break;
            }
        }
        setOutput(data);
    };

    return (
        <div>
            <div className="r-intro-box-title">
                <p>Win every spin Martingale</p>
            </div>
            <div className="r-intro-box-info">
                <p>
                    This strategy involves playing two Martingale systems at the same time that are betting against themselves. By doing this as long as there is some back and forth ocassionally you will win 1 unit every spin you last.
                </p>
            </div>
            <div className="r-intro-box-title">
                <p>Recommendation</p>
            </div>
            <div className="r-intro-box-info">
                <p>
                    This is a great system.
                </p>
            </div>
            <div className="r-intro-box-title">
                <p>Simulation</p>
            </div>
            <div className="r-sim-box-info">
                <form onSubmit={handleFormSubmit}>
                    <p>Enter some values to get started</p>
                    Spins: <input className='input-box' type="text" value={value} onChange={handleChange} />
                    Bankroll: <input className='input-box' type="text" value={value2} onChange={handleChange2} />
                    Unit size: <input className='input-box' type="text" value={value3} onChange={handleChange3} />
                    Levels: <input className='input-box' type="text" value={value4} onChange={handleChange4} />
                    <br /><br />
                    <button type="submit" className="sub-button">Simulate</button>
                </form>
                <div>
                    <table className="output-table">
                        <thead>
                            <tr>
                            <th>Spin</th>
                            <th>Number</th>
                            <th>Bet Low</th>
                            <th>Bet High</th>
                            <th>Win/Lose</th>
                            <th>Bankroll</th>
                            </tr>
                        </thead>
                        <tbody>
                            {output.map((row, index) => (
                            <tr key={index}>
                                <td>{row.spinNumber}</td>
                                <td>{row.actualNumber}</td>
                                <td>{row.betLow}</td>
                                <td>{row.betHigh}</td>
                                <td>{row.wonOrLoss}</td>
                                <td>{row.bankroll}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

function Chamba2MG() {
    const [value, setValue] = useState('');
    const [value3, setValue3] = useState('');
    const [output, setOutput] = useState([]);

    const handleChange = (event) => {
        setValue(event.target.value);
    };
      
    const handleChange3 = (event) => {
        setValue3(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        anotherFunction(value, value3);
    };
    
    const anotherFunction = (spins, unit) => {
        const data = [];
        let roll = 30 * Number(unit);
        for (let i = 0; i < spins; i++) {
            var n = Math.floor(Math.random() * 37);
            if (n >= 1 && n <= 30) {
                const row = {};
                row.spinNumber = i + 1;
                row.actualNumber = n;
                row.betAmount = "$ " + (Number(unit) * 5);
                row.wonOrLoss = 'Win';
                roll = Number(roll) + Number(unit);
                row.bankroll = "$ " + roll;
                data.push(row);
            } else {
                const row = {};
                row.spinNumber = i + 1;
                row.actualNumber = n;
                row.betAmount = "$ " + (Number(unit) * 5);
                row.wonOrLoss = 'Loss';
                roll = Number(roll) - (Number(unit) * 5);
                row.bankroll = "$ " + roll;
                data.push(row);
                n = Math.floor(Math.random() * 37);
                i += 1;
                if (n >= 1 && n <= 30) {
                    const row = {};
                    row.spinNumber = i + 1;
                    row.actualNumber = n;
                    row.betAmount = "$ " + (Number(unit) * 25);
                    row.wonOrLoss = 'Win';
                    roll = Number(roll) + (Number(unit) * 5);
                    row.bankroll = "$ " + roll;
                    data.push(row);
                } else {
                    const row = {};
                    row.spinNumber = i + 1;
                    row.actualNumber = n;
                    row.betAmount = "$ " + (Number(unit) * 25);
                    row.wonOrLoss = 'Loss';
                    roll = Number(roll) - (Number(unit) * 25);
                    row.bankroll = "$ " + roll;
                    data.push(row);
                    break;
                }
            }
        }
        setOutput(data);
    };

    return (
        <div>
            <div className="r-intro-box-title">
                <p>Chamba 2.0 Martingale</p>
            </div>
            <div className="r-intro-box-info">
                <p>
                    This strategy involves placing 2 units on the first two dozens each and 1 unit on a double street in the 3rd dozen. If you lose then quintuple Martingale to 10 units on the first 2 dozens each and 5 units on a double street in the 3rd dozen.
                </p>
            </div>
            <div className="r-intro-box-title">
                <p>Recommendation</p>
            </div>
            <div className="r-intro-box-info">
                <p>
                    If you are willing to take the risk I think this can be a good strategy to just try and survive around 3 - 5 spins and get out.
                </p>
            </div>
            <div className="r-intro-box-title">
                <p>Simulation</p>
            </div>
            <div className="r-sim-box-info">
                <form onSubmit={handleFormSubmit}>
                    <p>Enter some values to get started</p>
                    <p>*** Bankroll will be automatically set to 30 units to cover 1 level of Martingale ***</p>
                    # of spins: <input className='input-box' type="text" value={value} onChange={handleChange} />
                    Unit amount: <input className='input-box' type="text" value={value3} onChange={handleChange3} />
                    <br /><br />
                    <button type="submit" className="sub-button">Simulate</button>
                </form>
                <div>
                    <table className="output-table">
                        <thead>
                            <tr>
                            <th>Spin</th>
                            <th>Number</th>
                            <th>Bet Amount</th>
                            <th>Won/Loss</th>
                            <th>Bankroll</th>
                            </tr>
                        </thead>
                        <tbody>
                            {output.map((row, index) => (
                            <tr key={index}>
                                <td>{row.spinNumber}</td>
                                <td>{row.actualNumber}</td>
                                <td>{row.betAmount}</td>
                                <td>{row.wonOrLoss}</td>
                                <td>{row.bankroll}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

/*
Done - Martingale
     - Hopscotch
     - MG Lover
     - Boardwalk
Done - Double Loss
Done - Rumple
Done - Chamba
Done - Chamba 2.0 + Rumple
Done - MVP
Done - 2 Dozen MG
     - 1 Until
Done - Romanovsky
     - 1 Until with 3 level martingale
Done - Tai Fighter
     - Everytime MG
     - Chamba 2.0 MG
*/

/* 

*** Martingale classic 
*** double loss martingale
*** hopscotch
*** boardwalk
*** mvp
*** rumple
    two dozen
*** two dozen martingale
    fibonacci
*** one number all ways
*** zero or any until it hits
*** Martingale lover
*** both sides martingale
    if you lose dont play again - 500 then 2500
    flat bet on anything
*** chamba
*** chamba 2.0
*** romanovsky - 3 3 2 corner
*** tai fighter 
    modified tai fighter
    1 until with martingale
    ride or die
*/

/* 
Whats Left:

- Show final profit loss
- was the strategy successful?

*/