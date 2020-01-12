import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { headerActions } from './store'
import withStyle from '../../hoc/withStyle'
import style from './style/Header.scss'
import avatar from './img/avatar.png'

class Header extends Component {

  render () {
    const { login, handleLogin, handleLogout } = this.props
  
    return (
      <div className={style.header}>
        
        <div className={style['nav-left']}>
          <Link to='/' className={style['nav-item']}>首页</Link>
          {login && <Link to='/favorites' className={style['nav-item']}>我的收藏</Link>}
        </div>
        <div className={style['nav-right']}>
          {
            login
            ? <a className={style['nav-item']} onClick={handleLogout}>退出</a>
            : <a className={style['nav-item']} onClick={handleLogin}>登录</a>
          }
          <img className={style.avatar} src={avatar} alt='avatar' />
        </div>
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