import React, { Component } from 'react'

type Props = {
  
}
type State = {
  numberState : number
  nameState : string
}
class Button extends Component<Props, State> {
//   constructor(props: Props) {
//     super(props);
//     this.State ={
//       numberState:0 ,
//     }
//     this.State ={
//       nameState:'Like' ,
//     }
// }
  handleClick = () => {
    
    // this.setState({ numberState : this.state.numberState + 1});
    // this.setState({ nameState : 'DisLike'});
        console.log('Clicked');
        
    }
  render() {
    return (
        <>
        <div>
        <button onClick={this.handleClick}>{this.state.nameState}</button>
        <span>{this.state.numberState}</span>
      </div>
        </>
      );
    }
  }
  
  export default Button