import { useMutation, useQuery } from '@tanstack/react-query'
import { useState } from 'react'

import { ITodos } from '@/types/todos.types'

import { TodoService } from '@/services/todo.service'

export const useTodos = () => {
	const [todos, setTodos] = useState<ITodos[]>([])

	// selected todo id state
	const [todoId, setTodoId] = useState<number | null>(null)

	// first request with react-query

	const { isLoading } = useQuery(
		//* request key : anything your option
		//*	but must be unique
		//* don't use this key anywhere
		['get-all-todos'],

		//* request service function

		() => TodoService.getAll(),

		//* if request succcess
		{
			onSuccess: ({ data }) => {
				setTodos(data)
			},

			//* if request failed
			onError: error => {
				console.log('ERROR', error)
			}
		}
	)

	//* for delete todo

	const { mutate } = useMutation(
		['delete-todo'],
		(id: number) => TodoService.deleteTodo(id),
		{
			onSuccess: () => {
				alert('Todo Deleted!')
			},
			onError: () => {
				alert('ERROR WHEN DELETED TODO')
			}
		}
	)

	const handleDeleteTodo = (id: number) => {
		mutate(id)
	}

	const [isEdit, setIsEdit] = useState<boolean>(false)

	return {
		todos,
		isLoading,
		setTodoId,
		todoId,
		isEdit,
		setIsEdit,
		handleDeleteTodo
	}
}
