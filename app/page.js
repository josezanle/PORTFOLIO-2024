"use client"

import React, { useRef, useState } from 'react';

import About from '@/sections/about';
import Banner from '@/sections/banner';
import Footer from '@/sections/footer';
import Slide from '@/sections/slide';
import Phrase from '@/sections/phrase';

import { Icon } from '@/components/icons';

export default function Home() {
  // por cada component, que se agrega, se añade un useRef= null, para mapear, y scrollear a travez del index.
  const components = [<Banner />, <Phrase />, <About />, <Slide />, <Footer />];
  const refs = components.map(() => useRef(null));
  const [currentSection, setCurrentSection] = useState(0);

  const handleScrollDown = () => {
    if (currentSection < refs.length - 1) {
      setCurrentSection(currentSection + 1);
      refs[currentSection + 1].current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollUp = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
      refs[currentSection - 1].current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="main__container">
      <button className='arrow__button top' onClick={handleScrollUp}><Icon name='arrow-short-up' /></button>
      <button className='arrow__button bottom' onClick={handleScrollDown}><Icon name='arrow-short-down' /></button>
      {components?.map((Component, index) => <div ref={refs[index]} key={index}>{Component}</div>)}

      <style jsx>{`
        .main__container{
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-flow: column;
          background: white;
        }
        
        .main__container .arrow__button{
          position: fixed;
          right: 1em;
          width: 60px;
          height: 60px;
          background: #1c1c1c;
          color: white;
          cursor: pointer;
          z-index: 1000;
        }
        .main__container .arrow__button:hover{background: hsla(0, 0%, 11%, 0.9)}
        .main__container .arrow__button.top{bottom: 60px}
        .main__container .arrow__button.bottom{bottom: 1em}
      `}

      </style>
    </main>
  );
}
