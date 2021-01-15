// Generated using typescript-generator version 2.27.744 on 2021-01-15 08:54:39.

export class AbstractFacebookPixelEvent<D> {
    d: D;
    n: string;
}

export class NostoIdentifierObjectId<T> implements Comparable<T> {
    id: ObjectId;
}

export class CampaignId<T> extends NostoIdentifierObjectId<T> {
    feature: OnsiteFeature;
}

export class CartItem implements Serializable, CartItemFields {
    name: string;
    price_currency_code: string;
    product_id: string;
    quantity: number;
    sku_id: string;
    unit_price: number;
}

export interface CartItemFields {
    name: string;
    price_currency_code: string;
    product_id: string;
    quantity: number;
    sku_id: string;
    unit_price: number;
}

export class JacksonBean {
}

export class PublicJacksonBean extends JacksonBean {
}

export class ClientScriptSettingsDTO extends PublicJacksonBean {
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
    trackingTypes: string[];
    triggerAddToCartPopupWithCookie: boolean;
}

export interface Comparable<T> {
}

export class ConditionDTO {
    advanced: boolean;
    brands: string[];
    categories: string[];
    exc_brands: string[];
    exc_categories: string[];
    exc_locations: string[][];
    exc_page_types: PageType[];
    exc_referer_urls: string[];
    exc_tags: string[];
    exc_url_parameters: string[];
    exc_urls: string[];
    hide_on_desktop: boolean;
    hide_on_mobile: boolean;
    locations: string[][];
    max_cart_size: number;
    max_cart_value: number;
    max_page_views: number;
    min_cart_size: number;
    min_cart_value: number;
    min_page_views: number;
    page_types: PageType[];
    referer_urls: string[];
    tags: string[];
    treat_url_conditions_as_filters: boolean;
    url_parameters: string[];
    urls: string[];
}

export class ConversionItem extends PublicJacksonBean implements CartItemFields {
    name: string;
    price_currency_code: string;
    product_id: string;
    quantity: number;
    sku_id: string;
    unit_price: number;
}

export class CustomerAffinityResponse extends PublicJacksonBean {
    top_brands: CustomerAffinityResponseItem[];
    top_categories: CustomerAffinityResponseItem[];
}

export class CustomerAffinityResponseItem extends JacksonBean {
    name: string;
    score: number;
}

export class CustomerDTO extends PublicJacksonBean {
    first_name: string;
    id: string;
    last_name: string;
    marketing_permission: boolean;
    ref: string;
}

export interface CustomerData {
    customer_reference?: string;
    email?: string;
    first_name?: string;
    last_name?: string;
    newsletter?: boolean;
}

export class DebugRequestParamsDTO {
    at?: Date;
    ep: boolean;
    fs: SegmentId[];
    tp?: TestPreviewsDTO;
}

export class DynamicPlacementDTO {
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

export class Effect {
    delay_min: number;
    re_entry_tolerance: number;
    scroll_min: number;
}

export class EventRequestMessage extends PublicJacksonBean implements RawEvents {
    cart_cookie_hash: string;
    cart_product_ids: string[];
    cart_total_price: number;
    cart_total_size: number;
    categories: string[];
    category_ids: string[];
    current_variant: string;
    customer_reference: string;
    date: Date;
    debug?: DebugRequestParamsDTO;
    debug_code: string;
    elements: string[];
    events: RawEvent[];
    mail_ref: string;
    mail_type: string;
    page_type: PageType;
    preview: boolean;
    recotrace: string;
    reference: string;
    referrer: string;
    render_mode: RenderMode;
    segment_codes: string[];
    show_cart_popup_recommendations: boolean;
    sort_order: string;
    tags: string[];
    url: string;
}

export class EventRequestMessageV0 extends EventRequestMessage {
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
    dt: string;
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

export class EventRequestMessageV1 extends EventRequestMessage {
    cart: CartItem[];
    cart_hash: string;
    cart_popup: boolean;
    coupon_campaign: string;
    coupon_code: string;
    coupon_used: boolean;
    current_price_variant: string;
    current_variant_id: string;
    customer: PushedCustomer;
    debug_token: string;
    event_date: Date;
    experiments: Experiment[];
    ref: string;
    response_mode: RenderMode;
    restore_link: string;
    skipcache: boolean;
}

export class EventResponseMessage extends PublicJacksonBean {
    af: CustomerAffinityResponse;
    cdc: string;
    cmpid: string;
    cpr: string;
    cs: number;
    ct: number;
    customer: string;
    debug: any;
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

export class Experiment extends PublicJacksonBean {
    id: string;
    id_stamp: string;
    name: string;
    variation: string;
    variation_name: string;
}

export class FacebookData {
    a: string;
    e: AbstractFacebookPixelEvent<any>[];
    p: string;
    s: string[];
}

export class ForcedTestDTO {
    t: TestId;
    v: string;
}

export class GoogleAnalyticsData extends PublicJacksonBean {
    s: string[];
}

export interface Iterable<T> {
}

export interface NostoProduct extends NostoVariant {
    age_group: string;
    alternate_image_urls: string[];
    brand: string;
    categories: string[];
    category_ids: string[];
    condition: string;
    custom_fields: { [index: string]: string };
    date_published: Date;
    description: string;
    gender: string;
    google_category: string;
    gtin: string;
    image_url: string;
    inventory_level: number;
    name: string;
    partial_variants: { [index: string]: PartialVariant };
    product_id: string;
    rating_value: number;
    review_count: number;
    skus: NostoSku[];
    supplier_cost: number;
    tags1: string[];
    tags2: string[];
    tags3: string[];
    thumb_url: string;
    unit_pricing_base_measure: number;
    unit_pricing_measure: number;
    unit_pricing_unit: string;
    url: string;
    variant_id: string;
}

export interface NostoSku extends Validated {
    availability: string;
    custom_fields: { [index: string]: string };
    gtin: string;
    id: string;
    image_url: string;
    inventory_level: number;
    list_price: number;
    name: string;
    price: number;
    url: string;
}

export interface NostoVariant extends Validated {
    availability: string;
    list_price: number;
    price: number;
    price_currency_code: string;
    price_text: string;
}

export interface NostoVariation extends NostoVariant {
    variant_id: string;
}

export class ObjectId implements Comparable<ObjectId>, Serializable {
    date: Date;
    inc: number;
    machine: number;
    new: boolean;
    time: number;
    time_second: number;
    timestamp: number;
}

export class OrderCustomer extends PublicJacksonBean implements OrderInfoFields {
    country: string;
    country_code: string;
    customer_reference?: string;
    email?: string;
    first_name?: string;
    last_name?: string;
    newsletter?: boolean;
    order_number: string;
    phone: string;
    phone_number: string;
    post_code: string;
    type: string;
    zip_code: string;
}

export interface OrderInfoFields extends CustomerData {
    country_code: string;
    order_number: string;
    phone_number: string;
    type: string;
    zip_code: string;
}

export class PartialVariant implements NostoVariation, Serializable {
    availability: string;
    list_price: number;
    price: number;
    price_currency_code: string;
    price_text: string;
    product: Product;
    variant_id: string;
    variation_id: string;
}

export class PlacementId extends NostoIdentifierObjectId<PlacementId> {
}

export class PopupTriggerSettingsDTO {
    condition: ConditionDTO;
    effect: Effect;
    enabled: boolean;
    id: string;
    name: string;
    ordinal: number;
    popup_id: string;
}

export class Product implements Serializable, Iterable<PartialVariant>, NostoProduct {
    age_group: string;
    alternate_image_urls: string[];
    availability: string;
    brand: string;
    categories: string[];
    category: string[];
    category_ids: string[];
    condition: string;
    created: Date;
    custom_fields: { [index: string]: string };
    date_created: Date;
    date_published: Date;
    description: string;
    gender: string;
    google_category: string;
    gtin: string;
    image_url: string;
    inventory_level: number;
    list_price: number;
    name: string;
    partial_variants: { [index: string]: PartialVariant };
    price: number;
    price_currency_code: string;
    price_text: string;
    product: Product;
    product_id: string;
    rating_value: number;
    review_count: number;
    scores: ProductScores;
    skus: ProductSKU[];
    supplier_cost: number;
    tags1: string[];
    tags2: string[];
    tags3: string[];
    thumb_url: string;
    unit_pricing_base_measure: number;
    unit_pricing_measure: number;
    unit_pricing_unit: string;
    updated: Date;
    url: string;
    variant_id: string;
    variation_id: string;
    variations: { [index: string]: PartialVariant };
}

export class ProductPushResponse extends PublicJacksonBean {
    messages: string[];
}

export class ProductSKU implements NostoSku, Serializable {
    availability: string;
    custom_fields: { [index: string]: string };
    gtin: string;
    id: string;
    image_url: string;
    inventory_level: number;
    list_price: number;
    name: string;
    price: number;
    product: Product;
    url: string;
}

export class ProductScores {
}

export class PushedCustomer extends PublicJacksonBean {
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

export class PushedProduct extends PublicJacksonBean implements NostoProduct {
    age_group: string;
    alternate_image_urls: string[];
    availability: string;
    brand: string;
    categories: string[];
    category: string[];
    category_id: string[];
    category_ids: string[];
    condition: string;
    custom_fields: { [index: string]: string };
    date_published: Date;
    description: string;
    gender: string;
    google_category: string;
    gtin: string;
    image_url: string;
    inventory_level: number;
    list_price: number;
    name: string;
    partial_variants: { [index: string]: PartialVariant };
    price: number;
    price_currency_code: string;
    price_text: string;
    product_id: string;
    rating_value: number;
    review_count: number;
    skus: PushedProductSKU[];
    supplier_cost: number;
    tags1: string[];
    tags2: string[];
    tags3: string[];
    thumb_url: string;
    unit_pricing_base_measure: number;
    unit_pricing_measure: number;
    unit_pricing_unit: string;
    url: string;
    variant_id: string;
    variation_id: string;
    variations: { [index: string]: PushedVariation };
}

export class PushedProductSKU extends JacksonBean implements NostoSku {
    availability: string;
    custom_fields: { [index: string]: string };
    gtin: string;
    id: string;
    image_url: string;
    inventory_level: number;
    list_price: number;
    name: string;
    price: number;
    url: string;
}

export class PushedVariation extends PublicJacksonBean implements NostoVariant {
    availability: string;
    list_price: number;
    price: number;
    price_currency_code: string;
    price_text: string;
}

export class RawEvent extends PublicJacksonBean {
    ref: string;
    refSrc: string;
    target: string;
    type: string;
}

export interface RawEvents {
    events: RawEvent[];
}

export class SegmentId extends NostoIdentifierObjectId<SegmentId> {
}

export class SegmentInfoBean extends JacksonBean {
    id: string;
}

export class SegmentsResponseBean extends PublicJacksonBean {
    active_segments: SegmentInfoBean[];
}

export interface Serializable {
}

export class ShopifyRef extends PublicJacksonBean {
    token: string;
}

export class TestId extends CampaignId<TestId> {
}

export class TestPreviewsDTO {
    d?: ForcedTestDTO;
    t: ForcedTestDTO[];
    u?: any;
}

export class UrlRule {
    predicate: UrlRulePredicate;
    value: string;
}

export interface Validated {
}

export class ValidationError extends PublicJacksonBean {
    key: string;
    message: string;
}

export class Variant extends PartialVariant {
    age_group: string;
    alternate_image_urls: string[];
    brand: string;
    category: string[];
    category_ids: string[];
    condition: string;
    created: Date;
    custom_fields: { [index: string]: string };
    date_created: Date;
    date_published: Date;
    description: string;
    gender: string;
    google_category: string;
    gtin: string;
    image_url: string;
    inventory_level: number;
    name: string;
    rating_value: number;
    review_count: number;
    supplier_cost: number;
    tags1: string[];
    tags2: string[];
    tags3: string[];
    thumb_url: string;
    unit_pricing_base_measure: number;
    unit_pricing_measure: number;
    unit_pricing_unit: string;
    updated: Date;
    url: string;
}

export class WebsiteOrder extends PublicJacksonBean {
    created_at: Date;
    external_order_ref: string;
    info: OrderCustomer;
    items: ConversionItem[];
    order_status: string;
    order_status_label: string;
    payment_provider: string;
}

export const enum OnsiteFeature {
    RECOMMENDATION = "RECOMMENDATION",
    CONTENT_DELIVERY = "CONTENT_DELIVERY",
    POPUP = "POPUP",
    SPLIT_TESTING = "SPLIT_TESTING",
    SCHEDULING = "SCHEDULING",
}

export const enum PageType {
    FRONT = "front",
    CATEGORY = "category",
    PRODUCT = "product",
    CART = "cart",
    SEARCH = "search",
    NOTFOUND = "notfound",
    ORDER = "order",
    OTHER = "other",
    CHECKOUT = "checkout",
}

export const enum RenderMode {
    HTML = "HTML",
    SIMPLE = "SIMPLE",
    JSON_170x170 = "JSON_170x170",
    JSON_100_X_100 = "JSON_100_X_100",
    JSON_90x70 = "JSON_90x70",
    JSON_50x50 = "JSON_50x50",
    JSON_30x30 = "JSON_30x30",
    JSON_100x140 = "JSON_100x140",
    JSON_200x200 = "JSON_200x200",
    JSON_400x400 = "JSON_400x400",
    JSON_750x750 = "JSON_750x750",
    JSON_10_MAX_SQUARE = "JSON_10_MAX_SQUARE",
    JSON_200x200_SQUARE = "JSON_200x200_SQUARE",
    JSON_400x400_SQUARE = "JSON_400x400_SQUARE",
    JSON_750x750_SQUARE = "JSON_750x750_SQUARE",
    JSON_ORIGINAL = "JSON_ORIGINAL",
}

export const enum UrlRulePredicate {
    IS = "IS",
    IS_NOT = "IS_NOT",
    CONTAINS = "CONTAINS",
    DOES_NOT_CONTAIN = "DOES_NOT_CONTAIN",
    MATCHES_REGEXP_PATTERN = "MATCHES_REGEXP_PATTERN",
}
