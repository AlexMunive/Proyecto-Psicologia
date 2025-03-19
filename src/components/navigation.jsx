import React from "react";
import Logo1 from "../../public/img/principal/logo1.jpg"
import Logo2 from "../../public/img/principal/logo2.jpg"
import "../App.css";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <div style={{ display: "flex", flexDirection: "row", marginTop: "-20px" }}>

              <img src={Logo1} style={{ width: "50px", marginRight: "10px" }}></img>
              <img src={Logo2} style={{ width: "50px" }}></img>
            </div>
          </a>{" "}
        </div>
        <div>
          <a href="https://api.whatsapp.com/send?phone=935011606&text=%22Hola%20Ivett,%20espero%20que%20est%C3%A9s%20bien.%20Estoy%20interesado/a%20en%20tus%20servicios%20como%20psic%C3%B3loga%20y%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20c%C3%B3mo%20trabajas%20y%20tu%20disponibilidad.%20%C2%BFPodr%C3%ADas%20darme%20m%C3%A1s%20detalles%20sobre%20tus%20sesiones%20y%20costos?%20Quedo%20atento/a.%20%C2%A1Gracias!%22"  target="_blank">

            <i className="fa fa-whatsapp wsp float" aria-hidden="true"></i>
          </a>

        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                Inicio
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                Sobre mí
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Servicios
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Historial
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Testimonios
              </a>
            </li>
            {/* <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li> */}
            <li>
              <a href="#contact" className="page-scroll">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
