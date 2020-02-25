import React, { Component } from 'react'
import './App.css'
import Person  from './Person/Person'


class App extends Component {


	state = {
		persons: [
			{ name: 'Max', age:29 },
			{ name:'vanessa', age:60 },
			{name:'paula', age:40 }
		] ,
		OutroState: 'algum outro valor'
	}
	switchNameHandler = (newName) => {
		this.setState( {
			persons: [
				{ name: newName, age:28},
				{name: 'Manu',  age:30},
				{name: 'loira', age:67}
			]
		})
	}


	nameChangedHandler = (event) => {
		this.setState ( {
			persons: [
				{name: 'Max', age:20},
				{name: event.target.value, age:300},
				{name:'Vanesa', age:42}
			]
		})
	}

	render() {
		return (
			<div className="app">
				<h1> Eu, sou um React app</h1>
				<p>Estou trabalhando agora </p>
				<button onClick={() => this.switchNameHandler('Maximilian!!!')}>Switch Name</button>
				<Person 
				name={this.state.persons[0].name}
				age={this.state.persons[0].age} />
				<Person 
				name={this.state.persons[1].name}
				age={this.state.persons[1].age}
				click={this.switchNameHandler.bind(this, 'outroNomecarregado')}
				changed={this.nameChangedHandler}>Meu Hobbies: Racing</Person>
				<Person 
				name={this.state.persons[2].name}
				age={this.state.persons[2].age} />

			</div>
		);
	}
}
export default App;



/*
switch Name Handler - alternar manipulador de nomes

name Changed Handler - manipulador de alterações de nome
*/