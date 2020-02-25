import React, { Component } from 'react'
import './App.css'
import Person  from './Person/Person'


class App extends Component {
	render() {
		return (
			<div className="app">
				<h1> Eu, sou um React app</h1>
				<p>Estou trabalhando agora </p>
				<Person name="Max" age="28" />
				<Person name="Manu" age="29"> Meu trabalho e esse </Person>
				<Person name="Sabrina" age="50" />
			</div>
		)
	}
}
export default App
