import { useState } from 'react'

export const useFormNumber = (initialState) => {
	const [value, setValue] = useState(initialState)

	return [
		value,
		() => {
			setValue(!value)
		},
	]
}
