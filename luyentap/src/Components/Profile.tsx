import React, { Component } from 'react'

type Props = {
  text: string,
  color?: string,
  iconName?: string,
  total?: number,
  unit?: string,
}

type State = {}

class Profile extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div style={{display: 'flex', border:'1px solid black', margin:'10px', backgroundColor:'#C0C0C0'}}>
        <div>{this.props.iconName}</div>
        <div style={{paddingLeft:'10px', paddingRight:'50px'}}>{this.props.text}</div>
        <div style={{display:'flex',width:`${this.props.unit}px`, backgroundColor: `${this.props.color}`}}></div>
      </div>
    )
  }
}

export default Profile