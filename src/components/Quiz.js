import React, { useState, useEffect } from "react"
import axios from "axios"
import "./questionOptions.css"
import Question from "./Question"

export default function Quiz() {

    const [allQuestions, setAllQuestions] = useState([])
    useEffect(() => {
        const getApiData = async () => {
            const response = await axios.get(
                `https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple`
            )
            console.log(response.data.results)
            setAllQuestions(response.data.results.map((prev, index) => {
                return (
                    <Question
                        key={index}
                        index={index}
                        question={prev.question}
                        options={[...prev.incorrect_answers, prev.correct_answer]}
                        correctAnswer={prev.correct_answer}
                    />
                )
            }))
        }
        getApiData()
    }
        , [])

    return (
        <div className="questions--page">
            {allQuestions}
        </div>
    )
}