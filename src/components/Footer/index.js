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
                <a
                    href="https://wa.me/5583991017224?text=Oi%2C+Lyzzandro%21+Quero+solicitar+um+projeto+com+voc%C3%AA."
                    target="_blank"
                >
                    <button className="WhiteButton">Solicitar proposta</button>
                </a>
                <div>
                    <a
                        className="link-logos"
                        href="https://www.instagram.com/lyzzandro/"
                        target="_blank"
                    >
                        <img src={instagram} />
                    </a>
                    <a
                        className="link-logos"
                        href="https://dribbble.com/lyzzandro"
                        target="_blank"
                    >
                        <img src={dribble} />
                    </a>
                    <a
                        className="link-logos"
                        href="https://www.behance.net/lyzzandro"
                        target="_blank"
                    >
                        <img src={behance} />
                    </a>
                    <a
                        className="link-logos"
                        href="https://www.linkedin.com/in/lyzzandro/"
                        target="_blank"
                    >
                        <img src={linkedin} />
                    </a>
                </div>
                <div className="Site">lyzzandro.com.br</div>
            </div>
        </div>
    );
}
