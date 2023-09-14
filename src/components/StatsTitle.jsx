import PropTypes from 'prop-types';

export const StatsTitle = ({ title }) => (
  <section>
    <span>{title}</span>
  </section>
);

StatsTitle.propTypes = {
  title: PropTypes.string,
};
