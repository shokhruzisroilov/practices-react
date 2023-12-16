import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'

const Login = () => {
	const [value, handleChange] = useForm({
		email: 'eve.holt@reqres.in',
		password: 'pistol',
	})
	const navigate = useNavigate()
	const [error, setError] = useState('')

	const onSubmit = async e => {
		e.preventDefault()
		let req = await fetch('https://reqres.in/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify({
				email: value.email,
				password: value.password,
			}),
		})
		req = await req.json()
		if (req.token) {
			navigate('/')
			localStorage.setItem('token', req.token)
			setError('')
		} else {
			setError('Invaid input! Chek your email or password and try again')
		}
	}
	return (
		<div class='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8'>
			<div class='sm:mx-auto sm:w-full sm:max-w-sm'>
				<h2 class='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
					Sign in to your account
				</h2>
			</div>

			<div class='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
				<form class='space-y-6' action='#' method='POST'>
					<div>
						<label
							for='email'
							class='block text-sm font-medium leading-6 text-gray-900'
						>
							Email address
						</label>
						<div class='mt-2'>
							<input
								id='email'
								name='email'
								type='email'
								autocomplete='email'
								required
								class='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
								value={value.email}
								onChange={handleChange}
							/>
						</div>
					</div>

					<div>
						<div class='flex items-center justify-between'>
							<label
								for='password'
								class='block text-sm font-medium leading-6 text-gray-900'
							>
								Password
							</label>
							<div class='text-sm'></div>
						</div>
						<div class='mt-2'>
							<input
								id='password'
								name='password'
								type='password'
								autocomplete='current-password'
								required
								class='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
								value={value.password}
								onChange={handleChange}
							/>
						</div>
					</div>

					<div>
						<button
							type='submit'
							class='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
							onClick={onSubmit}
						>
							Sign in
						</button>
						<p className='text-red-500 text-center'>{error}</p>
					</div>
				</form>

				<p class='mt-10 text-center text-sm text-gray-500'>
					Sign up to your account➡️
					<Link
						to='/register'
						class='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
					>
						register
					</Link>
				</p>
			</div>
		</div>
	)
}

export default Login
