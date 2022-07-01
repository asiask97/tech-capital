import './App.css';
import '../navbar/Navbar'
import Navbar from '../navbar/Navbar';
import Hero from '../hero/Hero';
import WhoWeAre from '../whoWeAre/WhoWeAre';
import Partners from '../partners/Partners';
function App() {
  return (
    <div className="App">
        <Navbar />
        <Hero />
        <div className='transtion'></div>
        <WhoWeAre/>
        <Partners/>
    </div>
  );
}

export default App;
