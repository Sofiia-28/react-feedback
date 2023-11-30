import { useState } from 'react';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Notification } from './Notification';

export const App = () => {
  const [options, setOptions] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const { good, neutral, bad } = options;

  const updateFeedback = option => {
    setOptions(prevState => {
      return {
        ...prevState,
        [option]: prevState[option] + 1,
      };
    });
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return ((good * 100) / (good + neutral + bad)).toFixed(2);
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={updateFeedback}
          options={Object.keys(options)}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 && (
          <>
            <Notification message="There is no feedback" />
          </>
        )}
        {countTotalFeedback() > 0 && (
          <>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          </>
        )}
      </Section>
    </div>
  );
};
