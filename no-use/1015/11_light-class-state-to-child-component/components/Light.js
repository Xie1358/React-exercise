import React from 'react'

class Light extends React.Component{
  constructor(){
    super()
    this.state = {}
  }

  render(){
     return (
      <>
        <h1 
            style={{color: this.props.color}} 
            onClick={this.props.onClick}>
            {(this.props.status)?'亮亮':'暗'}
        </h1>
      </>
    )
  }
}

Light.defaultProps = {
    color: 'red'
}

export default Light