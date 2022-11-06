import React from 'react'
import { LangSwitcher } from './LangSwitcher'
import { Logo } from './Logo'

export function Header() {
    return (
        <header className="w-full p-7 flex justify-between items-center shadow-lg bg-purple-gray">
            <Logo />
            <LangSwitcher />
        </header>
    )
}
