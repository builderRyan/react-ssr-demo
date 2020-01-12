import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { headerActions } from './store/'
import withStyle from '../../hoc/withStyle'
import style from './style/Header.css'

class Header extends Component {

  render () {
    const { login, handleLogin, handleLogout } = this.props
  
    return (
      <div className={style.header}>
        <Link to='/' className={style['nav-item']}>首页</Link>
        {
          login
          ? (
            <Fragment>
              <Link to='/favorites' className={style['nav-item']}>收藏列表</Link>
              <a className={style['nav-item']} onClick={handleLogout}>退出</a>
            </Fragment>
          )
          : <a className={style['nav-item']} onClick={handleLogin}>登录</a>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.header.login
  }
}

const mapDisPatchToProps = (dispatch) => {
  return {
    handleLogin: () => {
      dispatch(headerActions.login())
    },
    handleLogout: () => {
      dispatch(headerActions.logout())
    },
  }
}

export default connect(mapStateToProps, mapDisPatchToProps)(withStyle(Header, style))