const ProductService = require('../src/productService');
var assert = require('chai').assert;
const uuidv1 = require('uuid/v1');

describe("product-service", async function () {
    let productSrv = new ProductService("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", "yyyyyyyyyyyyyy");
    let product;
    this.timeout(120000);

    it("should get productList", async function () {
        let result = await productSrv.getProductList(0, 50);
        assert(result[0].result.status == "success", result[0].result.errorMessage);
        product = result[0].products.product[2];
    });

    it("should get the first product by product_id", async function () {
        let result = await productSrv.getProductByProductId(product.id);
        product = result[0].product;
        assert(result[0].result.status == "success", result[0].result.errorMessage);
    });

    it("should get the first product by seller_code", async function () {
        let result = await productSrv.getProductBySellerCode(product.productSellerCode);
        assert(result[0].result.status == "success", result[0].result.errorMessage);
    });

    it("should save a new product", async function () {
        delete product.id;
        product.productSellerCode = uuidv1();
        let result = await productSrv.saveProduct(product);
        product = result[0].product;
        assert(result[0].result.status == "success", result[0].result.errorMessage);
    });

    it("should update the discount value by product_id", async function () {
        let price = +(product.price);
        let result = await productSrv.updateDiscountValueByProductId(product.id, 3, price - 1);
        assert(result[0].result.status == "success", result[0].result.errorMessage);
        assert(+(result[0].product.displayPrice) == price - 1, "old price is: " + price + " new price is: " + +(result[0].product.price));
    });

    it("should delete the new product by id", async function () {
        await new Promise(resolve => setTimeout(resolve, 62000));
        let result = await productSrv.deleteProductById(product.id);
        assert(result[0].result.status == "success", result[0].result.errorMessage);
    });

})