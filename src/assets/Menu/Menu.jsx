import './Menu.css'
import hotBeverages from '/Images/hot-beverage.webp';
import coldBeverages from '/Images/cold-beverage.webp'
import refreshement from '/Images/refreshment.png'
import specialCombo from '/Images/special-combos.png'
import dessert from '/Images/desserts.webp'
import burgerAndFries from '/Images/burger-frensh-fries.png'




function Menu({id}){
    return(
        <>
        <div id={id} className="menu-section">
            <h1>OUR MENU</h1>
            <div className="menu-choices">
                <div className="menu-card">
                    <img src={hotBeverages} alt="" loading="lazy" />
                    <h3>Hot Beverages</h3>
                    <p>Wide range of Steaming hot coffee to make you fresh and light</p>
                </div>
                <div className="menu-card">
                    <img src={coldBeverages} alt="" loading="lazy"/>
                    <h3>Cold Beverages</h3>
                    <p>Creamy and frothy cold coffee to make you cool</p>
                </div>
                <div className="menu-card">
                    <img src={refreshement} alt="" loading="lazy"/>
                    <h3>Refreshment</h3>
                    <p> Fruit and icy refreshment drink to make feel refresh</p>
                </div>
                <div className="menu-card">
                    <img src={specialCombo} alt="" loading="lazy"/>
                    <h3>Special Combos</h3>
                    <p>Your favorite eating and drinking combotions</p>
                </div>
                <div className="menu-card">
                    <img src={dessert} alt="" loading="lazy"/>
                    <h3>Desserts</h3>
                    <p>Sotiate your palate and take you on culinar treat</p>
                </div>
                <div className="menu-card">
                    <img src={burgerAndFries} alt="" loading="lazy"/>
                    <h3>Burger and French fries</h3>
                    <p>Quick bites to satisfy you small size hunger</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Menu