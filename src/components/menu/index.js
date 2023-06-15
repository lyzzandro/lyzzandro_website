import '../../styles/menu.css';
import logo from '../../logo.svg';
import arrow from '../../images/chevron-down.svg';
export default function Menu() {
    return (
        <div className="Container">
            <header className="Menu">
                <div>
                    <img src={logo} alt="Logo" className="Logo" />
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
                    <button className="RedButton">
                        Solicitar proposta
                        <img src={arrow} alt="Arrow" />
                    </button>
                </div>
            </header>
        </div>
    );
}
