const express = require('express')
const formidable = require("formidable");
const fs = require("fs");
const path = require("path");
const mime = require("mime");
const cookieParser = require("cookie-parser");
const articlesList = require('./data/articlesList');
const favoritesList = require('./data/favoritesList');
const config = require('../config')

const app = express()
const port = config.port
const url = config.url

//设置跨域访问
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", url);
  // res.header("Access-Control-Allow-Headers", "x-requested-with");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header('Access-Control-Allow-Credentials','true');
  res.header("X-Powered-By",' 3.2.1')
  // res.header("Content-Type", req.headers["content-type"]);
  // res.header("Content-Type", '*');
  if (req.method == 'OPTIONS') {
    res.send(200); // 让options请求快速返回
  } else {
    next();
  }
});

app.use(cookieParser())

// 处理静态资源
app.use('/public', express.static('../../public'));

// 文件上传
app.post('/upload', function (req, res) {
  var form = new formidable.IncomingForm();

  form.parse(req, (error, fields, files) => {
    const uploadFile = files.upload_file
    console.log('files', files);

    if (!uploadFile) {
      res.end()
    }

    const { path: filePath, name: filename } = uploadFile
    const imgStorePath = path.join(__dirname, `../../public/img/${filename}`)

    console.log('filePath', filePath);

    fs.writeFileSync(imgStorePath, fs.readFileSync(filePath))

    // 返回数据给客户端
    res.send({
      ret: 0,
      data: {
        url: `${url}/public/img/${filename}`
      }
    })

    // 结束连接
    res.end()
  });
});

// 获取文章列表
app.get('/api/getArticles', function (req, res) {
  res.send({
    ret: 0,
    data: articlesList,
    msg: 'success'
  })

  res.end()
});

// 获取文章详情
app.get('/api/getArticlesById', function (req, res) {
  const id = req.query && req.query.id
  let data = {}
  if (id) {
    const result = articlesList.filter((item) => {
      return item.id === Number(id)
    })
    data = result[0]
  }

  res.send({
    ret: 0,
    data,
    msg: 'success'
  })

  res.end()
});

// 获取收藏列表
app.get('/api/getFavoritesList', function (req, res) {
  // 如果登陆了, 返回列表数据给客户端, 否则返回空列表
  // console.log('login', req.cookies.login)
  const data = req.cookies.login ? favoritesList : []
  const success =  req.cookies.login ? true : false

  res.send({
    ret: 0,
    data,
    success
  })

  res.end()
});

// 获取登录信息
app.get('/api/getLoginInfo', function (req, res) {
  // console.log(req.get('cookie'))

   res.send({
    ret: 0,
    data: req.cookies.login || false,
    msg: 'success'
  })

  res.end()
});

// 登录
app.get('/api/login', function (req, res) {
  // 向客户端设置一个Cookie
  res.cookie('login', 'true', {maxAge: 60 * 1000, httpOnly: true})
  res.send({
    ret: 0,
    data: true,
    msg: 'success'
  })

  res.end()
});

// 登出
app.get('/api/logout', function (req, res) {
  res.clearCookie('login')
   res.send({
    ret: 0,
    data: false,
    msg: 'success'
  })

  res.end()
});


app.listen(port, () => {
  console.log(url)
});