import './App.css';
import '../navbar/Navbar'
import Navbar from '../navbar/Navbar';
import Hero from '../hero/Hero';
import WhoWeAre from '../whoWeAre/WhoWeAre';
function App() {
  return (
    <div className="App">
        <Navbar />
        <Hero />
        <div className='transtion'></div>
        <WhoWeAre/>
    </div>
  );
}

export default App;
