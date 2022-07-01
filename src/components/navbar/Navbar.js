
import './Navbar.css';
import { useState } from 'react';
import logoWhite from '../../assets/images/logoLight.svg';
import logoBlack from '../../assets/images/logoDark.svg';

function Navbar() {
  
  // STOPPING ANIMATION FROM GOING OFF ON WINDOW RESIZE
  let resizeTimer;
  window.addEventListener("resize", () => {
    document.getElementById('wrapper').classList.add("resize-animation-stopper");
    
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.getElementById('wrapper').classList.remove("resize-animation-stopper");
    }, 400);
  });

  const [navbar, setNavbar] = useState(false);
    
  const controlNavBar = () => {
      if(window.scrollY > 50){
          setNavbar(true);
      }else{
          setNavbar(false);
      }
  }
  window.addEventListener("scroll", controlNavBar);
  
  const handleClickNav = () =>{
    document.getElementById('Hero').scrollIntoView( { behavior: "smooth" })
  }

  return (
    <div className="Navbar">
        <div id='wrapper' className={navbar ? 'activeNav wrapper' : 'wrapper'}>
          <img className ='img' src={navbar ? logoBlack : logoWhite} alt='logo' onClick={handleClickNav}/>
        </div>
    </div>
  );
}

export default Navbar;