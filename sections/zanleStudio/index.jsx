import { BLACK } from '@/theme'
import React from 'react'

const srcZanleImg = "https://res.cloudinary.com/dubv6xkxf/image/upload/v1710119832/l1rf6z3z5zytvhdqnuen.png"

const ZanleSection = () => {
    return (
        <div className='zanle__container'>

            <p className='today'>HOY</p>

            <div className="section">
                <div className="box">
                    <div className="freelance__title">Freelance</div>
                    <a href='https://zanle.studio/' target='_blank' className="content"></a>
                </div>
            </div>

            <p className='today'>...</p>


            <style jsx>{`
                .zanle__container{
                    width: 100%;
                    height: 100vh;
                    display: flex;
                    flex-flow: column;
                    align-items: center;
                    margin-top: 10em;
                }
                .zanle__container .today{
                    width: 100%;
                    text-align: center;
                    font-size: 100px;
                    font-weight: bold;
                }
                .zanle__container .section{
                    width: 1200px;
                    display: flex;
                    justify-content: center;
                    padding: 2em 0;
                }
                .zanle__container .section .box{
                    border-radius: 1em;
                    padding: 1em;
                    border: 3px solid #f1f1f1;
                    display: flex;
                    flex-flow: column;
                }
                .zanle__container .section .box .freelance__title{
                    font-weight: 500;
                    color: silver;
                    margin-bottom: 10px;
                }
                .zanle__container .section .box .content{
                    width: 200px;
                    height: 200px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-image: url(${srcZanleImg});
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: center;
                    padding: 1em;
                    border-radius: .5em;
                }
                
            `} </style>

        </div>
    )
}

export default ZanleSection