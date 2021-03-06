import './Hero.css';
import SmoothScrollArrow from '../smoothScrollArrow/SmoothScrollArrow';

function Hero() {

  return (
    <div className="Hero" id='Hero'>
      <div className='wrapper' >
          <h1>LEADING EXPERT</h1> 
          <h1>IN THE CRYPTO</h1>
          <h1>CURRENCY AND</h1>
          <h1>STOCK TRADING</h1>
          <div className='arrowWrapper'><SmoothScrollArrow scrollTo="WhoWeAre"/></div>
      </div>
    </div>
  );
}

export default Hero;
