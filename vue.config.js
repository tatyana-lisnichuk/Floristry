// module.exports = {
//     publicPath: ''
// };
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Floristry/'
    : '/'
}


// файл vue.config.js должен быть расположен в корневом каталоге проекта

module.exports = {
  pwa: {
      workboxOptions: {
        exclude: [/_redirects/]
      }
    }
}