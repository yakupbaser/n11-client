'use strict';
let Client = require('../client');

/**
 * @module class/shipmentCompanyService
 * @author Yakup BAŞER
 */
module.exports = class extends Client {

    /**
     * @param {String} appKey     n11 appkey
     * @param {String} appSecret  n11 appSecret
     */  
    constructor(appKey, appSecret) {
        super(appKey, appSecret)
        this.wsdl = 'https://api.n11.com/ws/ShipmentCompanyService.wsdl';
    }

    /**
     * @async
     * @function GetShipmentCompanies
     * @memberof module:class/shipmentCompanyService
     * @instance
     * @returns {Promise<Object>} 
     * @description Sistemde tanımlı olan tüm kargo şirketlerini listeler. <br>
     * Genel kullanıma açık bir servis olduğu için servisin kullanımı sırasında herhangi bir güvenlik kontrolü yapılmamaktadır.

     */
    GetShipmentCompanies() {
        return super.call(this.wsdl, 'GetShipmentCompanies', {
        });
    }

}