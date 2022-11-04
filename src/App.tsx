import 'react-calendar/dist/Calendar.css'
import { Header } from './components/Header'
import { ReminderList } from './components/ReminderList'

function App() {
    return (
        <div className="App">
            <Header />
            <ReminderList />
        </div>
    )
}

export default App
