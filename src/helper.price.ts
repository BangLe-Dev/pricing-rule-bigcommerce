import { ProductListModel, Result } from "./price.model";

export class HelperPrice {

    /** Function for product list */
    listPricingRule(product: ProductListModel) {
        let result = new Result();
        let temp : any;

        if(product && product.variants.length) {
            temp = this.ruleShowMinMax(product);

            // Product show min-max of variant
            if(temp.minmax === true) {
                delete result.list;

                result.minmax.enable = true;
                result.minmax.min = temp.min;
                result.minmax.max = temp.max;
                result.minmax.title = '';
            } else {
                delete result.minmax;
                temp = this.ruleShowPrice(product);

                for (let index = 0; index < result.list.length; index++) {
                    const element = result.list[index];
                    if(element.retail && temp.retail) {
                        result.list[index].retail.enable = true;
                        result.list[index].retail.price = product.retailPrice;
                        result.list[index].retail.title = 'MSRP';
                    } else if (element.base && temp.base) {
                        result.list[index].base.enable = true;
                        result.list[index].base.price = product.price;
                        if (temp.sale) result.list[index].base.title = 'WAS';
                    } else if (element.sale && temp.sale) {
                        result.list[index].sale.enable = true;
                        result.list[index].sale.price = product.salePrice;
                        if (temp.base) result.list[index].sale.title = 'NOW';
                    }
                }
            }
        }
        return result;
    }

    ruleShowMinMax(product: ProductListModel) {
        if (Object.keys(product).length != 0 || product.constructor != Object) {
            let priceBase: number = product.price;
            let minPrice: number = -1;
            let maxPrice: number = 0;
            let samePrice: boolean = false;

            if(product && (product.variants.length > 1)) {
                (product.variants).forEach((variant, key) => {
                    if(variant.allowAddToCart) {
                        if(key > 0 && variant.price != product.variants[key-1].price) samePrice = true;
                        let priceTemp = 0;

                        if(variant.price != null) priceTemp = variant.price;
                        else priceTemp = priceBase;

                        if(minPrice > priceTemp || minPrice === -1) minPrice = priceTemp;
                        if(maxPrice < priceTemp) maxPrice = priceTemp;
                    }
                });
            }

            if(minPrice < maxPrice && samePrice) {
                return {
                    minmax : true,
                    max: maxPrice,
                    min : minPrice
                }
            } else return {
                minmax : false
            };
        }
    }

    ruleShowPrice(product: ProductListModel) {
        const retail = product.retailPrice;
        const base = product.price;
        const sale = product.salePrice;
        return  {
            sale: this.rulerShowSalePrice(retail, base, sale),
            retail: this.rulerShowRetailPrice(retail, base, sale),
            base: this.rulerShowBasePrice(retail, base, sale),
        };
    }

    rulerShowSalePrice(retail: number, base: number, sale: number) {
        if(sale || sale === base) {
            return true;
        } else {
            return false;
        }
    }

    rulerShowRetailPrice(retail: number, base: number, sale: number) {
        if ((sale > 0 && retail > sale) || (sale == 0 && retail > base)) {
            return true;
        } else {
            return false;
        }
    }

    rulerShowBasePrice(retail: number, base: number, sale: number) {
        if ( base && base > sale) {
            return true;
        } else {
            return false;
        }
    }



    /** Fucntion for product detail */
    detailPricingRule() {
    
    }
}