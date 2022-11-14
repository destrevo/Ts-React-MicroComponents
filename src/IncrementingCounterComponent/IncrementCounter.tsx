import React, { useEffect } from 'react'
import "./IncrementCounter.css"

interface IncrementCounterProps {
    start: number
    end: number
    duration: number
    uniqeuId: string
}

export default function IncrementCounter({ start, end, duration, uniqeuId }: IncrementCounterProps): JSX.Element {
    const [restart, setRestart] = React.useState(false)

    const incrementingCounter = (start: number, end: number, duration: number, callback: any) => {
        let range = end - start;
        let minTimer = 50;
        let stepTime = Math.abs(Math.floor(duration / range));
        stepTime = Math.max(stepTime, minTimer);
        let startTime = new Date().getTime();
        let endTime = startTime + duration;
        let timer: any;
        function run() {
            let now = new Date().getTime();
            let remaining = Math.max((endTime - now) / duration, 0);
            let value = Math.round(end - (remaining * range));
            callback(value);
            if (value === end) {
                clearInterval(timer);
            }
        }
        timer = setInterval(run, stepTime);
        run();
    }

    useEffect(() => {
        //run after the html is rendered
        incrementingCounter(start, end, duration, (value: any) => {
            document.getElementById(uniqeuId)!.innerHTML = value;
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [restart])


    return (
        <div style={{ textAlign: 'center' }}>
            <div id={uniqeuId} className="counter" />
            {/* remove the button in real cenario */}
            <button onClick={() => { setRestart(x => !x) }}>restart to test</button>
        </div>
    )
}
