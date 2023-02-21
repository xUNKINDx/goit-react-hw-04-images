import PropTypes from 'prop-types';
import { Fragment } from 'react';
import Modal from 'components/Modal/Modal';
import { useState } from 'react';

const ImageGalleryItem = props => {
  const [imageURL, setImageURL] = useState();
  const [tags, setTags] = useState();

  const onClickHandler = event => {
    event.preventDefault();

    const imageURL = event.currentTarget.href;
    const tags = event.currentTarget.dataset['alt'];
    setImageURL(imageURL);
    setTags(tags);
  };

  const onModalClose = () => {
    setImageURL();
    setTags();
  };

  const { images } = props;

  return (
    <>
      {images.map(image => (
        <Fragment key={image.id}>
          <li className="imageGalleryItem">
            <a
              href={image.imageURL}
              data-alt={image.tags}
              onClick={onClickHandler}
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
        <Modal imageURL={imageURL} tags={tags} onModalClose={onModalClose} />
      )}
    </>
  );
};

ImageGalleryItem.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageGalleryItem;
