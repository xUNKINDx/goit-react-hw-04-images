import { Component } from 'react';
import PropTypes from 'prop-types';
import { getImages } from 'pixabayApi';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';

const initialState = {
  images: [],
  page: 1,
  totalHits: 0,
  isLoading: false,
};

class ImageGallery extends Component {
  state = {
    ...initialState,
  };

  async componentDidMount() {
    this.loadImages(true);
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.filter !== this.props.filter) {
      this.setState(
        prevState => ({ ...initialState }),
        callback => this.loadImages(true)
      );
    } else if (prevState.page !== this.state.page) {
      this.loadImages(false);
    }
  }

  loadNextPage = async () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  loadImages = async newSearch => {
    const { filter } = this.props;
    const { page } = this.state;

    this.setState(prevState => ({ isLoading: true }));
    try {
      const response = await getImages(filter, page);

      if (newSearch) {
        this.setState(prevState => ({
          images: response.images,
          totalHits: response.totalHits,
        }));
      } else {
        this.setState(prevState => ({
          images: [...prevState.images, ...response.images],
          totalHits: response.totalHits,
        }));
      }
    } catch (error) {
      console.log(error);
    } finally {
      this.setState(prevState => ({ isLoading: false }));
    }
  };

  render() {
    const { images, totalHits, page, isLoading } = this.state;

    return (
      <>
        <ul className="imageGallery">
          {images.length > 0 && <ImageGalleryItem images={images} />}
        </ul>

        {isLoading ? (
          <Loader />
        ) : (
          images.length > 0 &&
          totalHits / 12 > page && <Button onClick={this.loadNextPage} />
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  filter: PropTypes.string.isRequired,
};

export default ImageGallery;
