import reactLogo from './assets/react.svg'
import Todos from './components/todos/Todos'
import viteLogo from '/vite.svg'

function App() {
	return (
		<>
			<div className='table_style'>
				<a href='https://vitejs.dev' target='_blank'>
					<img src={viteLogo} className='logo' alt='Vite logo' />
				</a>
				<a href='https://react.dev' target='_blank'>
					<img src={reactLogo} className='logo react' alt='React logo' />
				</a>
			</div>
			<Todos/>
		</>
	)
}

export default App
