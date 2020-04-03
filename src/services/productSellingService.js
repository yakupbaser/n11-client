'use strict';
let Client = require('../client');

/**
 * @module class/ProductSellingService
 * @author Yakup BAŞER
 */
module.exports = class extends Client {

    /**
     * @param {String} appKey     n11 appkey
     * @param {String} appSecret  n11 appSecret
     */
    constructor(appKey, appSecret) {
        super(appKey, appSecret)
        this.wsdl = 'https://api.n11.com/ws/ProductSellingService.wsdl';
    }

    /**
     * @async
     * @function StopSellingProductByProductId
     * @memberof module:class/ProductSellingService
     * @instance
     * @param {number} productId 
     * @returns {Promise<object>} 
     * @description Satışta olan ürünün n11 ürün ID si kullanılarak satışa kapatılması için kullanılır.
     */
    StopSellingProductByProductId(productId) {
        return super.call(this.wsdl, 'StopSellingProductByProductId', {
            productId: productId

        });
    }

    /**
     * @async
     * @function StopSellingProductBySellerCode
     * @memberof module:class/ProductSellingService
     * @instance
     * @param {string} productSellerCode 
     * @returns {Promise<object>} 
     * @description Satışta olan ürünün mağaza ürün kodu kullanılarak satışının durdurulması için kullanılır.
     */
    StopSellingProductBySellerCode(productSellerCode) {
        return super.call(this.wsdl, 'StopSellingProductBySellerCode', {
            productSellerCode: productSellerCode
        });
    }

    /** 
     * @async
     * @function StartSellingProductByProductId
     * @memberof module:class/ProductSellingService
     * @instance
     * @param {number} productId 
     * @returns {Promise<object>} 
     * @description Satışta olmayan bir ürünün N11 ürün ID si kullanılarak satışa başlanması için kullanılır. 
     */
    StartSellingProductByProductId(productId) {
        return super.call(this.wsdl, 'StartSellingProductByProductId', {
            productId: productId

        });
    }

    /**
     * @async
     * @function StartSellingProductBySellerCode
     * @memberof module:class/ProductSellingService
     * @instance
     * @param {string} productSellerCode 
     * @returns {Promise<object>} 
     * @description Satışta olmayan bir ürünün mağaza ürün kodu kullanılarak satışa başlanması için kullanılır.
     */
    StartSellingProductBySellerCode(productSellerCode) {
        return super.call(this.wsdl, 'StartSellingProductBySellerCode', {
            productSellerCode: productSellerCode

        });
    }


}