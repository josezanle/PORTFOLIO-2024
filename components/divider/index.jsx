import React from 'react'

export const Divider = () => {
  return (
    <div className='divider__container'>
        <div className="div1"></div>
        <div className="div2"></div>
        <div className="div3"></div>
        <div className="div4"></div>
        
        <style jsx>{`
            .divider__container{
                width: 416px;
                min-height: 400px;
                display: grid;
                grid-template-columns: repeat(5, 1fr);
                grid-template-rows: repeat(3, 1fr);
                gap: 1em;
            }

            .div1 { 
                grid-area: 1 / 1 / 2 / 6;
                background-image: url("https://res.cloudinary.com/dubv6xkxf/image/upload/f_webp,q_100/v1714321558/blsvt0cbta4u1zuxwjwr.jpg");
                background-size: cover;
                background-position: top;
                border-radius: .5em;
                }
            .div2 { 
                grid-area: 2 / 1 / 3 / 2;
                background-image: url("https://res.cloudinary.com/dubv6xkxf/image/upload/f_webp,q_100/v1714306272/b5j8a1jazzjbtolhe4ln.jpg");
                background-size: cover;
                background-position: left;
                border-radius: .5em;
                }
            .div3 { 
                grid-area: 2 / 2 / 3 / 6;
                background-image: url("https://res.cloudinary.com/dubv6xkxf/image/upload/f_webp,q_100/v1714321649/q9tt3zzezuybwyoucx3c.jpg");
                background-size: cover;
                background-position: center;
                border-radius: .5em;

                }
            .div4 { 
                grid-area: 3 / 1 / 4 / 6;
                background-image: url("https://res.cloudinary.com/dubv6xkxf/image/upload/f_webp,q_100/v1714321558/blsvt0cbta4u1zuxwjwr.jpg");
                background-size: cover;
                background-position: bottom;
                border-radius: .5em;
                }
            `}</style>
    </div>
  )
}