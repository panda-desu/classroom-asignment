import { useRef, useState, useEffect } from "react"

const token = 1234;

export const RefDemo = () => {

    const value = useRef("")

    const inputParent = useRef(null)

    useEffect(() => {
        inputParent.current.childNodes[0].focus()
    }, [])


    const handleInput = (e) => {
        value.current += e.target.value
        if (value.current.length < 4) {
            inputParent.current.childNodes[value.current.length].focus()
        } else {
            inputParent.current.childNodes[3].value = inputParent.current.childNodes[3].value[0] || ""
            inputParent.current.childNodes[2].value = inputParent.current.childNodes[2].value[0] || ""
            inputParent.current.childNodes[1].value = inputParent.current.childNodes[1].value[0] || ""
            inputParent.current.childNodes[0].value = inputParent.current.childNodes[0].value[0] || ""
        }
    }

    const handleFocus = (e) => {
        const lenght = value.current.length
        let index;
        if (lenght === 4) {
            inputParent.current.childNodes[3].focus()
        } else {
            inputParent.current.childNodes[lenght].focus()
        }
    }

    return (
        <div className="otp-example" ref={inputParent}>
            <input onChange={handleInput} />
            <input onChange={handleInput} />
            <input onChange={handleInput} />
            <input onChange={handleInput} />
        </div>

    )
}