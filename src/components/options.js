import React, { useState, useEffect } from "react"
import "./questionOptions.css"
import Option from "./option"

export default function Options(props) {
    let choices = props.options
    console.log(choices)

    for (let i = choices.length - 1; i >= 0; i--) {
        let index = Math.floor(Math.random() * (i + 1))
        const temp = choices[index]
        choices[index] = choices[i]
        choices[i] = temp
    }


    const [currentOptions, setCurrentOptions] = useState([])
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [allOptions, setAllOptions] = useState([])

    useEffect(() => {
        setCurrentOptions(
            choices.map((data, index) => {
                return {
                    key: index,
                    value: data,
                    currentState: false,
                    id: index,
                    correctAnswer: props.correctAnswer,
                }
            })
        )
    }, [])

    useEffect(() => {
        setAllOptions(currentOptions.map((current) => {
            return (
                <Option
                    key={current.id}
                    id={current.id}
                    isSubmitted={isSubmitted}
                    selected={current.currentState}
                    data={current.value}
                    answer={current.correctAnswer}
                    handleClick={toggle}
                />
            )
        }))
    }, [currentOptions])


    const check = (id) => {
        const len = currentOptions.length
        for (let i = 0; i < len; i++) {
            if (currentOptions[i].currentState) {
                return false
            }
        }
        return true
    }

    function toggle(id) {
        if (check(id)) {
            setCurrentOptions(prev => prev.map((obj) => {
                return (obj.id === id) ? { ...obj, currentState: true } : obj
            }))
        }
        setIsSubmitted(true)
    }





    return (
        <div className="options--container">
            {allOptions}
        </div>
    )
} 