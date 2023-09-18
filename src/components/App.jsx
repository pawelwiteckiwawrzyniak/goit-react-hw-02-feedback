import { Section } from './Section';
import { HandleStats } from './HandleStatistics';

export const App = () => {
  return (
    <div
      style={{
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title="Please leave feedback">
        <HandleStats></HandleStats>
      </Section>
    </div>
  );
};
