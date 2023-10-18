import { Button, Input, Modal, Select } from 'antd'
import { ChangeEvent, FC } from 'react'

import { useEditTodo } from './useEditTodo'

interface IEditTodo {
	isEditTodo: boolean
	setIsEditTodo: (isEditTodo: boolean) => void
	todoId: number | null
}

const EditTodo: FC<IEditTodo> = ({ isEditTodo, setIsEditTodo, todoId }) => {
	const {
		isLoading,
		todo,
		handleEditTodo,
		todoComplete,
		setTodoComplete,
		setTodo
	} = useEditTodo({
		todoId,
		setIsEditTodo
	})

	if (isLoading) return <div>Loading Todo....</div>

	return (
		<>
			<Modal
				title='Update Todo'
				open={isEditTodo}
				onCancel={() => setIsEditTodo(false)}
				footer={null}
			>
				<form
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						gap: '10px'
					}}
				>
					<Input
						value={todo}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setTodo(e.target.value)
						}
						placeholder='Enter Todo Title'
					/>

					<Select
						value={todoComplete ? 'true' : 'false'}
						onChange={e => setTodoComplete(e)}
						style={{
							width: '100%'
						}}
						allowClear
					>
						<Select.Option value='true'>Completed</Select.Option>
						<Select.Option value='false'>Uncompleted</Select.Option>
					</Select>

					<Button
						onClick={handleEditTodo}
						type='primary'
						style={{ width: '100%', margin: '10px 0px', background: 'green' }}
					>
						Update
					</Button>
				</form>
			</Modal>
		</>
	)
}

export default EditTodo
