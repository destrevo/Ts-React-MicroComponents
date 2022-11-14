import React from 'react'
import "./Collapse.css"

interface ICollapseData {
    title: string,
    text: string
}
interface ICollapseProps {
    data: ICollapseData[]
}

// dont forget to import the fontawsome in da html <!-- collapse -->

export default function Collapse({ data }: ICollapseProps): JSX.Element {
    const [collapseKey, setCollapseKey] = React.useState<number[]>([])

    return (
        <>
            {data.map((data: ICollapseData, index: number) => {
                const { title, text } = data
                return (
                    <div key={index} className="faq-container">
                        <div className={`faq ${collapseKey.includes(index) && 'active'}`}>
                            <h3 className="faq-title">{title}</h3>
                            <p className="faq-text">{text}</p>
                            <button onClick={() => {
                                collapseKey.includes(index) ?
                                    setCollapseKey(collapseKey.filter((key: number) => key !== index)) :
                                    setCollapseKey((prev) => [...prev, index])
                            }} className="faq-toggle">
                                <i className="fas fa-chevron-down"></i>
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                )
            })}
        </>
    )
}
