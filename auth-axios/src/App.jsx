import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Layout from './layout/Layout'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import { useState } from 'react'

const App = () => {
	const [token, setToken] = useState(window.localStorage.getItem('token'))
	return (
		<>
			<Routes>
				{token ? (
					<Route path='/' element={<Layout />}>
						<Route index element={<HomePage />} />
					</Route>
				) : (
					<Route path='/' element={<Login setToken={setToken} />} />
				)}
				<Route path='/register' element={<Register />} />
			</Routes>
		</>
	)
}

export default App
