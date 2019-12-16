import { HelperPrice } from "./helper.price";
import { ProductListModel, ProductDetailModel } from "./price.model";
export declare class ListPricingRule {
    helperPrice: HelperPrice;
    constructor();
    listPricingRule(product: ProductListModel): import("./price.model").Result;
    detailPricingRule(product: ProductDetailModel): void;
}
