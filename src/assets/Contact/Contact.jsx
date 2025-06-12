import './Contact.css'
import location from '/Images/Location-icon.png'
import mail from '/Images/mail-icon.png'
import phone from '/Images/phone-icon.png'
import time from '/Images/time-icon.png'
import website from '/Images/website-icon.png'

function Contact(){
    return(
        <>
            <div className="contact-section">
                <h1>CONTACT US</h1>
                <div className="contact-infos">
                    <div className="left-side-contact">
                        <div className="infos">
                            <img src={location} alt="location icon" className='icon'/>
                            <p className='details-infos'>
                                Antevibe, Sainte-Marie, Madagascar
                            </p>
                        </div>

                        <div className="infos">
                            <img src={mail} alt="location icon" className='icon'/>
                            <p className='details-infos'>
                                dabouwilly@gmail.com
                            </p>
                        </div>

                        <div className="infos">
                            <img src={phone} alt="location icon" className='icon'/>
                            <p className='details-infos'>
                                +261 374266816
                            </p>
                        </div>

                        <div className="infos">
                            <img src={time} alt="location icon" className='icon'/>
                            <p className='details-infos'>
                                Monday-Friday:09AM-7PM
                            </p>
                        </div>

                        <div className="infos">
                            <img src={time} alt="location icon" className='icon'/>
                            <p className='details-infos'>
                                Saturday:10AM-4PM
                            </p>
                        </div>

                        <div className="infos">
                            <img src={website} alt="location icon" className='icon'/>
                            <p className='details-infos'>
                                www.willydabou.vercel.com
                            </p>
                        </div>
                    </div>
                    <div className="contact-input">
                        <form action="" className='contact-form'>
                            <input type="text" className='input' placeholder='Your name'/>
                            <input type="text" className='input' placeholder='Your email'/>
                            <textarea name="message" placeholder='Message'></textarea>
                            <input type="submit" className='submit-btn'/>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Contact