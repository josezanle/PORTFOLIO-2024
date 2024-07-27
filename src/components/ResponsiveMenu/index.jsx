"use client"

import { useState, useTransition } from "react";
import { Icon } from "../icons";
import { YELLOW, WHITE, BLACK } from "@/theme";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
          fill={BLACK}
          size={40}
          onClick={toggleMenu}
        />
      </div >

      {
        isMenuOpen ? <MenuContent toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} /> : null
      }

    </>

  );
};

const MenuContent = ({ isMenuOpen, toggleMenu }) => {

  const [isPending, startTransition] = useTransition()

  const translate = useTranslations('Index');
  const router = useRouter()
  const localActive = useLocale()

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/RESUME-JOSE-RIOS-2024.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const onLangChange = (e) => {
    const nextLocale = e.target.value

    startTransition(() => {
      router.replace(`/${nextLocale}`)
    })
  }

  const links = [
    { title: 'navbarLinks.home', href: '#banner' },
    { title: 'navbarLinks.experience', href: '#experience' },
    { title: 'navbarLinks.zanleStudio', href: '#zanle' },
    { title: 'navbarLinks.contact', href: '#footer' },
  ];

  return (
    <div className="responsiveMenu">

      {isMenuOpen && (
        <div className="menu__container">
          <select
            defaultValue={localActive}
            disabled={isPending}
            onChange={onLangChange}
            className='lang__select'
          >
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>

          {links?.map((link, i) => 
            <Link
              key={i}
              href={link.href}
              onClick={toggleMenu}
              style={{
                fontSize: "1.5em",
                textDecoration: "none",
                color: BLACK
              }}
            >{translate(link?.title)}</Link>
          )}

          <button
            className="download__resume"
            onClick={downloadResume}
          >
            <Icon name="download" fill={YELLOW} />
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
          background: ${YELLOW};
          backdrop-filter: blur(5px);
          padding: 2em;
          animation: ${isMenuOpen ? 'slideIn 0.3s forwards' : 'slideOut 0.3s forwards'};
          display: flex;
          flex-flow: column;
          gap: 1em;
        }
        .responsiveMenu .menu__container .lang__select {
          width: 100px;
          height: 40px;
          outline: none;
          border: none;
          border-radius: .5em;
          padding: 0 1em;
          -webkit-appearance: none; /* Chrome, Safari, Opera */
          -moz-appearance: none; /* Firefox */
          appearance: none; /* Estándar */
        }
        
        .responsiveMenu .menu__container .download__resume {
          background: ${BLACK};
          color: ${YELLOW};
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
