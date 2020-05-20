import React from 'react'
import './App.css'

import Input from './compoments/Input'

function App () {
	
	function AppChange(a){
		console.log(a, '-APP-')
	}
	
	return (
		<div className="App">
			<Input disabled={ false } onChange={() => AppChange()} />
		</div>
	)
}

export default App
