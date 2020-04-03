'use strict';
let Client = require('../client');

/**
 * @module class/cityService
 * @author Yakup BAŞER
 */
module.exports = class extends Client {

    constructor() {
        super(undefined, undefined);
        this.wsdl = 'https://api.n11.com/ws/CityService.wsdl';
    }

    /**
     * @async
     * @function GetCities
     * @memberof module:class/cityService
     * @instance
     * @returns {Promise<object>}
     * @description Gets all of the cities names 
     */
    GetCities() {
        return super.call(this.wsdl, 'GetCities', {
        });
    }

    /**
     * @async
     * @function GetCity
     * @memberof module:class/cityService
     * @instance
     * @param {string} cityCode city plate number
     * @returns {Promise<object>}
     * @description Gets city name from given city code 
     */
    GetCity(cityCode) {
        return super.call(this.wsdl, 'GetCity', {
            cityCode: cityCode
        });
    }

    /**
     * @async
     * @function GetDistrict
     * @memberof module:class/cityService
     * @instance
     * @param {string} cityCode city plate number
     * @returns {Promise<object>}
     * @description Gets district name from given city code 
     */
    GetDistrict(cityCode) {
        return super.call(this.wsdl, 'GetDistrict', {
            cityCode: cityCode
        });
    }

    /**
     * @async
     * @function GetNeighborhoods
     * @memberof module:class/cityService
     * @instance
     * @param {number} districtId
     * @returns {Promise<object>}
     * @description Gets neighborhoods name from given city code 
     */
    GetNeighborhoods(districtId) {
        return super.call(this.wsdl, 'GetNeighborhoods', {
            districtId: districtId
        });
    }



}