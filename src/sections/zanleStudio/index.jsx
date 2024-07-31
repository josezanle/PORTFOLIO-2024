import React from 'react'

import { Br } from '@/components/br'
import { Icon } from '@/components/icons'
import { BLACK, VIOLET, WHITE, YELLOW } from '@/theme'
import { useTranslations } from 'next-intl'
import Title from '@/components/text/title'

const srcZanleImg = "https://res.cloudinary.com/dubv6xkxf/image/upload/v1710119832/l1rf6z3z5zytvhdqnuen.png"

const ZanleSection = () => {
    const translate = useTranslations("Index")

    return (
        <div className='zanle__container' id='zanle'>
            <div className='title__section'>
                <div className='icon__box'>
                    <Icon name='medical' size={50} fill={BLACK} />
                </div>
                <Title value={translate("today.title")} color={BLACK} />
            </div>

            <div className="section">
                <div className="box">
                    <div className="freelance__title">Freelance</div>
                    <a href='https://zanle.studio/' target='_blank' className="content"></a>
                </div>
            </div>

            <Br />
            <Br />

            <div className="description__container">
                <p className='description'><b className='italicText'>Zanle Studio</b> {translate("today.text1")}</p>

                <Br />

                <p className='description'>
                    {translate("today.text2")}
                    <b className='italicText' style={{ paddingLeft: "5px" }}>{translate("today.bold1")}</b>
                    {translate("today.text3")}
                </p>

                <Br />

                <p className='description'>
                    {translate("today.text4")}
                    <b className='italicText' style={{ paddingLeft: "5px" }}>{translate("today.bold2")}</b>
                </p>

            </div>



            <p className='today'>...</p>


            <style jsx>{`
                .zanle__container{
                    width: 100%;
                    min-height: 200vh;
                    display: flex;
                    flex-flow: column;
                    align-items: center;
                    padding-top: 10em;
                    background: ${WHITE}
                }
                .zanle__container .today{
                    width: 100%;
                    font-weight: bold;
                    font-size: 100px;
                    text-align: center;
                    color: ${YELLOW}
                }
                .zanle__container .title__section{
                    width: 1200px;
                    display: flex;
                    gap: 1em;
                    margin-bottom: 2em;
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
                    width: 1200px;
                }
                .zanle__container .section .box .freelance__title{
                    font-weight: 500;
                    color: silver;
                    margin-bottom: 10px;
                }
                .zanle__container .section .box .content{
                    max-width: 1200px;
                    height: 200px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-image: url(${srcZanleImg});
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: center;
                    border-radius: .5em;
                }
                .zanle__container .description__container{
                    width: 1200px;
                    display: flex;
                    align-items: flex-end;
                    flex-flow: column;
                }
                .zanle__container .description__container .description{
                    font-size: 21px;
                    width: 600px;
                }
                .zanle__container .description__container .description .italicText{
                    font-style: italic;
                    font-weight: 100;
                    font-size: 30px
                }

                @media( max-width: 1260px){
                    .zanle__container .title__section { width: 100%; padding: 0 2em}
                    .zanle__container .title__section .icon__box{ display: none}
                    .zanle__container .section .box .content{
                        max-width: 100%;
                    }
                    .zanle__container .description__container{ width: 100%; padding: 0 1em; }
                    .zanle__container .section{
                        width: 100%;
                        padding: 2em;
                    }
                }
                @media( max-width: 640px){
                    .zanle__container .description__container .description{ width: 100% }
                }
            `} </style>

        </div>
    )
}

export default ZanleSection