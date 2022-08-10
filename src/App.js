import {Home, HomeAlone} from './pages/Home';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
  <>
    <Home />
    <HomeAlone/>
    <Header />
    <About />
    <Contact />
    <Footer />

  </>
  )
}

export default App;
