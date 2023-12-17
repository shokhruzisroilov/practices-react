import { createContext } from 'react'
export const Context = createContext('Shohruz')

export const ContextProvider = ({ children }) => {
	const text = 'Shohruz Isroilov'
	const word = 'Context bilan ishlash method - 1'
	return <Context.Provider value={{ text, word }}>{children}</Context.Provider>
}

export default Context
