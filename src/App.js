
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import ParticleComp from './Components/Particles/ParticleComp';
import AboutMe from './Components/About Me/AboutMe';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Footer/Footer';




function App() {
  return (
    <div className="App">
      <ParticleComp></ParticleComp>
      <Navbar></Navbar>
      <Header></Header>
      <AboutMe></AboutMe>
      <Projects></Projects>
      <Blog></Blog>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
