import React from 'react'
import { useTranslations } from 'next-intl'

// UI
import Navbar from '@/components/navbar'
import RightSection from './RightSection'
import { BLACK, VIOLET, WHITE } from '@/theme'
import dayjs from 'dayjs'

const urlImage = "https://res.cloudinary.com/dubv6xkxf/image/upload/v1719540756/ydaib83g2fwoa2jtdjme.jpg"

const Banner = () => {
    const translate = useTranslations('Index');
    const formattedDate = dayjs().format('MMM DD, YYYY');

    return (
        <div className='banner__container' id='banner'>
            <Navbar />

            <div className="content">
                <div className="left__section">

                    <div className="profile__section">
                        <img className='profile__image' src={urlImage} alt="some img" />
                        <div className="text">
                            <p className='name'>Jose Rios</p>
                            <p className='date'>{translate('banner.read')} - {formattedDate} </p>
                        </div>
                    </div>

                    <p className='job'>{translate('banner.job')}</p>

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
                    background: ${WHITE}
                }

                .banner__container .content{
                    width: 1200px;
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 2em;
                    margin-top: 8em;
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
                .banner__container .content .left__section .job{
                    font-size: 40px;
                    line-height: 1em;
                    font-weight: bold;
                    color: ${BLACK};
                    letter-spacing: -2px;
                }
                .banner__container .content .left__section .self__intro{
                    max-width: 350px;
                    font-size: 22px;
                    font-style: italic;
                    font-weight: 100;
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