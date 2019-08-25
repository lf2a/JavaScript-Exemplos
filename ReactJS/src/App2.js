import React, { useState } from 'react';
import './App.css';

import Test from './Test';

export default function App(props) {

  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'max', age: 28 },
      { name: 'manu', age: 29 },
      { name: 'luiz', age: 24 }
    ],
    othersState: 'some other value'
  });

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'filipy', age: 90 },
        { name: 'manu', age: 29 },
        { name: 'luiz', age: 24 }
      ]
    })
  }

  return (
    <div className="App">
      <button onClick={switchNameHandler}>Switch Name</button>
      <Test name="test" age="20">I'm a Test</Test>
      <Test click={switchNameHandler} name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Test name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Test name={personsState.persons[0].name} age={personsState.persons[0].age} />
    </div>
  )

}
