import React from 'react'

const Image1 = "https://res.cloudinary.com/dubv6xkxf/image/upload/f_webp,q_100/v1714321558/blsvt0cbta4u1zuxwjwr.jpg";
const Image2 = "https://res.cloudinary.com/dubv6xkxf/image/upload/f_webp,q_100/v1714306272/b5j8a1jazzjbtolhe4ln.jpg";
const Image3 = "https://res.cloudinary.com/dubv6xkxf/image/upload/f_webp,q_100/v1714321649/q9tt3zzezuybwyoucx3c.jpg";
const Image4 = "https://res.cloudinary.com/dubv6xkxf/image/upload/f_webp,q_100/v1714321558/blsvt0cbta4u1zuxwjwr.jpg";

const RightSection = () => {
    return (
        <div className='rightSection'>
            <div className="div1"></div>
            <div className="div2"></div>
            <div className="div3"></div>
            <div className="div4"></div>

            <style jsx>{`
            .rightSection{
                width: 600px;
                min-height: 400px;
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                grid-template-rows: repeat(3, 1fr);
                gap: 1em;
            }

            .rightSection .div1 { 
                grid-area: 1 / 1 / 2 / 5;
                background-image: url(${Image1});
                background-size: cover;
                background-position: top;
                border-radius: .5em;
                }
            .rightSection .div2 { 
                grid-area: 2 / 1 / 3 / 3;
                background-image: url(${Image2});
                background-size: cover;
                background-position: left;
                border-radius: .5em;
                }
            .rightSection .div3 { 
                grid-area: 2 / 3 / 3 / 5;
                background-image: url(${Image3});
                background-size: cover;
                background-position: center;
                border-radius: .5em;

                }
            .rightSection .div4 { 
                grid-area: 3 / 1 / 4 / 5;
                background-image: url(${Image4});
                background-size: cover;
                background-position: bottom;
                border-radius: .5em;
            }
            @media (max-width: 1260px ){ .rightSection{ width: 50%} }
            @media (max-width: 650px ){ .rightSection{ min-width: 100% } }
        `}</style>
        </div>
    )
}

export default RightSection