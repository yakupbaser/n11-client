'use strict';

import './types/types';
let Client = require('../client');

/**
 * @module class/shipmentService
 * @author Yakup BAŞER
 */
module.exports = class extends Client {

    /**
     * @param {String} appKey     n11 appkey
     * @param {String} appSecret  n11 appSecret
     */      
    constructor(appKey, appSecret) {
        super(appKey, appSecret)
        this.wsdl = 'https://api.n11.com/ws/ShipmentService.wsdl';
    }

    /**
     * @async
     * @function CreateOrUpdateShipmentTemplate
     * @memberof module:class/shipmentService
     * @instance
     * @param {shipment} shipment
     * @returns {Promise<object>} 
     * @description Teslimat şablonu kargonun nasıl gideceğine dair oluşturulan bir şablondur.
     * Siparişlerde kullanılacak olan teslimat şablonu özellikleriyle birlikte bu servis aracılığı  
     * ile oluşturulur. claimshipmentCompany <useDmallCargo> alanı kullan yani “1” ise zorunludur.
     */
    CreateOrUpdateShipmentTemplate(shipment) {
        return super.call(this.wsdl, 'CreateOrUpdateShipmentTemplate', {
            shipment: shipment
        });
    }

    /**
     * @async
     * @function GetShipmentTemplate
     * @memberof module:class/shipmentService
     * @instance
     * @param {string} name Kargo şablonu adı
     * @returns {Promise<object>} 
     * @description Teslimat şablon ismi ile aratılan şablonun adres metod gibi özelliklerini gösterme.
     *  deliverableCities teslimat yapılacak şehirlerin seçimini yaptığımız alan bu alana değer 
     * girilmezse tüm şehirlere gönderim yapılacak anlamındadır.
     */
    GetShipmentTemplate(name) {
        return super.call(this.wsdl, 'GetShipmentTemplate', {
            name: name
        });
    }

    /**
     * @async
     * @function GetShipmentTemplateList
     * @memberof module:class/shipmentService
     * @instance
     * @returns {Promise<object>} 
     * @description Oluşturulan teslimat şablonu bilgilerini listelemek için kullanılan metoddur.
     */
    GetShipmentTemplateList() {
        return super.call(this.wsdl, 'GetShipmentTemplateList', {
        });
    }

}