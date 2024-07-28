"use client"

import React, { useEffect, useState, useTransition } from 'react'
import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

import { BLACK } from '@/theme';
import ResponsiveMenu from '../ResponsiveMenu';
import Link from 'next/link';

const Navbar = () => {
    const [isPending, startTransition] = useTransition()

    const translate = useTranslations('Index');
    const router = useRouter()
    const localActive = useLocale()

    const links = [
        { title: 'navbarLinks.home', href: '#banner' },
        { title: 'navbarLinks.experience', href: '#experience' },
        { title: 'navbarLinks.zanleStudio', href: '#zanle' },
        { title: 'navbarLinks.contact', href: '#footer' },
    ];

    const onLangChange = (e) => {
        const nextLocale = e.target.value

        startTransition(() => { router.replace(`/${nextLocale}`) })
    }

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 60) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup the event listener on unmount
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`Navbar ${isSticky ? "sticky" : ""}`}>
            <div className="logo"><p className='name'>JOSE RIOS</p></div>

            <span className='links'>
                {links.map((link, i) => (
                    <Link
                        key={i}
                        href={link.href}
                        style={{
                            fontSize: "15px",
                            textDecoration: "none",
                            color: BLACK,
                            fontWeight: "bold"
                        }}
                        className='link'
                    >{translate(link?.title)}</Link>
                ))}
            </span>

            <select
                defaultValue={localActive}
                disabled={isPending}
                onChange={onLangChange}
                className='lang__select'
            >
                <option value="en">EN</option>
                <option value="es">ES</option>
            </select>

            <div className="menu__container__responsive">
                <ResponsiveMenu />
            </div>

            <style jsx>{`
                .Navbar{
                    width: 100%;
                    padding: 0 3em;
                    height: 80px;
                    padding-top: 1em;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    position: fixed;
                    z-index: 10000;
                    background: transparent;
                    transition: background-color 0.3s ease-in-out;
                }
                .Navbar.sticky {
                    padding: 3em;
                    background-color: hsla(0, 0%, 100%, 0.6); 
                    backdrop-filter: blur(12px);
                }
                .Navbar .menu__container__responsive{ display: none}
                .Navbar .logo{
                    width: 200px;
                    display: flex;
                    align-items: center;
                    gap: .5em;
                    background: transparent;
                }
                .Navbar .logo .name{
                    font-weight: bold;
                    font-size: 25px;
                    letter-spacing: -2px;
                }
                .Navbar .links{
                    width: 100%;
                    gap: 1em;
                    display: flex;
                    justify-content: space-evenly;
                    align-items: center;
                    background: transparent;
                }
                .Navbar .lang__select{
                    color: white;
                    background: ${BLACK};
                    padding: .5em;
                    border-radius: .5em;
                    font-weight: 600;
                    -webkit-appearance: none; /* Chrome, Safari, Opera */
                    -moz-appearance: none; /* Firefox */
                    appearance: none; /* Estándar */
                    text-transform: uppercase
                }

                @media (max-width: 1260px){ .Navbar{ width: 100%; padding: 0 2em}}
                @media (max-width: 850px){
                    .Navbar { justify-content: space-between }
                    .Navbar .links, .Navbar .lang__select{ display: none }
                    .Navbar .menu__container__responsive{ display: block}
                }
            `} </style>

        </nav>
    )
}

export default Navbar