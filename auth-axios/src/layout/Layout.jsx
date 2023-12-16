import { Outlet } from 'react-router-dom'
const Layout = () => {
	return (
		<>
			<h2>Header</h2>
			<Outlet />
			<h2>Footer</h2>
		</>
	)
}

export default Layout
