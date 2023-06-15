import './App.css';
import Menu from './components/Menu';
import Apresentation from './components/Apresentation';
import Footer from './components/Footer';
import Habilites from './components/Habilities';

function App() {
    return (
        <div className="App">
            <Menu />
            <Apresentation />
            <Habilites />
            <Footer />
        </div>
    );
}

export default App;
