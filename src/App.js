import React from 'react';
import './App.css';
import Cart from './app/Cart';
import MyShop from './app/MyShop';

function App() {
  return (
    <div className="App">
      <header className="App-header">
     <MyShop></MyShop>
     <Cart></Cart>
      </header>
    </div>
  );
}

export default App;
