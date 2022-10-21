import Card from "./Card";
import { connect } from 'react-redux'

 function Random(props) {
     const { min, max } = props
     const random = parseInt(Math.random() * (max - min)) + min
  return (
    <Card title="Random" purple>
      <div>
        <span>{random}</span>
      </div>
    </Card>
  );
};

function mapStateToProps(state) {
    return {
        min: state.numbers.min,
        max: state.numbers.max,
    }
}

export default connect(mapStateToProps)(Random)