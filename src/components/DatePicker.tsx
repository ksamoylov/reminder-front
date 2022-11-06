import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { useTimePickers } from '../hooks/time-pickers'

export function DatePicker() {
    const { value, setCalendarValue } = useTimePickers()

    return (
        <div className="w-full m-auto my-4">
            <Calendar
                locale="en-US"
                onChange={setCalendarValue}
                value={value}
                className="rounded-[10px] bg-purple-light border-gray"
            />
        </div>
    )
}
