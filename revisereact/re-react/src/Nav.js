import React,{ Component } from "react";
class Nav extends Component{
    
    render(){
            
            return(
        <>
        <div>
            <h1 className="App-link">Hey I am{this.props.fdfd} Nav bar </h1>
            <h1 className="App-link">{this.props.monster}Hey I am Nav bar </h1>
        </div>
        </>
    )  
        }
      
    }
    


export default Nav;