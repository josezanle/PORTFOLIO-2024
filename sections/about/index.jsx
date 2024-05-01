import React, { useContext, useRef } from 'react'
import { CircularImage } from '@/components/circularImage'
import { OnlineStatusContext } from '@/contexts/onlineStatusContext'

const imgUrl = "https://res.cloudinary.com/dubv6xkxf/image/upload/f_webp,q_100/v1714438444/nwga31jhgwhhww5a4xcf.png"

const Card = ({ children }) => {
    const ref = useRef(null);
  
    const dragStart = (e) => {
      const target = e.target;
      e.dataTransfer.setData('card_id', target.id);
      setTimeout(() => {
        target.style.display = "none";
      }, 0);
    }
  
    const dragOver = (e) => {
      e.stopPropagation();
    }
  
    return (
      <div
        id={children}
        ref={ref}
        draggable="true"
        onDragStart={dragStart}
        onDragOver={dragOver}
        className="card"
      >
        {children}
        <style jsx>{`
            .card{
                width: 300px;
                height: 600px;
            }`}</style>
      </div>
    );
  };

const About = () => {
    const isOnline = useContext(OnlineStatusContext)
    return (
        <div className='about__container'>
            <div className="top__text">
                <div className='box__status'>
                    <CircularImage src={imgUrl} alt='some__pic' size={90} />
                    <div className='status' style={{ backgroundColor: isOnline ? 'green' : 'red' }} />
                </div>
                <h3>Ok, vamos a hablar un poco de mi experiencia laboral, en algunas STARTUPS.</h3>
            </div>
            <style jsx>{`
                .about__container{
                    width: 100%;
                    min-height: 100vh;
                    padding: 1em;
                }
                .about__container .top__text{
                    width: 100%;
                    min-height: 100vh;
                    display: flex;
                    justify-content: center;
                    gap: 1em;
                }
                .about__container .top__text .box__status{
                    position: relative
                }
                .about__container .top__text .box__status .status{
                    width: 25px;
                    height: 25px;
                    border-radius: 50%;
                    position: absolute;
                    top: 0;
                    right: 0;
                    border: 4px solid white;
                }
                .about__container .top__text h3{
                    font-size: 60px;
                    width: 900px;
                    color: #1c1c1c;
                    font-weight: 500
                }
            `}</style>
        </div>
    )
}

export default About