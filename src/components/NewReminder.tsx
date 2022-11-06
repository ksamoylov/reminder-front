import React, { useState } from 'react'
import cntl from 'cntl'
import { Close, CloseProps } from './Close'
import { DatePicker } from './DatePicker'
import { Button } from './Button'

export function NewReminder({ handler }: CloseProps) {
    const wrapperClassName = cntl`
        m-4 
        p-4 
        shadow-lg 
        font-semibold 
        rounded-xl 
        border-[1px] 
        border-gray 
        text-base 
        flex
        items-start 
        justify-between
        reminder__extended
        relative
    `

    const [action, setAction] = useState('')

    return (
        <div className={wrapperClassName}>
            <Close handler={handler} />
            <form className="flex items-start justify-between flex-col h-full w-full px-4">
                <label htmlFor="action">What should be done?</label>
                <textarea
                    id="action"
                    className="w-full p-3 outline-0 h-[150px] resize-y my-3"
                    value={action}
                    onChange={(event) => setAction(event.target.value)}
                />
                <label htmlFor="date" className="mt-5">
                    When?
                </label>
                <DatePicker />
                <Button handler={() => console.log('click')} value="Submit" />
            </form>
        </div>
    )
}
