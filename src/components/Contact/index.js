import '../../styles/contact.css';
import user from '../../images/user-red.svg';
import email from '../../images/email-red.svg';
import message from '../../images/message-red.svg';
export default function Contact() {
    return (
        <div className="Container Container-contact">
            <div className="Contact">
                <div className="Title">
                    <p>Entre em contato comigo</p>
                    <h2>Enviar mensagem</h2>
                </div>
                <form>
                    <div>
                        <label for="name">
                            <img src={user} />
                            Nome
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Digite seu nome completo..."
                        ></input>
                    </div>

                    <div>
                        <label for="email">
                            <img src={email} />
                            E-mail
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Digite seu e-mail..."
                        ></input>
                    </div>

                    <div>
                        <label for="message">
                            <img src={message} />
                            Mensagem
                        </label>
                        <textarea
                            id="message"
                            placeholder="Digite sua mensagem..."
                        ></textarea>
                    </div>

                    <button type="submit">Enviar mensagem</button>
                </form>
            </div>
        </div>
    );
}
