import './Footer.css'
import facebook from '/Images/Facebook.png'
import instagram from '/Images/Instagram.png'
import x_logo from '/Images/x_logo.png'

function Footer(){
    return (
        <>
        <div className="footer-section">
            <div className="social-media-icons">
                <img src={facebook} alt="facebook icon" />
                <img src={instagram} alt="instagram icon" />
                <img src={x_logo} alt="x icon" />
            </div>
            <p>&copy;2025</p>
        </div>
        </>
    );
}
export default Footer