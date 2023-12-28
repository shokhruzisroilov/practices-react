import './App.css'
import User from './components/User'
import Loader from './components/Loader'
import { useEffect, useState } from 'react'
import { useFetch } from './costumHooks/useFetch'

const local = JSON.parse(localStorage.getItem('userCount'))

const App = () => {
	const [count, setCount] = useState(local)
	const { users, loading } = useFetch(count === 0 ? 1 : count)

	useEffect(() => {
		localStorage.setItem('userCount', JSON.stringify(count))
	}, [count])
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
