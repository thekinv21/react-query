import { Button, Table, Tag } from 'antd'
import { FC } from 'react'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'

import EditTodo from './todo-edit-modal/EditTodo'
import { useTodos } from './useTodos'

const Todos: FC = () => {
	const {
		isLoading,
		todos,
		todoId,
		setTodoId,
		isEdit,
		setIsEdit,
		handleDeleteTodo
	} = useTodos()

	const columns = [
		{
			key: 'id',
			title: 'Todo Id',
			dataIndex: 'id'
		},
		{
			key: 'id',
			title: 'Todo',
			dataIndex: 'title'
		},
		{
			title: 'Completed',
			key: 'completed',
			dataIndex: 'completed',
			render: (completed: boolean) => (
				<Tag
					color={completed === true ? 'green' : 'red'}
					style={{ width: '80px', textAlign: 'center' }}
				>
					{completed === true ? 'Yes' : 'No'}
				</Tag>
			)
		},
		{
			title: 'Actions',
			key: 'actions',
			render: ({ id }: { id: number }) => (
				<div>
					<Button
						type='link'
						size='middle'
						icon={<AiOutlineEdit size={20} />}
						onClick={() => {
							setIsEdit(true), setTodoId(id)
						}}
					/>
					<Button
						type='link'
						danger
						size='middle'
						icon={<AiOutlineDelete size={20} />}
						onClick={() => handleDeleteTodo(id)}
					/>
				</div>
			)
		}
	]

	return (
		<>
			<Table
				loading={isLoading}
				style={{ width: 'auto', maxHeight: '300px' }}
				dataSource={todos}
				columns={columns}
			/>

			{isEdit && (
				<EditTodo
					todoId={todoId}
					isEditTodo={isEdit}
					setIsEditTodo={setIsEdit}
				/>
			)}
		</>
	)
}

export default Todos
