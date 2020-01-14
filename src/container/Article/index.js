import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet-async'
import withStyle from '../../hoc/withStyle'
import { getArticle, clearArticle } from './store/actions'
import style from './style/Article.scss'

class Article extends Component {
  componentDidMount () {
    const { match, articleDetails, getArticleDetails } = this.props
    const id = match.params.id
    const prevId = articleDetails && articleDetails.id

    if (id && id !== prevId) {
      getArticleDetails(id)
    }
  }

  componentWillUnmount () {
    this.props.clearArticleDetails()
  }

  render () {
    const { articleDetails= {} } = this.props
    const { title, content, cover } = articleDetails

    return (
      <div className={style.article}>
        <Helmet>
          <title>文章详情</title>
          <meta name='description' content='用文字记录点滴' />
        </Helmet>
        <div>
          <h3 className={style.title}>{title}</h3>
          <img
            className={style.cover}
            src={cover}
            alt="article cover"
          />
          <p className={style.content}>{content}</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    articleDetails: state.article.articleDetails
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getArticleDetails (id) {
      dispatch(getArticle(id))
    },
    clearArticleDetails (id) {
      dispatch(clearArticle(id))
    }
  }
}

const DecoratedArticle = connect(mapStateToProps, mapDispatchToProps)(withStyle(Article, style))

DecoratedArticle.loadData = (store, req) => {
  // 这个函数负责在服务器端渲染之前，把这个路由需要的数据提前加载好
  const paths = req.params[0].split('/')
  const id = paths[paths.length - 1]
  return store.dispatch(getArticle(id))
}

 export default DecoratedArticle