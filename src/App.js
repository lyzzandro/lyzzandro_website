import './App.css';
import Menu from './components/Menu';
import Apresentation from './components/Apresentation';
import Habilites from './components/Habilities';
import Projects from './components/Projects';
import Galery from './components/Galery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Menu />
            <Apresentation />
            <Habilites />
            <Projects />
            <Galery />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
