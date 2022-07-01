import './Hero.css';
import SmoothScrollArrow from '../smoothScrollArrow/SmoothScrollArrow';

function Hero() {

  //Market making in the crypto currency space since 2020.
  return (
    <div className="Hero" id='Hero'>
      <div className='wrapper' >
          <h1>LEADING EXPERT</h1> 
          <h1>IN THE CRYPTO</h1>
          <h1>CURRENCY AND</h1>
          <h1>STOCK TRADING</h1>
          <div className='arrowWrapper'><SmoothScrollArrow scrollTo="MainContent"/></div>
      </div>
    </div>
  );
}

export default Hero;
