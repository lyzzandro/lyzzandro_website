import '../../styles/footer.css';
import instagram from '../../images/instagram.svg';
import dribble from '../../images/dribble.svg';
import behance from '../../images/behance.svg';
import linkedin from '../../images/linkedin.svg';

export default function Footer() {
    return (
        <div className="Container">
            <div className="Footer">
                <p>Vamos criar um projeto juntos?</p>
                <button className="WhiteButton">Solicitar proposta</button>
                <div>
                    <img src={instagram} />
                    <img src={dribble} />
                    <img src={behance} />
                    <img src={linkedin} />
                </div>
                <div className="Site">lyzzandro.com.br</div>
            </div>
        </div>
    );
}
