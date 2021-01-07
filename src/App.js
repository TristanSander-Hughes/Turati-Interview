import React from 'react';//added so that object declarations work correctly
import EmbeddedPlayer from "react-player";//embedded video player library
import  './App.css';//very basic css
//Player object that holds the embedded video and it's native controls
function Player(){
  return(
    <div id="embeddedPlayer"><EmbeddedPlayer url="https://www.youtube.com/watch?v=GO5FwsblpT8" controls={true} /></div>
  );
}
//object that holds the form and defines its behaviour
class RegisterForm extends React.Component{
  constructor(props){
    super(props);//properties object is empty as there are no pre-existing attributes
    this.state={name: ''};//internal state variable to hold applicant name
    this.handleRegister=this.handleRegister.bind(this);
    this.handleNameChange=this.handleNameChange.bind(this);
  }
  //event handler to maintain internal object state
  handleNameChange(event){
    this.setState({name: event.target.value});
  }
  //event handler to execute alert when submit clicked
  handleRegister(event){
    alert(this.state.name+', you have furthered the resurrection! Omnissiah be praised!');
    event.preventDefault();
  }
  render(){
    return(
      <form onSubmit={this.handleRegister}>
      <div id="FormContainer">
      <h1>Register Now For The Carl Sagan Necromantic Resurrection Fund</h1>
      <label>Applicant Name: 
      <input type="text" placeholder="John Smith" className="name" id="name" value={this.state.value} onChange={this.handleNameChange} required></input><br/>
      </label>
      <label>Applicant Email: 
      <input type="email" placeholder="ntyson@gmail.com" className="email" id="email" required></input><br/>
      </label>
      <label >Add an optional message to our Lord Sagan: 
      <input type="text" className="message" id="message" size="50"></input><br/>
      </label>
      <button type="submit" className="registerbtn"  >Register Under Lord Sagan</button><br/>

      </div>

    </form>
    );
  }

}
//encapsulating component to allow the DOM render in the index.js file to execute correctly
class App extends React.Component{
  render(){
    return(
  <div>
    <Player/>
    <RegisterForm/>
    </div>
    )
  }
}


export default App;
