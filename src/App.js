import React from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { fetchPosts, hideLoader, setCart, storeLocation } from './redux/actions';
import { Route, Routes } from 'react-router';
import Main from './components/Main';
import Cart from "./components/Cart";
import Header from './components/Header';
import ItemCard from './components/ItemCard';
import Order from './components/Order';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPosts())
    dispatch(hideLoader())

    if(localStorage.cart){
      dispatch(setCart())
    }
    if(window.location.href === 'http://localhost:3000/cart'){
      dispatch(storeLocation())
    }
  }, [dispatch])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Main />} />
          <Route path='cart' element={<Cart />} />
          <Route path=':id' element={<ItemCard/>} />
          <Route path='order' element={<Order/>} />
          <Route path='*' element={<Main />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
