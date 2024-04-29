import { Divider } from '@/components/divider'
import React from 'react'

const urlImage = "https://res.cloudinary.com/dubv6xkxf/image/upload/c_thumb,e_improve,f_webp,g_auto,h_600,q_100,w_300/v1714270235/d4siymt0il2dfm5hyihc.jpg"
const bannerUrl = "https://images.pexels.com/photos/2693212/pexels-photo-2693212.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

const Banner = () => {
    return (
        <div className='banner__container'>
            <h1 className='me'>Jose.</h1>
            <div className="content">
                <img className='left__image' src={urlImage} alt="" />
                <div className="right__text">
                    <h6>ME PRESENTO, SOY_____________</h6>
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
                    height: 100vh;
                    background: hsla(0, 0%, 95%, 0.5);
                    display: flex;
                    flex-flow: column;
                }
                .banner__container .me{
                    font-size: 50px;
                    font-weight: bold;
                    padding-left: .5em;
                }
                
                .banner__container .content{
                    width: 100%;
                    min-height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: transparent;
                    padding: 0 1em;
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
                @media(max-width: 1024px ){
                    .banner__container .content{ flex-wrap: wrap}
                    .banner__container{ min-height: 120vh}
                }

            `}</style>
        </div>
    )
}

export default Banner