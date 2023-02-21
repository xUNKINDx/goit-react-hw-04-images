import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

const initialState = {
  filter: '',
};

class App extends Component {
  state = {
    ...initialState,
  };

  onSubmit = filter => {
    this.setState(() => ({ ...initialState, filter }));
  };

  render() {
    const { filter } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        {filter && filter.length > 0 && <ImageGallery filter={filter} />}
      </>
    );
  }
}

export default App;
