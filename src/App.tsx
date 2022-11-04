import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

function App() {
    const [value, setCalendarValue] = useState(new Date())

    return (
        <div className="App w-100">
            <div className="w-1/2 m-auto mt-30">
                <Calendar onChange={setCalendarValue} value={value} />
            </div>
        </div>
    )
}

export default App
