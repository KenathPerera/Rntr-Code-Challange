import React from 'react';
import './App.css';
import Home from './Component/Home';
import Product from './Component/Product';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Typography } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Typography variant="h2" component="div" gutterBottom >
        Rntr.
      </Typography>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/view" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
