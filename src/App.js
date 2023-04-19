import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navigation/Navbar';
import Home from './components/pages/Home';
import Catalogue from './components/pages/Catalogue';
import About from './components/pages/About';
import Privacy from './components/pages/Privacy';
import Footer from './components/navigation/Footer';

function App() {
 return (
  <Router>
   <Navbar/>
    <Routes>
     <Route exact path='/' Component={Home}/>
     <Route path='/catalogue' Component={Catalogue}/>
     <Route path='/about' Component={About}/>
     <Route path='/privacy-policy' Component={Privacy}/>
    </Routes>
    <Footer/>
  </Router>
 );
}

export default App;
