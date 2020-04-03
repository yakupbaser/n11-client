'use strict';

const objN11 = require('./src/n11-client');

/**
 * @file index.js is the root file for N11 Api Library
 * @author Yakup BAŞER
 * @see <a href = "https://github.com/yakupbaser/n11-client">N11-Clien nodjs Library<a/>
 */


let CityService =  new objN11.CityService('xxxxxx','xxxxxxx');

CityService.GetCity(34).then((val)=>{
 console.log(val);
}).catch((reason)=>{
 console.log(reason);
});

