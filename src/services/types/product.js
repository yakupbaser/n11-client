   /**
     * @typedef {Object} product
     * @property {string} productSellerCode Ürün Mağaza Kodu
     * @property {string} title Ürün sayfasında görünecek başlık, en fazla 65 karakter olmalıdır.
     * @property {string} subtitle Ürün sayfasında görünecek altbaşlık, en fazla 65 karakter olmalıdır.
     * @property {string} description Ürün açıklama bilgileri (HTML olabilir)
     * @property {boolean} domestic Ürünün yerli üretim olup olmadığını belirtir.Boolean olarak true/false değeri alır.
     * @property {Object} category
     * @property {number} category.id Ürün kategori numarası
     * @property {Object[]} specialProductInfoList
     * @property {Object} specialProductInfoList[].specialProductInfo
     * @property {string} specialProductInfoList[].specialProductInfo.key Seyahat kategori ürün açıklama bilgilerinin 
     * girildiği alan. Bu Alana; TurProgrami, IptalIadeKosullari,EkHizmetler bilgileri girilerek açıklama oluşturulur
     * @property {string} specialProductInfoList[].specialProductInfo.value Key’e karşılık gelen html verisi
     * @property {number} price Ürün baz fiyatı
     * @property {number} currencyType Ürün liste fiyatı para birimi
     * @property {Object[]} images
     * @property {Object} images[].image
     * @property {string} images[].image.url Resim url adresi
     * @property {string} images[].image.order Resim öncelik numarası
     * @property {number} approvalStatus
     * @property {string} groupAttribute Ürünün gruplandığı özellik adı
     * @property {string} groupItemCode Ürünün gruplandığı özellik grubunun adı (satıcı verir)
     * @property {string} itemName Ürünün gruplandığı özellik değeri
     * @property {Object[]} attributes Ürün özelliklerinin adı ve değeri girilen alan
     * @property {Object} attributes[].attribute
     * @property {string} attributes[].attribute.name
     * @property {string} attributes[].attribute.value
     * @property {string} saleStartDate Ürün satış başlangıç tarihi (dd/MM/yyyy), boş gönderilirse ürün aynı gün satışa çıkar
     * @property {string} saleEndDate Ürün satış bitiş tarihi (dd/MM/yyyy), boş gönderilirse çok ileri bir tarihe atanır
     * @property {string} productionDate Ürün üretim tarihi (dd/MM/yyyy)
     * @property {string} expirationDate Ürün son kullanma tarihi (dd/MM/yyyy)
     * @property {string} productCondition Ürün durumu 1: Yeni 2: 2. el 
     * @property {number} preparingDay Ürün kargoya verilme süresi (gün olarak)
     * @property {Object} discount
     * @property {string} discount.startDate Mağaza indirimi başlama tarihi
     * @property {string} discount.endDate Mağaza indirimi bitiş tarihi
     * @property {string} discount.type Mağaza İndirim Tipi: 1: İndirim Tutarı Cinsinden 2: İndirim Oranı Cinsinden
     * 3: İndirimli Fiyat Cinsinden
     * @property {string} discount.value İndirim Miktarı (indirim tipinde verilen parametreye göre)
     * @property {string} shipmentTemplate Teslimat Şablon Adı
     * @property {Object[]} stockItems
     * @property {Object} stockItems[].stockItem
     * @property {boolean} stockItems[].stockItem.bundle Birlikte satış yapılan ürünler
     * @property {string} stockItems[].stockItem.mpn Ürünün üretici parça numarası
     * @property {string} stockItems[].stockItem.gtin Ürünün global ticari öğe numarası
     * @property {string} stockItems[].stockItem.oem Parça/Ürün bağlantı numarası
     * @property {number} stockItems[].stockItem.quantity Stok miktarı
     * @property {string} stockItems[].stockItem.sellerStockCode Mağaza ürün stok kodu
     * @property {Object[]} stockItems[].stockItem.attributes
     * @property {Object} stockItems[].stockItem.attributes[].attribute
     * @property {string} stockItems[].stockItem.attributes[].attribute.name Eğer ürünün seçenekleri varsa bu bilgiler girilir, 
     * isim olarak kendi belirlediğiniz bir değerleri kullanabilirsiniz.
     * @property {string} stockItems[].stockItem.attributes[].attribute.value Eğer ürünün seçenekleri varsa bu bilgiler girilir, 
     * değer olarak kendi belirlediğiniz bir değerleri kullanabilirsiniz.
     * @property {number} stockItems[].stockItem.optionPrice Ürün stok biriminin liste fiyatı
     */
