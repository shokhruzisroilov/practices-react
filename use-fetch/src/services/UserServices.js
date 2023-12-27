class UserServices {
	baseUrl = 'https://jsonplaceholder.typicode.com'
	getData = async api => {
		let res = await fetch(`${this.baseUrl}${api}`)
		if (!res.ok) {
			throw new Error('Error')
		}
		return await res.json()
	}
	getUsers = url => {
		return this.getData(url)
	}
}
export default new UserServices()
