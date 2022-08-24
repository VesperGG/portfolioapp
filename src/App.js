
import './App.css';
import GLobalStyle from './cmp/GlobalStyle';
import Nav from './cmp/Nav';
import AboutUs from './pages/AboutUs'
import OurWork  from './pages/OurWork';
import ContactUs from './pages/ContactUs';
import MovieDetails from './pages/MovieDetails';
//Router
import {Routes,Route} from 'react-router-dom';
//global style


function App() {
  return (
    <div className="App">
      <GLobalStyle/>
      <Nav/>
      <Routes>
      <Route   path="/" element={<AboutUs/>}/>
      <Route   path="/work" element={<OurWork/>}/>
      <Route  path="/contact" element={<ContactUs/>}/>
      <Route  path="/work/:id" element={<MovieDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
