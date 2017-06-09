var app = require('koa')();
var router = require('koa-router')();

// router.get('/', function *(next) {
//     this.body = 'hello koa !'
// });

// router.get('/api', function *(next) {
//     this.body = 'test data'
// });


var homeAdData = require('./home/ad.js')
router.get('/api/homead', function *(next) {
    this.body = homeAdData
});

var homeListData = require('./home/list.js')
router.get('/api/homelist/:city/:page', function *(next) {

    const params = this.params
    const paramsCity = params.city
    const paramsPage = params.page

    console.log('Current City' + paramsCity)
    console.log('Current Page' + paramsPage)

    this.body = homeListData
});

var searchListData = require('./search/list.js')
router.get('/api/search/:page/:city/:category/:keyword', function *(next) {
    // paras
    const params = this.params
    const paramsPage = params.page
    const paramsCity = params.city
    const paramsCategory = params.category
    const paramsKeyword = params.keyword

    console.log('Current page：' + paramsPage)
    console.log('Current city: ' + paramsCity)
    console.log('Current category：' + paramsCategory)
    console.log('keyword：' + paramsKeyword)

    this.body = searchListData
})
// two paras
router.get('/api/search/:page/:city/:category', function *(next) {
    // paras
    const params = this.params
    const paramsPage = params.page
    const paramsCity = params.city
    const paramsCategory = params.category

    console.log('Current page: ' + paramsPage)
    console.log('Current city: ' + paramsCity)
    console.log('Current category：' + paramsCategory)

    this.body = searchListData
})



app.use(router.routes())
   .use(router.allowedMethods());
app.listen(3000);
