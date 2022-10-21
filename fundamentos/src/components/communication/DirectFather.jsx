import DirectSon from './DirectSon'

export default props => {
    return (
        <div>
            <DirectSon name="Lisa" age={20} nerd={true} />
            <DirectSon name="Bart" age={21} nerd={false} />
        </div>
    )
}