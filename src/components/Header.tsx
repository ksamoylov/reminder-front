import React from 'react'
import { Logo } from './Logo'
import { LangSwitcher } from './LangSwitcher'

export function Header() {
    return (
        <header className="w-full p-7 flex justify-between items-center shadow-lg">
            <Logo />
            <LangSwitcher />
        </header>
    )
}
