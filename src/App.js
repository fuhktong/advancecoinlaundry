import "./global.css";
import "./transitions.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { HelmetProvider } from "react-helmet-async";
import Header2 from "./header2.js";
import Footer from "./Footer.js";
import Home from "./home.js";
import Coinmachine from "./coinmachine.js";
import Washfold from "./washfold.js";
import About from "./about.js";
import SpeedQueen from "./speedqueen.js";
import Dryclean from "./dryclean.js";
import Contact from "./contact.js";
import ScrollToTop from "./scrolltotop.js";
import Reviews from "./reviews.js";
import Page404 from "./page404.js";

const helmetContext = {};

const App = () => {
  const location = useLocation();

  return (
    <HelmetProvider context={helmetContext}>
      <ScrollToTop />
      <div>
        <Header2 />
        <TransitionGroup>
          <CSSTransition key={location.key} timeout={300} classNames="fade">
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/coinmachine" element={<Coinmachine />} />
              <Route path="/washfold" element={<Washfold />} />
              <Route path="/dryclean" element={<Dryclean />} />
              <Route path="/about" element={<About />} />
              <Route path="/speedqueen" element={<SpeedQueen />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default App;
