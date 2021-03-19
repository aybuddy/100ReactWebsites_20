import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import gsap from 'gsap';
import Header from './components/Header';
import './styles/App.scss';

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

function App() {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    gsap.to('body', 0, { css: { visibility: 'visible' } });
  }, []);

  return (
    <>
      <Header />
      <div className='App'>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <Component />
          </Route>
        ))}
      </div>
    </>
  );
}

export default App;
