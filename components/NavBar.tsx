import React from 'react';
import Link from "next/link";

import styles from './NavBar.module.css'
import {ActiveLink} from "./ActiveLink";

const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricings'
    },
];

export const NavBar = () => {
    return (
        <nav className={styles['menu-container']}>
            {
                menuItems.map(({text, href})=><ActiveLink key={text} text={text} href={href}/>)
            }
        </nav>
    );
};
