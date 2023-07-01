import '../../styles/header.css';
import logo from '../../logo.svg';
import arrow from '../../images/chevron-down.svg';
export default function Menu() {
    return (
        <div className="Container">
            <header className="Header">
                <div>
                    <img src={logo} alt="Logo" className="Logo" />
                    <ul>
                        <li>
                            <a href="#">Sobre mim</a>
                        </li>
                        <li>
                            <a href="#project">Projetos</a>
                        </li>
                        <li>
                            <a href="#habilities">Habilidades</a>
                        </li>
                        <li>
                            <a href="#contact">Contato</a>
                        </li>
                        <li>
                            <a href="#galery">Galeria</a>
                        </li>
                    </ul>
                    <a
                        href="https://wa.me/5583991017224?text=Oi%2C+Lyzzandro%21+Quero+solicitar+um+projeto+com+voc%C3%AA."
                        target="_blank"
                    >
                        <button className="RedButton">
                            Solicitar proposta
                            <img src={arrow} alt="Arrow" />
                        </button>
                    </a>
                </div>
            </header>
        </div>
    );
}
