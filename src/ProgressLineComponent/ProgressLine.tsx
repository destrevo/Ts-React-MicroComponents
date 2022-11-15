import React, { useState, useEffect } from 'react'
import './ProgressLine.css'

interface IProgressLineOptions {
    options?: (number | string)[]
}

export default function ProgressLine({ options }: IProgressLineOptions): JSX.Element {
    let [currentActive, setCurrentActive] = useState<number>(1)
    let [progressWidth, setProgressWidth] = useState<number>(0);
    const [steps] = useState<(string | number)[]>(options ?? [1,2,3])

    const next = (): void => {
        if (currentActive !== steps.length) setCurrentActive((prev) => prev + 1)
    }

    const prev = (): void => {
        if (currentActive !== 1) setCurrentActive((prev) => prev - 1)
    }
    useEffect((): void => {
        setProgressWidth((currentActive - 1) / (steps.length - 1) * 100)
    }, [currentActive, steps.length])

    return (
        <div className="progress-line">
            <div className="container">
                <div className="progress-container">
                    <div className="progress" style={{ width: `${progressWidth}%` }}></div>
                    {steps.map((step: (number | string), idx: number): JSX.Element => {
                        return (
                            <div className={`circle ${idx < currentActive && "active"}`} key={idx}>{step}</div>
                        )
                    })}
                </div>

                <button className="btn" id="prev" onClick={prev}>Prev</button>
                <button className="btn" id="next" onClick={next}>Next</button>
            </div>
        </div>
    )
}
