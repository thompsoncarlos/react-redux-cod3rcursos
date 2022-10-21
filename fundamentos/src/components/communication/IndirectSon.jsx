
export default props => {
    const cb = props.whenClick
    const createAge = () => parseInt(Math.random() * (20)) + 50
    const createNerd = () => Math.random() > 0.5
    return (
        <div>
            <div>Son</div>
            <button onClick={_ => cb('Theodore', createAge(), createNerd())}>
                Show Info
            </button>
        </div>
    )
}