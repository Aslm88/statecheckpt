import React from 'react';

class Toggle extends React.Component {
 state = {
   imgSrc: <img src="./man.png" alt=""/>,
 };
 onClick=()=>this.setState({imgSrc:""})

 render() {
   return(
     <>
     <div> {this.state.imgSrc}</div>
     <button onClick={this.onClick}> ClickMe</button>
     </>
   )
 }
}


export default Toggle ;