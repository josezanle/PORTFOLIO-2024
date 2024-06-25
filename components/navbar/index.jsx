import React from 'react'
import { Icon } from '../icons';

const links = [
    { title: 'INICIO', href: '#banner' },
    { title: 'EXPERIENCIA', href: '#experience' },
    { title: 'ZANLE STUDIO', href: '#footer' },
    { title: 'CONTACTO', href: '#footer' },
];

const Navbar = () => {
    return (
        <nav className='Navbar'>
            <div className="logo">
                <Icon name='watch' size={90} fill='#1c1c1c'/>
                <span className='name'>
                    <b>Jose</b>
                    <b>Ariel</b>
                    <b>Rios</b>
                </span>
            </div>
            <span className='links'>
                {links.map((link, i) => (
                        <b key={i} className='link'>{link.title}</b>
                ))}
            </span>

            <style jsx>{`
                .Navbar{
                    width: 850px;
                    padding-top: 1em;
                    display: flex;
                    align-items: center;
                }
                .Navbar .logo{
                    width: 200px;
                    display: flex;
                    align-items: center;
                    gap: .5em;
                }
                .Navbar .logo .name{
                    display: flex;
                    flex-flow: column;
                    line-height: 16px;
                    letter-spacing: .3em;
                }
                .Navbar .links{
                    width: 100%;
                    gap: 1em;
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                }
                .Navbar .links .link{
                    cursor: pointer;
                }
                `} </style>

        </nav>
    )
}

export default Navbar