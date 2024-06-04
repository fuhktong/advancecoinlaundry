import './global.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Header.js';
import Footer from './Footer.js';
import Home from './pages/home.js'
import News from './pages/news.js';
import Archive from './pages/archive.js'
import RepVsDem from './pages/repvsdem.js';
import Hamilton from './pages/hamilton.js';
import Electors from './pages/electors.js';
import Book from './pages/book.js';
import FAQ from './pages/faq.js';
import Contribute from './pages/contribute.js';
import Contact from './pages/contact.js';
import Video001 from './newssource/video001.js'

const App = () => {
  return (
    <div>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="news" element={<News />} />
          <Route path="archive" element={<Archive />} />
          <Route path="repvsdem" element={<RepVsDem />} />
          <Route path="hamilton" element={<Hamilton />} />
          <Route path="electors" element={<Electors />} />
          <Route path="book" element={<Book />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contribute" element={<Contribute />} />
          <Route path="contact" element={<Contact />} />
          <Route path="video001" element={<Video001 />} />
        </Routes>
      <Footer />
    </div>
  );
};

export default App;