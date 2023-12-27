import './App.css'
import User from './components/User'
import Loader from './components/Loader'
import { useState } from 'react'
import { useFetch } from './costumHooks/useFetch'

const App = () => {
	const [count, setCount] = useState(1)
	const { users, loading } = useFetch(count === 0 ? 1 : count)
	return (
		<div className='app'>
			<button
				onClick={() => setCount(prev => Math.floor(Math.random(prev) * 10))}
			>
				Random
			</button>{' '}
			<br /> <br />
			{loading ? <Loader /> : <User users={users} />}
		</div>
	)
}

export default App
