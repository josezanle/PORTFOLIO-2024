"use client"

import { useState } from "react";
import { Icon } from "../icons";
import Tooltip from "../tooltip";

const ORANGE = "#f58d28"
const GREY = "#e3e2e3"

const Sidebar = () => {
  const iconNames = ['sms', 'resume', 'menu'];
  const [fillColor, setFillColor] = useState({
    sms: 'silver',
    resume: 'silver',
    menu: 'silver'
  });

  const iconMessages = {
    sms: 'Contactar por email.',
    resume: 'Descargar mi CV',
    menu: ''
  };

  const links = [
    {
      name: "SOBRE MI",
      href: "",
      color: ""
    },
    {
      name: "EXPERIENCIA",
      href: "",
      color: ""
    },
    {
      name: "SKILLS",
      href: "",
      color: ""
    },
    {
      name: "CONTACTO",
      href: "",
      color: ""
    },
  ]

  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMouseEnter = (name) => {
    setFillColor(prevState => ({ ...prevState, [name]: ORANGE }));
    setHoveredIcon(name);
  }
  const handleMouseLeave = (name) => {
    setFillColor(prevState => ({ ...prevState, [name]: GREY }));
    setHoveredIcon(null);
  }
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const onEmailSend = () => {

    const recipient = 'jose.rios.lm@gmail.com';
    const subject = 'Consulta desde portfolio web';
    const body = 'Hola, me gustaria entrevistarte para una posición en la empresa...';

    // Abre el cliente de correo con los detalles predefinidos
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
  const onResumeDownload = () => {
    const link = document.createElement('a');
    link.href = 'resume_rios_jose_2024.pdf';
    link.download = 'resume_rios_jose_2024.pdf';
    link.click(); 
  }


  return (
    <div className="sidebar">
      <div className="navigation">
        {iconNames?.map(name => (
          <div
            key={name}
            onMouseEnter={() => handleMouseEnter(name)}
            onMouseLeave={() => handleMouseLeave(name)}
            onClick={name === 'menu' ? () => toggleMenu() : () => { }}
          >
            <Icon
              name={name}
              fill={fillColor[name]}
              size={27}
              onClick={
                name === "sms" ? onEmailSend
                  : name === "resume" ? onResumeDownload
                    : () => { }}
            />
            {hoveredIcon === name && name !== "menu" && <Tooltip message={iconMessages[name]} />}
          </div>
        ))}
      </div>

      {isMenuOpen && (
        <div className="menu__container">{links?.map((link, i) => <h4 key={i} className="link">{link.name}</h4>)}</div>
      )}

      <div className="content">
        <p className="rotated__text">Jose Rios</p>
      </div>


      <style jsx>{`
        .sidebar {
          width: 350px;
          height: 100vh;
          background: white;
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
        }
        .sidebar .navigation {
          width: 100%;
          height: 60px;
          background: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 2em;
        }
        .sidebar .menu__container {
          width: 350px;
          height: calc(100vh - 60px);
          background: white;
          padding: 1em;
          animation: ${isMenuOpen ? 'slideIn 0.3s forwards' : 'slideOut 0.3s forwards'};
          display: flex;
          flex-flow: column;
          justify-content: space-;
          align-items: center;
        }
        .sidebar .menu__container .link {
          font-size: 2em;
          cursor: pointer;
          color: ${GREY};
        }
        @keyframes slideIn {
          0% { 
            transform: translateX(100%); 
            opacity: 0; 
          }
          100% { 
            transform: translateX(0); 
            opacity: 1; 
          }
        }
        @keyframes slideOut {
          0% { 
            transform: translateX(0); 
            opacity: 1; 
          }
          100% { 
            transform: translateX(100%); 
            opacity: 0; 
          }
        }

        .sidebar .content {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .sidebar .content .rotated__text {
          writing-mode: vertical-lr;
          font-size: 6em;
          color: ${GREY};
          text-transform: uppercase;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
