import React from 'react';
import { Icon } from '@/components/icons';
import { BLACK, YELLOW } from '@/theme';
import { useTranslations } from 'next-intl';
import Title from '@/components/text/title';


const multifiberImg = "https://images.pexels.com/photos/5745184/pexels-photo-5745184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
const gbmImg = "https://images.pexels.com/photos/3228762/pexels-photo-3228762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
const sooftImg = "https://images.pexels.com/photos/6340617/pexels-photo-6340617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"


const Experience = () => {
    const translate = useTranslations('Index');

    return (
        <div className='experience__container'>
            <div className='title__section' id='experience'>
                <div className='icon__box'>
                    <Icon name='medical' size={50} fill={BLACK} />
                </div>
                <Title value={translate("experience.experienceTitle")} />
            </div>

            <div className="top__text">
                <p className='describe'>
                    <b className='italicText' style={{ marginRight: "8px" }}>{translate("experience.boldText1")}</b>
                    {translate("experience.text1")}
                    <b className='italicText' style={{ margin: "0 8px" }}>{translate("experience.boldText2")}</b>
                    {translate("experience.text2")}
                    <b className='italicText' style={{ marginLeft: "8px" }}>{translate("experience.boldText3")}</b>
                </p>
            </div>

            <div className="company company1">
                <div className="content">
                    <a
                        className="name"
                        href='https://multifiber.app/'
                        target="_blank"
                        rel="noopener noreferrer"
                    >MULTIFIBER <Icon name='arrow-large' fill='white' size={30} />  </a>
                    <div className="tags"> <span>Web</span> <span>Telefonia</span> <span>Internet</span></div>
                </div>
            </div>
            <div className="company company2">
                <div className="content">
                    <a
                        className="name"
                        href='https://gbm.eco/'
                        target="_blank"
                        rel="noopener noreferrer"
                    >GREENBONDMETER <Icon name='arrow-large' fill='white' size={30} /> </a>
                    <div className="tags"><span>Web</span> <span>Fyntech</span> <span>Bio conservation</span></div>
                </div>
            </div>
            <div className="company company3">
                <div className="content">
                    <a
                        className="name"
                        href='https://sooft.tech/'
                        target="_blank"
                        rel="noopener noreferrer"
                    >SOOFT TECHNOLOGY<Icon name='arrow-large' fill='white' size={30} /></a>
                    <div className="tags"><span>App</span> <span>Development agency</span></div>
                </div>
            </div>

            <style jsx>{`
                .experience__container {
                    width: 100%;
                    min-height: 170vh;
                    display: flex;
                    flex-flow: column;
                    align-items: center;
                    justify-content: center;
                    padding: 4em 2em;
                    background: ${YELLOW} ;
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
                    font-size: 30px;
                }
                .experience__container .company{
                    width: 1200px;
                    height: 75vh;
                    margin: 2px 0;
                    border-radius: 2em;
                    background-size: cover;
                    background-position: center;
                    padding: 2em;
                    position: relative;
                }
                .experience__container .company::after{
                    position: absolute;
                    content: "";
                    width: 100%;
                    height: 100%;
                    top: 0;
                    bottom: 0; 
                    left: 0;
                    right: 0;
                    background: hsla(180, 2%, 12%, 0.5);
                    border-radius: 2em;
                }
                .experience__container .company .content{
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    z-index: 1000;
                }
                .experience__container .company .content .name{
                    display: flex;
                    align-items: center;
                    gap: .5em;
                    color: white;
                    font-size: 2em;
                    font-weight: bold;
                    cursor: pointer;
                    z-index: 1000;
                    text-decoration: none;
                }
                .experience__container .company .content .tags{
                    gap: .5em;
                    color: white;
                    font-size: 2em;
                    font-weight: bold;
                    z-index: 1000;
                }
                .experience__container .company .content .tags span{
                    border: 4px solid #ffffff;
                    color: #ffffff;
                    border-radius: 1em;
                    padding: 5px 10px;
                }
                .experience__container .company1{
                    background-image: url(${multifiberImg});
                    margin-top: 2em;
                }
                .experience__container .company2{
                    background-image: url(${gbmImg});
                    margin: 2em 0;
                }
                .experience__container .company3{
                    background-image: url(${sooftImg});
                }

                @media(max-width: 1270px){
                    .experience__container { padding: 2em }
                    .experience__container .title__section,
                    .experience__container .top__text
                    {
                        width: 100%;
                    }
                }

                @media( max-width: 1260px){
                    .experience__container .title__section .icon__box { display: none }
                    .experience__container .company { width: 100%}
                }
                
                @media( max-width: 870px){
                    .experience__container .company .content .name,
                    .experience__container .company .content .tags
                    { 
                        font-size: 18px;
                    }
                    .experience__container .company .content .tags span{ 
                        border: 3px solid #ffffff;
                    }
                }

                @media( max-width: 750px){
                    .experience__container .top__text .describe{ width: 100%};
                    .experience__container .company{ 
                        display: flex;
                        flex-flow: column;
                        height: 100%
                    }
                    .experience__container .company .content{ 
                        display: flex;
                        flex-flow: column;
                        height: 100%
                    }
                }
                @media( max-width: 480px){
                    .experience__container .company .content .tags{ 
                        display: flex;
                        flex-wrap: wrap;
                    }
                }
                
            `}</style>
        </div >
    );
};

export default Experience;
