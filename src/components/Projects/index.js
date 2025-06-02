import "../../styles/project.css";
import project1 from "../../images/project1.png";
import project2 from "../../images/project2.png";
import project3 from "../../images/project3.png";
import project4 from "../../images/project4.png";
import project5 from "../../images/project5.png";
import project6 from "../../images/project6.png";
import project7 from "../../images/project7.png";
import project8 from "../../images/project8.png";
import project9 from "../../images/project9.png";
import { CardProject } from "./cardProject";

const typeApp = {
  mobile: "Aplicativo",
  web: "website",
};

export default function Habilites() {
  return (
    <div className="Container">
      <div className="Projects" id="project">
        <h3 className="Tag">Projetos</h3>
        <div className="Title">
          <p>veja meus principais projetos</p>
          <h2>Projetos em Destaque</h2>
        </div>

        <section>
          <CardProject
            title="Hemodata"
            type={`${typeApp.web}/software`}
            link="https://www.behance.net/gallery/185559927/Hemodata-UIUX-Design-Case-Study"
            image={project1}
          />
          <CardProject
            title="MonitoriaIFPB"
            type={typeApp.mobile}
            image={project2}
          />
          <CardProject
            title="Redesign - Amazon"
            type={typeApp.web}
            link="https://www.behance.net/gallery/155351329/AMAZON-UI-REDESIGN"
            image={project3}
          />
          <CardProject
            title="Find the House"
            type={typeApp.web}
            link="https://www.behance.net/gallery/150061145/Find-the-House"
            image={project4}
          />
          <CardProject
            title="Coffee center"
            type={typeApp.web}
            link="https://www.behance.net/gallery/156092987/COFFEE-CENTER-UI-DESIGN"
            image={project5}
          />
          <CardProject
            title="AdotaPet"
            type={typeApp.mobile}
            image={project6}
          />
          <CardProject title="Namorico" type={typeApp.web} image={project7} />
          <CardProject
            title="MyAppart"
            type={typeApp.mobile}
            image={project8}
          />
          <CardProject
            title="Calculadora minimalista"
            type={typeApp.mobile}
            image={project9}
          />
        </section>
      </div>
    </div>
  );
}
