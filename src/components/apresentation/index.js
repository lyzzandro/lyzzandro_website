import '../../styles/Apresentation.css';
import profile from '../../images/profile.png';
import line from '../../images/line.svg';

export default function Apresentation() {
    return (
        <div className="Container">
            <div className="Apresentation">
                <div>
                    <img src={profile} />
                    <p>Olá, eu sou Lyzzandro!</p>
                </div>
                <img src={line} />
                <h1>
                    Crio interfaces para produtos digitais que conectam pessoas
                    e empresas
                </h1>
            </div>
        </div>
    );
}
