import React, {useEffect, useState} from 'react';

export default function ScrambleBar() {

    const [scramble, setScramble] = useState('');

    useEffect(makeNewScramble, []);

    function makeNewScramble() {
        const options = ["F", "R", "U", "B", "L", "D", "F2", "R2", "U2", "B2", "L2", "D2", "F'", "R'", "U'", "B'", "L'", "D'"];
        const scramble = [];
        for (let i = 0; i < 20; i++){
            if (i > 0){
                scramble.push(options[getRandomInt(options.length)]);
                if (scramble[i][0] === scramble[i-1][0]){
                    scramble.pop();
                    i = i - 1;
                }
            } else {
                scramble.push(options[getRandomInt(options.length)]);
            }
            
        }
        setScramble(scramble.join(' '));
    }

    function getRandomInt(max: number) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    

    return (
        <div className='scramble-bar'>
            <h1 className='title'>CubeTimer</h1>
            <h2 className='scramble-text'>
                {scramble}
            </h2>
            <button className='scramble-button' onClick={makeNewScramble}>New Scramble</button>
        </div>
    );
}