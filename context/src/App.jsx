import { useContext } from 'react'
import Context from './context/Context'

const App = () => {
	const { text, word } = useContext(Context)
	return (
		<>
			<h2>{text}</h2>
			<p>{word}</p>
		</>
	)
}

export default App
