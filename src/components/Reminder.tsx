import React, { useState } from 'react'
import { ReminderType } from '../models'
import { DefaultReminder } from './DefaultReminder'
import { NewReminder } from './NewReminder'
import './Reminder.css'

type ReminderProps = {
    reminder: ReminderType
}

export function Reminder({ reminder }: ReminderProps) {
    const [isExtended, setIsExtended] = useState(false)

    const extendModal = () => {
        if (!reminder.isNew || isExtended) {
            return
        }

        setIsExtended(true)
    }

    const closeModal = () => {
        setIsExtended((isExtended) => !isExtended)
    }

    return (
        <div onClick={extendModal}>
            {isExtended ? (
                <NewReminder handler={closeModal} />
            ) : (
                <DefaultReminder reminder={reminder} />
            )}
        </div>
    )
}
