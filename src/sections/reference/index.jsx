import { LGBLACK } from '@/theme'
import React from 'react'

const Reference = () => {
    return (
        <div className='reference__container'>
            <div className="section">
                <p className='big__letters'>F</p>
                <p className='big__letters second'>B</p>
                <p className='big__letters'>D</p>
            </div>
            <style jsx>
                {`
            .reference__container{
                width: 100%;
                min-height: 150vh;
                display: flex;
                justify-content: center;
                background: ${LGBLACK}
            }
            .reference__container .section{
                width: 1200px;
                color: white;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .reference__container .section .big__letters{
                font-size: 120px;
                color: white;
                font-weight: bold;
                transform: scaleY(4);
                color: white;
            }
            .reference__container .section .big__letters:nth-child(2) {
                {/* transform: scale(3); */}
                {/* margin: 0 1em; */}
            }
            {/* .reference__container .section .second{
                transform: scaleX(2);
                margin: 0 1em;
            } */}
        `}
            </style>
        </div>
    )
}

export default Reference