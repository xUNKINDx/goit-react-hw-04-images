import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getImages } from 'pixabayApi';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';

const ImageGallery = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [totalHits, setTotalHits] = useState(1);

  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages([]);
    setPage(0);
  }, [props.filter]);

  useEffect(() => {
    if (page === 0) {
      setPage(1);
      return;
    }
    loadImages(false);
  }, [page]);

  const loadNextPage = async () => {
    setPage(page + 1);
  };

  const loadImages = async () => {
    const { filter } = props;
    setIsLoading(true);

    try {
      const response = await getImages(filter, page);

      setImages([...images, ...response.images]);
      setTotalHits(response.totalHits);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ul className="imageGallery">
        {images.length > 0 && <ImageGalleryItem images={images} />}
      </ul>

      {isLoading ? (
        <Loader />
      ) : (
        images.length > 0 &&
        totalHits / 12 > page && <Button onClick={loadNextPage} />
      )}
    </>
  );
};

ImageGallery.propTypes = {
  filter: PropTypes.string.isRequired,
};

export default ImageGallery;
