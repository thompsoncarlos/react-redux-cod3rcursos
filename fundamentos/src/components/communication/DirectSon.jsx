
export default props => {
    return (
        <div>
            <span>{props.name}: </span>
            <span><strong>Age: </strong>{props.age} </span>
            <span><strong>Nerd: </strong>{props.nerd ? 'True' : 'False'}!</span>
        </div>
    )
}