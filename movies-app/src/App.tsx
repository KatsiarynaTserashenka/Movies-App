import React, { useState } from 'react';
import './App.css';
import MoviesContainer from './components/MoviesContainer';
import Input from 'components/Input';

function App() {
  const [searchString, setSearchString] = useState('');
  const handleChange = (searchString: string) => {
    setSearchString(searchString);
  };

  return (
    <div className="App">
      <Input
        placeholder="Search movie"
        onChange={handleChange}
        searchString={searchString}
      />
      <MoviesContainer searchString={searchString} />
    </div>
  );
}

export default App;
