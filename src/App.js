
import './App.css';
import GLobalStyle from './cmp/GlobalStyle';
import Nav from './cmp/Nav';
import AboutUs from './pages/AboutUs'
//global style

function App() {
  return (
    <div className="App">
      <Nav/>
      <GLobalStyle/>
      <AboutUs/>
    </div>
  );
}

export default App;
