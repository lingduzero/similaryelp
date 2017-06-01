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



app.use(router.routes())
   .use(router.allowedMethods());
app.listen(3000);
