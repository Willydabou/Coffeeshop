
import './Navbar.css'
import logo from '/Images/coffee-icon.png'

function Navbar(){

    return(
        <>
            <div className="nav-section">
                <div className="coffee-logo">
                    <img src={logo} alt="coffee logo" />
                    <h3>Coffee</h3>
                </div>
                <div className="nav-menu">
                    <div className="menu">Home</div>
                    <div className="menu">About</div>
                    <div className="menu">Menu</div>
                    <div className="menu">Testimonials</div>
                    <div className="menu">Contact</div>
                </div>
            </div>
        </>
    );
}
export default Navbar