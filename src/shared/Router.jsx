import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Home from 'pages/Home';
import Detail from 'pages/Detail';
import fakeData from 'fakeData.json';

const Router = () => {
  const [letters, setLetters] = useState(fakeData);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home letters={letters} setLetters={setLetters} />} />
        <Route path="/detail/:id" element={<Detail letters={letters} />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
