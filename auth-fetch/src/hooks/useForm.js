import { useState } from 'react'

export const useForm = initailState => {
	const [value, setValue] = useState(initailState)
	return [
		value,
		e => {
			setValue({ ...value, [e.target.name]: e.target.value })
		},
	]
}
