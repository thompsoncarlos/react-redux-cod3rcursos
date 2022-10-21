import React, { useState } from 'react'
import IndirectSon from './IndirectSon'

export default props => {
    const [name, setName] = useState('?')
    const [age, setAge] = useState(0)
    const [nerd, setNerd] = useState(false)
    
    function shareInfo(name, age, nerd) {
        setName(name)
        setAge(age)
        setNerd(nerd)
    }

    return (
        <div>
            <div>
                <span>{name} </span>
                <span><strong>{age}</strong></span>
                <span> {nerd ? 'True' : 'False'}</span>
            </div>
            <IndirectSon whenClick={shareInfo}></IndirectSon>
        </div>
    )
}