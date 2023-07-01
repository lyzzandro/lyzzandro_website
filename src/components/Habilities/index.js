import '../../styles/habilities.css';
import mobile from '../../images/smartphone.svg';
import desktop from '../../images/monitor.svg';
import code from '../../images/code.svg';
import arrow from '../../images/arrow-down.svg';

export default function Habilites() {
    return (
        <div className="Container Container-habilities">
            <div className="Habilities" id="habilities">
                <img src={arrow} className="Arrow-down" />
                <h3 className="Tag">Skills</h3>
                <div className="Title">
                    <p>ferramentas e skills</p>
                    <h2>Minhas Habilidades</h2>
                </div>
                <div className="Cards">
                    <div className="Card">
                        <img src={mobile} />
                        <div>
                            <h3>Design de interfaces mobile</h3>
                            <p>
                                Prototipagem de interfaces mobile focada na
                                usabilidade e nos objetivos do negócio para uma
                                experiência eficaz.
                            </p>
                        </div>
                    </div>
                    <div className="Card">
                        <img src={desktop} />
                        <div>
                            <h3>Design de interfaces web</h3>
                            <p>
                                Crio interfaces web atrativas, focadas no
                                público-alvo e adaptadas para qualquer
                                dispositivo com forte apelo visual.
                            </p>
                        </div>
                    </div>
                    <div className="Card">
                        <img src={code} />
                        <div>
                            <h3>Desenvolvimento completo</h3>
                            <p>
                                Desenvolvimento exclusivo, sem templates, com
                                foco na qualidade e nos detalhes da interface.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
