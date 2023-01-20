import React, { useState, useEffect } from "react"
import Options from "./options"
import "./questionOptions.css"

export default function Question(props) {

    const [apiData, setApiData] = useState({
        question: props.question,
        index: props.index,
        options: props.options,
        correctAnswer: props.correctAnswer
    });

    return (
        <div className="question--container">
            <h2>{(apiData.index + 1) + ". " + apiData.question}</h2>
            <Options
                options={apiData.options}
                correctAnswer={apiData.correctAnswer}
            />
        </div>
    )
}