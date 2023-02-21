import PropTypes from 'prop-types';

const Searchbar = props => {
  const { onSubmit } = props;

  const handleSubmit = event => {
    event.preventDefault();

    const { filter } = event.target;

    onSubmit(filter.value);
  };

  return (
    <>
      <header className="searchbar">
        <form className="searchForm" onSubmit={handleSubmit}>
          <button type="submit" className="searchForm-button"></button>

          <input
            className="searchForm-input"
            type="text"
            name="filter"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
