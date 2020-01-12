import React from 'react'
import { connect } from 'react-redux'

const Login = props => {
  return (
    <div>
      <h3>login page</h3>
      <p>{`props.name:${props.name}`}</p>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    name: state.name
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)