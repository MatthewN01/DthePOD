import './App.css';
import Header from './Components/header';
import Footer from './Components/footer';
import Hero from './Components/Section1-Main';
import Badges from './Components/Section-Cards';

function App() {
  return (
    <div className="App bg-slate-100 overflow-hidden">
      <Header/>
      <Hero/>
      <Badges/>
      <Footer/>

    </div>
  );
}

export default App;
