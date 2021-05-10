// Generated using typescript-generator version 2.27.744 on 2021-05-10 14:49:26.

export class AbTestPreviewSettingsBase<T> {
    id: TestId;
    method: Method;
    name: string;
    segment: string;
    variations: T[];
}

export class AbTestDraftPreviewSettingsDTO extends AbTestPreviewSettingsBase<AbTestVariationDTO> {
    variations: AbTestVariationDTO[];
}

export class AbTestPreviewSettingsDTO extends AbTestPreviewSettingsBase<AbTestVariationDTO> {
    variations: AbTestVariationDTO[];
}

export interface AbTestVariation {
    base: boolean;
    id: string;
    name: string;
}

export class AbTestVariationDTO implements AbTestVariation {
    base: boolean;
    id: string;
    name: string;
}

export class AbstractFacebookPixelEvent<D> {
    d: D;
    n: string;
}

export class NostoIdentifierObjectId<T> implements Comparable<T> {
    id: string;
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

export class ContentDebugDTO {
    divIds: string[];
    enabled: boolean;
    id: ContentId;
    name: string;
    rendered: boolean;
}

export class ContentId extends CampaignId<ContentId> {
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
    fs: string[];
    tp?: TestPreviewsDTO;
}

export class DebugToolbarDataDTO {
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
    segments: SegmentDebugDTO[];
    showImprovedCampaignOverlayData: boolean;
    showTestsTab: boolean;
}

export class DynamicPlacementDTO {
    cssSelector: string;
    enabled: boolean;
    filters: FilterRule[];
    id: string;
    mode: string;
    preserveClassAttribute: boolean;
}

export class Effect {
    delay_min: number;
    re_entry_tolerance: number;
    scroll_min: number;
}

export class EventRequestMessage extends PublicJacksonBean implements RawEvents {
    cart_cookie_hash: string;
    cart_product_ids: string[];
    cart_total_price?: number;
    cart_total_size: number;
    categories: string[];
    category_ids: string[];
    current_variant: string;
    custom_fields: { [index: string]: string[] };
    customer_reference: string;
    date: Date;
    debug?: DebugRequestParamsDTO;
    debug_code: string;
    elements: string[];
    events: string[][];
    mail_ref: string;
    mail_type: string;
    page_type: PageType;
    preview: boolean;
    recotrace: string;
    reference: string;
    referrer: string;
    render_mode?: RenderMode;
    segment_codes: string[];
    show_cart_popup_recommendations: boolean;
    sort_order: string;
    tags: string[];
    url: string;
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
    response_mode?: RenderMode;
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

export class FilterRule {
    field: string;
    negate: boolean;
    operator: FilterOperator;
    values: any[];
}

export class ForcedTestDTO {
    t: TestId;
    v: string;
}

export class GoogleAnalyticsData extends PublicJacksonBean {
    s: string[];
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
    partial_variants: { [index: string]: NostoVariant };
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
    available: boolean;
    discounted: boolean;
    list_price: number;
    price: number;
    price_currency_code: string;
    price_text: string;
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

export class PlacementDebugDTO {
    activeRule: SegmentRuleDebugDTO;
    divId: string;
    enabled: boolean;
    id: string;
    name: string;
    rules: PlacementRuleDTO[];
}

export interface PlacementRule<T> {
    feature: OnsiteFeature;
    segment: string;
    to: T;
}

export class PlacementRuleDTO {
    feature: OnsiteFeature;
    segment: string;
    to: CampaignId<any>;
}

export class PopupCampaignPreviewSettingsDTO {
    campaign_id: string;
    condition: ConditionDTO;
    enabled: boolean;
    popup_id: string;
    type: string;
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

export class ProductPushResponse extends PublicJacksonBean {
    messages: string[];
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
    available: boolean;
    brand: string;
    categories: string[];
    category: string[];
    category_id: string[];
    category_ids: string[];
    condition: string;
    custom_fields: { [index: string]: string };
    date_published: Date;
    description: string;
    discounted: boolean;
    gender: string;
    google_category: string;
    gtin: string;
    image_url: string;
    inventory_level: number;
    list_price: number;
    name: string;
    partial_variants: { [index: string]: NostoVariant };
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
    available: boolean;
    discounted: boolean;
    list_price: number;
    price: number;
    price_currency_code: string;
    price_text: string;
}

export interface RawEvents {
    events: string[][];
}

export class RecommendationDebugDTO {
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

export class RecommendationId extends CampaignId<RecommendationId> {
}

export class SegmentDebugDTO {
    active: boolean;
    forced: boolean;
    id: string;
    name: string;
}

export class SegmentInfoBean extends JacksonBean {
    id: string;
}

export class SegmentRuleDebugDTO {
    draft: TestDebugDTO;
    segment: string;
    test: TestDebugDTO;
    to: CampaignId<any>;
    type: TargetType;
}

export class SegmentsResponseBean extends PublicJacksonBean {
    active_segments: SegmentInfoBean[];
}

export interface Serializable {
}

export class ShopifyRef extends PublicJacksonBean {
    token: string;
}

export class TestDebugDTO {
    id: TestId;
    variation: string;
}

export class TestId extends CampaignId<TestId> {
}

export interface TestPlacementRule extends PlacementRule<any> {
    placement: string;
}

export class TestPlacementRuleDTO implements TestPlacementRule {
    feature: OnsiteFeature;
    placement: string;
    segment: string;
    to: CampaignId<any>;
}

export class TestPreviewsDTO {
    d?: ForcedTestDTO;
    t: ForcedTestDTO[];
    u?: UnsavedDraftPreviewSettingsDTO;
}

export class UnsavedDraftPreviewSettingsDTO extends AbTestPreviewSettingsBase<VariationWithRulesDTO> {
    variations: VariationWithRulesDTO[];
}

export interface Validated {
}

export class ValidationError extends PublicJacksonBean {
    key: string;
    message: string;
}

export class VariationWithRulesDTO extends AbTestVariationDTO {
    rules: TestPlacementRuleDTO[];
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

export const enum FilterOperator {
    INCLUDES = "INCLUDES",
    IS = "IS",
    CONTAINS = "CONTAINS",
    MATCHES_REGEXP_PATTERN = "MATCHES_REGEXP_PATTERN",
    AND = "AND",
    OR = "OR",
}

export const enum Method {
    SPLIT_TEST = "SPLIT_TEST",
    MVT = "MVT",
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

export const enum TargetType {
    RECOMMENDATION = "RECOMMENDATION",
    ONSITE_CONTENT = "ONSITE_CONTENT",
    AB_TEST = "AB_TEST",
    HIDE_CONTENT = "HIDE_CONTENT",
}
