import React from 'react'
import { ReminderInterface } from '../models'

type ReminderProps = {
    reminder: ReminderInterface
}

export function Reminder({ reminder }: ReminderProps) {
    return (
        <div className="m-4 p-4 shadow-lg font-semibold rounded-xl border-[1px] border-gray text-base flex items-center justify-between">
            <div className="flex items-center justify-between">
                <span>{reminder.id}</span>
                <span className="ml-3">{reminder.description}</span>
            </div>
            <div>{reminder.period}</div>
        </div>
    )
}
