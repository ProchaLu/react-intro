import './SearchBar.css';
import { useState } from 'react';

const SearchBar = (props) => {
  const [searchValue, setSearchValue] = useState('');

  const HandleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleClearClick = () => {
    setSearchValue('');
  };

  const shouldDisplayButton = searchValue.length > 0;

  const filteredProducts = props.products.filter((product) => {
    return product.includes(searchValue);
  });

  return (
    <div>
      <h3>Searchbar</h3>
      <input type="text" onChange={HandleInputChange} value={searchValue} />
      {shouldDisplayButton && (
        <button className="clearButton" onClick={handleClearClick}>
          Clear
        </button>
      )}
      <ul>
        {filteredProducts.map((product) => {
          return <li key={product}>{product}</li>;
        })}
      </ul>
    </div>
  );
};

export default SearchBar;
