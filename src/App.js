import React from 'react';
import './App.css';
import Toggle from './Toggle.js';
import Interval from './setinterval.js'


class App extends React.Component {
   Person = {
       fullName:"Jhon Doe",
       bio: "developement",
       imgSrc: <img src="./man.png" alt=""/>,
       profession:"Front End Web Developper",
     
    }
   

    

    render() {
      
        return (
            < >
            
              <Toggle></Toggle>
              
        <div> fullName: {this.Person.fullName}</div>
        <div> bio: {this.Person.bio} </div>
        
        <div>Profession : {this.Person.profession}</div>
        <Interval ></Interval>
            
        
        </>
        )
    }
}

  

export default App;
