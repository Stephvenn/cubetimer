export default function PrevTimes(props: {timesArray: string[]}) {

    const {timesArray} = props;
    const allTimes = timesArray.map(time => <p>{time}</p>);

    return (
        <p>{allTimes}</p>
    );

}