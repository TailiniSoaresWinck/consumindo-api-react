import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Post from './home/post/detalhesPost';
import Home from './home/home';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/postagens/:id' element={<Post />} />
      </Routes>
    </div>
  );
};

export default App;
