import logo from './logo.svg';
import React ,{ Component } from 'react';

import './App.css';
import Nav from './Nav';

class App extends React.Component {  
  constructor (){
    super();
    this.state = {
    monstrs: [
        {
      id:0,
      name: 'Zank'

      },
       {
      id:1,

        name: 'Zamba'

      },
      {
      id:2,

        name: 'Nitian'
      },
    ]
    };
  }
   

  render(){
    return (
    <div className="App">
      <Nav monster={"Hey"} fdfd="jfdfd"/>
      <br/>
      <br/>
      <br/>
      <br/>
    
  {this.state.monstrs.map((index )=>{
    return <h1 className='App-link' key={index.id}>{index.name}</h1>
  })}
      
    </div>
  );
  }
  
}

export default App;
