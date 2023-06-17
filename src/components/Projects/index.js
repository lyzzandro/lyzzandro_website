import '../../styles/project.css';
import project1 from '../../images/project1.png';
import project2 from '../../images/project2.png';
import project3 from '../../images/project3.png';
import project4 from '../../images/project4.png';
import project5 from '../../images/project5.png';
import project6 from '../../images/project6.png';
import project7 from '../../images/project7.png';
import project8 from '../../images/project8.png';
import project9 from '../../images/project9.png';

export default function Habilites() {
    return (
        <div className="Container">
            <div className="Projects">
                <div className="Title">
                    <p>veja meus principais projetos</p>
                    <h2>Projetos em Destaque</h2>
                </div>

                <section>
                    <div className="Project">
                        <img src={project1} />
                        <h4 className="Type-project">website/software</h4>
                        <p className="Title-project">Hemodata</p>
                    </div>
                    <div className="Project">
                        <img src={project2} />
                        <h4 className="Type-project">Aplicativo</h4>
                        <p className="Title-project">MonitoriaIFPB</p>
                    </div>
                    <div className="Project">
                        <img src={project3} />
                        <h4 className="Type-project">website</h4>
                        <p className="Title-project">Redesign - Amazon</p>
                    </div>
                    <div className="Project">
                        <img src={project4} />
                        <h4 className="Type-project">website</h4>
                        <p className="Title-project">Find the House</p>
                    </div>
                    <div className="Project">
                        <img src={project5} />
                        <h4 className="Type-project">website</h4>
                        <p className="Title-project">Coffee center </p>
                    </div>
                    <div className="Project">
                        <img src={project6} />
                        <h4 className="Type-project">Aplicativo</h4>
                        <p className="Title-project">AdotaPet</p>
                    </div>
                    <div className="Project">
                        <img src={project7} />
                        <h4 className="Type-project">website</h4>
                        <p className="Title-project">Namorico</p>
                    </div>
                    <div className="Project">
                        <img src={project8} />
                        <h4 className="Type-project">Aplicativo</h4>
                        <p className="Title-project">MyAppart</p>
                    </div>
                    <div className="Project">
                        <img src={project9} />
                        <h4 className="Type-project">Aplicativo</h4>
                        <p className="Title-project">Calculadora minimalista</p>
                    </div>
                </section>
            </div>
        </div>
    );
}
