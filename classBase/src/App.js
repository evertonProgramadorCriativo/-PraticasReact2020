import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'


class App extends Component {
	state = {
		persons: [
			{ name: 'Max', age: 40 },
			{ name: 'Luciana', age: 50 },
			{ name: 'Stephanie', age: 55 }
		],
		otherState: 'Outro valor '
	}

	switchNameHandler = () => {
		this.setState({
			persons: [
				{ name: 'Nome mudou -> Maria', age: 11 },
				{ name: 'Nome mudou -> Luana', age: 30 },
				{ name: 'Nome mudou -> Renata', age: 30 }
			]
		})
	}

	render() {
		return (
			<div className="App">
				<h1>Hi, I,m a React App</h1>
				<p>This is really working!</p>
				<button onClick={this.switchNameHandler}> Switch Name</button>
				<Person
					name={this.state.persons[0].name}
					age={this.state.persons[0].age}
				/>

				<Person
					name={this.state.persons[1].name}
					age={this.state.persons[1].age}
				>

					My Hobbies: Racing</Person>

				<Person
					name={this.state.persons[2].name}
					age={this.state.persons[2].age}
				/>

			</div>

		)
	}
}

export default App;