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
                min-height: 600px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .container__phrase .content{
                width: 100%;
                min-height: 100%;
                display: flex;
                justify-content: center;
            }
            .container__phrase .item{
                width: 30%;
            }

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
        `}</style>
        </div>
    )
}

export default Phrase