'use strict';
var soap = require('soap');

module.exports = class {
    constructor(appKey, appSecret) {
        this.appKey = appKey;
        this.appSecret = appSecret;
    }

    call(url, function_name, payload) {
        return new Promise((resolve, reject) => {
            if (payload.attributes) {
                payload.$attributes = payload.attributes;
                delete payload.attributes;
            }
            payload.auth = {
                appKey: this.appKey,
                appSecret: this.appSecret
            }
            soap.createClientAsync(url, {
                    attributesKey: '$attributes'
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