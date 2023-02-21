import PropTypes from 'prop-types';
import { Fragment } from 'react';
import Modal from 'components/Modal/Modal';
import { Component } from 'react';

const initialState = {
  imageURL: null,
  tags: null,
};

class ImageGalleryItem extends Component {
  state = { ...initialState };

  onClickHandler = event => {
    event.preventDefault();

    const imageURL = event.currentTarget.href;
    const tags = event.currentTarget.dataset['alt'];
    console.log(tags);
    this.setState(prevState => ({ imageURL: imageURL, tags: tags }));
  };

  onModalClose = () => {
    this.setState(prevState => ({ ...initialState }));
  };

  render() {
    const { images } = this.props;
    const { imageURL, tags } = this.state;

    return (
      <>
        {images.map(image => (
          <Fragment key={image.id}>
            <li className="imageGalleryItem">
              <a
                href={image.imageURL}
                data-alt={image.tags}
                onClick={this.onClickHandler}
              >
                <img
                  src={image.previewURL}
                  alt={image.tags}
                  className="imageGalleryItem-image"
                />
              </a>
            </li>
          </Fragment>
        ))}
        {imageURL && (
          <Modal
            imageURL={imageURL}
            tags={tags}
            onModalClose={this.onModalClose}
          />
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageGalleryItem;
