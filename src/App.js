import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Book from './components/Book';
import WORKING_DAYS from './components/WORKING_DAYS';
import Testimonials from './components/Testimonials';
import Affiliate from './components/Affiliate';
import Footer_last from './components/Footer_last';


function App() {
  return (
    <div>
      <Hero /> 
      <About />
      <Book />
      <WORKING_DAYS />
      <Testimonials />
      <Affiliate />
      <Footer_last/>
    </div>
  );
}

export default App;
