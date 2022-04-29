import React from 'react';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import FAQ from './components/FAQ';
import Home from './components/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Investors from './components/Investors';
import OurVision from './components/Our_Vision';

function App() {

//   // const [width, setWidth] = useState(window.innerWidth);
//   const [height, setHeight] = useState(window.innerHeight);

//   const updateWidthAndHeight = () => {
//     // setWidth(window.innerWidth);
//     setHeight(window.innerHeight);
//   };

//   useEffect(() => {
//     window.addEventListener("resize", updateWidthAndHeight);
//     return () => window.removeEventListener("resize", updateWidthAndHeight);
// });

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/FAQ' element={<FAQ />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Investors' element={<Investors />} />
        <Route path='/OurVision' element={<OurVision />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
