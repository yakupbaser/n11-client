1. GİRİŞ

Bu dokümanda, n11 kullanıcılarının site ya da Mağaza Yönetim Merkezi üzerinden yapabildikleri işlemlerin birçoğunu kapsayan API entegrasyonu bilgileri yer almaktadır. Servisler, SOAP tabanlı web servislerdir. 

```javascript
'use strict';

const objN11 = require('./src/n11-client');

let CityService =  new objN11.CityService();

CityService.GetCity(34).then((val)=>{
  console.log(val);
}).catch((reason)=>{
  console.log(reason);
});
```