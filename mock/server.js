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
    console.log('First Page —— Ads')
    this.body = homeAdData
});

var homeListData = require('./home/list.js')
router.get('/api/homelist/:city/:page', function *(next) {
    console.log('First Page —— recomend list')

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
    console.log('Search Result Page - Search Result')

    const params = this.params
    const paramsPage = params.page
    const paramsCity = params.city
    const paramsCategory = params.category
    const paramsKeyword = params.keyword

    console.log('tets',params);

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
    console.log('tets',params);

    console.log('Current page: ' + paramsPage)
    console.log('Current city: ' + paramsCity)
    console.log('Current category：' + paramsCategory)

    this.body = searchListData
})

const detailInfo = require('./detail/info.js')
router.get('/api/detail/info/:id', function *(next) {
    console.log('Info Page - Store Info')

    const params = this.params
    const id = params.id

    console.log('Store id: ' + id)

    this.body = detailInfo
})
// User comment
const detailComment = require('./detail/comment.js')
router.get('/api/detail/comment/:page/:id', function *(next) {
    console.log('Info Page - user comment')

    const params = this.params
    const page = params.page
    const id = params.id

    console.log('Store id: ' + id)
    console.log('Current Page: ' + page)

    this.body = detailComment
})

const orderList = require('./orderlist/orderList.js')
router.get('/api/orderlist/:username', function *(next) {
    console.log('Order List')

    const params = this.params
    const username = params.username
    console.log('UserName：' + username)

    this.body = orderList
})

router.post('/api/submitComment', function *(next) {
    console.log('Submit comment')

    // get the params

    this.body = {
        errno: 0,
        msg: 'ok'
    }
})



app.use(router.routes())
   .use(router.allowedMethods());
app.listen(3000);
