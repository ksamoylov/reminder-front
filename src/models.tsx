export type ReminderType = {
    id?: number
    description?: string
    period?: string
    isNew: boolean
}

export type ReminderProps = {
    reminder: ReminderType
}
