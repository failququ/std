import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy';
import { HomePageLazy } from './pages/HomePage/HomePage.lazy';
import './styles/index.scss';
import { useTheme } from './theme/useTheme';

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <button onClick={toggleTheme}>Change theme</button>
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