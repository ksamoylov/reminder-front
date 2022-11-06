import React, { MouseEventHandler } from 'react'
import cntl from 'cntl'

type ButtonProps = {
    value: string
    handler: MouseEventHandler
}

export function Button({ handler, value }: ButtonProps) {
    const className = cntl`w-60 h-10 bg-purple-gray rounded-[10px] flex items-center justify-center text-white`

    return (
        <div onClick={handler} className={className}>
            {value}
        </div>
    )
}
