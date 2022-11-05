import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { useTimePickers } from '../hooks/time-pickers'
import './App.css'

function App() {
    const { value, setCalendarValue } = useTimePickers()

    return (
        <div className="App w-100">
            <div className="w-1/2 m-auto mt-30">
                <Calendar onChange={setCalendarValue} value={value} />
            </div>
        </div>
    )
}

export default App
