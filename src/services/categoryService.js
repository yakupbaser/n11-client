'use strict';

let Client = require('../client');

/**
 * @module class/CategoryService
 * @author Yakup BAŞER
 */
module.exports = class extends Client {

    /**
     * @param {String} appKey     n11 appkey
     * @param {String} appSecret  n11 appSecret
     */
    constructor(appKey, appSecret) {
        super(appKey, appSecret)
        this.wsdl = 'https://api.n11.com/ws/CategoryService.wsdl';
    }

    /**
     * @async
     * @function GetTopLevelCategories
     * @memberof module:class/CategoryService
     * @instance
     * @returns {Promise<object>} 
     * @description n11 üzerinde tanımlanmış tüm üst seviye kategorileri görmek için bu metot kullanılır. 
     * Cevap olarak n11 kategori kodu ve kategori adı döner.
     */
    GetTopLevelCategories() {
        return super.call(this.wsdl, 'GetTopLevelCategories', {
        });
    }
    /**
     * @async
     * @function GetCategoryAttributesId
     * @memberof module:class/CategoryService
     * @instance
     * @param {number} categoryId desired category id
     * @returns {Promise<object>} 
     * @description İstenilen kategori, üst seviye kategori veya diğer seviye kategorilerden olabilir, 
     * bu kategorilere ait olan özelliklerin listelenmesi için kullanılan metoddur.
     */
    GetCategoryAttributesId(categoryId) {
        return super.call(this.wsdl, 'GetCategoryAttributesId', {
            categoryId: categoryId,
        });
    }

    /**
     * @async
     * @function GetCategoryAttributeValue
     * @memberof module:class/CategoryService
     * @instance
     * @param {number} categoryProductAttributeId 
     * @param {number} currentPage 
     * @param {number} pageSize 
     * @returns {Promise<object>} 
     * @description Özelliğe sistemimizde verilen id bilgisini (category.attributeList.attribute.id) girdi vererek, 
     * o özelliğe ait değerleri listeler.
     */
    GetCategoryAttributeValue(categoryProductAttributeId, currentPage, pageSize) {
        return super.call(this.wsdl, 'GetCategoryAttributeValue', {
            categoryProductAttributeId: categoryProductAttributeId,
            pagingData: {
                currentPage: currentPage,
                pageSize: pageSize,
            }
        });
    }

    /**
     * @async
     * @function GetSubCategories
     * @memberof module:class/CategoryService
     * @instance
     * @param {number} categoryId 
     * @returns {Promise<Object>} 
     * @description Kodu verilen kategorinin birinci seviye alt kategorilerine ulaşmak için bu metot kullanılmalıdır. 
     * İkinci seviye alt kategorilere ulaşmak için (Örn. “Giysi -> Ayakkabı -> Deri ayakkabı” kategori 
     * ağacında “Deri ayakkabı” bilgisi) birinci Seviye alt kategorinin (Örn. Ayakkabı) kodu verilerek 
     * tekrar servis çağırılmalıdır. 
     * Sorgulanan kategori sistemde bulunamazsa hata alınır. Eğer ilgili kategori herhangi bir alt 
     * kategoriye sahip değilse response bilgisi boş döner.
     */
    GetSubCategories(categoryId) {
        return super.call(this.wsdl, 'GetSubCategories', {
            categoryId: categoryId,
        });
    }

    /**
     * @async
     * @function GetCategoryAttributes
     * @memberof module:class/CategoryService
     * @instance
     * @param {number} categoryId 
     * @param {number} currentPage 
     * @param {number} pageSize 
     * @returns {Promise<object>} 
     * @description İstenilen kategori, üst seviye kategori veya diğer seviye kategorilerden olabilir, 
     * bu kategorilere ait olan özelliklerin ve bu özelliklere ait değerlerin listelenmesi için 
     * kullanılan metottur.
     */
    GetCategoryAttributes(categoryId, currentPage, pageSize) {
        return super.call(this.wsdl, 'GetCategoryAttributes', {
            categoryId: categoryId,
            pagingData: {
                currentPage: currentPage,
                pageSize: pageSize,
            }
        });
    }

    /**
     * @async
     * @function GetParentCategory
     * @memberof module:class/CategoryService
     * @instance
     * @param {number} categoryId 
     * @returns {Promise<object>} 
     * @description Kodu verilen kategorinin birinci seviye üst kategorilerine ulaşmak için bu metot kullanılmalıdır. 
     * İkinci seviye üst kategorilere ulaşmak için (Örn. “Deri ayakkabı -> Ayakkabı -> Giysi” kategori 
     * ağacında “Giysi “ bilgisi) birinci seviye üst kategorinin (Örn. Ayakkabı) kodu verilerek tekrar 
     * servis çağırılmalıdır. 
     * Sorgulanan kategori sistemde bulunamazsa ‘kategori bulunamadı’ hatası alınır. Eğer ilgili kategori
     * herhangi bir üst kategoriye sahip değilse ”parentCategory” bilgisi response içerisinde yer almaz
     */
    GetParentCategory(categoryId) {
        return super.call(this.wsdl, 'GetParentCategory', {
            categoryId: categoryId,
        });
    }

}