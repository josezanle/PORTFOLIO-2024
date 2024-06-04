import React from 'react';

const Slide = () => {
    return (
        <div className='slide__container'>
            {/* Fondo 1 */}
            <div className='background-1'></div>
            {/* Fondo 2 */}
            <div className='background-2'></div>
            {/* Fondo 3 */}
            <div className='background-3'></div>

            <style jsx>{`
                .slide__container {
                    width: 100%;
                    height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 1em;
                }

                .background-1 {
                    width: 271px;
                    height: 558px;
                    background-image: url('sooft.png'); /* Cambia 'ruta-imagen-1.jpg' por la URL de la primera imagen */
                    background-size: cover;
                    background-position: center;

                }

                .background-2 {
                    width: 271px;
                    height: 558px;
                    background-image: url('gbm.png'); /* Cambia 'ruta-imagen-2.jpg' por la URL de la segunda imagen */
                    background-size: cover;
                    background-position: center;
                }

                .background-3 {
                    width: 271px;
                    height: 558px;
                    background-image: url('multifiber.png'); /* Cambia 'ruta-imagen-3.jpg' por la URL de la tercera imagen */
                    background-size: cover;
                    background-position: center;
                }
            `}</style>
        </div>
    );
};

export default Slide;
