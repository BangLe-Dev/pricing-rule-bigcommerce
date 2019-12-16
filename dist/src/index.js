import { HelperPrice } from "./helper.price";
// @Param product, is product of list.
var ListPricingRule = /** @class */ (function () {
    function ListPricingRule() {
        this.helperPrice = new HelperPrice();
    }
    ListPricingRule.prototype.listPricingRule = function (product) {
        return this.helperPrice.listPricingRule(product);
    };
    ListPricingRule.prototype.detailPricingRule = function (product) {
    };
    return ListPricingRule;
}());
export { ListPricingRule };
