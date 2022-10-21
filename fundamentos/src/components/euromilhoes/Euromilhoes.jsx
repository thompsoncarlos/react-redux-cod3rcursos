import "./Euromilhoes.css";
import React, { useState } from "react";

export default (props) => {
    function createUncontainedNumber(min, max, array) {
        const random = parseInt(Math.random() * (max + 1 - min)) + min;
        return array.includes(random)
            ? createUncontainedNumber(min, max, array)
            : random;
    }

    function createNumber(qtd) {
        const numbers = Array(qtd)
            .fill(0)
            .reduce((nums) => {
                const newNumber = createUncontainedNumber(1, 60, nums);
                return [...nums, newNumber];
            }, [])
            .sort((n1, n2) => n1 - n2);

        return numbers;
    }

    const [qtd, setQtd] = useState(props.qtd || 6);
    const InitialNumbers = createNumber(qtd);
    const [numbers, setNumbers] = useState(InitialNumbers);

    return (
        <div className="Euromilhoes">
            <h2>Euromilhões</h2>
            <label>{numbers.join(" ")}</label>
            <div>
                <label>Quantity: </label>
                <input
                    min="6"
                    max="15"
                    type="number"
                    value={qtd}
                    onChange={(e) => {
                        setQtd(+e.target.value)
                        setNumbers(createNumber(+e.target.value))
                    }}
                />
            </div>
            <button onClick={(_) => setNumbers(createNumber(qtd))}>
                Drawn Numbers
            </button>
        </div>
    );
};
