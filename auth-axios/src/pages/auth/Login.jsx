import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'

import api from '../../services/api'

const Login = ({ setToken }) => {
	const [error, setError] = useState(false)
	const emailInput = useRef(null)
	const passwordInput = useRef(null)

	const onLogin = e => {
		e.preventDefault()
		api
			.post('/login', {
				email: emailInput.current.value,
				password: passwordInput.current.value,
			})
			.then(res => {
				setError(false)
				setToken(res.data.token)
				alert('success')
				window.localStorage.setItem('token', res.data.token)
			})
			.catch(() => setError(true))
	}

	return (
		<div className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8'>
			<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
				<h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
					Sign in to your account
				</h2>
			</div>

			{error ? (
				<div
					className='sm:mx-auto sm:w-full sm:max-w-sm p-4 mt-10 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400'
					role='alert'
				>
					<span className='font-medium'>Error!</span> Email or Password is wrong
				</div>
			) : (
				<></>
			)}

			<div className='mt-5 sm:mx-auto sm:w-full sm:max-w-sm'>
				<form className='space-y-6' action='#' method='POST' onSubmit={onLogin}>
					<div>
						<label
							htmlFor='email'
							className='block text-sm font-medium leading-6 text-gray-900'
						>
							Email address
						</label>
						<div className='mt-2'>
							<input
								id='email'
								name='email'
								type='email'
								autoComplete='email'
								required
								className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
								ref={emailInput}
							/>
						</div>
					</div>

					<div>
						<div className='flex items-center justify-between'>
							<label
								htmlFor='password'
								className='block text-sm font-medium leading-6 text-gray-900'
							>
								Password
							</label>
							<div className='text-sm'></div>
						</div>
						<div className='mt-2'>
							<input
								id='password'
								name='password'
								type='password'
								autoComplete='current-password'
								required
								className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
								ref={passwordInput}
							/>
						</div>
					</div>

					<div>
						<button
							type='submit'
							className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
						>
							Sign in
						</button>
						{/* <p classNameName='text-red-500 text-center'>{error}</p> */}
					</div>
				</form>

				<p className='mt-10 text-center text-sm text-gray-500'>
					Sign up to your account➡️
					<Link
						to='/register'
						className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
					>
						register
					</Link>
				</p>
			</div>
		</div>
	)
}

export default Login
