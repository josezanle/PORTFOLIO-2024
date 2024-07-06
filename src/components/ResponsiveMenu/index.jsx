"use client"

import { useState } from "react";
import { Icon } from "../icons";

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
        zIndex: "100"
      }}>
        <Icon name="menu" fill="silver" size={40} onClick={toggleMenu} />
      </div >

      {
        isMenuOpen ? <MenuContent isMenuOpen={isMenuOpen} /> : null
      }

    </>

  );
};

const MenuContent = ({ isMenuOpen }) => {
  return (
    <div className="responsiveMenu">
      {/* <div className="menuIcon__box">
        <Icon name="menu" fill="silver" size={40} onClick={toggleMenu} />
      </div> */}

      {isMenuOpen && (
        <div className="menu__container">
          {links?.map((link, i) => <p key={i} className="link">{link.name}</p>)}
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
        {/* .responsiveMenu .menuIcon__box {
          position: fixed;
          top: 1.5em;
          right: 2em;
          z-index: 100;
        } */}
        
        .responsiveMenu .menu__container {
          position: absolute;
          width: 100vw;
          height: 100vh;
          background: hsla(0, 0%, 100%, 0.9);
          backdrop-filter: blur(5px);
          padding: 1em;
          animation: ${isMenuOpen ? 'slideIn 0.3s forwards' : 'slideOut 0.3s forwards'};
          display: flex;
          flex-flow: column;
        }
        .responsiveMenu .menu__container .link {
          font-size: 2em;
          cursor: pointer;
          color: grey;
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
