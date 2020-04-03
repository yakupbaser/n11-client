'use strict';
let Client = require('../client');

/**
 * @module class/settlementService
 * @author Yakup BAŞER
 */
module.exports = class extends Client {

    /**
     * @param {String} appKey     n11 appkey
     * @param {String} appSecret  n11 appSecret
     */    
    constructor(appKey, appSecret) {
        super(appKey, appSecret)
        this.wsdl = 'https://api.n11.com/ws/SettlementService.wsdl';
    }

    /**
     * @async
     * @function GetSettlementList
     * @memberof module:class/settlementService
     * @instance
     * @param {string} startDate Tarih aralığı başlangıcı (YYYY-MM-DD)
     * @param {string} endDate Tarih aralığı bitişi (YYYY-MM-DD)
     * @param {number} currentPage 
     * @param {number} pageSize 
     * @returns {Promise<object>} 
     * @description Seçilen tarih aralığına göre ödeme bilgilerini listeleyen servis
     */
    GetSettlementList(startDate, endDate, currentPage, pageSize) {
        return super.call(this.wsdl, 'GetSettlementList', {
            startDate: startDate,
            endDate: endDate,
            pagingData: {
                currentPage: currentPage,
                pageSize: pageSize
            }    
        });
    }

    /**
     * @async
     * @function GetSettlementDetail
     * @memberof module:class/settlementService
     * @instance
     * @param {string} date Uzlaşma tarihi (YYYY-MM-DD)
     * @param {number} currentPage 
     * @param {number} pageSize 
     * @returns {Promise<object>} 
     * @description GetSettlementList metodu ile listelenen ödemelere ait ayrıntıları gösteren metod. 
     * Belirli bir gün seçilerek, o güne ait satış/uzlaşma detayları getirilir.
     */
    GetSettlementDetail(date, currentPage, pageSize) {
        return super.call(this.wsdl, 'GetSettlementDetail', {
            date: date,
            pagingData: {
                currentPage: currentPage,
                pageSize: pageSize
            }    
        });
    }

}