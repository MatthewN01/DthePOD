import './App.css';
import Header from './Components/header';
import Footer from './Components/footer';
import Hero from './Components/Section1-Main';
import Badges from './Components/Section-Cards';
import CarouselComponent from './Components/Carousel';


function App() {
  return (
    <div className="App bg-slate-100 overflow-hidden">
      <Header/>
      <Hero/>
      <Badges/>
      <CarouselComponent/>
      <Footer/>

    </div>
  );
}

export default App;
