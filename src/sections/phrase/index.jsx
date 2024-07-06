import React from 'react'
import { BLACK } from '@/theme'
import { useTranslations } from 'next-intl'
import Title from '@/components/text/title'

const Phrase = () => {
    const translate = useTranslations("Index")

    return (
        <div className='container__phrase'>
            <span className='content'>
                <div className="box__title">
                    <Title value={translate("phrase.phraseTitle")} color='white' />
                </div>

                <p className='single_text'>{translate("phrase.phraseText1")} <b className='especial'>{translate("phrase.phraseText2")}</b></p>
            </span>

            <style jsx>{`
            .container__phrase{
                width: 100%;
                min-height: 150vh;
                display: flex;
                justify-content: center;
                align-items: center;
                background: #1e1f1f;
            }
            .container__phrase .content{
                width: 1200px;
                display: flex;
            }
            .container__phrase .box__title{ width: 600px}
            .container__phrase .single_text{
                width: 600px;
                font-size: 30px;
                font-weight: 400;
                color: silver;
            }
            .container__phrase .single_text .especial{ color: white}

            @media(max-width: 1280px){
                .container__phrase .content{
                    width: 100%;
                    flex-flow: column;
                    align-items: center;
                    gap: 1em;
                }
            }
            @media(max-width: 640px){
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