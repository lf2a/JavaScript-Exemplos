import React, { Component } from 'react';
import './App.css';

import Test from './Test';

class App extends Component {

  state = {
    persons: [
      { id: '13', name: 'max', age: 28 },
      { id: '23', name: 'manu', age: 29 },
      { id: '33', name: 'luiz', age: 24 }
    ],
    othersState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (name) => {
    this.setState({
      persons: [
        { name: 'filipy', age: 90 },
        { name: name, age: 29 },
        { name: 'luiz', age: 24 }
      ]
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    // const person = Object.assign({}, this.state.persons[personIndex])
    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({ persons: persons })

    // this.setState({
    //   persons: [
    //     { name: 'filipy', age: 90 },
    //     { name: event.target.value, age: 29 },
    //     { name: 'luiz', age: 24 }
    //   ]
    // })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice()
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }

  tooglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  render() {
    const style = {
      backgroungColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons === true) {
      persons = (
        <div >
          {this.state.persons.map((person, index) => {
            return <Test key={person.id} click={() => this.deletePersonHandler(index)} name={person.name} age={person.age} changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}

        </div>
      )
    }

    return (
      <div className="App">
        <button onClick={this.switchNameHandler.bind(this, 'testeeeee')} style={style} >Switch Name</button>
        <button onClick={this.tooglePersonsHandler} style={style} >Toogle Persons</button>

        {this.state.showPersons === true ?
          <h1>Okkkkk</h1> : null
        }

        {persons}

        <Test click={this.switchNameHandler.bind(this, 'testeeeee')} name="test" age="20">I'm a Test</Test>
        <Test name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Test name={this.state.persons[2].name} age={this.state.persons[2].age} />
        <Test changed={this.nameChangedHandler} name={this.state.persons[1].name} age={this.state.persons[1].age} />

      </div>
    )
  }

}

export default App;