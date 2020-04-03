'use strict';
var soap = require('soap');

module.exports = class {
    constructor(appKey, appSecret) {
        this.appKey = appKey;
        this.appSecret = appSecret;
    }

    call(url, function_name, payload) {
        return new Promise((resolve, reject) => {
            payload.auth = {
                appKey: this.appKey,
                appSecret: this.appSecret
            }
            soap.createClientAsync(url, {
                    attributesKey: '$attr'
                }).then((client) => {
                    return client[function_name + 'Async'](payload).then((result) => {
            
                        resolve(result);
                    });
                })
                .catch(err => {
                    reject(err);
                });
        })
    }
}