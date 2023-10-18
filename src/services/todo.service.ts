import axios from 'axios'

import { IEditTodo, ITodos } from '@/types/todos.types'

import { getTodoUrl } from '@/config/api.config'

export const TodoService = {
	// get all todos

	async getAll() {
		return axios.get<ITodos[]>(getTodoUrl(`/?_start=0&_limit=5`))
	},

	// get By Id

	async getById(id: number) {
		return axios.get<ITodos>(getTodoUrl(`/${id}`))
	},

	// update
	async editTodo(id: number, data: IEditTodo) {
		return axios.put<ITodos>(getTodoUrl(`${id}`), data)
	},

	// delete  todo

	async deleteTodo(id: number) {
		return axios.delete(getTodoUrl(`${Number(id)}`))
	}
}
