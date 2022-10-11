import React, { Component } from 'react'

type Props = {
  isLogin : boolean 
}

type State = {}

class Header extends Component<Props, State> {
  state = {}

  render() {
    return (
        <>
            <div className="title_header">
                <h1>The Pulpit Rock</h1>
                <button type='button'>{this.props.isLogin ?  'Logout' : 'Login'}</button>
            </div>
        </>
    )
  }
}

export default Header