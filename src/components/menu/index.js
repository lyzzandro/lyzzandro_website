import '../../styles/menu.css';
import logo from '../../logo.svg';
import arrow from '../../images/chevron-down.svg';
export default function Menu() {
    return (
        <header className="Menu">
            <div className="Container">
                <img src={logo} alt="Logo" />
                <ul>
                    <li>
                        <a>Sobre mim</a>
                    </li>
                    <li>
                        <a>Galeria</a>
                    </li>
                    <li>
                        <a>Projetos</a>
                    </li>
                    <li>
                        <a>Habilidades</a>
                    </li>
                </ul>
                <button>
                    Solicitar proposta
                    <img src={arrow} alt="Arrow" />
                </button>
            </div>
        </header>
    );
}
