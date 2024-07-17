"use client"

import React, { useEffect, useRef, useState } from 'react';

import Banner from '@/sections/banner';
import Phrase from '@/sections/phrase';
import Experience from '@/sections/experience';
import ZanleSection from '@/sections/zanleStudio';
import Footer from '@/sections/footer';
import Reference from '@/sections/reference';
import CopyRigth from '@/sections/copyrigth';
import { VIOLET, YELLOW } from '@/theme';

function Body() {
  // por cada component, que se agrega, se añade un useRef= null, para mapear, y scrollear a travez del index.
  const components = [
    <Banner />,
    <Phrase />,
    <Reference />,
    <Experience />,
    <ZanleSection />,
    <Footer />,
    <CopyRigth />
  ];

  const refs = components.map(() => useRef(null));

  return (
    <main className="main__container">
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
          background: ${VIOLET} ;
          color: white;
          cursor: pointer;
          z-index: 1000;
        }
        .main__container .arrow__button:hover{background: ${YELLOW} }
        .main__container .arrow__button.top{bottom: 80px}
        .main__container .arrow__button.bottom{bottom: 1em}
      `}

      </style>
    </main>
  );
}

export default function Home() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return isClient ? <Body /> : null

}