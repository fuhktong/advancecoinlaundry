import './global.css';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';
import Header from './Header.js';
import Footer from './Footer.js';
import Home from './pages/home.js'
import Coinmachine from './pages/coinmachine.js';
import Washfold from './pages/washfold.js';
import About from './pages/about.js';
import Speedqueen from './pages/speedqueen.js';
import Reviews from './pages/reviews.js';
import Dryclean from './pages/dryclean.js'
import Contact from './pages/contact.js';

const helmetContext = {};

const CLIENT_ID = '897055066650-3mqhsvmpl6d45pjj1v195gcodj3fsp6m.apps.googleusercontent.com';

const App = () => {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: CLIENT_ID,
        scope: 'https://www.googleapis.com/auth/business.manage',
      });
    }
    gapi.load('client:auth2', start);
  }, []);

  return (
    <HelmetProvider context={helmetContext}>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="coinmachine" element={<Coinmachine />} />
          <Route path="washfold" element={<Washfold />} />
          <Route path="dryclean" element={<Dryclean />} />
          <Route path="about" element={<About />} />
          <Route path="speedqueen" element={<Speedqueen />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default App;