import { useEffect, useState } from 'react';
import Button from './Button/Button';
import CountButton from './CountButton/CountButton';
import SearchBar from './SearchBar/SearchBar';

const App = () => {
  const [productsState, setProductsState] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((productsArray) => {
        const newProductsState = productsArray.map((product) => {
          return product.title;
        });
        setProductsState(newProductsState);
      });
  }, []);

  const hasProducts = productsState.length > 0;

  return (
    <div>
      <Button>Hello world</Button>
      <Button>Text 1</Button>
      <Button>Text 2</Button>
      <hr></hr>
      <CountButton incrementBy={1} buttonColor={'blue'} />
      <CountButton incrementBy={7} buttonColor={'red'} />
      <CountButton incrementBy={11} buttonColor={'green'} />
      <hr></hr>
      {hasProducts ? <SearchBar products={productsState} /> : 'LOADING...'}
      <hr></hr>
    </div>
  );
};

export default App;
