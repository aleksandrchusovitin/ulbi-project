import { Suspense } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './styles/index.scss';
import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy';
import { MainPageLazy } from './pages/MainPage/MainPageLazy';
import { useTheme } from './theme/useTheme';
import { clsx } from './helpers/classNames/cclassNames';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={clsx('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to='/'>Главная</Link>
      <Link to='/about'>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/about' element={<AboutPageLazy />} />
          <Route path='/' element={<MainPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
