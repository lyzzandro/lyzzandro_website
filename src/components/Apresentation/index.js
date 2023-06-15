import '../../styles/apresentation.css';
import profile from '../../images/profile.png';
import line from '../../images/line.svg';

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
                    Crio interfaces para produtos digitais que conectam pessoas
                    e empresas
                </h1>
            </div>
        </div>
    );
}
