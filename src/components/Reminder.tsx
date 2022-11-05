import cntl from 'cntl'
import React from 'react'
import { ReminderType } from '../models'

type ReminderProps = {
    reminder: ReminderType
}

export function Reminder({ reminder }: ReminderProps) {
    const wrapperClassName = cntl`
        m-4 
        p-4 
        shadow-lg 
        font-semibold 
        rounded-xl 
        border-[1px] 
        border-gray 
        text-base 
        flex 
        items-center 
        justify-between
    `

    return (
        <div className={wrapperClassName}>
            <div className="flex items-center justify-between">
                <span>{reminder.id}</span>
                <span className="ml-3">{reminder.description}</span>
            </div>
            <div>{reminder.period}</div>
        </div>
    )
}
