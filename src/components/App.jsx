import { useState } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

const App = () => {
  const [filter, setFilter] = useState('');

  const onSubmit = filter => {
    setFilter(filter);
  };

  return (
    <>
      <Searchbar onSubmit={onSubmit} />
      {filter && filter.length > 0 && <ImageGallery filter={filter} />}
    </>
  );
};

export default App;
