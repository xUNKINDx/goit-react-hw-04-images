import PropTypes from 'prop-types';

const Button = props => {
  const { onClick } = props;

  return (
    <><div className='loadButton'>
      <button
        className="button"
        name="loadMore"
        type="button"
        onClick={onClick}
      >
        Load more
      </button>
      </div>
    </>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
