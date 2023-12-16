import { Routes, Route, useNavigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import { useEffect } from 'react'

const token = localStorage.getItem('token')

const App = () => {
	const navigate = useNavigate()
	useEffect(() => {
		if (!token) {
			navigate('/register')
		}
	}, [])
	return (
		<>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
			</Routes>
		</>
	)
}

export default App
