import React from 'react'

export default function Param(props) {
    const status = props.grade >= 7 ? 'Approved' : 'Failed'
    const gradeInt = Math.ceil(props.grade)
    return (
        <div>
            <h2>{props.title}</h2>
            <div>
                <p><strong>Student: </strong> {props.student}</p>
                <p><strong>Grade: </strong>{gradeInt}</p> 
                <p><strong>Status: </strong>{status}</p>
            </div>
        </div>
    )
}