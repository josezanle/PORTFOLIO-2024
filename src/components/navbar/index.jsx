"use client"

import React, { useTransition } from 'react'
import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

import { Icon } from '../icons';
import { BLACK } from '@/theme';
import ResponsiveMenu from '../ResponsiveMenu';

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

        startTransition(() => {
            router.replace(`/${nextLocale}`)
        })
    }

    return (
        <nav className='Navbar'>
            <div className="logo">
                <Icon name='watch' size={90} fill='#1c1c1c' />
                <span className='name'>
                    <b>Jose</b>
                    <b>Rios</b>
                </span>
            </div>

            <span className='links'>
                {links.map((link, i) => (
                    <b key={i} className='link'>{translate(link?.title)}</b>
                ))}
            </span>

            <select
                defaultValue={localActive}
                disabled={isPending}
                onChange={onLangChange}
                className='lang__select'
            >
                <option value="en">English</option>
                <option value="es">Español</option>
            </select>

            <div className="menu__container__responsive">
                <ResponsiveMenu />
            </div>

            <style jsx>{`
                .Navbar{
                    width: 1200px;
                    padding-top: 1em;
                    display: flex;
                    align-items: center;
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
                .Navbar .links .link{ cursor: pointer }
                .Navbar .lang__mode{
                    color: white;
                    background: ${BLACK};
                    padding: .5em;
                    border-radius: .5em;
                    font-weight: 600;
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