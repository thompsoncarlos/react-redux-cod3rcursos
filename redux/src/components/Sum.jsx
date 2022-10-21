import Card from "./Card";
import { connect } from "react-redux";

function Sum(props) {
  const { min, max } = props;
  return (
    <Card title="Sum" blue>
      <div>
        <span>
          <strong>{max + min}</strong>
        </span>
      </div>
    </Card>
  );
}

function mapStateToProps(state) {
  return {
    min: state.numbers.min,
    max: state.numbers.max,
  };
}

export default connect(mapStateToProps)(Sum);
