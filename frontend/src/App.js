import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Features from './components/Features';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <LandingPage/>
     <Features/>
    </div>
  );
}

export default App;
