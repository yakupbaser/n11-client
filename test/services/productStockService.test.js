let ProductStockService = require('../../src/services/productStockService');
let prdctStockService = new ProductStockService('xxxxxx', 'xxxxxxx');

describe('ProductStockService Library', function () {

    it('GetProductStockByProductId should get failure with given wrong id', function (done) {
        prdctStockService.GetProductStockByProductId(1).then((res) => {
            if (res[0].result.status == 'failure') {
                done();
            } else {
                done('result status is not failure =>' + res[0].result.status);
            }
        }).catch((err) => {
            done(err);
        });
    });

    it('GetProductStockByProductSellerCode should get failure with given wrong productSellerCode', function (done) {
        prdctStockService.GetProductStockByProductSellerCode(1).then((res) => {
            if (res[0].result.status == 'failure') {
                done();
            } else {
                done('result status is not failure =>' + res[0].result.status);
            }
        }).catch((err) => {
            done(err);
        });
    });

    it('IncreaseStockByStockId should get failure with given stockItems', function (done) {

        prdctStockService.IncreaseStockByStockId([]).then((res) => {
            if (res[0].result.status == 'failure') {
                done();
            } else {
                done('result status is not failure =>' + res[0].result.status);
            }
        }).catch((err) => {
            done(err);
        });
    });

    it('IncreaseStockByStockSellerCode should get failure with given stockItems', function (done) {

        prdctStockService.IncreaseStockByStockSellerCode([]).then((res) => {
            if (res[0].result.status == 'failure') {
                done();
            } else {
                done('result status is not failure =>' + res[0].result.status);
            }
        }).catch((err) => {
            done(err);
        });
    });

    it('IncreaseStockByStockAttributes should get failure with given stockItems', function (done) {

        prdctStockService.IncreaseStockByStockAttributes({}).then((res) => {
            if (res[0].result.status == 'failure') {
                done();
            } else {
                done('result status is not failure =>' + res[0].result.status);
            }
        }).catch((err) => {
            done(err);
        });
    });

    it('UpdateStockByStockSellerCode should get failure with given stockItems', function (done) {

        prdctStockService.UpdateStockByStockSellerCode([]).then((res) => {
            if (res[0].result.status == 'failure') {
                done();
            } else {
                done('result status is not failure =>' + res[0].result.status);
            }
        }).catch((err) => {
            done(err);
        });
    });

    it('DeleteAndUpdateStockByStockAttributes should get failure with given stockItems', function (done) {

        prdctStockService.DeleteAndUpdateStockByStockAttributes({}).then((res) => {
            if (res[0].result.status == 'failure') {
                done();
            } else {
                done('result status is not failure =>' + res[0].result.status);
            }
        }).catch((err) => {
            done(err);
        });
    });

    it('UpdateStockByStockId should get failure with given stockItems', function (done) {

        prdctStockService.UpdateStockByStockId([]).then((res) => {
            if (res[0].result.status == 'failure') {
                done();
            } else {
                done('result status is not failure =>' + res[0].result.status);
            }
        }).catch((err) => {
            done(err);
        });
    });

});