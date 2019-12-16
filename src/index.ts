import { HelperPrice } from "./helper.price";
import { ProductListModel, ProductDetailModel } from "./price.model";


// @Param product, is product of list.
export class ListPricingRule {

    helperPrice: HelperPrice;
    constructor() {
        this.helperPrice = new HelperPrice();
    }
    
    listPricingRule(product: ProductListModel) {
        return this.helperPrice.listPricingRule(product);
    }
    
    detailPricingRule(product: ProductDetailModel) {
        
    }
}
