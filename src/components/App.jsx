import { Title } from './Title';
import { Counter } from './Buttons';
import { StatsTitle } from './StatsTitle';
import { Statistics } from './Statistics';

export const App = () => {
  return (
    <div
      style={{
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Title title="Please leave feedback"></Title>
      <Counter></Counter>
      <StatsTitle title="Statistics"></StatsTitle>
      <Statistics></Statistics>
    </div>
  );
};
