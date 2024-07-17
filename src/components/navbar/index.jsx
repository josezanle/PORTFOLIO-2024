"use client"

import React, { useEffect, useState, useTransition } from 'react'
import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

import { Icon } from '../icons';
import { BLACK, VIOLET } from '@/theme';
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

        startTransition(() => { router.replace(`/${nextLocale}`)})
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
            <div className="logo">
                <Icon name='watch' size={90} fill={VIOLET} />
                <span className='name'>
                    <b>Jose</b>
                    <b>Rios</b>
                </span>
            </div>

            <span className='links'>
                {links.map((link, i) => (
                    <Link
                        key={i}
                        href={link.href}
                        style={{
                            fontSize: "1.5em",
                            textDecoration:"none",
                            color: BLACK
                        }}
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
                    position: fixed;
                    z-index: 100;
                    background: transparent;
                    transition: background-color 0.3s ease-in-out;

                }
                .Navbar.sticky {
                    padding: 3em;
                    background-color: hsla(0, 0%, 100%, 0.777); 
                    backdrop-filter: blur(0.7em);
                }
                .Navbar .menu__container__responsive{ display: none}
                .Navbar .logo{
                    width: 200px;
                    display: flex;
                    align-items: center;
                    gap: .5em;
                }
                .Navbar .logo .name{
                    display: flex;
                    flex-flow: column;
                }
                .Navbar .logo .name b{
                    line-height: 1em;
                    letter-spacing: .3em;
                    font-size: 1.5em;
                }
                .Navbar .links{
                    width: 100%;
                    gap: 1em;
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    padding-right: 1em;
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