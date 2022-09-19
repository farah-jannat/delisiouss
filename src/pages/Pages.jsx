import React from 'react';
import Home from './Home';
import Cuisine from './Cuisine';
import{ Route, Routes } from 'react-router-dom';
import Searched from './Searched';
import Recipe from './Recipe';

function pages() {
  return (
    
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Cuisine/:type" element={<Cuisine/>}/>
      <Route path="/Searched/:search" element={<Searched/>}/>
      <Route path ="/recipe/:name" element={<Recipe/>}/>
    </Routes>

  );
};

export default pages;