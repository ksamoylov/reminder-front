import { useEffect, useState } from 'react'
import { TodoInterface } from '../models'
import axios from 'axios'

export function useTodos() {
    const [todos, setTodos] = useState<TodoInterface[]>([])
    const fetchTodos = async () => {
        const response = await axios.get<TodoInterface[]>(
            'https://jsonplaceholder.typicode.com/todos'
        )
        setTodos(response.data)
    }

    useEffect(() => {
        fetchTodos()
    })

    return { todos }
}
