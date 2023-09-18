import { Buttons } from './Buttons';
import { Statistics } from './Statistics';
import { Notification } from './Notification';
import { Component, Fragment } from 'react';

export class HandleStats extends Component {
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

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    const positivePercentage = (this.state.good / total) * 100;
    return positivePercentage.toFixed(0);
  };

  render() {
    if (this.countTotalFeedback() > 0) {
      return (
        <Fragment>
          <Buttons
            handleGood={this.handleClickGood}
            handleNeutral={this.handleClickNeutral}
            handleBad={this.handleClickBad}
          ></Buttons>
          <div>
            <h2>Statistics</h2>
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          </div>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <Buttons
            handleGood={this.handleClickGood}
            handleNeutral={this.handleClickNeutral}
            handleBad={this.handleClickBad}
          ></Buttons>
          <div>
            <h2>Statistics</h2>
            <Notification message="No feedback given"></Notification>
          </div>
        </Fragment>
      );
    }
  }
}
