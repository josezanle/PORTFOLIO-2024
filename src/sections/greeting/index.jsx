import React, { useState } from 'react';
import dayjs from 'dayjs';
import { useTranslations, useLocale } from 'next-intl';
import { BLACK, VIOLET, WHITE, YELLOW } from '@/theme';

import localeData from 'dayjs/plugin/localeData';
import 'dayjs/locale/es';
import 'dayjs/locale/en';

dayjs.extend(localeData);

const Greeting = () => {
    const translate = useTranslations('Index');
    const locale = useLocale();

    const getDayInLocale = (locale) => {
        dayjs.locale(locale);
        return dayjs().format('dddd');
    };

    const today = getDayInLocale(locale);

    const urlImg = "https://images.pexels.com/photos/305821/pexels-photo-305821.jpeg";

    return (
        <div className='greeting__container'>
            <div className="text">
                <p className='good'>{translate('greeting.good')}</p>
                <p className='day'>{today}</p>
                <p className='phrase'>{translate('greeting.phrase')}</p>
            </div>

            <style jsx>{`
                .greeting__container{
                    width: 100%;
                    min-height: 100vh;
                    background-image: url(${urlImg});
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                
                .greeting__container .text{
                    display: flex;
                    flex-flow: column;
                    justify-content: center;
                    width: 1200px;
                }

                .greeting__container .text .good,
                .greeting__container .text .day{
                    width: 100%;
                    color: ${YELLOW};
                    font-size: 120px;
                    text-transform: uppercase;
                    font-weight: bold;
                    line-height: .9em;
                    letter-spacing: -5px;
                }

                .greeting__container .text .phrase{
                    width: 400px;
                    color: ${BLACK};
                    background: hsla(36, 61%, 92%, 0.8);
                    backdrop-filter: blur(7px);
                    font-size: 15px;
                    padding: 1em;
                    text-transform: capitalize;
                    font-style: italic;
                    font-weight: 100;
                    margin-top: .5em;
                    border-radius: .5em;
                }

                @media(max-width: 1300px){
                    .greeting__container .text{
                        width: 100%;
                        padding: 0 48px;
                    }
                }
                @media(max-width: 650px){
                    .greeting__container .text .good,
                    .greeting__container .text .day{
                        font-size: 60px;
                    }
                    .greeting__container .text .phrase{ width: 100% }
                }
                @media(max-width: 370px){
                    .greeting__container .text .good,
                    .greeting__container .text .day{
                        font-size: 45px;
                    }
                }
            
            `}</style>
        </div>
    );
};

export default Greeting;
