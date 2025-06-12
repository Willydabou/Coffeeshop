import coffeeDrink from '/Images/man-drinking-coffee.webp'
import facebook from '/Images/Facebook.png'
import instagram from '/Images/Instagram.png'
import x_logo from '/Images/x_logo.png'
import './About.css'


function About(){
    return(
        <>
            <div className="about-section">
                <h1>ABOUT US</h1>
                <div className="about-container">
                    <div className="left-side-about">
                        <img src={coffeeDrink} alt="man drinking coffee"/>
                    </div>
                    <div className="right-side-about">
                        
                        <p>At Coffee House in Sainte-Marie, Madagascar, 
                            we pride ourselves on being go-to destination for 
                            coffee lovers and conversation seekers alike.
                            We are dedicated to providing an exceptional coffee 
                            experience in cozy and inviting atmosphere. Where guests 
                            can relax, unwind, and enjoy their time in confort.
                        </p>
                        <div className="social-media">
                            <img src={facebook} alt="facebook-icon" className='media-icon' />
                            <img src={instagram} alt="instagram-icon" className='media-icon' />
                            <img src={x_logo} alt="x-icon" className='media-icon' />
                        </div>
                    </div>
                </div>
                

            </div>
        </>
    );
}

export default About