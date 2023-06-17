import './App.css';
import Menu from './components/Menu';
import Apresentation from './components/Apresentation';
import Habilites from './components/Habilities';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Menu />
            <Apresentation />
            <Habilites />
            <Projects />
            <Footer />
        </div>
    );
}

export default App;
