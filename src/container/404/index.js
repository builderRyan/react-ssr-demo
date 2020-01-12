import React, { Component } from 'react'

class NotFound extends Component {
  constructor (props) {
    super(props)
    const { staticContext } = props
    staticContext && (staticContext.pageName = 404)
  }

  render () {
    return (
      <div>404, Not Found!</div>
    )
  }
}

export default NotFound