import {useState, useRef, useEffect, SetStateAction } from "react";

export default function Timer(props: {active: boolean, setActive: React.Dispatch<SetStateAction<boolean>>, setTimesArray: React.Dispatch<React.SetStateAction<string[]>>}) {
	const [time, setTime] = useState(0);
    const {active, setActive, setTimesArray} = props;
	const startTimeRef: any = useRef();
	const requestRef: any = useRef();

	const updateElapsedTime = (timestamp: any) => {
		if (!active) {
			return;
		}
		const currentTime = new Date().getTime();
		const elapsed = currentTime - startTimeRef.current;
		setTime(elapsed);
		requestRef.current = requestAnimationFrame(updateElapsedTime);
	};

	const formatElapsedTime = (elapsedTime: number) => {
		const minutes = Math.floor(elapsedTime / 60000);
		const seconds = Math.floor((elapsedTime % 60000) / 1000);
		const milliseconds = elapsedTime % 1000;
		return `${minutes.toString().padStart(2, "0")}:${seconds
			.toString()
			.padStart(2, "0")}:${milliseconds.toString().padStart(3, "0")}`;
	};

    function handleKeyPress(event: KeyboardEvent): void {
        if (event.code === "Space") {
            console.log("Spacebar pressed");
            setActive((prev) => !prev);
        }
    }

	useEffect(() => {
		window.addEventListener("keydown", handleKeyPress);

		// clean up
		return () => {
			window.removeEventListener("keydown", handleKeyPress);
		};
	}, []);

    useEffect(() => {
        setTimesArray(prev => [...prev, formatElapsedTime(time)]);
        console.log(formattedTime);

    }, [active])

	useEffect(() => {
		if (active) {
			startTimeRef.current = new Date().getTime();
			requestRef.current = requestAnimationFrame(updateElapsedTime);
		} else {
			cancelAnimationFrame(requestRef.current);
		}
	}, [active]);
    
    let formattedTime = formatElapsedTime(time);

	return <p className="timer">{formattedTime}</p>;
}
