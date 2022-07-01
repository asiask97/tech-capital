import './Partners.css';
import binace from '../../assets/images/binance.svg'
import bitmart from '../../assets/images/bitmart.svg'
import coinbase from '../../assets/images/coinbase.svg'
import kraken from '../../assets/images/kraken.svg'
import uphold from '../../assets/images/uphold.svg'
import etoro from '../../assets/images/etoro.svg'
import useOnScreen from '../hooks/useOnScreen';
import React, { useRef } from 'react';


function Partners() {
    const visibleBinace= useRef();    
    const [isvisibleBinace] = useOnScreen({threshold: 0.9}, visibleBinace)  

    const visibleKraken= useRef();
    const [isvisibleKraken] = useOnScreen({threshold: 0.9}, visibleKraken)

    const visibleBitmart= useRef();
    const [isvisibleBitmart] = useOnScreen({threshold: 0.9}, visibleBitmart)

    const visibleCoinbase= useRef();
    const [isvisibleCoinbase] = useOnScreen({threshold: 0.9}, visibleCoinbase)

    const visibleUphold= useRef();
    const [isvisibleUphold] = useOnScreen({threshold: 0.9}, visibleUphold)

    const visibleEtoro= useRef();
    const [isvisibleEtoro] = useOnScreen({threshold: 0.9}, visibleEtoro)

    return (
    <div className="Partners" >
        <h2>We work with:</h2>
        <div className='hiddenOne'></div>
        <div className='hiddenTwo'></div>
        <img src={binace} ref={visibleBinace} className={isvisibleBinace ? 'show' : ''}></img>
        <img src={kraken} ref={visibleKraken} className={isvisibleKraken ? 'show' : ''}></img>
        <img src={bitmart} ref={visibleBitmart} className={isvisibleBitmart ? 'show' : ''}></img>
        <img src={coinbase} ref={visibleCoinbase} className={isvisibleCoinbase ? 'show' : ''}></img>
        <img src={uphold} ref={visibleUphold} className={isvisibleUphold ? 'show' : ''}></img>
        <img src={etoro} ref={visibleEtoro} className={isvisibleEtoro ? 'show' : ''}></img>

    </div>
  );
}

export default Partners;
