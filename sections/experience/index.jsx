import { Icon } from '@/components/icons';
import { BLACK } from '@/theme';
import React from 'react';

const DATA = [
    {
        img: "multifiber.png",
        name: "Multifiber",
        type: "Custom Development",
        year: "2021",
        code:"cl"
    },
    {
        img: "gbm.png",
        name: "GreenBondMeter",
        type: "Fintech",
        year: "2022",
        code:"ar"
    },
    {
        img: "sooft.png",
        name: "SOOFT Technology",
        type: "Software factory",
        year: "2023",
        code:"ar"
    },
]

const Experience = () => {
    return (
        <div className='experience__container'>
            <p className='title'> <b>Trabajos</b> recientes</p>

            <div className="top__text">
                <p className='describe'> <b>Ok,</b> vamos a hablar un poco de mi <b>experiencia laboral</b> , en algunas <b>STARTUPS.</b> </p>
            </div>

            <div className="row">
                {
                    DATA.map((item, i) => {
                        return (
                            <div className="item" key={i}>
                                <div className="company">
                                    <p className='company__name'>{item.name}</p>
                                    <p className='company__type'>{item.type}</p>
                                    <img className='flag' src={`https://flagcdn.com/20x15/${item.code}.png`} alt={item.code + " " + "img"} />
                                </div>

                                <img className='image' src={item.img} alt={item.img + "img"} />
                                <p className='year'>{item.year}</p>
                            </div>
                        )
                    })
                }
            </div>


            <style jsx>{`
                .experience__container {
                    width: 100%;
                    display: flex;
                    flex-flow: column;
                    align-items: center;
                }
                .experience__container .title {
                    width: 1200px;
                    font-size: 40px;
                    margin-bottom: .5em;
                }
                .experience__container .title b {
                    width: 1200px;
                    font-size: 40px;
                }
                .experience__container .top__text{
                    width: 1200px;
                    display: flex;
                    flex-flow: column;
                    gap: .5em;
                }
                .experience__container .top__text .describe{
                    font-size: 20px;
                    width: 350px;
                    color: ${BLACK};
                }
                .experience__container .top__text .describe b{
                    color: ${BLACK};
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
                }
                .experience__container .row .item:hover{
                    background: hsla(0, 0%, 95%, 0.5);
                }
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
                
            `}</style>
        </div >
    );
};

export default Experience;
