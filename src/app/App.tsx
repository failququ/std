import { AboutPage } from 'pages/AboutPage';
import { HomePage } from 'pages/HomePage';
import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { useTheme } from './providers/ThemeProvider';
import './styles/index.scss';

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
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;