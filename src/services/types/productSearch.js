/**
 * @typedef {object} productSearch
 * @property {string} name Arama yapılmak istenen kelime
 * @property {object} saleDate
 * @property {string} saleDate.startDate Ürünün satışa başladığı tarih
 * @property {string} saleDate.endDate Ürünün satışının bittiği tarih
 * @property {string} approvalStatus Ürünün onay durumu 
<br>“Active”: Satışta olan ürünler
<br>“Suspended”: Beklemede olan ürünler
<br>“Prohibited”: Yasaklı olan ürünler
<br>“Unlisted”: Liste dışı ürünler
<br>“WaitingForApproval”: Onay bekleyen ürünler
<br>“Rejected”: Reddedilen ürünler
<br>“UnapprovedUpdate”: Güncelleme onayı bekleyen ürünler
 * @property {boolean} bundle Birlikte satış yapılan ürünler
 * @property {string} mpn Ürünün üretici parça numarası
 * @property {string} gtin Ürünün global ticari öğe numarası
 * @property {string} oem Parça/Ürün bağlantı numarası
 */

