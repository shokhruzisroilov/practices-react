import { useState, useEffect } from 'react'
import userServices from '.././services/UserServices'

const initilaState = {
	users: null,
	loading: false,
}

export const useFetch = urlNumber => {
	const [state, setState] = useState(initilaState)

	useEffect(() => {
		setState({ users: null, loading: true })
		userServices
			.getUsers(`/users/${urlNumber}`)
			.then(data => setState({ users: data, loading: false }))
	}, [urlNumber])

	return state
}
