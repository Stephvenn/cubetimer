import {SetStateAction} from 'react';

export default function PrevTimes(props: {timesArray: {time: string, scramble: string}[], setTimesArray: React.Dispatch<SetStateAction<{time: string, scramble: string}[]>>}) {

    const {timesArray, setTimesArray} = props;
    
    function deleteTime(index: number)  {
        if (index !== -1){
            const newArray = [...timesArray];
            newArray.splice(index, 1);
            setTimesArray(newArray);
        }
    }

    function deleteAllTimes() {
        setTimesArray([]);
    }
    
    const allTimes: JSX.Element[] = timesArray.map(
        (solve, index) => <p key={index}
        className='fs-5 text-center mb-1 prevtimes' 
        onClick={() => {
            if (window.confirm(`Delete ${timesArray[index]}?`))
                deleteTime(index);
        }}>{solve.time}</p>);
    

    return (
        <div className='prevtimes-container text-center mt-4'>
            <button className='btn btn-secondary mb-2' 
            tabIndex={-1}
            onClick={() => {
                if (window.confirm(`Delete all times?`)){
                    deleteAllTimes();
                }}}>Delete All Times</button>
            <div className='alltimes-container'>
                {allTimes}
            </div>
        </div>
    );

}
