import { Component } from 'react';

export class Counter extends Component {
  static defaultProps = {
    step: 1,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickGood = () => {
    this.setState((state, props) => ({
      good: state.good + props.step,
    }));
  };

  handleClickNeutral = () => {
    this.setState((state, props) => ({
      neutral: state.neutral + props.step,
    }));
  };

  handleClickBad = () => {
    this.setState((state, props) => ({
      bad: state.bad + props.step,
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClickGood}>Good</button>
        <button onClick={this.handleClickNeutral}>Neutral</button>
        <button onClick={this.handleClickBad}>Bad</button>
      </div>
    );
  }
}
