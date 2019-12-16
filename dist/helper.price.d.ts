import { ProductListModel, Result } from "./price.model";
export declare class HelperPrice {
    /** Function for product list */
    listPricingRule(product: ProductListModel): Result;
    ruleShowMinMax(product: ProductListModel): {
        minmax: boolean;
        max: number;
        min: number;
    } | {
        minmax: boolean;
        max?: undefined;
        min?: undefined;
    } | undefined;
    ruleShowPrice(product: ProductListModel): {
        sale: boolean;
        retail: boolean;
        base: boolean;
    };
    rulerShowSalePrice(retail: number, base: number, sale: number): boolean;
    rulerShowRetailPrice(retail: number, base: number, sale: number): boolean;
    rulerShowBasePrice(retail: number, base: number, sale: number): boolean;
    /** Fucntion for product detail */
    detailPricingRule(): void;
}
