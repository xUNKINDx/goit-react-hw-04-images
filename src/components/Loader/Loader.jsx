import { FallingLines } from 'react-loader-spinner';

const Loader = props => {
  return (
    <>
      <div className="loadButton">
        <FallingLines
          color="#3f51b5"
          width="100"
          visible={true}
          ariaLabel="falling-lines-loading"
        />
      </div>
    </>
  );
};

export default Loader;
