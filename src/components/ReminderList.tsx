import React from 'react'
import { ReminderType } from '../models'
import { Reminder } from './Reminder'

export function ReminderList() {
    const reminders: ReminderType[] = [
        {
            description: 'Take the pills',
            id: 1,
            period: 'Everyday 12:00',
            isNew: false,
        },
        {
            isNew: true,
            description: 'New reminder',
            period: '--_--_--',
        },
    ]

    return (
        <div className="lg:p-10 sm:p-2 m-4">
            <h3 className="text-center text-lg font-bold">Reminder list</h3>
            <div className="lg:mt-10 sm:mt-6">
                {reminders.map((reminder: ReminderType, index: number) => (
                    <Reminder key={index} reminder={reminder} />
                ))}
            </div>
        </div>
    )
}
