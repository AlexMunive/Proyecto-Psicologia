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
          <a href="https://api.whatsapp.com/send?phone=935011606&text=Hola,%20%C2%A1bienvenid@!%20%F0%9F%8C%BF%20Gracias%20por%20confiar%20en%20este%20espacio.%20Quiero%20recordarte%20que%20aqu%C3%AD%20cuentas%20con%20un%20lugar%20seguro,%20libre%20de%20juicios%20y%20totalmente%20confidencial.%20Si%20en%20alg%C3%BAn%20momento%20tienes%20dudas%20o%20necesitas%20compartir%20algo%20antes%20de%20nuestra%20sesi%C3%B3n,%20no%20dudes%20en%20escribirme.%20%C2%A1Nos%20vemos%20pronto!%20%F0%9F%98%8A%E2%9C%A8"  target="_blank">

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
            {/* <li>
              <a href="#testimonials" className="page-scroll">
                Testimonios
              </a>
            </li> */}
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
