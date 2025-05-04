"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'
import Logo from '../../../public/assets/images/logo.png'
import { Calendar, Construction, Home, Lamp, LayoutDashboard, MessageSquare, User, UsersRound } from 'lucide-react'
import { cn } from '../../../lib/utils';
import { useActive } from '@/context/activeContext'

function Navbar() {
    const { active, setActive } = useActive();

    return (
        <nav className='flex items-center justify-between bg-gray-900 py-2 px-12'>
          <Link href="/"><Image width={100} height={100} src={Logo} alt='logo brax' /></Link>


            <ul className="flex items-center self-end gap-8 text-white font-sans font-thin text-lg relative">
                {[
                    { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
                    { label: "Rooms", icon: Lamp, href: "/rooms" },
                    { label: "Attendance", icon: UsersRound, href: "/attendance" },
                    { label: "Accounts", icon: User, href: "/accounts" },
                    { label: "Maintenance", icon: Construction, href: "/maintenance" },
                    { label: "Chat", icon: MessageSquare, href: "/chat" },
                ].map(({ label, icon: Icon, href }) => (
                    <li key={label} onClick={() => setActive(label)} className="cursor-pointer">
                        <div
                            className={cn(
                                "flex items-center gap-1 py-0 transition-all",
                                active === label && "trapezoid  px-8" // Só aplica a trapezoid no ativo
                            )}
                        >
                            <Link href={href} className="flex items-center gap-1">
                                <i>
                                    <Icon className={cn("w-4 h-4 ", active ===label && "text-peace-sky-500" )}/>
                                </i>
                                {label}
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>


            <div className="icons flex items-center gap-4">
                <div className="rounded-full p-4 bg-gray-950">
                    <Home className="w-4 h-4 text-divine-ocean-500" />
                </div>
                <div className="rounded-full p-4 bg-gray-950">
                    <User className="w-4 h-4 text-heaven-sand-500" />
                </div>
                <div className="rounded-full p-4 bg-gray-950">
                    <Calendar className="w-4 h-4 text-peace-sky-500" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
