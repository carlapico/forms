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
    <Header />
      <Routes> 
          <Route index element={< Home />}/>
          <Route path='about' element={< About />}/>
          <Route path='contact' element={< Contact />}/>
          <Route path='*' element={ <NotFound /> }/>
      </Routes>
    <Footer /> 

     {/* <Home />
    <About />
  <Contact /> */} 

  </BrowserRouter>
  )
}

const NotFound = () => {
  return (
    <>
      <h4> Sorry Page not found </h4>
    </>

  )
}

export default App;
