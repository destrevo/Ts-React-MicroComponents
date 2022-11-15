import React, { useState } from 'react'
import './RangeSlider.css'

export interface ISliderOptions {
    callback: (value: { index: number, value: (number | string) }) => void
    steps: (number | string)[]
    indexOfDefault: number
}

export default function RangeSlider({ callback, steps, indexOfDefault }: ISliderOptions): JSX.Element {

    const [sliderCurrentValue, setSliderCurrentValue] = useState<number>(indexOfDefault)
    const breakpoints: (number | string)[] = steps
    return (
        <>
            <input id="input"
                onChange={(e) => {
                    callback({ index: sliderCurrentValue, value: breakpoints[Number(e.target.value)] })
                    setSliderCurrentValue(Number(e.target.value))
                }}
                type="range" min="0"
                defaultValue={sliderCurrentValue}
                max={breakpoints.length - 1}
                step="1" />

            <div id="output">{breakpoints[sliderCurrentValue]} $</div>

        </>
    )
}
