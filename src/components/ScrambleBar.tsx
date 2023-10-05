import {useEffect, useState} from 'react';

export default function ScrambleBar(props: {
    active: boolean, 
    curScramble: string, 
    setCurScramble: React.Dispatch<React.SetStateAction<string>>}) {

    const {active, curScramble, setCurScramble} = props;

    useEffect(() => {
        if (!active)
        makeNewScramble();
    }, [active]);

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
        setCurScramble(scramble.join(' '));
    }

    function getRandomInt(max: number) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    

    return (
        <div className='scramble-bar container-fluid mb-10'>
            <div className="row">
                <div className="col col-md-2 text-center">
                    <h1 className='title my-4'>Timer</h1>
                </div>
                <div className="col col-md-8 text-center fs-3 my-4">
                        {curScramble}
                </div>
                <div className="col col-md-2 text-center d-flex justify-content-center">
                    <button className='btn btn-secondary my-2' 
                    onClick={makeNewScramble}
                    tabIndex={-1}
                    >New Scramble</button>
                </div>
            </div>
        </div>
    );
}