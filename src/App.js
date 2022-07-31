import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Certification from './components/Certification';
import Blog from './components/Blog';
import Footer from './components/Footer';
import "./styles/global.css";
import "./styles/home.css"

function App() {
  return (
    <>
        <Navbar/>
        <Hero/>
        <AboutMe/>
        <Projects/>
        <Certification/>
        <Blog/>
        <Footer/>
        test
    </>
  );
}

export default App;
