import { Suspense } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './styles/index.scss';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { useTheme } from 'app/providers/ThemeProvider';
import { clsx } from 'shared/lib/classNames/classNames';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={clsx('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to='/'>Главная</Link>
      <Link to='/about'>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/about' element={<AboutPage />} />
          <Route path='/' element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
