'use strict';

import './types/types';
client = require('../client');

/**
 * @module class/ProductService
 * @author Yakup BAŞER
 */
module.exports = class extends Client {

    /**
     * @param {String} appKey     n11 appkey
     * @param {String} appSecret  n11 appSecret
     */
    constructor(appKey, appSecret) {
        super(appKey, appSecret)
        this.wsdl = 'https://api.n11.com/ws/ProductService.wsdl';
    }

    /**
     * @async
     * @function getProductByProductId
     * @memberof module:class/ProductService
     * @instance
     * @param {number} productId 
     * @returns {Promise<object>} 
     * @description N11 ürün ID sini kullanarak sistemde kayıtlı olan ürünün bilgilerini getirir.
     */
    getProductByProductId(productId) {
        return super.call(this.wsdl, 'GetProductByProductId', {
            productId: productId
        });
    }

    /**
     * @async
     * @function getProductBySellerCode
     * @memberof module:class/ProductService
     * @instance
     * @param {string} sellerCode 
     * @returns {Promise<object>} 
     * @description Mağaza ürün kodunu kullanarak sistemde kayıtlı olan ürünün bilgilerini getirir.
     */
    getProductBySellerCode(sellerCode) {
        return super.call(this.wsdl, 'GetProductBySellerCode', {
            sellerCode: sellerCode
        });
    }

    /**
     * @async
     * @function getProductList
     * @memberof module:class/ProductService
     * @instance
     * @param {number} currentPage 
     * @param {number} pageSize 
     * @returns {Promise<object>} 
     * @description Sistemde ürünleri listelemek için kullanılır. Metot ürün ile ilgili özet bilgileri
     * getirmektedir. Bu metottan dönen “productSellerCode” bilgisini kullanarak 
     * “GetProductBySellerCode” metodu veya “id” bilgisini kullanarak “GetProductById” metodu
     *  kullanılarak ürünün detaylı bilgilerine ulaşılabilir.
     * Sonuçlar, sayfalama bilgisi ile beraber döner. “itemsPerPage” parametresi ile her sayfada 
     * listelenecek ürün adedi, “currentPage” parametresi ile de listelenmek istenen sayfanın numarası
     *  kontrol edilebilir. Herhangi bir değer girilmediği takdirde, her sayfada 100 adet ürün listelenir
     *  ve birinci sayfa listelenir. 
     * “pagingData” içinde toplam ürün adedi, sayfa sayısı, mevcut sayfa ve sayfa başına düşen ürün adedi 
     * bilgileri kullanıcılara verilir.
     */
    getProductList(currentPage, pageSize) {
        return super.call(this.wsdl, 'GetProductList', {
            pagingData: {
                currentPage: currentPage,
                pageSize: pageSize,
            }
        });
    }

    /**
     * @async
     * @function SearchProducts
     * @memberof module:class/ProductService
     * @instance
     * @param {number} currentPage Arama sonrasında istenen sayfa
     * @param {number} pageSize Bir sayfada gösterilecek madde sayısı
     * @param {productSearch} productSearch 
     * @returns {Promise<object>} 
     * @description  Mağaza ürünlerini aramak için kullanılır
     */
    SearchProducts(currentPage, pageSize, productSearch) {
        return super.call(this.wsdl, 'SearchProducts', {
            pagingData: {
                currentPage: currentPage,
                pageSize: pageSize,
            },
            productSearch: productSearch
        });
    }

    /**
     * @async
     * @function updateProductPriceById
     * @memberof module:class/ProductService
     * @instance
     * @param {number} productId Ürünün N11 ID si
     * @param {number} price Güncellenmek istenen ürün fiyatı
     * @param {number} currencyType Ürün listeleme fiyatı para birimi
     * @param {stockItems} stockItems 
     * @returns {Promise<object>} 
     * @description Bir ürünün N11 ürün ID si kullanılarak ürünün sadece baz fiyat bilgilerini, 
     * ürün stok birimi fiyat bilgilerini veya her ikisinin güncellenmesi için kullanılır.
     */
    updateProductPriceById(productId, price, currencyType, stockItems) {
        return super.call(this.wsdl, 'UpdateProductPriceById', {
            productId: productId,
            price: price,
            currencyType: currencyType,
            stockItems: stockItems
        });
    }

    /**
     * @async
     * @function updateProductPriceBySellerCode
     * @memberof module:class/ProductService
     * @instance
     * @param {string} productSellerCode Ürünün mağaza  tarafındaki  ürün  kodu
     * @param {number} price Güncellenmek istenen ürün baz  fiyatı
     * @param {numer} currencyType Ürün listeleme fiyatı para birimi
     * @param {stockItems} stockItems
     * @returns {Promise<object>} 
     * @description Bir ürünün mağaza ürün kodu kullanarak fiyat bilgilerinin güncellenmesi için kullanılır.
     */
    updateProductPriceBySellerCode(productSellerCode, price, currencyType, stockItems) {
        return super.call(this.wsdl, 'UpdateProductPriceBySellerCode', {
            productSellerCode: productSellerCode,
            price: price,
            currencyType: currencyType,
            stockItems: stockItems
        });
    }

    /**
     * @async
     * @function deleteProductById
     * @memberof module:class/ProductService
     * @instance
     * @param {number} productId Ürün N11 ID bilgisi 
     * @returns {Promise<object>} 
     * @description Kayıtlı olan bir ürünü N11 Id si kullanarak silmek için kullanılır.
     */
    deleteProductById(productId) {
        return super.call(this.wsdl, 'DeleteProductById', {
            productId: productId
        });
    }

    /**
     * @async
     * @function deleteProductBySellerCode
     * @memberof module:class/ProductService
     * @instance
     * @param {string} productSellerCode Ürünün mağaza tarafındaki  Ürün kodu
     * @returns {Promise<object>} 
     * @description Kayıtlı olan bir ürünü mağaza ürün kodu kullanılarak silmek için kullanılır.
     */
    deleteProductBySellerCode(productSellerCode) {
        return super.call(this.wsdl, 'DeleteProductBySellerCode', {
            productSellerCode: productSellerCode
        });
    }
 
    /**
     * @async
     * @function saveProduct
     * @memberof module:class/ProductService
     * @instance
     * @param {product} product 
     * @returns {Promise<object>} 
     * @description Yeni ürün oluşturmak veya mevcut ürünü güncellemek için kullanılır. Ürün kodu “productSellerCode” adıyla 
     * veirlen data bu mağaza için bir kayıtlı bir ürünü gösteriyorsa bu ürün güncellenir, aksi halde yeni bir 
     * ürün oluşturulur. 
     * “stockItems” içinde hem seçenekleri olan ürünlerin (numara, beden gibi), hem de seçeneği olmayan ürünlerin stok 
     * girişi yapılabilir. Seçeneği olmayan ürünler için “attributes” alanını boş bırakılabilir.
     * “category.id” içinde ürünün dahil olacağı kategori N11 ID bilgisi yer almalıdır, kategori listesi CategoryService
     * GetParentCategory ile başlayıp GetSubCategories metodları ile alınabilir, ürün dahil olacağı kategori en alt 
     * seviyede olmalıdır.
     * "templateName" içinde sistemde bu mağaza için tanımlı olan bir teslimat şablonu kullanılmalıdır. 
     * Teslimat şablonları tanımlamak için Satış Ofisi ekranlarından Hesabım > Teslimat Bilgileri menü adımları 
     * takip edilerek manuel olarak oluşturulabilir veya ShipmentService içinden createOrUpdateShipmentTemplate 
     * metodu kullanılabilir. Seyahat kategori ürünleri için özel açıklama bölümünün girileceği alan 
     * specialProductInfoList’dir.
     */
    saveProduct(product) {
        product = {
            product: product
        };
        return super.call(this.wsdl, 'SaveProduct', product);
    }


    /**
     * @async
     * @function UpdateProductBasic
     * @memberof module:class/ProductService
     * @instance
     * @param {productDetail} productDetail 
     * @returns {Promise<object>} 
     * @description Kayıtlı olan bir ürünün, N11 ürün ID’si ya da mağaza kodu ile ürün fiyatını, ürün üzerindeki indirimi 
     * ve isteğe bağlı olarak stok ID’si ya da mağaza stok kodu ile belirtilen stoklarının, miktarı ve ilgili 
     * stok biriminin liste fiyatının güncellenmesi için kullanılır.
     */
    UpdateProductBasic(productDetail) {
        return super.call(this.wsdl, 'UpdateProductBasic', ProductDetail);
    }

    /**
     * @async
     * @function updateDiscountValueByProductId
     * @memberof module:class/ProductService
     * @instance
     * @param {number} productId Ürünün N11 ürün kodu
     * @param {productDiscount} productDiscount
     * @returns {Promise<object>} 
     * @description Bir ürünün N11 ürün ID sini kullanarak indirim bilgilerinin güncellenmesi için kullanılır. 
     * Girilen indirim miktarı ürün listeleme fiyatına uygulanır. Liste fiyatı ile ürünün indirimli fiyatı 
     * arasındaki fark kadar ürün stok birim fiyatlarına da indirim uygulanır.
     */
    updateDiscountValueByProductId(productId, productDiscount) {
        return super.call(this.wsdl, 'UpdateDiscountValueByProductId', {
            productId: productId,
            productDiscount: productDiscount
        });
    }
    /**
     * @async
     * @function updateDiscountValueBySellerCode
     * @memberof module:class/ProductService
     * @instance
     * @param {string} productSellerCode 
     * @param {productDiscount} productDiscount
     * @returns {Promise<object>} 
     * @description Bir ürünün mağaza ürün kodunu kullanarak indirim bilgilerinin güncellenmesi için kullanılır.
     * Girilen indirim miktarı ürün listeleme fiyatına uygulanır. Liste fiyatı ile ürünün indirimli 
     * fiyatı arasındaki fark kadar ürün stok birim fiyatlarına da indirim uygulanır.
     */
    updateDiscountValueBySellerCode(productSellerCode, productDiscount) {
        return super.call(this.wsdl, 'UpdateDiscountValueBySellerCode', {
            productSellerCode: productSellerCode,
            productDiscount: productDiscount
        });
    }

    /**
     * @async
     * @function GetProductQuestionList
     * @memberof module:class/ProductService
     * @instance
     * @param {productQuestionSearch} productQuestionSearch 
     * @param {number} currentPage Gösterilen sayfa numarası (currentpage 0 ile başlar)
     * @param {number} pageSize Sayfada yer alan madde sayısı
     * @returns {Promise<object>} 
     * @description Müşterileriniz tarafından mağazanıza sorulan soruları listeler. 
     * Sorularınızı listelemek için Appkey ve Appsecret bilgileriniz gerekmektedir.
     */
    GetProductQuestionList(productQuestionSearch, currentPage, pageSize) {
        return super.call(this.wsdl, 'GetProductQuestionList', {
            productQuestionSearch: productQuestionSearch,
            pagingData: {
                currentPage: currentPage,
                pageSize: pageSize,
            },
        });
    }

    /**
     * @async
     * @function GetProductQuestionDetail
     * @memberof module:class/ProductService
     * @instance
     * @param {number} productQuestionId Gelen Sorunun N11 id’si
     * @returns {Promise<object>} 
     * @description GetProductQuestionList ile sıralanan soruların içeriğini, 
     * buradan gelen ID ve getProductQuestionDetail yardımıyla görüntüleyebilirsiniz.
     */
    GetProductQuestionDetail(productQuestionId) {
        return super.call(this.wsdl, 'GetProductQuestionDetail', {
            productQuestionId: productQuestionId
        });
    }

    /**
     * @async 
     * @function SaveProductAnswer
     * @memberof module:class/ProductService
     * @instance
     * @param {number} productQuestionId Gelen Sorunun N11 ID’si
     * @param {string} answer Sorunun cevabı
     * @returns {Promise<object>} 
     * @description Müşterilerden gelen ürün sorularını cevaplamak için kullanılır. 
     * Cevap vermek için productQuestionId değeri zorunludur ve GetProductQuestionList‘ten id edinilebilir.
     */
    SaveProductAnswer(productQuestionId, answer) {
        return super.call(this.wsdl, 'SaveProductAnswer', {
            productQuestionId: productQuestionId,
            answer: answer
        });
    }

    /**
     * @async 
     * @function AdaptUnificationProducts
     * @memberof module:class/ProductService
     * @instance
     * @returns {Promise<object>}
     */
    AdaptUnificationProducts() {
        return super.call(this.wsdl, 'AdaptUnificationProducts', {
        });
    }

    /**
     * @async 
     * @function ProductApprovalStatus
     * @memberof module:class/ProductService
     * @instance
     * @returns {Promise<object>} 
     * @description Seller ın sahip olduğu tüm ürünleri, ait olduğu statülere göre sınıflandırıp, statü/ sayı bilgisi döner.  
     * Seller a göre cevap döndüğü için istekte sadece authorization olması yeterlidir. Her bir seller maksimum
     * 3 kez istek gönderebilir. 
     */
    ProductApprovalStatus() {
        return super.call(this.wsdl, 'ProductApprovalStatus', {
        });
    }

    /**
     * @async 
     * @function UpdateProductsByPims
     * @memberof module:class/ProductService
     * @instance
     * @param {productIdList} productIdList
     * @returns {Promise<object>} 
     */
    UpdateProductsByPims(productIdList) {
        return super.call(this.wsdl, 'UpdateProductsByPims', {
            productIdList: productIdList
        });
    }

}