import React, { useState } from 'react';
import './App.css';
import MoviesContainer from './components/MoviesContainer';
import Input from 'components/Input';
import { Provider } from 'react-redux';
import { store } from 'store';

function App() {
  const [searchString, setSearchString] = useState('');
  const handleChange = (searchString: string) => {
    setSearchString(searchString);
  };

  return (
    <Provider store={store}>
      <div className="App">
        <Input
          placeholder="Search movie"
          onChange={handleChange}
          searchString={searchString}
        />
        <MoviesContainer searchString={searchString} />
      </div>
    </Provider>
  );
}

export default App;
