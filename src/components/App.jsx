import { Component } from 'react';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Notification } from './Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };
  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }
  countPositiveFeedbackPercentage() {
    const { good, neutral, bad } = this.state;
    return ((good * 100) / (good + neutral + bad)).toFixed(2);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.updateFeedback}
            options={Object.keys(this.state)}
          />
        </Section>
        <Section title="Statistics">
          {total === 0 && (
            <>
              <Notification message="There is no feedback" />
            </>
          )}
          {total > 0 && (
            <>
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            </>
          )}
        </Section>
      </div>
    );
  }
}
