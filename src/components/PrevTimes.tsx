import {SetStateAction} from 'react';

export default function PrevTimes(props: {timesArray: string[], setTimesArray: React.Dispatch<SetStateAction<string[]>>}) {

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
        (time, index) => <p key={index}
        className='prevtimes' 
        onClick={() => {
            if (window.confirm(`Delete ${timesArray[index]}?`))
                deleteTime(index);
        }}>{time}</p>);
    

    return (
        <div className='prevtimes-container'>
            <button className='delete-button' 
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
