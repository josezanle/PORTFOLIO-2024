import React from 'react'
import { Divider } from '@/components/divider'
import Navbar from '@/components/navbar'

const urlImage = "https://res.cloudinary.com/dubv6xkxf/image/upload/c_thumb,e_improve,f_webp,g_auto,h_600,q_100,w_300/v1714270235/d4siymt0il2dfm5hyihc.jpg"

const Banner = () => {
    return (
        <div className='banner__container'>

            <Navbar />
            
            <div className="content">
                <img className='left__image' src={urlImage} alt="" />
                <div className="right__text">
                    <h6>ME PRESENTO, SOY</h6>
                    <br />

                    <b className='main'>Software</b>
                    <br />
                    <b className='main'>Developer</b>

                    <br />
                    <br />

                    <p className='self__intro'>En pocas palabras, soy desarrollador de interfaces, lógica y bases de datos,</p>

                    <br />

                    <p className='self__intro'>Si puedes imaginarlo, puedes crearlo.</p>

                    <br />
                    <br />
                    <h6>2024, Buenos Aires, Argentina</h6>
                </div>
                <Divider />
            </div>

            <style jsx>{`
                .banner__container{
                    width: 100%;
                    min-height: 100vh;
                    display: flex;
                    flex-flow: column;
                    align-items: center;
                }

                .banner__container .content{
                    max-width: 1200px;
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 1em;
                }
                .banner__container .content .left__image{
                    width: 200px;
                    height: 380px
                }
                
                .banner__container .content .right__text .main{
                    font-size: 32px;
                    line-height: 1em;
                }
                .banner__container .content .right__text .self__intro{
                    width: 200px;
                    font-size: 18px;
                    font-style: italic;
                }
            `}</style>
        </div>
    )
}

export default Banner