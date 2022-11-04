import { useState } from 'react'

export function useTimePickers() {
    const [value, setCalendarValue] = useState(new Date())

    return { value, setCalendarValue }
}
