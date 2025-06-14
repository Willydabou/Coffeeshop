
import Navbar from './assets/Navbar/Navbar'
import Home from './assets/Home/Home'
import About from './assets/About/About'
import Menu from './assets/Menu/Menu'
import Testimonial from './assets/Testimonials/Testimonials'
import Contact from './assets/Contact/Contact'
import Footer from './assets/Footer/Footer'
import './App.css'

function App() {

  

  return (
    <>
      <Navbar/>
      <Home id="home" />
      <About id="about"/>
      <Menu id="menu" />
      <Testimonial id="testimonials"/>
      <Contact id="contact" />
      <Footer/>
    </>
  )
}

export default App
