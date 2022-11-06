import React from 'react'
import { ReminderProps } from '../models'
import cntl from 'cntl'

export function DefaultReminder({ reminder }: ReminderProps) {
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
        reminder
        ${reminder.isNew ? 'cursor-pointer' : ''}
    `

    return (
        <div className={wrapperClassName}>
            <div className="flex items-center justify-between">
                {reminder?.id ? (
                    <span>{reminder.id}</span>
                ) : (
                    <span className="text-2xl">+</span>
                )}
                <span className="ml-3">{reminder.description}</span>
            </div>
            <div>{reminder.period}</div>
        </div>
    )
}
