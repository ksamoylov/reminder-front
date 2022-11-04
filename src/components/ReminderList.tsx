import React from 'react'
import { Reminder } from './Reminder'

export function ReminderList() {
    const reminders = [
        {
            description: 'Take the pills',
            id: 1,
            period: 'Everyday 12:00',
        },
    ]

    return (
        <div className="lg:p-10 sm:p-2 m-4">
            <h3 className="text-center text-lg font-bold">Reminder list</h3>
            <div className="lg:mt-10 sm:mt-6">
                {reminders.map((reminder) => (
                    <Reminder reminder={reminder} />
                ))}
            </div>
        </div>
    )
}
