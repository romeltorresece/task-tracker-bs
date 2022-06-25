import PropTypes from 'prop-types';

const Button = ({ color, text, onClick }) => {
  return (
    <button 
        className={`btn btn-outline-${color}`} 
        onClick={onClick}>
        {text}
    </button>
  );
};

Button.defaultProps = {
    color: 'info',
};

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;