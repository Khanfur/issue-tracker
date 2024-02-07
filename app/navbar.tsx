import Link from 'next/link'
import { PiBugBold } from "react-icons/pi";
import { NavbarLink } from '@/app/interface/navbar/navbar'

export default function Navbar() {
    const links: NavbarLink[] = [
        {
            label: 'Dashboard',
            href: '/',
        },
        {
            label: 'Issues',
            href: '/',
        },
    ]

    return (
        <nav className={ 'flex items-center space-x-6 border-b mb-5 px-5 h-14' }>
            <Link href={ '/' }><PiBugBold/></Link>
            <ul className={ 'flex space-x-6' }>
                { links.map(link =>
                    <Link className={ 'text-zinc-500 hover:text-zinc-800 transition-colors' }
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