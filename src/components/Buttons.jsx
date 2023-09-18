import PropTypes from 'prop-types';

export const Buttons = ({ handleGood, handleNeutral, handleBad }) => (
  <div>
    <button onClick={handleGood}>Good</button>
    <button onClick={handleNeutral}>Neutral</button>
    <button onClick={handleBad}>Bad</button>
  </div>
);

Buttons.propTypes = {
  handleGood: PropTypes.func,
  handleNeutral: PropTypes.func,
  handleBad: PropTypes.func,
};
