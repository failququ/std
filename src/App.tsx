import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './index.scss';
import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy';
import { HomePageLazy } from './pages/HomePage/HomePage.lazy';

const App = () => {
  return (
    <div className="app">
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePageLazy />} />
          <Route path="/about" element={<AboutPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;