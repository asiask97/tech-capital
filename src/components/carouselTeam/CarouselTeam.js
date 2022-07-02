import './CarouselTeam.css'
import Carousel from 'react-multi-carousel';
import personOne from '../../assets/images/person1.jpg'
import personTwo from '../../assets/images/person2.jpg'
import personThree from '../../assets/images/person3.jpg'
import personFour from '../../assets/images/person4.jpg'
import personFife from '../../assets/images/person5.jpg'

function CarouselTeam() {
  return (
    <div className='CarouselTeam'>
        <h2>Our Team:</h2>
        <div className='carousel-wrapper'>
        <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className="carousel"
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
            desktop: {
            breakpoint: {
                max: 3000,
                min: 1024
            },
            items: 3,
            partialVisibilityGutter: 40
            },
            mobile: {
            breakpoint: {
                max: 464,
                min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
            },
            tablet: {
            breakpoint: {
                max: 1024,
                min: 464
            },
            items: 2,
            partialVisibilityGutter: 30
            }
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
        >
            <div className='item'>
                <div className='imageCircle'>
                    <img src={personOne} alt='picture of one of our team member'></img>
                </div>
                <h3>MANAGING PARTNER</h3>
                <h4>Malachy Marriott</h4>
                <p>Founder of the compny and Managing Partner since 2012.</p>
            </div>
            <div className='item'>
                <div className='imageCircle'>
                    <img src={personTwo} alt='picture of one of our team member'></img>
                </div>
                <h3>MANAGING PARTNER</h3>
                <h4>Lacy Glenn</h4>
                <p>Joined our team in 2016 as a Project Manager, became a Managing Partner in 2020.</p>
            </div>
            <div className='item'>
                <div className='imageCircle'>
                    <img src={personThree} alt='picture of one of our team member'></img>
                </div>
                <h3>HR MANAGER</h3>
                <h4>Parris Collier</h4>
                <p>Joined our team in 2014 as HR Associate and in 2018 advanced to Manager role.</p>
            </div>
            <div className='item'>
                <div className='imageCircle'>
                    <img src={personFour} alt='picture of one of our team member'></img>
                </div>
                <h3>FINANCE MANAGER</h3>
                <h4>Ned Morton</h4>
                <p>With us from the start of 2012 in the same role.</p>
            </div>
            <div className='item'>
                <div className='imageCircle'>
                    <img src={personFife} alt='picture of one of our team member'></img>
                </div>
                <h3>BUSINESS ANALYST</h3>
                <h4>Eamon Hussain</h4>
                <p>Joined our team in early 2022.</p>
            </div>
        </Carousel>
        </div>
    </div>
  );
}

export default CarouselTeam;
