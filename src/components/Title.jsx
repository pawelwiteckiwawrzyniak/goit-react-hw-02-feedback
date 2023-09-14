import PropTypes from 'prop-types';

export const Title = ({ title }) => (
  <section>
    <span>{title}</span>
  </section>
);

Title.propTypes = {
  title: PropTypes.string,
};
