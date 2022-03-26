import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './App.css';
import Bags from './components/Bags/Bags';
import Header from './components/Header/Header';

function App() {


  return (
    <div className="App">
      <Header></Header>
      <Bags></Bags>
    </div>
  );
}

export default App;
