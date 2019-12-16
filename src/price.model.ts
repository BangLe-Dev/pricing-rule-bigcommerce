export class ProductListModel {
    id: 731;
    name: string;
    type: string;
    sku: string;
    description: string;
    weight: number;
    width: number;
    depth: number;
    height: number;
    price: number;
    costPrice: number;
    retailPrice: number;
    salePrice: number;
    mapPrice: number;
    calculatedPrice: number;
    taxClassId: number;
    productTaxCode: number;
    brandId: number;
    brandName: any;
    inventoryLevel: number;
    inventoryWarningLevel: number;
    inventoryTracking: any;
    fixedCostShippingPrice: number;
    isFreeShipping: boolean;
    isVisible: boolean;
    isFeatured: boolean;
    binPickingNumber: any;
    upc: any;
    availability: string;
    availability_description: any;
    giftWrappingOptionsType: any;
    sortOrder: any;
    condition: string;
    isConditionShown: boolean;
    orderQuantityMinimum: number;
    orderQuantityMaximum: number;
    viewCount: number;
    preorderReleaseDate: any;
    isPreorderOnly: boolean;
    isPriceHidden: boolean;
    openGraphType: string;
    reviewsRatingSum: number;
    reviewsCount: number;
    totalSold: number;
    customFields: any;
    bulkPricingRules: any;
    dateCreated: string;
    dateModified: string;
    images: any;
    videos: any;
    variants: [Variant];
    baseVariantId: any;
    productId: any;
    orderId: any;
    orderdAdressId: any;
    basePrice: any;
    priceExTax: any;
    priceIncTax: any;
    priceTax: any;
    baseTotal: any;
    totalExTax: any;
    totalIncTax: any;
    totalTax: any;
    quantity: any;
    baseCostPrice: any;
    costPriceIncTax: any;
    costPriceExTax: any;
    costPriceTax: any;
    quantityRefunded: any;
    refundAmount: any;
    returnId: any;
    wrappingName: any;
    baseWrappingCost: any;
    wrappingCostExTax: any;
    wrappingCostIncTax: any;
    wrappingCostTax: any;
    wrappingMessage: any;
    quantityShipped: any;
    eventName: any;
    fixedShippingCost: any;
    ebayItemId: any;
    ebayTransactionId: any;
    parentOrderProductId: any;
    externalId: any;
    fulfillmentSource: any;
    productOptions: any;
    outStock: boolean;
    allowAddToCart: boolean;
    options: any;
    modifierOptions: any;
    optionSetId: any;
    bulkPricing: any;
    savingNotification: string;
    setOptions: string;
    showStockLabel: boolean;
    productUrl: string;
    textContentLabel: string;
    textContentColor: string;
    stockMessage: string;
    showPriceLabel: boolean;
    stockLevelInfo: any;
    skuTitle: string;
    weightTitle: any;
    shippingCostTitle: string;
    upcTitle: string;
    refunded: boolean;
    bundledProduct: boolean;
}

export class ProductDetailModel {
    type: string;
    visible: boolean;
    required: boolean;
    key: string;
    label: string;
    options: any;
    position: number;
    value: string;
    disable: boolean;
}

export class Variant {
    price: number;
    calculatedPrice: number;
    salePrice: number;
    retailPrice: number;
    mapPrice: number;
    costPrice: number;
    weight: number;
    width: number;
    height: number;
    depth: number;
    isFreeShipping: boolean;
    purchasingDisabled: boolean;
    purchasingDisabledMessage: string;
    inventoryLevel: number;
    inventoryWarningLevel: number;
    id: any;
    productId: any;
    sku: any;
    skuId: any;
    optionValues: [];
    outStock: boolean;
    allowAddToCart: boolean;
    fixedCostShippingPrice:number;
    stockLevelInfo: any;
    upc: any;
}

export class Result {
    minmax : {
        enable: boolean,
        min: number,
        max: number,
        title: string
    };
    list: [{
        retail: {
            enable: boolean,
            price: number,
            title: string
        },
        base: {
            enable: boolean,
            price: number,
            title: string
        },
        sale: {
            enable: boolean,
            price: number,
            title: string
        }
    }]
}
