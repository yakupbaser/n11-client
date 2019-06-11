'use strict';
let Client = require('./client');

module.exports = class extends Client {

    constructor(appKey, appSecret) {
        super(appKey, appSecret)
        this.wsdl = 'https://api.n11.com/ws/ProductStockService.wsdl';
    }

    getProductStockByProductId(product_id) {
        return super.call(this.wsdl, 'GetProductStockByProductId', {
            productId: product_id
        });
    }

    updateStockByStockId(stockItems) {
        return super.call(this.wsdl, 'UpdateStockByStockId', {
            stockItems: stockItems
        });
    }
}