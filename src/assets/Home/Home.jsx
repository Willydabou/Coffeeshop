
import './Home.css'
import homeImage from '/Images/coffee-home.webp'

function Home({id}){
    return(
        <>
            <div id={id} className="home-section">
                <div className="left-side-home">
                    <h1>Best Coffee</h1>
                    <h4>Make your day great with our special coffee</h4>
                    <p>welcome to our coffee paradise, where every beans tels a story and every cup sparks joy.</p>
                    <button className='btn order'>Order Now</button>
                    <button className='btn contact'>Contact us</button>
                </div>
                <div className="right-side-home">
                    <img src={homeImage} alt="coffe-home-image" loading="lazy"/>
                </div>
            </div>
        </>
    );
}
export default Home