import React, { Component } from "react";

class App extends Component {
state = {
          firstName: 'alina',
          age: 20
        }
render() {
return ( 
        <div>
           Hello world
           My name is {this.state.firstName} and age is {this.state.age}
        </div>
       )
         }
                           }
export default App;

//task
//revise folder structure
//create an array of objects(employee data) in state and display data















































