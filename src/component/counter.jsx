import React from "react";
import { increment, decrement } from "./Actions";
import { connect } from "react-redux";

function Counter(props) {
  const handleIncrease = () => {
    props.increment();
  };
  const handleDeccrease = () => {
    props.decrement();
  };
  return (
    <>
      <h1>Current State: {props.currentState}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDeccrease}>Decrease</button>
    </>
  );
}

const mapStateToProps = (state) => ({
  currentState: state.count
});

const mapDispatchToProps = {
  increment,
  decrement
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
