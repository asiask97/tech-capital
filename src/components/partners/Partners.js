import './Partners.css';
import binace from '../../assets/images/binance.svg'
import bitmart from '../../assets/images/bitmart.svg'
import coinbase from '../../assets/images/coinbase.svg'
import kraken from '../../assets/images/kraken.svg'
import uphold from '../../assets/images/uphold.svg'
import etoro from '../../assets/images/etoro.svg'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

function Partners() {

    return (
    <div className="Partners" >
        <h2>We work with:</h2>
        <div className='hiddenOne'></div>
        <div className='hiddenTwo'></div> 

        <AnimationOnScroll animateIn='animate__fadeInRight'>
          <img src={binace}></img>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInRight">
          <img src={kraken}></img>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInRight">
          <img src={bitmart}></img>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInRight">
          <img src={coinbase}></img>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInRight">
          <img src={uphold}></img>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInRight">
          <img src={etoro}></img>
        </AnimationOnScroll>

    </div>
  );
}

export default Partners;
