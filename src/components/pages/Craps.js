import { Footer } from "../Footer";
import '../Roulette.css';
import React from 'react';
import { useState } from 'react';

export default function Craps() {

    const [isShown, setIsShown] = useState(false);
    const [isShown2, setIsShown2] = useState(false);
    const [isShown3, setIsShown3] = useState(false);
    const [isShown4, setIsShown4] = useState(false);

    const handleClick = event => {
        setIsShown(current => !current);
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
                <div className="r-strat-box-info">
                    <p>Click on a system to try it out:</p>
                    <div className="buttons">
                        <button style={{ backgroundColor: isShown ? 'rgb(89, 0, 255)' : '' }} class="b-1" onClick={handleClick}>See Saw Go</button>
                        <button style={{ backgroundColor: isShown2 ? 'rgb(89, 0, 255)' : '' }} class="b-1" onClick={handleClick2}>Field MG</button>
                        <button style={{ backgroundColor: isShown3 ? 'rgb(89, 0, 255)' : '' }} class="b-1" onClick={handleClick3}>Place Holder</button>
                        <button style={{ backgroundColor: isShown4 ? 'rgb(89, 0, 255)' : '' }} class="b-1" onClick={handleClick4}>Place Holder</button>
                    </div>
                </div>
                {isShown && <SeeSawGo />}
                {isShown2 && <FieldMG />}
                {isShown3 && <Place1 />}
                {isShown4 && <Place2 />}
            </nav>
            <Footer />
        </>
    )
}
// still issues with stopping point and need to do a dry run to verify correctness - https://www.youtube.com/watch?v=jtYQfXjQ4rQ
function SeeSawGo() {
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
    
    const anotherFunction = (shooters, rack, multiplier) => {
        const data = [];
        let outcomes = [2, 3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 11, 11, 12];
        let round_count = 0;
        let curr_rack = Number(rack);
        let i = 1;
        let roll = 0;
        let r = 0;

        while (Number(round_count) < Number(shooters)) {
            let row = {};
            r = Math.floor(Math.random() * 36);
            roll = outcomes[r];
            row.spinNumber = i;
            i += 1;
            row.rollNumber = Number(roll);
            row.betAmount = '$ ' + Number(multiplier) * 48; // fill this in with correct number
            if (roll >= 6 && roll <= 8) {
                if (roll === 6 || roll === 8) {
                    curr_rack += Number(multiplier) * 28;
                    row.wonOrLoss = 'Win';
                    row.bankroll = '$ ' + Number(curr_rack);
                    data.push(row);
                    row = {};
                    r = Math.floor(Math.random() * 36);
                    roll = outcomes[r];
                    row.spinNumber = i;
                    i += 1;
                    row.rollNumber = Number(roll);
                    row.betAmount = '$ ' + Number(multiplier) * 78; // fill this in with correct number
                    while (roll < 4 || roll > 8) {
                        row.wonOrLoss = '';
                        row.bankroll = '$ ' + Number(curr_rack);
                        data.push(row);
                        row = {}
                        r = Math.floor(Math.random() * 36);
                        roll = outcomes[r];
                        row.spinNumber = i;
                        i += 1;
                        row.rollNumber = Number(roll);
                        row.betAmount = '$ ' + Number(multiplier) * 78; // fill this in with correct number
                    }
                    if (roll === 5 || roll === 6 || roll === 8) {
                        curr_rack += Number(multiplier) * 28;
                        row.wonOrLoss = 'Win';
                        row.bankroll = '$ ' + Number(curr_rack);
                        data.push(row);
                    } else if (roll === 4) {
                        curr_rack += Number(multiplier) * 18;
                        row.wonOrLoss = 'Win';
                        row.bankroll = '$ ' + Number(curr_rack); 
                        data.push(row);
                        row = {};
                        r = Math.floor(Math.random() * 36);
                        roll = outcomes[r];
                        row.spinNumber = i;
                        i += 1;
                        row.rollNumber = Number(roll);
                        row.betAmount = '$ ' + Number(multiplier) * 116; // fill this in with correct number
                        while (roll < 4 || roll > 10) {
                            row.wonOrLoss = '';
                            row.bankroll = '$ ' + Number(curr_rack);
                            data.push(row);
                            r = Math.floor(Math.random() * 36);
                            roll = outcomes[r];
                            row.spinNumber = i;
                            i += 1;
                            row.rollNumber = Number(roll);
                            row.betAmount = '$ ' + Number(multiplier) * 116; // fill this in with correct number
                        }
                        if (roll === 5 || roll === 6 || roll === 8 || roll === 9) {
                            curr_rack += Number(multiplier) * 28;
                            row.wonOrLoss = 'Win';
                            row.bankroll = '$ ' + Number(curr_rack);
                            data.push(row);
                            round_count += 1;
                            row = {};
                            row.spinNumber = '---';
                            row.rollNumber = '---';
                            row.betAmount = '---';
                            row.wonOrLoss = '---';
                            row.bankroll = '---';
                            data.push(row);
                        } else if (roll === 4 || roll === 10) {
                            curr_rack += Number(multiplier) * 18;
                            row.wonOrLoss = 'Win';
                            row.bankroll = '$ ' + Number(curr_rack);
                            data.push(row);
                            round_count += 1;
                            row = {};
                            row.spinNumber = '---';
                            row.rollNumber = '---';
                            row.betAmount = '---';
                            row.wonOrLoss = '---';
                            row.bankroll = '---';
                            data.push(row);
                        } else {
                            curr_rack -= Number(multiplier) * 116;
                            round_count += 1;
                            row.wonOrLoss = 'Loss';
                            row.bankroll = '$ ' + Number(curr_rack);
                            data.push(row);
                            row = {};
                            row.spinNumber = '---';
                            row.rollNumber = '---';
                            row.betAmount = '---';
                            row.wonOrLoss = '---';
                            row.bankroll = '---';
                            data.push(row);
                        }
                    } else if (roll === 7) {
                        curr_rack -= Number(multiplier) * 78;
                        round_count += 1;
                        row = {};
                        row.spinNumber = '---';
                        row.rollNumber = '---';
                        row.betAmount = '---';
                        row.wonOrLoss = '---';
                        row.bankroll = '---';
                        data.push(row);
                        continue;
                    }
                } else {
                    curr_rack -= Number(multiplier) * 48;
                    round_count += 1;
                    row.wonOrLoss = 'Loss';
                    row.bankroll = '$ ' + Number(curr_rack);
                    data.push(row);
                    row = {};
                    row.spinNumber = '---';
                    row.rollNumber = '---';
                    row.betAmount = '---';
                    row.wonOrLoss = '---';
                    row.bankroll = '---';
                    data.push(row);
                }
            } else {
                row.wonOrLoss = '';
                row.bankroll = '$ ' + Number(curr_rack);
                data.push(row);
                continue;
            }
        }
        setOutput(data);
    };

    return (
        <div>
            <div className="r-intro-box-title">
                <p>See Saw Go</p>
            </div>
            <div className="r-intro-box-info">
                <h2>Overview:</h2>
                <p>
                    Description 
                </p>
                <h2>How to play:</h2>
                <p>
                    Playing with a base unit of $10 then it would look like this:
                    <ul>
                        <li>Step 1: </li>
                        <li>Step 2: </li>
                        <li>Step 3: </li>
                        <li>Step 4: </li>
                    </ul>
                    You will do this same process.
                </p>
                <h2>Input fields for simulator:</h2>
                <p>
                    <ul>
                        <li>Shooters: </li>
                        <li>Bankroll: How much money you are bringing to the table.</li>
                        <li>Unit Size: How much is your original bet going to be. Must be divisble.</li>
                    </ul>
                </p><br />
            </div>
            <div className="r-intro-box-title">
                <p>Recommendation</p>
            </div>
            <div className="r-intro-box-info">
                <p>
                    Will fill in later
                </p>
            </div>
            <div className="r-intro-box-title">
                <p>Simulation</p>
            </div>
            <div className="r-sim-box-info">
                <form onSubmit={handleFormSubmit}>
                    <p>Enter some values to get started</p>
                    Shooters: <input className='input-box' type="text" value={value} onChange={handleChange} />
                    Bankroll: <input className='input-box' type="text" value={value2} onChange={handleChange2} />
                    Unit Multiplier: <input className='input-box' type="text" value={value3} onChange={handleChange3} />
                    <br /><br />
                    <button type="submit" className="sub-button">Simulate</button>
                </form>
                <div>
                    <table className="output-table">
                        <thead>
                            <tr>
                            <th>Roll #</th>
                            <th>Outcome</th>
                            <th>Bet Amount</th>
                            <th>Won/Loss</th>
                            <th>Bankroll</th>
                            </tr>
                        </thead>
                        <tbody>
                            {output.map((row, index) => (
                            <tr key={index}>
                                <td>{row.spinNumber}</td>
                                <td>{row.rollNumber}</td>
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

function FieldMG() {
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
    
    const anotherFunction = (rolls, roll, unit, levels) => {
        let outcomes = [2, 3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 11, 11, 12];

        let n = Math.floor(Math.random() * 36);
        let roll_result = outcomes[n];
        const data = {};
        let level = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048];
        let i = 0;
        let bet_amount = 0;
        let curr_profit = roll;

        while (true) {
            let row = {};
            let n = Math.floor(Math.random() * 36);
            roll_result = outcomes[n];
            row.spinNumber = i;
            i += 1;
            row.actualNumber = roll_result;

            if (roll_result <= 4 || roll_result >= 9) {
                bet_amount = Number(unit);
                row.betAmount = Number(bet_amount);
                row.wonOrLost = 'Win';
                if (roll_result === 2 || roll_result === 12) {
                    curr_profit += (Number(bet_amount) * 2);
                } else {
                    curr_profit += Number(bet_amount);
                }
                row.bankroll = curr_profit;
            } else {
                bet_amount *= 2;
                row.betAmount = Number(bet_amount);
                row.wonOrLost = 'Lost';
                curr_profit -= Number(bet_amount);
                row.bankroll = curr_profit;
            }
            data.push(row);
            if (roll < (Number(unit) * level[levels])) {
                break;
            }
        }
        setOutput(data)
    };

    return (
        <div>
            <div className="r-intro-box-title">
                <p>Field Bet Martingale</p>
            </div>
            <div className="r-intro-box-info">
                <h2>Overview:</h2>
                <p>
                    Description 
                </p>
                <h2>How to play:</h2>
                <p>
                    Playing with a base unit of $10 then it would look like this:
                    <ul>
                        <li>Step 1: </li>
                        <li>Step 2: </li>
                        <li>Step 3: </li>
                        <li>Step 4: </li>
                    </ul>
                    You will do this same process.
                </p>
                <h2>Input fields for simulator:</h2>
                <p>
                    <ul>
                        <li>Shooters: </li>
                        <li>Bankroll: How much money you are bringing to the table.</li>
                        <li>Unit Size: How much is your original bet going to be.</li>
                    </ul>
                </p><br />
            </div>
            <div className="r-intro-box-title">
                <p>Recommendation</p>
            </div>
            <div className="r-intro-box-info">
                <p>
                    Will fill in later
                </p>
            </div>
            <div className="r-intro-box-title">
                <p>Simulation</p>
            </div>
            <div className="r-sim-box-info">
                <form onSubmit={handleFormSubmit}>
                    <p>Enter some values to get started</p>
                    Rolls: <input className='input-box' type="text" value={value} onChange={handleChange} />
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
                            <th>Roll #</th>
                            <th>Outcome</th>
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

function Place1() {
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
        
        setOutput(data);
    };

    return (
        <div>
            <div className="r-intro-box-title">
                <p>Place Holder</p>
            </div>
            <div className="r-intro-box-info">
                <h2>Overview:</h2>
                <p>
                    Description 
                </p>
                <h2>How to play:</h2>
                <p>
                    Playing with a base unit of $10 then it would look like this:
                    <ul>
                        <li>Step 1: </li>
                        <li>Step 2: </li>
                        <li>Step 3: </li>
                        <li>Step 4: </li>
                    </ul>
                    You will do this same process.
                </p>
                <h2>Input fields for simulator:</h2>
                <p>
                    <ul>
                        <li>Shooters: </li>
                        <li>Bankroll: How much money you are bringing to the table.</li>
                        <li>Unit Size: How much is your original bet going to be.</li>
                    </ul>
                </p><br />
            </div>
            <div className="r-intro-box-title">
                <p>Recommendation</p>
            </div>
            <div className="r-intro-box-info">
                <p>
                    Will fill in later
                </p>
            </div>
            <div className="r-intro-box-title">
                <p>Simulation</p>
            </div>
            <div className="r-sim-box-info">
                <form onSubmit={handleFormSubmit}>
                    <p>Enter some values to get started</p>
                    Shooters: <input className='input-box' type="text" value={value} onChange={handleChange} />
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

function Place2() {
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
        
        setOutput(data);
    };

    return (
        <div>
            <div className="r-intro-box-title">
                <p>Place Holder</p>
            </div>
            <div className="r-intro-box-info">
                <h2>Overview:</h2>
                <p>
                    Description 
                </p>
                <h2>How to play:</h2>
                <p>
                    Playing with a base unit of $10 then it would look like this:
                    <ul>
                        <li>Step 1: </li>
                        <li>Step 2: </li>
                        <li>Step 3: </li>
                        <li>Step 4: </li>
                    </ul>
                    You will do this same process.
                </p>
                <h2>Input fields for simulator:</h2>
                <p>
                    <ul>
                        <li>Shooters: </li>
                        <li>Bankroll: How much money you are bringing to the table.</li>
                        <li>Unit Size: How much is your original bet going to be.</li>
                    </ul>
                </p><br />
            </div>
            <div className="r-intro-box-title">
                <p>Recommendation</p>
            </div>
            <div className="r-intro-box-info">
                <p>
                    Will fill in later
                </p>
            </div>
            <div className="r-intro-box-title">
                <p>Simulation</p>
            </div>
            <div className="r-sim-box-info">
                <form onSubmit={handleFormSubmit}>
                    <p>Enter some values to get started</p>
                    Shooters: <input className='input-box' type="text" value={value} onChange={handleChange} />
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