import React, { Component } from 'react'

export default (DecoratedComponent, style) => {
  return class StyleComponent extends Component {
    constructor (props) {
      super(props)
      const { staticContext } = props
      staticContext && staticContext.styles.push(style._getCss())
    }

    render () {
      return <DecoratedComponent {...this.props} />
    }
  }
}