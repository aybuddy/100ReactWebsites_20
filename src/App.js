import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import gsap from 'gsap';
import './styles/App.scss';

// component
import Header from './components/Header';
import Navigation from './components/Navigation';

// pages
import Home from './pages/Home';
import CaseStudies from './pages/CaseStudies';
import Approach from './pages/Approach';
import About from './pages/About';
import Services from './pages/Services';

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/case-studies', name: 'Case Studies', Component: CaseStudies },
  { path: '/services', name: 'Services', Component: Services },
  { path: '/approach', name: 'Approach', Component: Approach },
  { path: '/about-us', name: 'About Us', Component: About },
];

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

const App = () => {
  gsap.to('body', 0, { css: { visibility: 'visible' } });

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    let vh = dimensions.height * 0.01;
    // set css variable vh
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 1000);

    window.addEventListener('resize', debouncedHandleResize);

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  });

  return (
    <>
      <Header dimensions={dimensions} />
      {console.log(dimensions)}
      <div className='App'>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <Component />
          </Route>
        ))}
      </div>
      <Navigation />
    </>
  );
};

export default App;
