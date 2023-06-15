import '../../styles/habilities.css';
import mobile from '../../images/smartphone.svg';
import desktop from '../../images/monitor.svg';
import code from '../../images/code.svg';
import arrow from '../../images/arrow-down.svg';

export default function Habilites() {
    return (
        <div className="Container">
            <div className="Habilities">
                <img src={arrow} className="Arrow-down" />
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
                                Interfaces para websites que funcionam em
                                qualquer dispositivo, focado em seu público e
                                forte apelo visual.
                            </p>
                        </div>
                    </div>
                    <div className="Card">
                        <img src={desktop} />
                        <div>
                            <h3>Design de interfaces web</h3>
                            <p>
                                Interfaces para websites que funcionam em
                                qualquer dispositivo, focado em seu público e
                                forte apelo visual.
                            </p>
                        </div>
                    </div>
                    <div className="Card">
                        <img src={code} />
                        <div>
                            <h3>Desenvolvimento completo</h3>
                            <p>
                                Interfaces para websites que funcionam em
                                qualquer dispositivo, focado em seu público e
                                forte apelo visual.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
