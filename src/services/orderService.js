'use strict';

import './types/types';
let Client = require('../client');

/**
 * @module class/OrderService
 * @author Yakup BAŞER
 */
module.exports = class extends Client {

    /**
     * @param {string} appKey n11 appkey,
     * @param {string} appSecret n11 appSecret,
     */
    constructor(appKey, appSecret) {
        super(appKey, appSecret)
        this.wsdl = 'https://api.n11.com/ws/OrderService.wsdl';
    }

     /** 
     * @async
     * @function OrderList
     * @memberof module:class/OrderService
     * @instance
     * @param {searchData} searchData
     * @param {number} currentPage 
     * @param {number} pageSize 
     * @returns {Promise<object>} 
     * @description Bu metot sipariş ile ilgili özet bilgileri listelemek için kullanılır.
     */
    OrderList(searchData, currentPage, pageSize) {
        return super.call(this.wsdl, 'OrderList', {
            searchData: searchData,
            pagingData: {
                currentPage: currentPage,
                pageSize: pageSize,
                //totalCount: 'xs:long',
                //pageCount: 'xs:int',
            }
        });
    }
 
    /**
     * @async
     * @function DetailedOrderList
     * @memberof module:class/OrderService
     * @instance
     * @param {searchData} searchData
     * @param {number} currentPage 
     * @param {number} pageSize 
     * @returns {Promise<object>} 
     * @description Verilen arama kriterlerine göre sipariş bilgisi ile beraber sipariş 
     * maddelerini de listelemek için kullanılır.
     */
    DetailedOrderList(searchData, currentPage, pageSize) {
        return super.call(this.wsdl, 'DetailedOrderList', {
            searchData: searchData,
            pagingData: {
                currentPage: currentPage,
                pageSize: pageSize
                //totalCount: 'xs:long',
                //pageCount: 'xs:int',
            }
        });
    }

    /**
     * @async
     * @function OrderItemAccept
     * @memberof module:class/OrderService
     * @instance
     * @param {Object[]} orderItemList 
     * @param {Object} orderItemList[].orderItem 
     * @param {number} orderItemList[].orderItem.id Sipariş kalemi n11 ID si 
     * @param {number} numberOfPackages
     * @returns {Promise<object>} 
     * @description Sipariş maddesinin n11 ID si kullanılarak kabul edilmesi için kullanılır.
     *  Kabul edilen sipariş daha sonra mağaza tarafından reddedilemez. 
     * Sipariş n11 ID sine OrderService içinden OrderDetail veya DetailedOrderList metodu 
     * kullanılarak erişilir. 
     */
    OrderItemAccept(orderItemList, numberOfPackages) {
        return super.call(this.wsdl, 'OrderItemAccept', {
            orderItemList: orderItemList,
            numberOfPackages: numberOfPackages
        });
    }

    /**
     * @async
     * @function OrderItemReject
     * @memberof module:class/OrderService
     * @instance
     * @param {Object[]} orderItemList 
     * @param {Object} orderItemList[].orderItem 
     * @param {number} orderItemList[].orderItem.id Sipariş maddesi n11 ID bilgisi 
     * @param {string} rejectReason Sipariş reddetme sebebi
     * @param {string} rejectReasonType Sipariş reddetme tipi : OUT_OF_STOCK (Stokta yok), OTHER(Diğer)
     * @returns {Promise<object>} 
     * @description Sipariş maddesinin n11 ID si kullanılarak reddedilmesi için kullanılır. 
     * Reddedilen sipariş daha sonra mağaza tarafından kabul edilemez. Sipariş n11 ID sine 
     * OrderService içinden OrderDetail veya DetailedOrderList metodu kullanılarak erişilir.
     */
    OrderItemReject(orderItemList, rejectReason, rejectReasonType) {
        return super.call(this.wsdl, 'OrderItemReject', {
            orderItemList: orderItemList,
            rejectReason: rejectReason,
            rejectReasonType: rejectReasonType
        });
    }

    /**
     * @async
     * @function MakeOrderItemShipment
     * @memberof module:class/OrderService
     * @instance
     * @param {Object[]} orderItemList 
     * @param {Object} orderItemList[].orderItem 
     * @param {number} orderItemList[].orderItem.id 
     * @param {Object} orderItemList[].orderItem.shipmentInfo 
     * @param {Object} orderItemList[].orderItem.shipmentInfo.shipmentCompany
     * @param {number} orderItemList[].orderItem.shipmentInfo.shipmentCompany.id
     * @param {number} orderItemList[].orderItem.shipmentInfo.campaignNumber 
     * @param {number} orderItemList[].orderItem.shipmentInfo.trackingNumber 
     * @param {number} orderItemList[].orderItem.shipmentInfo.shipmentMethod 
     * @returns {Promise<object>} 
     * @description Sipariş maddesinin n11 ID si kullanılarak kargoya verilmesi için kullanılır.
     *  Sipariş n11 ID sine OrderService içinden OrderDetail veya DetailedOrderList metodu kullanılarak erişilir.
     * <br>Ön koşul olarak güncelleme yapılmak istenen sipariş maddesinin durumunun (OrderItemStatus) “Ödendi” veya 
     * “Kabul edildi” olması gerekmektedir. Aksi durumda “ön koşullar sağlanamadı” cevabı alınır.
     * Kargo şirketlerinin listesi için ShipmentCompanyService den GetShipmentCompanies metodu kullanılmalıdır.
     */
    MakeOrderItemShipment(orderItemList) {
        return super.call(this.wsdl, 'MakeOrderItemShipment', {
            orderItemList: orderItemList
        });
    }

    /** 
     * @async
     * @function OrderDetail
     * @memberof module:class/OrderService
     * @instance
     * @param {Object} orderRequest 
     * @param {number} orderRequest.id Sipariş N11 ID si 
     * @returns {Promise<object>} 
     * @description Sipariş N11 ID bilgisi kullanarak sipariş detaylarını almak için kullanılır, 
     * sipariş N11 ID bilgisine OrderService OrderList veya DetailedOrderList metotlarıyla ulaşılabilir.
     * n11 platform üzerinden kargo ücretinin ödenmesi ve bunun tahsilat bilgileri “serviceItemList” alanından ulaşılabilir.
     */
    OrderDetail(orderRequest) {
        return super.call(this.wsdl, 'OrderDetail', {
            orderRequest: orderRequest
        });
    }

    /**
     * @async
     * @function ComplementaryItemDetail
     * @memberof module:class/OrderService
     * @instance
     * @param {Object[]} orderItemList 
     * @param {Object} orderItemList[].orderItem 
     * @param {number} orderItemList[].orderItem.id 
     * @returns {Promise<object>} 
     */
    ComplementaryItemDetail(orderItemList) {
        return super.call(this.wsdl, 'ComplementaryItemDetail', {
            orderItemList: orderItemList
        });
    }


}