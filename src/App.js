import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Whyme from "./components/Whyme";

function App() {
  return <div className='homepage'>
    <Nav />
    <Header />
    <Portfolio />
    <About />
    <Services />
    <Whyme />
    <Contact />
    <Footer />
  </div>
}

export default App;
