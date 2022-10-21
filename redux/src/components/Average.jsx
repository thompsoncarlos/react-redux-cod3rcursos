import Card from "./Card";
import { connect } from 'react-redux'

function Average (props) {
    const { min, max } = props
    return (
    <Card title="Average" green>
      <div>
        <span>
          <strong>{(max + min) / 2}</strong>
        </span>
      </div>
    </Card>
  );
};

function mapStateToProps (state) {
    return {
        min: state.numbers.min,
        max: state.numbers.max,
    }
}

export default connect( mapStateToProps )(Average)