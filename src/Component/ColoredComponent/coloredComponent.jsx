import React, { Component } from 'react'

export default class ColoredComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height:"100px",
            color:"red"
        };
      }
    
      componentDidMount(){
        this.setState({height: window.innerHeight + 'px'});
      }
      colorFunction = () =>{
          this.setState({color:this.state.color === "red"?"green":"red"})
      }
    render() {
        return (
            <div style={{height:this.state.height}}>
                <div style={{height:"50%", width:"50%", backgroundColor:this.state.color,margin:"0 auto"}}></div>
                <div className="color-change">
                    <button className="btn-color" onClick={this.colorFunction}>Press</button>
                </div>
            </div>
        )
    }
}
