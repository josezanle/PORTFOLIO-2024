import { LGBLACK, LGWHITE, VIOLET, WHITE, YELLOW } from '@/theme'
import React from 'react'

const Reference = () => {
    return (
        <div className='reference__container'>
            <div className="section">
                <p className='column'>Frontend Developer</p>
                <p className='column'>Backend Developer</p>
                <p className='column'>Ux Ui Design</p>
            </div>

            <div className="big__letters">DEV &#x2605;</div>

            <div className="single__text">REACT JS</div>
            <div className="single__text">REACT NATIVE</div>
            <div className="single__text">NEXT JS</div>
            <div className="single__text">IONIC</div>
            <div className="single__text">ELECTRON</div>
            <div className="single__text">NODE JS</div>
            <div className="single__text">EXPRESS JS</div>
            <div className="single__text">MONGO DB</div>
            <div className="single__text">JWT</div>
            <div className="single__text">JEST</div>
            <div className="single__text">CI CD</div>
            
            <style jsx>
                {`
            .reference__container{
                width: 100%;
                min-height: 150vh;
                display: flex;
                align-items: center;
                background: ${LGBLACK};
                flex-flow: column;
            }
            .reference__container .section{
                width: 1200px;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 2em;
            }
            .reference__container .section .column{
                color: ${YELLOW};
                font-size: 12px;
                text-transform: uppercase;
            }
            .reference__container .big__letters{
                font-size: 120px;
                color: ${VIOLET};
                font-weight: bold;
                transform: scaleY(2);
                margin: 1em 0;
                position: relative;
                font-family: "Playfair", serif;
            }
            .reference__container .big__letters::after{
                position: absolute;
                right: 50px;
                bottom: 0px;
                content: "Since";
                font-size: 16px;
                font-weight: bold;
                font-family: "Raleway", serif;
                color: ${YELLOW};
            }
            .reference__container .big__letters::before{
                position: absolute;
                right: -10px;
                bottom: -7px;
                content: "2020";
                font-size: 16px;
                font-weight: bold;
                border-radius: 100%;
                border: 2px solid ${YELLOW};
                color: ${YELLOW};
                padding: 5px;
                font-family: "Raleway", serif;
            }

            .reference__container .single__text{
                font-size: 14px;
                color: ${WHITE} ;
                font-weight: bold;
                font-weight: 500;
            }

            @media(max-width: 1200px){.reference__container .section{width: 100%}} 
            @media(max-width: 460px){
                .reference__container .section{flex-flow: column}
                .reference__container .big__letters{font-size: 80px}
                .reference__container .big__letters::before{ right: 0px; bottom: -15px}
                .reference__container .big__letters::after{ bottom: -7px;}
            } 
            
        `}
            </style>
        </div>
    )
}

export default Reference