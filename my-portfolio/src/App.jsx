import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import "./app.scss"

function App() {
  return (
    <div className="app">
    <Navbar/>
    <div className="sections">
       <Menu/>
      <Intro/>
      <Portfolio/>
      <Contact/>
      <Footer/>

    </div>
    </div>
  );
}

export default App;
