import { useForm } from './hooks/useForm'

const App = () => {
	const [value, handleChange] = useForm({
		name: '',
		username: '',
		email: '',
		text: '',
	})
	console.log(value)

	return (
		<div className='w-100 d-flex justify-content-center align-items-center'>
			<form className='w-25 mt-5'>
				<div className='mb-3'>
					<label htmlFor='exampleFormControlInput1' className='form-label'>
						FullName
					</label>
					<input
						type='text'
						className='form-control'
						id='exampleFormControlInput1'
						placeholder='Shohruz Isroilov'
						name='name'
						value={value.name}
						onChange={handleChange}
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='exampleFormControlInput1' className='form-label'>
						Username
					</label>
					<input
						type='text'
						className='form-control'
						id='exampleFormControlInput1'
						placeholder='shohcodely'
						name='username'
						value={value.username}
						onChange={handleChange}
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='exampleFormControlInput1' className='form-label'>
						Email address
					</label>
					<input
						type='email'
						className='form-control'
						id='exampleFormControlInput1'
						placeholder='name@example.com'
						name='email'
						value={value.email}
						onChange={handleChange}
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='exampleFormControlTextarea1' className='form-label'>
						Example textarea
					</label>
					<textarea
						className='form-control'
						id='exampleFormControlTextarea1'
						rows='3'
						name='text'
						value={value.text}
						onChange={handleChange}
					></textarea>
				</div>
				<button type='submit' className='btn btn-primary'>
					Submit
				</button>
			</form>
		</div>
	)
}

export default App
