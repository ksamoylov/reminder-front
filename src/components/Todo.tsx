import React, { ReactNode } from 'react'
import { TodoInterface } from '../models'

type TodoProps = {
    todo: TodoInterface
}

export function Todo({ todo }: TodoProps): ReactNode {
    return (
        <div className="flex justify-between align-items-center my-5 border-2 px-10 py-5 rounded-full">
            <span>{todo.userId}</span>
            <span className="font-bold ml-5">{todo.title}</span>
            <input type="checkbox" className="ml-5" checked readOnly={true} />
        </div>
    )
}
