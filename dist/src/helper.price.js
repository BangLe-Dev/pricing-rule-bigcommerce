import { Result } from "./price.model";
var HelperPrice = /** @class */ (function () {
    function HelperPrice() {
    }
    /** Function for product list */
    HelperPrice.prototype.listPricingRule = function (product) {
        var result = new Result();
        var temp;
        if (product && product.variants.length) {
            temp = this.ruleShowMinMax(product);
            // Product show min-max of variant
            if (temp.minmax === true) {
                result.list = null;
                result.minmax.enable = true;
                result.minmax.min = temp.min;
                result.minmax.max = temp.max;
                result.minmax.title = '';
            }
            else {
                result.minmax = null;
                temp = this.ruleShowPrice(product);
                for (var index = 0; index < result.list.length; index++) {
                    var element = result.list[index];
                    if (element.retail && temp.retail) {
                        result.list[index].retail.enable = true;
                        result.list[index].retail.price = product.retailPrice;
                        result.list[index].retail.title = 'MSRP';
                    }
                    else if (element.base && temp.base) {
                        result.list[index].base.enable = true;
                        result.list[index].base.price = product.price;
                        if (temp.sale)
                            result.list[index].base.title = 'WAS';
                    }
                    else if (element.sale && temp.sale) {
                        result.list[index].sale.enable = true;
                        result.list[index].sale.price = product.salePrice;
                        if (temp.base)
                            result.list[index].sale.title = 'NOW';
                    }
                }
            }
        }
        return result;
    };
    HelperPrice.prototype.ruleShowMinMax = function (product) {
        if (Object.keys(product).length != 0 || product.constructor != Object) {
            var priceBase_1 = product.price;
            var minPrice_1 = null;
            var maxPrice_1 = 0;
            var samePrice_1 = false;
            if (product && (product.variants.length > 1)) {
                (product.variants).forEach(function (variant, key) {
                    if (variant.allowAddToCart) {
                        if (key > 0 && variant.price != product.variants[key - 1].price)
                            samePrice_1 = true;
                        var priceTemp = 0;
                        if (variant.price != null)
                            priceTemp = variant.price;
                        else
                            priceTemp = priceBase_1;
                        if (minPrice_1 > priceTemp || minPrice_1 === null)
                            minPrice_1 = priceTemp;
                        if (maxPrice_1 < priceTemp)
                            maxPrice_1 = priceTemp;
                    }
                });
            }
            if (minPrice_1 < maxPrice_1 && samePrice_1) {
                return {
                    minmax: true,
                    max: maxPrice_1,
                    min: minPrice_1
                };
            }
            else
                return {
                    minmax: false
                };
        }
    };
    HelperPrice.prototype.ruleShowPrice = function (product) {
        var retail = product.retailPrice;
        var base = product.price;
        var sale = product.salePrice;
        return {
            sale: this.rulerShowSalePrice(retail, base, sale),
            retail: this.rulerShowRetailPrice(retail, base, sale),
            base: this.rulerShowBasePrice(retail, base, sale),
        };
    };
    HelperPrice.prototype.rulerShowSalePrice = function (retail, base, sale) {
        if (sale || sale === base) {
            return true;
        }
        else {
            return false;
        }
    };
    HelperPrice.prototype.rulerShowRetailPrice = function (retail, base, sale) {
        if ((sale > 0 && retail > sale) || (sale == 0 && retail > base)) {
            return true;
        }
        else {
            return false;
        }
    };
    HelperPrice.prototype.rulerShowBasePrice = function (retail, base, sale) {
        if (base && base > sale) {
            return true;
        }
        else {
            return false;
        }
    };
    /** Fucntion for product detail */
    HelperPrice.prototype.detailPricingRule = function () {
    };
    return HelperPrice;
}());
export { HelperPrice };
