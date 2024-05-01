import React from 'react'
import { Divider } from '@/components/divider'
import { Icon } from '@/components/icons'

const urlImage = "https://res.cloudinary.com/dubv6xkxf/image/upload/c_thumb,e_improve,f_webp,g_auto,h_600,q_100,w_300/v1714270235/d4siymt0il2dfm5hyihc.jpg"
const bannerUrl = "https://images.pexels.com/photos/2693212/pexels-photo-2693212.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

const Banner = () => {
    return (
        <div className='banner__container'>
            <div className="top__content">
                <h1 className='me'>Jose.</h1>
                <Icon name='sun' size={40} />
            </div>

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
                    background: hsla(0, 0%, 95%, 0.5);
                    display: flex;
                    flex-flow: column;
                    padding: 2em 0;
                }
                .banner__container .top__content{
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    padding: .5em 2em;        
                }
                .banner__container .top__content .me{
                    font-size: 50px;
                    font-weight: bold;
                    line-height: .9em;
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