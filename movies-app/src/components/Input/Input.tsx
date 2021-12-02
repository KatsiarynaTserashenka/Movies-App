import React from 'react';

interface IProps {
  placeholder: string;
  onChange: (searchString: string) => void;
  searchString: string;
}

const Input: React.FC<IProps> = (props) => {
  const searchMovie = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.target.value);
  };

  const { searchString } = props;

  return (
    <div className="search__form">
      <input
        type="text"
        className="search__input"
        value={searchString}
        placeholder={props.placeholder}
        onChange={searchMovie}
      />
    </div>
  );
};

export default Input;
