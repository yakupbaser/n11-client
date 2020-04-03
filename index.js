'use strict';

//const objN11 = require('./src/n11-client');

/**
 * @file index.js is the root file for N11 Api Library
 * @author Yakup BAŞER
 * @see <a href = "https://github.com/eolcum/n11-client">N11-Clien nodjs Library<a/>
 */

/*
let CityService =  new objN11.CityService('7a68fb2e-69a7-48da-8eaf-ed4bbd73b18b','kCd1FY0D2pKpZAO1');

CityService.GetCity(34).then((val)=>{
 console.log(val);
}).catch((reason)=>{
 console.log(reason);
});
*/










/*const express = require('express');
const app = express();
const port = 80;

app.use((req, res,next) => {
    res.send('Kocamon!');
    next();
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`)) */

const soap = require('soap');
const urlWSDL = 'https://api.n11.com/ws/ProductService.wsdl';
var args = {
  // productId: 338064417

  /* stockItems: [{
     stockItem: {
         sellerStockCode: 2147918699,
         quantityToIncrease: 3,
         version: 4
     }
 }]  */

  pagingData: {
    currentPage: 1,
    pageSize: 100,

  }
}
args.auth = {
  appKey: '7c9d6fdf-82cb-40da-a563-5b97594eb5ce',
  appSecret: 'QKvV6e8ACK2ObEEa'
}


soap.createClient(urlWSDL, (err, client) => {
  //  client.GetTopLevelCategories(args, (err, result) => {
  //      console.log(result.categoryList.category);

  //console.log(client.describe().ProductServicePortService.ProductServicePortSoap11.GetProductList);



  /* client.GetProductStockByProductId(args, function(err, res){
     console.log(res.stockItems.stockItem[0].attributes); //success
   }); */

  //  client.IncreaseStockByStockSellerCode(args, function(err, res){ console.log(res); //success}); 


  client.GetProductList(args, function (err, res) {
    console.log(res.products.product); //success}); 

 ramazan = res.products.product;

  });


});


/*soap.createClientAsync(urlWSDL).then((client) => {
  return client.GetTopLevelCategoriesAsync(args)
}).then((result) => {
  console.log(result);
});  */

/*let appKey= '7a68fb2e-69a7-48da-8eaf-ed4bbd73b18b';
let appSecret= 'kCd1FY0D2pKpZAO1';
let n11client = new require('./src/n11-client');
let CategoryService = new n11client.CategoryService(appKey, appSecret);
let OrderService = new n11client.OrderService(appKey, appSecret);
//let CityService = new n11client.CityService();



let promise = OrderService.OrderItemAccept(orderItemList , 1);

promise.then(function(val){

    console.log(val);


}).catch(function(reason){

    console.log(reason);

});

*/





