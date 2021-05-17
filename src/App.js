
import './App.css';
import React, { Component } from 'react'

 class App extends Component {

  constructor(props){
    super(props)
    this.state={
        fullName:'Syrine Ben Mohamed'
        , imgSrc:'https://img.icons8.com/pastel-glyph/2x/person-male.png', profession:'Full stuck JS Student',
        show:true,count:0}
}

componentDidMount(){
    this.timer = setInterval(this.countFunc, 1000);
}
countFunc=()=>{
    this.setState({...this.state,count:this.state.count+1})
}

  render() {
    return (
      <div>
      <button onClick={()=>this.setState({...this.state,show:!this.state.show})}>{this.state.show===true?'hide':'show'}</button>    
      <p>Timer = {this.state.count}</p>
      {this.state.show===true?<div><h1>{this.state.fullName}</h1>
      <h1>{this.state.profession}</h1>
      <img src={this.state.imgSrc} alt="" /></div>:<div></div>}
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//      <Profile/>
//     </div>
//   );
//}

export default App;
