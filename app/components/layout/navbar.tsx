'use client'

import Link from 'next/link'
import { PiBugBold } from "react-icons/pi";
import { NavbarLink } from '@/app/interface/navbar/navbar'
import { usePathname } from 'next/navigation'
import classNames from 'classnames'

export default function Navbar() {
    const currentPath = usePathname()

    const links: NavbarLink[] = [
        {
            label: 'Dashboard',
            href: '/',
        },
        {
            label: 'Issues',
            href: '/issues',
        },
    ]

    return (
        <nav className={ 'flex items-center space-x-6 border-b mb-5 px-5 h-14' }>
            <Link href={ '/' }><PiBugBold size={ 24 }/></Link>
            <ul className={ 'flex space-x-6' }>
                { links.map(link =>
                    <Link
                        className={ classNames({
                            'text-zinc-900': currentPath === link.href,
                            'text-zinc-500': currentPath !== link.href,
                            'hover:text-zinc-800 transition-colors': true
                        }) }
                        key={ link.href }
                        href={ link.href }
                    >
                        { link.label }
                    </Link>
                ) }
            </ul>
        </nav>
    )
}