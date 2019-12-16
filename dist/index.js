"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helper_price_1 = require("./helper.price");
// @Param product, is product of list.
var ListPricingRule = /** @class */ (function () {
    function ListPricingRule() {
        this.helperPrice = new helper_price_1.HelperPrice();
    }
    ListPricingRule.prototype.listPricingRule = function (product) {
        return this.helperPrice.listPricingRule(product);
    };
    ListPricingRule.prototype.detailPricingRule = function (product) {
    };
    return ListPricingRule;
}());
exports.ListPricingRule = ListPricingRule;
