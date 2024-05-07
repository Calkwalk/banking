'use client'
import React, { useState } from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import Footer from './Footer'

const MobileNav = ({ user }: MobileNavProps) => {
    const pathname = usePathname();

    return (
        <section className="w-full max-w-[264px]">
            <Sheet>
                <SheetTrigger>
                    <Image src="/icons/hamburger.svg" width={30} height={30} alt='menu' className="cursor-pointer" />
                </SheetTrigger>
                <SheetContent side="left"
                    className="border-none bg-white"
                >
                    <Link href="/" className="cursor-pointer flex items-center gap-1 px-4">
                        <Image src="/icons/logo.svg" alt="Horizon Logo" width={34} height={34} />
                        <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Horizon</h1>
                    </Link>

                    <div className='mobilenav-sheet'>
                        <nav className='flex h-full flex-col gap-6 pt-16 text-white'>
                            {sidebarLinks.map(link => {
                                const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`)
                                return (
                                    <SheetClose asChild key={link.label}>
                                        <Link
                                            href={link.route}
                                            className={cn('mobilenav-sheet_close w-full', { 'bg-bank-gradient': isActive })}
                                        >
                                            <Image
                                                className={cn({ 'brightness-[3] invert-0': isActive })}
                                                src={link.imgURL} alt={link.label} width={20} height={20} />
                                            <p className={cn("text-16 font-semibold text-black-2", {
                                                '!text-white': isActive
                                            })}>
                                                {link.label}
                                            </p>
                                        </Link>
                                    </SheetClose>
                                )
                            })}

                        </nav>

                        <Footer user={user} type='mobile' />
                    </div>

                </SheetContent>
            </Sheet>
        </section >
    )
}

export default MobileNav