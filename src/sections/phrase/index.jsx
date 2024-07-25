import React from 'react'
import { YELLOW } from '@/theme'
import { useTranslations } from 'next-intl'
import Title from '@/components/text/title'

const Phrase = () => {
    const translate = useTranslations("Index")
    const bgImageUrl = 'https://res.cloudinary.com/dogdjv2al/image/upload/v1721248360/portfolio-jose/qzp7veg1pqzbe6zk4jja.jpg'
    const bgImageUrlResponsive = 'https://images.pexels.com/photos/4069292/pexels-photo-4069292.jpeg'

    return (
        <div className='container__phrase'>
            <span className='content'>
                <div className="box__title">
                    <Title value={translate("phrase.phraseTitle")} color='#8e71d6' />
                </div>

                <p className='single_text'>{translate("phrase.phraseText1")} 
                    <b className='especial'>{translate("phrase.phraseText2")}</b>
                </p>
            </span>

            <style jsx>{`
            .container__phrase{
                width: 100%;
                min-height: 150vh;
                display: flex;
                justify-content: center;
                align-items: center;
                background-image: linear-gradient(to top,rgba(30, 31, 31, 1), rgba(30, 31, 31, 0.8)), url(${bgImageUrl});
                background-size: cover;
                background-repeat: no-repeat;
            }
            .container__phrase .content{
                width: 1200px;
                display: flex;
                align-items: center;
            }
            .container__phrase .box__title{ width: 600px}
            .container__phrase .single_text{
                width: 600px;
                font-size: 30px;
                font-weight: 400;
                color: white;
            }
            .container__phrase .single_text .especial{ 
                color: ${YELLOW};
                text-transform: uppercase;
                padding-left: 5px 
            }

            @media(max-width: 1280px){
                .container__phrase .content{
                    width: 100%;
                    flex-flow: column;
                    align-items: center;
                    gap: 1em;
                }
            }
            @media(max-width: 640px){
                .container__phrase{
                    background-image: linear-gradient(to top,rgba(30, 31, 31, .7), rgba(30, 31, 31, 1)), url(${bgImageUrlResponsive});
                    background-size: cover;
                    background-repeat: no-repeat;
            }
                .container__phrase .single_text,
                .container__phrase .box__title
                { 
                    width: 100% 
                }
                .container__phrase{ padding: 2em }
            }
            
        `}</style>
        </div>
    )
}

export default Phrase