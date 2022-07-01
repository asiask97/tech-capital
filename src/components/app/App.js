import './App.css';
import '../navbar/Navbar'
import Navbar from '../navbar/Navbar';
import Hero from '../hero/Hero';
import WhoWeAre from '../whoWeAre/WhoWeAre';
import Partners from '../partners/Partners';
import ContactUs from '../contactUs/ContactUs';
function App() {
  return (
    <div className="App">
        <Navbar />
        <Hero />
        <div className='transtion'></div>
        <WhoWeAre/>
        <Partners/>
        <ContactUs/>
    </div>
  );
}

export default App;
