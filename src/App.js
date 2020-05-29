import React, { Component } from 'react';
import './App.css';
import Validation from "./Validation.component";
import Char from "./Char.component";

 class App extends Component {

 constructor() {
   super();
   this.state = {
     length: 0,
     chars: [],
     text: ""
   };
 }

 handleInputChange = (event) => {
   this.setState({   
     chars:[...event.target.value],
     text: event.target.value
   });
 }

handleClick = (index) => {
console.log(`index is ${index}`)

  let chars =  [...this.state.chars];
  chars.splice(index,1);

  this.setState({
    text: chars.join(""),
    chars: chars    
  });
}

 render() {
  return (
    <div className="App">
        <input type="text" onChange={this.handleInputChange} value={this.state.text} />
        <p>Length of text is {this.state.chars.length}</p>
        <Validation length={this.state.chars.length} />
        {this.state.chars.map((t,index)=> <Char key={index} letter={t} id= {index} click={this.handleClick} />)}
    </div>
  );
 }
}

export default App;
