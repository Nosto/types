/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 2.27.744 on 2020-12-16 15:51:22.

interface AbTestDraftPreviewSettingsDTO extends AbTestPreviewSettingsBase<AbTestVariationDTO> {
    variations: AbTestVariationDTO[];
}

interface AbTestPreviewSettingsBase<T> {
    id: TestId;
    method: Method;
    name: string;
    segment: SegmentId;
    variations: T[];
}

interface AbTestPreviewSettingsDTO extends AbTestPreviewSettingsBase<AbTestVariationDTO> {
    variations: AbTestVariationDTO[];
}

interface AbTestVariation {
    base: boolean;
    id: string;
    name: string;
}

interface AbTestVariationDTO extends AbTestVariation {
}

interface AbstractFacebookPixelEvent<D> {
    d: D;
    n: string;
}

interface CampaignId<T> extends NostoIdentifierObjectId<T> {
    feature: OnsiteFeature;
}

interface CartItem extends Serializable, CartItemFields {
}

interface CartItemFields {
    name: string;
    priceCurrencyCode: string;
    productId: string;
    quantity: number;
    skuId: string;
    unitPrice: number;
}

interface ClientScriptSettingsDTO extends PublicJacksonBean {
    account: string;
    addToCartPopup: boolean;
    anyDomain: boolean;
    browserQueueActive: boolean;
    cmpMode: string;
    collectEmailFromURL: boolean;
    cookieTime: number;
    debugRedirectUrl: string;
    defaultCurrencyCode: string;
    defaultVariantId: string;
    discountPopupTriggers: { [index: string]: PopupTriggerSettingsDTO[] };
    discountPopupVisible: boolean;
    emailAddressUrlParamName: string;
    exchangeRates: boolean;
    extraHosts: string[];
    fullTaggingRequired: boolean;
    jsErrorUrl: string;
    live: boolean;
    nostoRefParam: string;
    pageTypeFiltersForUntaggedPages: boolean;
    partnerRecommendationEndpoint: string;
    placements: { [index: string]: DynamicPlacementDTO };
    popupRibbonUrlFilter: boolean;
    recoveryPopupEnabled: boolean;
    searchQueryParam: string;
    secureCookie: boolean;
    segmentUrlParameters: string[];
    sendTaggingOnlyIfNeeded: boolean;
    sentryDsn: string;
    server: string;
    shopifyCmpRedirect: boolean;
    site: string;
    subDomain: string;
    subscribeWebSocketChannel: boolean;
    trackingTypes: string[];
    triggerAddToCartPopupWithCookie: boolean;
    websocketEndPoint: string;
}

interface Comparable<T> {
}

interface ConditionDTO {
    advanced: boolean;
    brands: string[];
    categories: string[];
    excBrands: string[];
    excCategories: string[];
    excLocations: string[][];
    excPageTypes: PageType[];
    excRefererUrls: string[];
    excTags: string[];
    excUrlParameters: string[];
    excUrls: string[];
    hideOnDesktop: boolean;
    hideOnMobile: boolean;
    locations: string[][];
    maxCartSize: number;
    maxCartValue: number;
    maxPageViews: number;
    minCartSize: number;
    minCartValue: number;
    minPageViews: number;
    pageTypes: PageType[];
    refererUrls: string[];
    tags: string[];
    treatUrlConditionsAsFilters: boolean;
    urlParameters: string[];
    urls: string[];
}

interface ContentDebugDTO {
    divIds: string[];
    enabled: boolean;
    id: ContentId;
    name: string;
    rendered: boolean;
}

interface ContentId extends CampaignId<ContentId> {
}

interface ConversionItem extends PublicJacksonBean, CartItemFields {
    price_currency_code: string;
    product_id: string;
    sku_id: string;
    unit_price: number;
}

interface CustomerAffinityResponse extends PublicJacksonBean {
    top_brands: CustomerAffinityResponseItem[];
    top_categories: CustomerAffinityResponseItem[];
}

interface CustomerAffinityResponseItem extends JacksonBean {
    name: string;
    score: number;
}

interface CustomerDTO extends PublicJacksonBean {
    first_name: string;
    id: string;
    last_name: string;
    marketing_permission: boolean;
    ref: string;
}

interface CustomerData {
    customerReference?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    newsletter?: boolean;
}

interface DebugRequestParamsDTO {
    at?: Date;
    ep: boolean;
    fs: SegmentId[];
    tp?: TestPreviewsDTO;
}

interface DebugToolbarDataDTO {
    contentCampaigns: ContentDebugDTO[];
    dev: boolean;
    draftTests: AbTestDraftPreviewSettingsDTO[];
    loggedIn: boolean;
    placements: PlacementDebugDTO[];
    placementsTab: boolean;
    popupPreviewSettings: PopupCampaignPreviewSettingsDTO[];
    recommendationCampaigns: RecommendationDebugDTO[];
    richSegmentsTab: boolean;
    runningTests: AbTestPreviewSettingsDTO[];
    schedulesTab: boolean;
    segments: SegmentDebugDTO[];
    showImprovedCampaignOverlayData: boolean;
    showTestsTab: boolean;
}

interface DynamicPlacementDTO {
    cssSelector: string;
    enabled: boolean;
    excludedPageIds: string[];
    id: PlacementId;
    includedPageIds: string[];
    mode: string;
    preserveClassAttribute: boolean;
    urlRules: UrlRule[];
    urls: string[];
}

interface Effect {
    delayMin: number;
    reEntryTolerance: number;
    scrollMin: number;
}

interface EventRequestMessage extends PublicJacksonBean, RawEvents {
    cartCookieHash: string;
    cartProductIds: string[];
    cartTotalPrice: number;
    cartTotalSize: number;
    categories: string[];
    categoryIds: string[];
    currentVariant: string;
    customerReference: string;
    date: Date;
    debug?: DebugRequestParamsDTO;
    debugCode: number;
    elements: string[];
    mailRef: string;
    mailType: string;
    pageType: PageType;
    preview: boolean;
    recotrace: string;
    reference: string;
    referrer: string;
    renderMode: RenderMode;
    segmentCodes: string[];
    showCartPopupRecommendations: boolean;
    sortOrder: string;
    tags: string[];
    url: string;
}

interface EventRequestMessageV0 extends EventRequestMessage {
    catids: string[];
    cats: string[];
    ch: string;
    cids: string[];
    cpr: boolean;
    cpv: string;
    cr: string;
    cs: number;
    ct: number;
    cv: string;
    dt: number;
    ed: Date;
    el: string[];
    ev: RawEvent[];
    m: string;
    mt: string;
    ptp: PageType;
    ref: string;
    rm: RenderMode;
    rt: string;
    sc: string[];
    skipcache: boolean;
    skus: string[];
    so: string;
}

interface EventRequestMessageV1 extends EventRequestMessage {
    cart: CartItem[];
    cart_hash: string;
    cart_popup: boolean;
    category_ids: string[];
    coupon_campaign: string;
    coupon_code: string;
    coupon_used: boolean;
    current_price_variant: string;
    current_variant_id: string;
    customer: PushedCustomer;
    debug_token: number;
    event_date: Date;
    experiments: Experiment[];
    mail_ref: string;
    mail_type: string;
    page_type: PageType;
    ref: string;
    response_mode: RenderMode;
    restore_link: string;
    segment_codes: string[];
    skipcache: boolean;
    sort_order: string;
}

interface EventResponseMessage extends PublicJacksonBean {
    af: CustomerAffinityResponse;
    cdc: string;
    cmpid: string;
    cpr: string;
    cs: number;
    ct: number;
    customer: string;
    debug: DebugToolbarDataDTO;
    ed: Date;
    errors: string[];
    fb: FacebookData;
    ga: GoogleAnalyticsData;
    gl: string[];
    he: boolean;
    hiic: boolean;
    js: string;
    nc: boolean;
    pv: number;
    recommendations: { [index: string]: any };
    se: SegmentsResponseBean;
    visit: string;
}

interface Experiment extends PublicJacksonBean {
    id: string;
    id_stamp: string;
    name: string;
    variation: string;
    variation_name: string;
}

interface FacebookData {
    a: string;
    e: AbstractFacebookPixelEvent<any>[];
    p: string;
    s: string[];
}

interface ForcedTestDTO {
    t: TestId;
    v: string;
}

interface GoogleAnalyticsData extends PublicJacksonBean {
    s: string[];
}

interface Iterable<T> {
}

interface JacksonBean {
}

interface NostoIdentifierObjectId<T> extends Comparable<T> {
    id: ObjectId;
}

interface NostoProduct extends NostoVariant {
    ageGroup: string;
    alternateImageUrls: string[];
    brand: string;
    categories: string[];
    categoryIds: string[];
    condition: string;
    customFields: { [index: string]: string };
    datePublished: Date;
    description: string;
    gender: string;
    googleCategory: string;
    gtin: string;
    imageUrl: string;
    inventoryLevel: number;
    name: string;
    partialVariants: { [index: string]: PartialVariant };
    productId: string;
    ratingValue: number;
    reviewCount: number;
    skus: NostoSku[];
    supplierCost: number;
    tags1: string[];
    tags2: string[];
    tags3: string[];
    thumbUrl: string;
    unitPricingBaseMeasure: number;
    unitPricingMeasure: number;
    unitPricingUnit: string;
    url: string;
    variantId: string;
}

interface NostoSku {
    availability: string;
    customFields: { [index: string]: string };
    gtin: string;
    id: string;
    imageUrl: string;
    inventoryLevel: number;
    listPrice: number;
    name: string;
    price: number;
    url: string;
}

interface NostoVariant {
    availability: string;
    listPrice: number;
    price: number;
    priceCurrencyCode: string;
    priceText: string;
}

interface NostoVariation extends NostoVariant {
    variantId: string;
}

interface ObjectId extends Comparable<ObjectId>, Serializable {
    date: Date;
    inc: number;
    machine: number;
    new: boolean;
    time: number;
    timeSecond: number;
    timestamp: number;
}

interface OrderCustomer extends PublicJacksonBean, OrderInfoFields {
    country: string;
    first_name?: string;
    last_name?: string;
    newsletter: string;
    order_number: string;
    phone: string;
    postCode: string;
    post_code: string;
}

interface OrderInfoFields extends CustomerData {
    countryCode: string;
    orderNumber: string;
    phoneNumber: string;
    type: string;
    zipCode: string;
}

interface PartialVariant extends NostoVariation, Serializable {
    product: Product;
    variation_id: string;
}

interface PlacementDebugDTO {
    activeRule: SegmentRuleDebugDTO;
    divId: string;
    enabled: boolean;
    id: string;
    name: string;
    rules: PlacementRuleDTO[];
}

interface PlacementId extends NostoIdentifierObjectId<PlacementId> {
}

interface PlacementRule<T> {
    feature: OnsiteFeature;
    segment: SegmentId;
    to: T;
}

interface PlacementRuleDTO {
    feature: OnsiteFeature;
    segment: SegmentId;
    to: CampaignId<any>;
}

interface PopupCampaignPreviewSettingsDTO {
    campaignId: string;
    condition: ConditionDTO;
    enabled: boolean;
    popupId: string;
    type: string;
}

interface PopupTriggerSettingsDTO {
    condition: ConditionDTO;
    effect: Effect;
    enabled: boolean;
    id: string;
    name: string;
    ordinal: number;
    popupId: string;
}

interface Product extends Serializable, Iterable<PartialVariant>, NostoProduct {
    category: string[];
    created: Date;
    dateCreated: Date;
    product: Product;
    scores: ProductScores;
    skus: ProductSKU[];
    updated: Date;
    variation_id: string;
    variations: { [index: string]: PartialVariant };
}

interface ProductPushResponse extends PublicJacksonBean {
    messages: string[];
}

interface ProductSKU extends NostoSku, Serializable {
    product: Product;
}

interface ProductScores {
}

interface PublicJacksonBean extends JacksonBean {
}

interface PushedCustomer extends PublicJacksonBean {
    customer_reference: string;
    email: string;
    first_name: string;
    hcid: string;
    last_name: string;
    newsletter: boolean;
    order_number: string;
    source: string;
    source_id: string;
    type: string;
}

interface PushedProduct extends PublicJacksonBean, NostoProduct {
    age_group: string;
    alternate_image_urls: string[];
    category: string[];
    category_id: string[];
    custom_fields: { [index: string]: string };
    date_published: Date;
    google_category: string;
    image_url: string;
    inventory_level: number;
    list_price: number;
    price_currency_code: string;
    product_id: string;
    rating_value: number;
    review_count: number;
    skus: PushedProductSKU[];
    supplier_cost: number;
    thumb_url: string;
    unit_pricing_base_measure: number;
    unit_pricing_measure: number;
    unit_pricing_unit: string;
    variation_id: string;
    variations: { [index: string]: PushedVariation };
}

interface PushedProductSKU extends JacksonBean, NostoSku {
    custom_fields: { [index: string]: string };
    image_url: string;
    inventory_level: number;
    list_price: number;
}

interface PushedVariation extends PublicJacksonBean, NostoVariant {
    list_price: number;
    price_currency_code: string;
}

interface RawEvent extends PublicJacksonBean {
    ref: string;
    refSrc: string;
    target: string;
    type: string;
}

interface RawEvents {
    events: RawEvent[];
}

interface RecommendationDebugDTO {
    divId: string;
    divIds: string[];
    enabled: boolean;
    fbLink: string;
    fbTitle: string;
    fbType: string;
    filtered: boolean;
    id: RecommendationId;
    ittt: boolean;
    link: string;
    productIds: { [index: string]: string };
    recoId: string;
    rendered: boolean;
    resultType: string;
    title: string;
    type: string;
    variant: boolean;
}

interface RecommendationId extends CampaignId<RecommendationId> {
}

interface SegmentDebugDTO {
    active: boolean;
    forced: boolean;
    id: string;
    name: string;
}

interface SegmentId extends NostoIdentifierObjectId<SegmentId> {
}

interface SegmentInfoBean extends JacksonBean {
    id: string;
}

interface SegmentRuleDebugDTO {
    draft: TestDebugDTO;
    segment: SegmentId;
    test: TestDebugDTO;
    to: CampaignId<any>;
    type: TargetType;
}

interface SegmentsResponseBean extends PublicJacksonBean {
    active_segments: SegmentInfoBean[];
}

interface Serializable {
}

interface ShopifyRef extends PublicJacksonBean {
    token: string;
}

interface TestDebugDTO {
    id: TestId;
    variation: string;
}

interface TestId extends CampaignId<TestId> {
}

interface TestPlacementRule extends PlacementRule<any> {
    placement: PlacementId;
}

interface TestPlacementRuleDTO extends TestPlacementRule {
    to: CampaignId<any>;
}

interface TestPreviewsDTO {
    d?: ForcedTestDTO;
    t: ForcedTestDTO[];
    u?: UnsavedDraftPreviewSettingsDTO;
}

interface UnsavedDraftPreviewSettingsDTO extends AbTestPreviewSettingsBase<VariationWithRulesDTO> {
    variations: VariationWithRulesDTO[];
}

interface UrlRule {
    predicate: UrlRulePredicate;
    value: string;
}

interface ValidationError extends PublicJacksonBean {
    key: string;
    message: string;
}

interface Variant extends PartialVariant {
    ageGroup: string;
    alternateImageUrls: string[];
    brand: string;
    category: string[];
    categoryIds: string[];
    condition: string;
    created: Date;
    customFields: { [index: string]: string };
    dateCreated: Date;
    datePublished: Date;
    description: string;
    gender: string;
    googleCategory: string;
    gtin: string;
    imageUrl: string;
    inventoryLevel: number;
    name: string;
    ratingValue: number;
    reviewCount: number;
    supplierCost: number;
    tags1: string[];
    tags2: string[];
    tags3: string[];
    thumbUrl: string;
    unitPricingBaseMeasure: number;
    unitPricingMeasure: number;
    unitPricingUnit: string;
    updated: Date;
    url: string;
}

interface VariationWithRulesDTO extends AbTestVariationDTO {
    rules: TestPlacementRuleDTO[];
}

interface WebsiteOrder extends PublicJacksonBean {
    created_at: Date;
    external_order_ref: string;
    info: OrderCustomer;
    items: ConversionItem[];
    order_status: string;
    order_status_label: string;
    payment_provider: string;
}

type Method = "SPLIT_TEST" | "MVT";

type OnsiteFeature = "RECOMMENDATION" | "CONTENT_DELIVERY" | "POPUP" | "SPLIT_TESTING" | "SCHEDULING";

type PageType = "front" | "category" | "product" | "cart" | "search" | "notfound" | "order" | "other" | "checkout";

type RenderMode = "HTML" | "SIMPLE" | "JSON_170x170" | "JSON_100_X_100" | "JSON_90x70" | "JSON_50x50" | "JSON_30x30" | "JSON_100x140" | "JSON_200x200" | "JSON_400x400" | "JSON_750x750" | "JSON_10_MAX_SQUARE" | "JSON_200x200_SQUARE" | "JSON_400x400_SQUARE" | "JSON_750x750_SQUARE" | "JSON_ORIGINAL";

type TargetType = "RECOMMENDATION" | "ONSITE_CONTENT" | "AB_TEST" | "HIDE_CONTENT";

type UrlRulePredicate = "IS" | "IS_NOT" | "CONTAINS" | "DOES_NOT_CONTAIN" | "MATCHES_REGEXP_PATTERN";
