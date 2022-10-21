import React, { Component } from 'react'

type Props = {
  text: string;
  color1: string,
  colors: string,
  percentage: number,
}

type State = {
}

class ChartBar1 extends Component<Props, State> {

  state = {
  }

  render() {
    return (
    <div style={{display: 'flex', border: `1px solid #a09f9f`, backgroundColor:'#a3a3a3',textAlign:'center'}}>
      <div className="col-2  p-2" style={{backgroundColor:this.props.color1}}>{this.props.text}</div>
      <div className="col-10  p-2 "style={{width: `${this.props.percentage}%`, backgroundColor: `${this.props.colors}`}}>{this.props.percentage}</div>
    </div>
    )
  }
}

export default ChartBar1