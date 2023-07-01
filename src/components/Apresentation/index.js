import '../../styles/apresentation.css';
import profile from '../../images/profile.png';
import line from '../../images/line.svg';
import arrow from '../../images/chevron-down.svg';

export default function Apresentation() {
    return (
        <div className="Container">
            <div className="Apresentation">
                <div>
                    <img src={profile} alt="Foto principal" />
                    <p>Olá, eu sou Lyzzandro!</p>
                </div>
                <img src={line} alt="Linha para separar" />
                <h1>
                    Construo experiências digitais que unem pessoas e negócios
                    através
                    <span> de interfaces impactantes</span>
                </h1>
                <button className="GradientButton">
                    Solicitar proposta
                    <img src={arrow} alt="Arrow" />
                </button>
            </div>
        </div>
    );
}
