import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet-async'
import { getArticles } from './store/actions'
import withStyle from '../../hoc/withStyle'
import style from './style/Home.scss' 

class Home extends Component {

  componentDidMount () {
    if (!this.props.list.length) {
      this.props.getList()
    }
  }

  renderList () {
    const { list } = this.props
    return list.map((item) => {
      const { id, title } = item

      return (
        <Link
          key={id}
          className={style.item}
          to={`/article/${id}`}
        >
          {title}
        </Link>
      )
    })
  }

  render () {
    const { name } = this.props
    return (
      <div className={style.home}>
        <Helmet>
          <title>发现更多优质内容</title>
          <meta name='description' content='易获得的优质内容，基于问答的内容生产方式和独特的社区机制' />
        </Helmet>
        {this.renderList()}
        <button
          className={style.start}
          onClick={() => {alert(2019)}}
        >
          Get Start
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    name: state.home.name,
    list: state.home.newsList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getList () {
      dispatch(getArticles())
    }
  }
}

const DecoratedHome = connect(mapStateToProps, mapDispatchToProps)(withStyle(Home, style))

DecoratedHome.loadData = (store) => {
  // 这个函数负责在服务器端渲染之前，把这个路由需要的数据提前加载好
  return store.dispatch(getArticles())
}

export default DecoratedHome