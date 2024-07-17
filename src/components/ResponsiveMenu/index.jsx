"use client"

import { useState } from "react";
import { Icon } from "../icons";
import { VIOLET } from "@/theme";

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

const ResponsiveMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <div style={{
        position: "fixed",
        top: "1.5em",
        right: "2em",
        zIndex: "100",
      }}>
        <Icon
          name={isMenuOpen ? "close" : "menu"}
          fill={isMenuOpen ? "white" : VIOLET}
          size={40}
          onClick={toggleMenu}
        />
      </div >

      {
        isMenuOpen ? <MenuContent isMenuOpen={isMenuOpen} /> : null
      }

    </>

  );
};

const MenuContent = ({ isMenuOpen }) => {

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/RESUME-JOSE-RIOS-2024.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="responsiveMenu">

      {isMenuOpen && (
        <div className="menu__container">
          {links?.map((link, i) => <p key={i} className="link">{link.name}</p>)}

          <button
            className="download__resume"
            onClick={downloadResume}

          >
            <Icon name="download" fill="white" />
            Resume
          </button>
        </div>
      )}

      <style jsx>{`
        .responsiveMenu { 
          display: none; 
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        }
        .responsiveMenu .menu__container {
          position: absolute;
          width: 100vw;
          height: 100vh;
          background: hsla(40, 41%, 70%, 0.850);
          backdrop-filter: blur(5px);
          padding: 2em;
          animation: ${isMenuOpen ? 'slideIn 0.3s forwards' : 'slideOut 0.3s forwards'};
          display: flex;
          flex-flow: column;
          gap: 1em;
        }
        .responsiveMenu .menu__container .link {
          font-size: 2em;
          cursor: pointer;
          color: white;
        }
        .responsiveMenu .menu__container .download__resume {
          background: ${VIOLET};
          color: white;
          font-weight: bold;
          padding: 1em 0;
          border-radius: .5em;
          font-size: 20px; 
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

        @media( max-width: 850px ){ .responsiveMenu { display: block}}

      `}</style>
    </div>

  )
}

export default ResponsiveMenu;
