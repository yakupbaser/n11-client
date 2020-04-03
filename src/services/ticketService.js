'use strict';

/**
 * @module class/ticketService
 * @author Yakup BAŞER
 */
let Client = require('../client');

module.exports = class extends Client {

    /**
     * @param {String} appKey     n11 appkey
     * @param {String} appSecret  n11 appSecret
     */  
    constructor(appKey, appSecret) {
        super(appKey, appSecret)
        this.wsdl = 'https://api.n11.com/ws/TicketService.wsdl';
    }

    /**
     * @async
     * @function TicketListingBelongsToSeller
     * @memberof module:class/ticketService
     * @instance
     * @param {number} sellerId Mağaza İdsi 
     * @param {number} first Liste gösterilecek olan ticketların kaçıncı sıradan başlayacağını gösterir
     * @param {number} pageSize Sayfadaki madde sayısı
     * @returns {Promise<object>} 
     * @description Mağazanın açtığı talepleri liste halinde yollayan servis.
     */
    TicketListingBelongsToSeller(sellerId, first, pageSize) {
        return super.call(this.wsdl, 'TicketListingBelongsToSeller', {
            sellerId: sellerId,
            first: first,
            pageSize: pageSize   
        });
    }

    /**
     * @async
     * @function TicketListingAssignedToSeller
     * @memberof module:class/ticketService
     * @instance
     * @param {number} sellerId Mağaza İdsi 
     * @param {number} first Liste gösterilecek olan ticketların kaçıncı sıradan başlayacağını gösterir
     * @param {number} pageSize Sayfadaki madde sayısı
     * @returns {Promise<object>} 
     * @description Mağazaya atanan talepleri liste halinde yollayan servis.
     */
    TicketListingAssignedToSeller(sellerId, first, pageSize) {
        return super.call(this.wsdl, 'TicketListingAssignedToSeller', {
            sellerId: sellerId,
            first: first,
            pageSize: pageSize   
        });
    }

    /**
     * 

     * @async
     * @function TicketAnswer
     * @memberof module:class/ticketService
     * @instance
     * @param {number} sellerId Cevap veren mağaza İdsi
     * @param {number} ticketId Cevap verilen talep idsi
     * @param {string} content Cevap İçeriği
     * @returns {Promise<object>} 
     * @description Mağazanın kendisinin açtığı yada kendine açılan taleplere cevap vermesini sağlayan servis.
     */
    TicketAnswer(sellerId, ticketId, content) {
        return super.call(this.wsdl, 'TicketAnswer', {
            sellerId: sellerId,
            ticketId: ticketId,
            content: content   
        });
    }

    /**
     * @async
     * @function TicketCreate
     * @memberof module:class/ticketService
     * @instance
     * @param {number} reasonId Talep açma sebenin idsi
     * @param {number} sellerId Talepi açan mağazanın idsi
     * @param {string} header Talep Başlığı
     * @param {string} content Talep İçeriği
     * @returns {Promise<object>} 
     * @description Mağazanın talep açmasını sağlayan servis.
     */
    TicketCreate(reasonId, sellerId, header, content) {
        return super.call(this.wsdl, 'TicketCreate', {
            reasonId: reasonId,
            sellerId: sellerId,
            header: header,   
            content: content   
        });
    }

    /**
     * @async
     * @function TicketReasons
     * @memberof module:class/ticketService
     * @instance
     * @returns {Promise<object>} 
     */
    TicketReasons() {
        return super.call(this.wsdl, 'TicketReasons', { 
        });
    }

    /**
     * @async
     * @function TicketRead
     * @memberof module:class/ticketService
     * @instance
     * @param {number} ticketId 
     * @param {number} sellerId 
     * @returns {Promise<object>} 
     */
    TicketRead(ticketId, sellerId) {
        return super.call(this.wsdl, 'TicketRead', {
            ticketId: ticketId,
            sellerId: sellerId,
        });
    }

}