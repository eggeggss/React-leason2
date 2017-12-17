import React, { Component } from 'react';

class App extends Component{
  state={
    value:'',
  }
  onChange=(evt)=>{
    const value=evt.target.value;
    const strength=this.calcStrength(value);
    this.setState(
    {
        value,
        //value:value,
        strength,
    });
  }
  calcStrength=(value)=>{
    let score = value.length;
    if(/[A-Z]/.test(value)) score *=1.25;
    if(/[a-z]/.test(value)) score *=1.25;
    if(/[0-9]/.test(value)) score *=1.25;
    if(/[^A-Za-z0-9]/.test(value)) score *=1.25;
    
    if(score>40) return 'Perfect';
    else if(score>20) return 'Greate';
    else if(score >10) return 'Good';
    else return 'Weak';
  }
   render(){
      return (
          <div>
            <input type="text" 
                    value={this.state.value}
                    onChange={this.onChange}/>
            <span>{this.state.strength}</span>
          </div>
      )
   }
}

export default App;
