import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num) {
    const n = parseInt(num)
    if (n < 0) return -1
    if (n === 0) return 1
    return calcFatorial(n - 1) * n
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)

    useEffect(function() {
        setFatorial(calcFatorial(number))
    }, [number])

    useEffect(function() {
        if(fatorial > 100000) {
            alert("Eita! Número acima de 100000")
        }
    }, [fatorial])
    
    const [status, setStatus] = useState("Ímpar")

    useEffect(function() {
        setStatus(number % 2 === 0 ? "Par" : "Ímpar")
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
        
            <SectionTitle title="Exercício #01" />
            <div className="center">
                <span className="text">Fatorial: </span>
                <span className="text red">{fatorial}</span>
                <input type="number" className="input" 
                value={number} 
                onChange={e => setNumber(e.target.value)}/>
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <span className="text">Status: </span>
                <span className="text red">{status}</span>
            </div>

        </div>
    )
}

export default UseEffect
