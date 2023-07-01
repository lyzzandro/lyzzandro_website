import './App.css';
import Header from './components/Header';
import Apresentation from './components/Apresentation';
import Habilites from './components/Habilities';
import Logos from './components/Logos';
import Projects from './components/Projects';
import Galery from './components/Galery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <Apresentation />
            <Habilites />
            <Logos />
            <Projects />
            <Galery />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
