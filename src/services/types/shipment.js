/**
 * @typedef {Object} shipment
   @property {string} templateName Kargo şablonu
   @property {string} installmentInfo Kurulum bilgileri/text bilgisi girilecek
   @property {string} exchangeInfo Değişim bilgileri/text bilgisi girilecek
   @property {string} shippingInfo Teslimat bilgileri/text bilgisi girilecek
   @property {boolean} specialDelivery Özel teslimat true/false
   @property {string} deliveryFeeType Kargo ödeme yöntemi 1 ise alıcı öder 2 ise mağaza öder 3 ise şartlı kargo
   @property {boolean} combinedShipmentAllowed 1’den fazla ürün gönderim durumu true ise 1’den fazla ürün var demek ; 
 * false ise tek ürün olduğunu belirtir.
   @property {string} shipmentMethod Ürünün ulaşma şekli  1ise kargo 2 ise diğer
   @property {Object} warehouseAddress 
   @property {string} warehouseAddress.title Depo adres başlığı
   @property {string} warehouseAddress.address Depo adres bilgisi
   @property {Object} warehouseAddress.district 
   @property {string} warehouseAddress.district.name Depo ilçe adı
   @property {number} warehouseAddress.district.id Depo adres ilçe idsi
   @property {Object} warehouseAddress.city 
   @property {string} warehouseAddress.city.name Depo adres şehir adı
   @property {number} warehouseAddress.city.code Depo adres şehir kodu
   @property {string} warehouseAddress.postalCode Depo adres posta kodu
   @property {Object} exchangeAddress
   @property {string} exchangeAddress.title Iade adres başlık adı
   @property {string} exchangeAddress.address İade adres açıklaması
   @property {Object} exchangeAddress.district
   @property {string} exchangeAddress.district.name Iade adres bölge adı
   @property {number} exchangeAddress.district.id Iade adres bölge idsi
   @property {Object} exchangeAddress.city
   @property {string} exchangeAddress.city.name Iade adres şehir ismi
   @property {number} exchangeAddress.city.code Iade adres şehir kodu
   @property {string} exchangeAddress.postalCode Iade adres posta kodu
   @property {Object[]} shipmentCompanies
   @property {Object} shipmentCompanies[].shipmentCompany
   @property {string} shipmentCompanies[].shipmentCompany.name Kargo şirket adı
   @property {string} shipmentCompanies[].shipmentCompany.shortName Kargo şirket kısa adı
   @property {Object[]} deliverableCities
   @property {Object} deliverableCities[].city
   @property {string} deliverableCities[].city.name Teslimat yapılacak şehir adı
   @property {integer} deliverableCities[].city.code Teslimat yapılacak şehir kodu
   @property {Object} claimShipmentCompany
   @property {string} claimShipmentCompany.name İade/Değişim kargo şirket adı
   @property {string} claimShipmentCompany.shortName İade/Değişim kargo şirket kısa adı
   @property {string} cargoAccountNo Kargo hesap no
   @property {boolean} useDmallCargo n11.com entegrasyonlu kargo firmasi kullanımı: 1: kullan 0: kullanma
 */

