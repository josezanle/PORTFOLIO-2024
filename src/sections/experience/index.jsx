import React from 'react';
import { Icon } from '@/components/icons';
import { BLACK, VIOLET, WHITE, YELLOW } from '@/theme';
import { useTranslations } from 'next-intl';
import Title from '@/components/text/title';

const DATA = [
    {
        img: "multifiber.png",
        name: "Multifiber",
        type: "Custom Development",
        year: "2023",
        code: "cl",
        href: "https://multifiber.app/"
    },
    {
        img: "gbm.png",
        name: "GreenBondMeter",
        type: "Fintech",
        year: "2022",
        code: "ar",
        href: "https://gbm.eco/"
    },
    {
        img: "sooft.png",
        name: "SOOFT Technology",
        type: "Software factory",
        year: "2021",
        code: "ar",
        href: "https://sooft.tech/"
    },
]

const Experience = () => {
    const translate = useTranslations('Index');

    return (
        <div className='experience__container'>
            <div className='title__section' id='experience'>
                <div className='icon__box'>
                    <Icon name='medical' size={50} fill={YELLOW} />
                </div>
                <Title
                    value={translate("experience.experienceTitle")}
                    color={YELLOW}
                />
            </div>

            <div className="top__text">
                <p className='describe'>
                    <p className='italicText' style={{ marginRight: "8px" }}>{translate("experience.boldText1")}</p>
                    {translate("experience.text1")}
                    <p className='italicText' style={{ margin: "0 8px" }}>{translate("experience.boldText2")}</p>
                    {translate("experience.text2")}
                    <p className='italicText' style={{ marginLeft: "8px" }}>{translate("experience.boldText3")}</p>
                </p>
            </div>

            <div className="row">
                {
                    DATA.map((item, i) => {
                        return (
                            <a
                                className="item"
                                key={i}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="company">
                                    <p className='company__name'>{item.name}</p>
                                    <p className='company__type'>{item.type}</p>
                                    <img className='flag' src={`https://flagcdn.com/20x15/${item.code}.png`} alt={item.code + " " + "img"} />
                                </div>

                                <img className='image' src={item.img} alt={item.img + "img"} />
                                <p className='year'>{item.year}</p>
                            </a>
                        )
                    })
                }
            </div>

            <style jsx>{`
                .experience__container {
                    width: 100%;
                    min-height: 170vh;
                    display: flex;
                    flex-flow: column;
                    align-items: center;
                    justify-content: center;
                    background: ${WHITE};
                }
                .experience__container .title__section {
                    width: 1200px;
                    display: flex;
                    gap: 1em;
                    margin-bottom: 2em;
                }
                .experience__container .title__section .icon__box {
                    height: 100px;
                    display: flex;
                }
                
                .experience__container .top__text{
                    width: 1200px;
                    display: flex;
                    flex-flow: column;
                    gap: .5em;
                }
                .experience__container .top__text .describe{
                    font-size: 30px;
                    color: ${BLACK};
                }
                
                .experience__container .top__text .describe .italicText{
                    font-style: italic;
                    font-size: 30px
                }
                .experience__container .row{
                    width: 1200px;
                    display: flex;
                    margin-top: 2em;
                    flex-flow: column;
                    gap: 2em;
                }
                .experience__container .row .item{
                    width: 100%;
                    height: 200px;
                    display: flex;
                    align-items: center;
                    padding: 0 2em;
                    cursor: pointer;
                    border-radius: .5em;
                    border: 3px solid #f1f1f1;
                    text-decoration: none;
                    color: ${BLACK};
                    background: ${YELLOW}
                }
                a:focus { color: ${BLACK} }
                .experience__container .row .item:hover{ background: hsla(0, 0%, 95%, 0.5)}
                .experience__container .row .item .company{
                    display: flex;
                    justify-content: center;
                    flex-flow: column;
                    width: 300px;
                }
                
                .experience__container .row .item .company .company__name,
                .experience__container .row .item .company .company__type
                {
                    width: 100%;
                }
                .experience__container .row .item .company .company__name
                {
                    font-size: 18px;
                    font-weight: bold;
                    color: ${BLACK};
                }
                .experience__container .row .item .company .company__type
                {
                    font-size: 13px;
                    font-weight: 500;
                }
                .experience__container .row .item .company .flag
                {
                    width: 20px;
                    height: 15px;
                    margin-top: .5em;
                }
                .experience__container .row .item .image
                {
                    width: 200px;
                    height: 200px;
                    object-fit: contain;
                    border-radius: 1em
                }
                .experience__container .row .item .year
                {
                    font-weight: bold;
                    font-size: 40px;
                    width: 100%;
                    text-align: right
                }

                @media(max-width: 1270px){
                    .experience__container { padding: 2em }
                    .experience__container .title__section,
                    .experience__container .top__text,
                    .experience__container .row
                    {
                        width: 100%;
                    }

                    .experience__container .row{ flex-flow: row}
                    .experience__container .row .item{
                        width: 270px;
                        height: auto;
                        align-items: flex-start;
                        flex-flow: column;
                        padding: 2em;
                    }
                    .experience__container .row .item .company{ width: 100%}
                    .experience__container .row .item .year{ text-align: left }
                }

                @media( max-width: 1260px){
                    .experience__container .title__section .icon__box { display: none }
                }
                @media( max-width: 960px){
                    .experience__container .row{ flex-flow: column; align-items: center}
                }
                @media( max-width: 750px){
                    .experience__container .top__text .describe{ width: 100%}
                }
                
            `}</style>
        </div >
    );
};

export default Experience;
