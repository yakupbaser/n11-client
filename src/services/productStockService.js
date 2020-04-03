'use strict';
let Client = require('../client');

/**
 * @module class/ProductStockService
 * @author Yakup BAŞER
 */

module.exports = class extends Client {

    /**
     * @param {String} appKey     n11 appkey
     * @param {String} appSecret  n11 appSecret
     */    
    constructor(appKey, appSecret) {
        super(appKey, appSecret)
        this.wsdl = 'https://api.n11.com/ws/ProductStockService.wsdl';
    }

    /**
     * @async
     * @function GetProductStockByProductId
     * @memberof module:class/ProductStockService
     * @instance
     * @param {number} productId 
     * @returns {Promise<object>} 
     * @description Sistemde kayıtlı olan ürünün N11 ürün ID si ile ürün stok bilgilerini getiren metottur. 
     * Cevap içinde stok durumunun “version” bilgisi de vardır, ürün stoklarında değişme olduysa 
     * bu versiyon bilgisi artacaktır, çağrı yapan taraf versiyon bilgisini kontrol ederek N11 e 
     * verilen stok bilgilerinde değişim olup olmadığını anlayabilir. Kocamon
     */
    GetProductStockByProductId(productId) {
        return super.call(this.wsdl, 'GetProductStockByProductId', {
            productId: productId
        });
    }

    /**
     * @async
     * @function GetProductStockByProductSellerCode
     * @memberof module:class/ProductStockService
     * @instance
     * @param {string} productSellerCode 
     * @returns {Promise<object>} 
     * @description Sistemde kayıtlı olan ürünün mağaza ürün kodu ile ürün stok bilgilerini getiren metottur. 
     * Cevap içinde stok durumunun “version” bilgisi de vardır, ürün stoklarında değişme olduysa 
     * bu versiyon bilgisi artacaktır, çağrı yapan taraf versiyon bilgisini kontrol ederek N11 e 
     * verilen stok bilgilerinde değişim olup olmadığını anlayabilir.
     */
    GetProductStockByProductSellerCode(productSellerCode) {
        return super.call(this.wsdl, 'GetProductStockByProductSellerCode', {
            productSellerCode: productSellerCode
        });
    }

    /**
     * @async
     * @function IncreaseStockByStockId
     * @memberof module:class/ProductStockService
     * @instance
     * @param {Object[]} stockItems 
     * @param {Object} stockItems[].stockItem 
     * @param {number} stockItems[].stockItem.id Ürün stok id bilgisi 
     * @param {number} stockItems[].stockItem.quantityToIncrease Arttıralacak stok miktarı
     * @param {number} stockItems[].stockItem.version Ürün versiyon numarası
     * @returns {Promise<object>} 
     * @description Bir ürünün n11 ürün stok ID bilgisini kullanarak stok miktarını arttırmak için kullanılır. 
     * Bir ürüne ait n11 ürün stok ID sine, ProductStockService içindeki GetProductStockByProductId 
     * veya GetProductStockBySellerCode metotları ile ulaşılabilir.<br>
     * N11 tarafında değişen stok miktarlarını ezmemek için, “version” bilgisi verilmesi durumunda 
     * ilgili ürün stok bilgisinin N11 de versiyonu ile karşılaştırma yapılır, stok versiyon numaraları 
     * uyumsuz ise işlem gerçekleştirilmez. 
     */
    IncreaseStockByStockId(stockItems) {
        return super.call(this.wsdl, 'IncreaseStockByStockId', {
            stockItems: stockItems
        });
    }

    /**
     * @async
     * @function IncreaseStockByStockSellerCode
     * @memberof module:class/ProductStockService
     * @instance
     * @param {Object[]} stockItems 
     * @param {Object} stockItems[].stockItem 
     * @param {string} stockItems[].stockItem.sellerStockCode Mağaza stok kodu
     * @param {number} stockItems[].stockItem.quantityToIncrease Arttıralacak stok miktarı
     * @param {number} stockItems[].stockItem.version Ürün versiyon numarası
     * @returns {Promise<object>} 
     * @description Bir ürünün mağaza stok kodu kullanarak stok miktarını arttırmak için kullanılır. <br>
     * N11 tarafında değişen stok miktarlarını ezmemek için, “version” bilgisi verilmesi durumunda
     *  ilgili ürün stok bilgisinin N11 de versiyonu ile karşılaştırma yapılır, stok versiyon numaraları
     *  uyumsuz ise işlem gerçekleştirilmez. 
     */
    IncreaseStockByStockSellerCode(stockItems) {
        return super.call(this.wsdl, 'IncreaseStockByStockSellerCode', {
            stockItems: stockItems
        });
    }

    /** 
     * @async
     * @function IncreaseStockByStockAttributes
     * @memberof module:class/ProductStockService
     * @instance
     * @param {Object} product 
     * @param {number} product.id Ürünün n11 ID si 
     * @param {Object[]} product.stockItems
     * @param {Object} product.stockItems[].stockItem
     * @param {Object[]} product.stockItems[].stockItem.attributes
     * @param {Object} product.stockItems[].stockItem.attributes[].attribute
     * @param {string} product.stockItems[].stockItem.attributes[].attribute.name Stok tanımının olduğu seçenek adı
     * @param {string} product.stockItems[].stockItem.attributes[].attribute.value Stok tanımının olduğu seçenek değeri
     * @param {number} product.stockItems[].stockItem.quantityToIncrease Arttıralacak stok miktarı
     * @param {number} product.stockItems[].stockItem.version Ürün stok versiyon numarası
     * @returns {Promise<object>} 
     * @description Bir ürünün stok seçenek bilgilerini kullanarak stok miktarını arttırmak için kullanılır.<br>
     * N11 tarafında değişen stok miktarlarını ezmemek için, “version” bilgisi verilmesi durumunda 
     * ilgili ürün stok bilgisinin N11 de versiyonu ile karşılaştırma yapılır, stok versiyon numaraları 
     * uyumsuz ise işlem gerçekleştirilmez.
     */
    IncreaseStockByStockAttributes(product) {
        return super.call(this.wsdl, 'IncreaseStockByStockAttributes', {
            product: product
        });
    }

    /**
     * @async
     * @function UpdateStockByStockId
     * @memberof module:class/ProductStockService
     * @instance
     * @param {Object[]} stockItems
     * @param {Object} stockItems[].stockItem
     * @param {number} stockItems[].stockItem.id Ürün stok N11 ID si
     * @param {number} stockItems[].stockItem.quantity Yeni ürün stok miktarı
     * @param {number} stockItems[].stockItem.version Ürün stok versiyon numarası
     * @param {boolean} stockItems[].stockItem.delist
     * @returns {Promise<object>} 
     * @description n11 ürün stok ID si kullanarak kayıtlı ürünün stok bilgilerini güncellemek için kullanılır. 
     * n11 ürün stok ID si ve miktar bilgileri girilerek güncelleme işlemi yapılır. Bir ürüne ait n11 ürün stok ID sine, 
     * ProductStockService içindeki GetProductStockByProductId veya GetProductStockBySellerCode metotları ile ulaşılabilir.
     * <br>N11 tarafında değişen stok miktarlarını ezmemek için, “version” bilgisi verilmesi durumunda ilgili ürün stok 
     * bilgisinin N11 de versiyonu ile karşılaştırma yapılır, stok versiyon numaraları uyumsuz ise işlem gerçekleştirilmez. 
     * <br>API'de UpdateStockByStockId ve UpdateStockByStockSellerCode metodları ile stok güncelleme işlemi için tek bir istek
     *  içerisinde en fazla 100 stok değeri güncelleyebilirsiniz.
     * <br>Hata almamak için güncellemeleri ürüne göre yapmayı unutmayın.
     * <br>Örneğin, ilk 100 stok içinde güncellediğiniz ürün, diğer 100 stok içinde de yer alıyorsa, sistem ilk güncellemeyi 
     * hala devam ettirdiği için "Ürün, 60 saniye güncellenemez" hatası alırsınız. Bu sebeple, aynı ürünü aynı 100 stok değeri
     *  içinde güncellemeniz gerekir.
     */
    UpdateStockByStockId(stockItems) {
        return super.call(this.wsdl, 'UpdateStockByStockId', {
            stockItems: stockItems
        });
    }

    /**
     * @async
     * @function UpdateStockByStockSellerCode
     * @memberof module:class/ProductStockService
     * @instance
     * @param {Object[]} stockItems
     * @param {Object} stockItems[].stockItem
     * @param {string} stockItems[].stockItem.sellerStockCode Ürün stok mağaza kodu
     * @param {number} stockItems[].stockItem.quantity Yeni ürün stok miktarı
     * @param {number} stockItems[].stockItem.version Ürün stok versiyon numarası 
     * @returns {Promise<object>} 
     * @description Mağaza ürün stok kodu kullanarak kayıtlı ürünün stok bilgilerini güncellemek için kullanılır. 
     * Mağaza ürün stok kodu ve miktar bilgileri girilerek güncelleme işlemi yapılır. 
     * <br>N11 tarafında değişen stok miktarlarını ezmemek için, “version” bilgisi verilmesi durumunda ilgili ürün 
     * stok bilgisinin N11 de versiyonu ile karşılaştırma yapılır, stok versiyon numaraları uyumsuz ise işlem gerçekleştirilmez. 
     * <br>API'de UpdateStockByStockId ve UpdateStockByStockSellerCode metodları ile stok güncelleme işlemi için tek bir istek 
     * içerisinde en fazla 100 stok değeri güncelleyebilirsiniz.
     * <br>Hata almamak için güncellemeleri ürüne göre yapmayı unutmayın.
     * <br>Örneğin, ilk 100 stok içinde güncellediğiniz ürün, diğer 100 stok içinde de yer alıyorsa, sistem ilk güncellemeyi hala devam
     *  ettirdiği için "Ürün, 60 saniye güncellenemez" hatası alırsınız. Bu sebeple, aynı ürünü aynı 100 stok değeri içinde güncellemeniz gerekir.
     */
    UpdateStockByStockSellerCode(stockItems) {
        return super.call(this.wsdl, 'UpdateStockByStockSellerCode', {
            stockItems: stockItems
        });
    }

    /**
     * @async
     * @function DeleteAndUpdateStockByStockAttributes
     * @memberof module:class/ProductStockService
     * @instance
     * @param {Object} product 
     * @param {number} product.id Ürünün n11 ID si 
     * @param {Object[]} product.stockItems
     * @param {Object} product.stockItems[].stockItem
     * @param {Object[]} product.stockItems[].stockItem.attributes
     * @param {Object} product.stockItems[].stockItem.attributes[].attribute
     * @param {string} product.stockItems[].stockItem.attributes[].attribute.name Ürün stok özellik adı
     * @param {string} product.stockItems[].stockItem.attributes[].attribute.value Ürün stok özellik değeri
     * @param {number} product.stockItems[].stockItem.quantity Arttıralacak stok miktarı
     * @param {number} product.stockItems[].stockItem.version Ürün stok versiyon numarası
     * @returns {Promise<object>} 
     * @description Ürün stok seçenek bilgilerini kullanarak kayıtlı ürünün stok bilgilerini güncellemek için kullanılır. 
     * Ürün n11 ID si ve stok seçenek bilgileri girilerek güncelleme işlemi yapılır. Bir ürüne ait stok bilgilerine, 
     * ProductStockService içindeki GetProductStockByProductId veya GetProductStockBySellerCode metotları ile ulaşılabilir.
     *  Bir ürün için tüm stok bilgilerini güncelleme işlemi gerçekleştirilebilir. 
     * <br>N11 tarafında değişen stok miktarlarını ezmemek için, “version” bilgisi verilmesi durumunda ilgili ürün stok
     *  bilgisinin N11 de versiyonu ile karşılaştırma yapılır, stok versiyon numaraları uyumsuz ise işlem gerçekleştirilmez. 
     */
    DeleteAndUpdateStockByStockAttributes(product) {
        return super.call(this.wsdl, 'DeleteAndUpdateStockByStockAttributes', {
            product: product
        });
    }

}