import { Button } from './Button.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div>
      {options.map(name => (
        <Button
          name={name}
          key={name}
          onClick={event => onLeaveFeedback(event.currentTarget.name)}
        >
          {name[0].toUpperCase() + name.slice(1)}
        </Button>
      ))}
    </div>
  );
};
