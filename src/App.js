import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Layout from './components/Layout';


function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route path='/' element={<Layout />} />
            <Route path='/header' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/contact' element={<Contact />}/>
          </Routes>
        </Router>
    </>
  );
}

export default App;
