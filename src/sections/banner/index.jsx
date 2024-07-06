import React from 'react'
import { useTranslations } from 'next-intl'

// UI
import Navbar from '@/components/navbar'
import RightSection from './RightSection'
import Title from '@/components/text/title'

const urlImage = "https://res.cloudinary.com/dubv6xkxf/image/upload/v1719540756/ydaib83g2fwoa2jtdjme.jpg"

const Banner = () => {
    const translate = useTranslations('Index');

    return (
        <div className='banner__container'>
            <Navbar />

            <div className="content">
                <div className="left__section">

                    <div className="profile__section">
                        <img className='profile__image' src={urlImage} alt="" />
                        <div className="text">
                            <p className='name'>Jose Rios</p>
                            <p className='date'>2 min. read - Jul 04, 2024</p>
                        </div>
                    </div>

                    <p className='main'>{translate('banner.job')}</p>

                    <p className='introduceMe'>{translate('banner.presentation')}</p>

                    <p className='self__intro'>{translate("banner.description1")} </p>
                    <p className='self__intro'>"{translate("banner.description2")}" </p>

                    <p className='miniText'>{translate("banner.date")} </p>
                </div>
                <RightSection />
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
                    width: 1200px;
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 2em;
                }
                .banner__container .content .left__section{
                    width: 600px;
                    min-height: 400px;
                    display: flex;
                    flex-flow: column;
                }
                .banner__container .content .left__section .profile__section{
                    width: 100%;
                    display: flex;
                    margin-bottom: 1em;
                    gap: 1em;
                }
                .banner__container .content .left__section .profile__section .profile__image{
                    width: 50px;
                    height: 50px;
                    border-radius: 100%;
                }
                .banner__container .content .left__section .profile__section .text{
                    width: 100%;
                    display: flex;
                    justify-content: center;  
                    flex-flow: column;
                }
                .banner__container .content .left__section .profile__section .text .name{
                    color: #242424;
                    font-size: 16px;
                    font-weight: 500;
                }
                .banner__container .content .left__section .profile__section .text .date{
                    color: #6b6b6b;
                    font-size: 14px;
                }
                
                .banner__container .content .left__section .introduceMe{
                    font-weight: bold;
                    margin-top: 1.5em;
                }
                .banner__container .content .left__section .main{
                    font-size: 40px;
                    line-height: 1em;
                    font-weight: bold;
                }
                .banner__container .content .left__section .self__intro{
                    max-width: 350px;
                    font-size: 22px;
                    font-style: italic;
                    margin-top: .5em;
                }
                .banner__container .content .left__section .miniText{
                    font-size: 14px;
                    margin-top: 3em;
                }

                @media(max-width: 1260px){
                    .banner__container .content{
                        padding: 0 2em;
                        width: 100%
                    }
                    .banner__container .content .left__section{ width: 50% }
                }
                @media(max-width: 900px){ .banner__container .content{ flex-flow: column; padding: 2em }}
                @media(max-width: 650px){ .banner__container .content .left__section{ min-width: 100% }}

            `}</style>
        </div>
    )
}

export default Banner