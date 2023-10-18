import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'

import { IEditTodo } from '@/types/todos.types'

import { TodoService } from '@/services/todo.service'

type TypeTodoEdit = {
	setIsEditTodo: (isEdit: boolean) => void
	todoId: number | null
}

export const useEditTodo = (props: TypeTodoEdit) => {
	const [todo, setTodo] = useState<string>()
	const [todoComplete, setTodoComplete] = useState<boolean | string>()

	const refetcQuery = useQueryClient()

	// get todo by id
	// you can easely rename variables

	const { isLoading } = useQuery(
		['get-todo-ById'],
		() => TodoService.getById(Number(props.todoId)),
		{
			onSuccess: ({ data }) => {
				setTodo(data.title)
				setTodoComplete(data.completed)
			},
			onError: error => {
				console.log('ERROR WHEN FETCHİNG TODO', error)
			},

			//* this request enabled only when have todoId
			enabled: !!props.todoId
		}
	)

	// PUT, PATCH, POST DELETE gibi işlemlere useMutation kullanmalıyız

	//* mutate ve mutateAsync  arasındaki fark nedir?

	const { mutate } = useMutation(
		['edit-todo'],
		(data: IEditTodo) => TodoService.editTodo(Number(props.todoId), data),
		{
			onSuccess: () => {
				props.setIsEditTodo(false)
				refetcQuery.invalidateQueries(['get-all-todos'])
			},
			onError: () => {
				alert('ERROR WHEN UPDATE TODO')
			}
		}
	)

	const handleEditTodo = () => {
		const requestData: IEditTodo = {
			userId: Number(1),
			title: String(todo),
			completed: Boolean(todoComplete)
		}
		mutate(requestData)
	}

	return {
		isLoading,
		todo,
		setTodo,
		handleEditTodo,
		todoComplete,
		setTodoComplete
	}
}
