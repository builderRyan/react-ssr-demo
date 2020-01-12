import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { getFavoritesList } from './store/actions'
import style from './style/Favorites.scss'

class Favorites extends Component {
  componentDidMount () {
    if (!this.props.list.length) {
      this.props.getList()
    }
  }

  renderList () {
    const { list } = this.props
    return list.map(
      (item) => <p key={item.id} className={style.item}>{item.title}</p>
    )
  }

  render () {
    const { login } = this.props

    if (login) {
      return (
        <div className={style.favorites}>
          <Helmet>
            <title>记录美好生活</title>
            <meta name='description' content='同一个世界，同一个梦想' />
          </Helmet>
          {this.renderList()}
        </div>
      )
    }

    return (
      <Redirect to='/' />
    )
  }
}

const mapStateToProps = state => {
  return {
    login: state.header.login,
    list: state.favorites.favoritesList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getList () {
      dispatch(getFavoritesList())
    }
  }
}

const DecoratedFavorites = connect(mapStateToProps, mapDispatchToProps)(Favorites)

DecoratedFavorites.loadData = (store) => {
  // 这个函数负责在服务器端渲染之前，把这个路由需要的数据提前加载好
  return store.dispatch(getFavoritesList())
}

 export default DecoratedFavorites