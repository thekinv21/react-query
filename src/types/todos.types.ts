export interface ITodos {
	userId: number
	id: number
	title: string
	completed: boolean
}

export interface IEditTodo {
	userId: number
	title: string
	completed: boolean
}
