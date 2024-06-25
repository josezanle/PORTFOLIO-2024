import React from 'react'
import { Icon } from '@/components/icons'
import { BLACK } from '@/theme'

const Phrase = () => {
    return (
        <div className='container__phrase'>
            <span className='content'>
                <span className='item'><Icon name='medical' size={50} fill={BLACK} /></span>
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
                background: white;
            }
            .container__phrase .content{
                width: 1200px;
                display: flex;
                justify-content: center;
            }
            .container__phrase .item{ width: 33%;}

            .container__phrase .title{
                width: 33%;
                font-size: 30px;
                color: ${BLACK};
            }
            .container__phrase .single_text{
                width: 33%;
                font-size: 30px;
                font-weight: 300;
            }
            .container__phrase .single_text .especial{
                color: ${BLACK};
            }
            
        `}</style>
        </div>
    )
}

export default Phrase