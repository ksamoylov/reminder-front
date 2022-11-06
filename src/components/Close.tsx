import React, { MouseEventHandler } from 'react'

export type CloseProps = {
    handler: MouseEventHandler
}

export function Close({ handler }: CloseProps) {
    return (
        <div
            className="close absolute top-4 right-4 cursor-pointer"
            onClick={handler}
        />
    )
}
