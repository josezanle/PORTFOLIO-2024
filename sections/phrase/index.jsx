import { Icon } from '@/components/icons'
import React from 'react'

const Phrase = () => {
    return (
        <div className='container__phrase'>
            <span className='content'>
                <span className='item'><Icon name='medical' size={50} fill='#8beb5c' /></span>
                <h3 className='title'>QUIERO QUE SEPAS</h3>
                <p className='single_text'>El aprecio que tengo, si trabajaste junto a mi, formamos equipo y/o fuiste jefe, ya que todo esto, <b className='especial'>fue gracias a ti.</b></p>
            </span>
            <style jsx>{`
            .container__phrase{
                width: 100%;
                min-height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .container__phrase .content{
                width: 100%;
                display: flex;
                justify-content: center;
            }
            .container__phrase .item{ width: 30%}

            .container__phrase .title{
                width: 30%;
                font-size: 20px;
                color: #8beb5c;
            }
            .container__phrase .single_text{
                width: 30%;
                font-size: 30px;
                font-weight: 300;
            }
            .container__phrase .single_text .especial{
                color: #8beb5c;
            }
            @media( max-width: 1224px ){ 
                .container__phrase .content{
                    flex-flow: column;
                    align-items: center;
                    gap: 1em;
                }
                .container__phrase .item,
                .container__phrase .title,
                .container__phrase .single_text{ width: 50%}
            }
            @media( max-width: 600px ){
                .container__phrase .content{
                    padding: 0 1em;
                }
                .container__phrase .item,
                .container__phrase .title,
                .container__phrase .single_text{ width: 100%}
            }
        `}</style>
        </div>
    )
}

export default Phrase