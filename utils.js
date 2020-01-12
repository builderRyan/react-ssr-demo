//获取本机ip地址
function getIPAdress () {
  let interfaces = require('os').networkInterfaces();　　
  for (let devName in interfaces) {　　　　
    let iface = interfaces[devName];　　　　　　
    for (let i = 0; i < iface.length; i++) {
      let alias = iface[i];
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        // console.log("\n--------IP地址：" + alias.address + "------\n");
        return alias.address;
      }
    }　　
  }
}

module.exports = {
  getIPAdress
}