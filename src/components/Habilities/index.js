import '../../styles/habilities.css';
import mobile from '../../images/smartphone.svg';
import desktop from '../../images/monitor.svg';
import code from '../../images/code.svg';
import arrow from '../../images/arrow-down.svg';
import tool1 from '../../images/tool1.svg';
import tool2 from '../../images/tool2.svg';
import tool3 from '../../images/tool3.svg';
import tool4 from '../../images/tool4.svg';
import tool5 from '../../images/tool5.svg';
import tool6 from '../../images/tool6.svg';
import tool7 from '../../images/tool7.svg';
import tool8 from '../../images/tool8.svg';

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
                <div className="Logos">
                    <div class="Logos-slide">
                        <img src={tool1} />
                        <img src={tool2} />
                        <img src={tool3} />
                        <img src={tool4} />
                        <img src={tool5} />
                        <img src={tool6} />
                        <img src={tool7} />
                        <img src={tool8} />
                    </div>

                    <div class="Logos-slide">
                        <img src={tool1} />
                        <img src={tool2} />
                        <img src={tool3} />
                        <img src={tool4} />
                        <img src={tool5} />
                        <img src={tool6} />
                        <img src={tool7} />
                        <img src={tool8} />
                    </div>

                    <div class="Logos-slide">
                        <img src={tool1} />
                        <img src={tool2} />
                        <img src={tool3} />
                        <img src={tool4} />
                        <img src={tool5} />
                        <img src={tool6} />
                        <img src={tool7} />
                        <img src={tool8} />
                    </div>
                    <div class="Logos-slide">
                        <img src={tool1} />
                        <img src={tool2} />
                        <img src={tool3} />
                        <img src={tool4} />
                        <img src={tool5} />
                        <img src={tool6} />
                        <img src={tool7} />
                        <img src={tool8} />
                    </div>
                </div>
            </div>
        </div>
    );
}
