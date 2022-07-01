import './ContactUs.css';
import linkedIn from '../../assets/images/linkedin.svg';
import email from '../../assets/images/email.svg'
import Form from '../form/Form';
function ContactUs() {
  
    
    return (
        <div className="ContactUs">
            <div className='contact_heading'>
                <h1>CONTACT US</h1>
            </div>
            <div className='responisve_container'>
                <div className='form_body'>
                    <Form/>
                </div>
                <div className='contact_Info'>
                    <div className='contact_email_container'>
                        <img src={email} alt='icon of email'></img>
                        <p>info@techcapital.com</p>
                    </div>
                    <div className='contact_linkedin_container'>
                        <img src={linkedIn} alt='icon of linkedIn'></img>
                        <p>LinkedIn</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ContactUs;