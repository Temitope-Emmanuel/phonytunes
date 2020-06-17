import {useState } from 'react'

export default (initialState) => {
    const [state,setState] = useState(initialState)
    const changeState = (e) => {setState(e)}
    const resetState = () =>(setState(initialState))

    return [state,changeState,resetState]
} 