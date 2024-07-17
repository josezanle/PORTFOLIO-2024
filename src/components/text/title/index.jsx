import React from 'react'
import { BLACK } from '@/theme'

const Title = ({ value = "", fontSize = "100px", color = BLACK  }) => {
    return (
        <p className='title__component'>
            {value}
            <style jsx>{`
                .title__component{
                    font-weight: bold;
                    font-size: ${fontSize};
                    font-family: "Playfair", serif;
                    color: ${color} ;
                    line-height: 1em;
                }

                @media( max-width: 710px){ .title__component { font-size: 70px}}
                @media( max-width: 470px){ .title__component { font-size: 40px}}
            `}</style>
        </p>
    )
}

export default Title
