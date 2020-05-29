import React, { Component } from 'react';
import './App.css';
import Validation from "./Validation.component";
import Char from "./Char.component";

 class App extends Component {

 constructor() {
   super();
   this.state = {        
     text: ""
   };
 }

 handleInputChange = (event) => {
   this.setState({     
     text: event.target.value
   });
 }

handleClick = (index) => {
  let chars =  [...this.state.text];
  chars.splice(index,1);

  this.setState({
    text: chars.join("")    
  });
}

 render() {
  return (
    <div className="App">
        <input type="text" onChange={this.handleInputChange} value={this.state.text} />
        <p>Length of text is {this.state.text.length}</p>
        <Validation length={this.state.text.length} />
        {[...this.state.text].map((t,index)=> <Char key={index} letter={t} id= {index} click={this.handleClick} />)}
    </div>
  );
 }
}

export default App;
