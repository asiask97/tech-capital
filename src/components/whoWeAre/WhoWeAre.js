import './WhoWeAre.css';
import { ReactComponent as People }  from '../../assets/images/people-fill.svg'
import { ReactComponent as Headset }  from '../../assets/images/headset.svg'
import { ReactComponent as Cash }  from '../../assets/images/cash-coin.svg'


function WhoWeAre() {

  return (
    <div id='WhoWeAre' className="WhoWeAre" >
        <h3>Type of services we offer</h3>
        <h2>Who We Are?</h2>
        <div className='filler'></div>
        <div className='item'>               
            <Cash/>
            <h4>Garanteed Returns</h4>
            <p> At TECH Capital has 99.9% guarantee on each invesment. We took what we learned over the years with stock 
                trading and applyed it to crypro trading and it worked mbetter than anticipated. Make sure to contact us if you have
                any doubts and our team of experts will be more than happy to help.  
                <br/>
                <br/>
                With us you have the highest ROI possible as we only take 2.55% of income genaraged by our tream. Investemnst 
                start with as low as $10,000.
            </p>
        </div>
        <div className='item'>
            <People />
            <h4>Dedicated Team</h4>
            <p>We have a dedicated team working together to generate high incomes. TECH Capital only hires the best of the best to make 
                sure each and evry challege is solved efficantly. Over the years we developed great working dynamic where evryone knows exactly 
                how to make the most money out of each trade.
                <br/>
                <br/>
                Perhaps you are intersted in working for us? 
            </p>
            <button>Available Jobs</button>
        </div>

        <div className='item'>
            <Headset />
            <h4>Superb Customer Support</h4>
            <p> Sometimes unexpected things happen and we know that. Every single one of our coustomers has a free 24/7 
                contact with out support team. They will help with any quiry and solve every issue to the best of their abilites.

                <br/>
                <br/>
                Want to find out more now?
            </p>
            <button>Contact Support</button>
        </div>
</div>
  );
}

export default WhoWeAre;
