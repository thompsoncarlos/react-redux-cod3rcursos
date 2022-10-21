import React from "react";

export default (props) => {
    const isPar = props.number % 2 === 0;
    return <div>
            <span>
                <strong>The Number: </strong>{props.number} 
                <strong> is: </strong>{isPar ? <span>Even</span> : <span>Odd</span>}
            </span>
        </div>;
};
