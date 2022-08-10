import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Header from './components/Header';
import {Home} from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
  <BrowserRouter>
    <Routes> 
        <Route path='about' element={<h4>about route</h4>}/>
    </Routes>

    <Header />
    <Home />
    <About />
    <Contact />
    <Footer />

  </BrowserRouter>
  )
}

export default App;
