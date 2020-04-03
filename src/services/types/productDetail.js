    /**
     * 
     * @typedef {Object} productDetail 
     * @property {number} productId Ürün N11 ID bilgisi 
     * @property {string} productSellerCode Ürün mağaza kodu
     * @property {number} price Ürünün baz fiyatı
     * @property {Object} productDiscount
     * @property {number} productDiscount.discountType Mağaza İndirim Tipi: 1: İndirim Tutarı Cinsinden 2: İndirim Oranı Cinsinden
     * 3: İndirimli Fiyat Cinsinden
     * @property {number} productDiscount.discountValue İndirim Miktarı (indirim tipinde verilen parametreye göre)
     * @property {string} productDiscount.discountStartDate Mağaza indirimi başlama tarihi
     * @property {string} productDiscount.discountEndDate Mağaza indirimi bitiş tarihi
     * @property {Object[]} stockItems
     * @property {Object} stockItems[].stockItem
     * @property {string} stockItems[].stockItem.sellerStockCode Ürün stok mağaza kodu
     * @property {number} stockItems[].stockItem.id Ürün stok N11 ID si
     * @property {number} stockItems[].stockItem.optionPrice Ürün stok biriminin liste fiyatı
     * @property {number} stockItems[].stockItem.quantity Ürün stok miktarı
     * @property {string} description Ürün Açıklaması
     * @property {Object[]} images
     * @property {Object} images[].image
     * @property {string} images[].image.url Resim url adresi
     * @property {number} images[].image.order Resim öncelik numarası
     */

    