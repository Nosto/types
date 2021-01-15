// Generated using typescript-generator version 2.27.744 on 2021-01-14 22:43:01.

export class AbstractFacebookPixelEvent<D> {
    d: D;
    n: string;

    constructor(data: AbstractFacebookPixelEvent<D>) {
        this.d = data.d;
        this.n = data.n;
    }
}

export class NostoIdentifierObjectId<T> implements Comparable<T> {
    id: ObjectId;

    constructor(data: NostoIdentifierObjectId<T>) {
        this.id = data.id;
    }
}

export class CampaignId<T> extends NostoIdentifierObjectId<T> {
    feature: OnsiteFeature;

    constructor(data: CampaignId<T>) {
        super(data);
        this.feature = data.feature;
    }
}

export class CartItem implements Serializable, CartItemFields {
    name: string;
    price_currency_code: string;
    product_id: string;
    quantity: number;
    sku_id: string;
    unit_price: number;

    constructor(data: CartItem) {
        this.name = data.name;
        this.price_currency_code = data.price_currency_code;
        this.product_id = data.product_id;
        this.quantity = data.quantity;
        this.sku_id = data.sku_id;
        this.unit_price = data.unit_price;
    }
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

    constructor(data: JacksonBean) {
    }
}

export class PublicJacksonBean extends JacksonBean {

    constructor(data: PublicJacksonBean) {
        super(data);
    }
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

    constructor(data: ClientScriptSettingsDTO) {
        super(data);
        this.account = data.account;
        this.addToCartPopup = data.addToCartPopup;
        this.anyDomain = data.anyDomain;
        this.browserQueueActive = data.browserQueueActive;
        this.cmpMode = data.cmpMode;
        this.collectEmailFromURL = data.collectEmailFromURL;
        this.cookieTime = data.cookieTime;
        this.debugRedirectUrl = data.debugRedirectUrl;
        this.defaultCurrencyCode = data.defaultCurrencyCode;
        this.defaultVariantId = data.defaultVariantId;
        this.discountPopupTriggers = data.discountPopupTriggers;
        this.discountPopupVisible = data.discountPopupVisible;
        this.emailAddressUrlParamName = data.emailAddressUrlParamName;
        this.exchangeRates = data.exchangeRates;
        this.extraHosts = data.extraHosts;
        this.fullTaggingRequired = data.fullTaggingRequired;
        this.jsErrorUrl = data.jsErrorUrl;
        this.live = data.live;
        this.nostoRefParam = data.nostoRefParam;
        this.pageTypeFiltersForUntaggedPages = data.pageTypeFiltersForUntaggedPages;
        this.placements = data.placements;
        this.popupRibbonUrlFilter = data.popupRibbonUrlFilter;
        this.recoveryPopupEnabled = data.recoveryPopupEnabled;
        this.searchQueryParam = data.searchQueryParam;
        this.secureCookie = data.secureCookie;
        this.segmentUrlParameters = data.segmentUrlParameters;
        this.sendTaggingOnlyIfNeeded = data.sendTaggingOnlyIfNeeded;
        this.sentryDsn = data.sentryDsn;
        this.server = data.server;
        this.shopifyCmpRedirect = data.shopifyCmpRedirect;
        this.site = data.site;
        this.subDomain = data.subDomain;
        this.trackingTypes = data.trackingTypes;
        this.triggerAddToCartPopupWithCookie = data.triggerAddToCartPopupWithCookie;
    }
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

    constructor(data: ConditionDTO) {
        this.advanced = data.advanced;
        this.brands = data.brands;
        this.categories = data.categories;
        this.exc_brands = data.exc_brands;
        this.exc_categories = data.exc_categories;
        this.exc_locations = data.exc_locations;
        this.exc_page_types = data.exc_page_types;
        this.exc_referer_urls = data.exc_referer_urls;
        this.exc_tags = data.exc_tags;
        this.exc_url_parameters = data.exc_url_parameters;
        this.exc_urls = data.exc_urls;
        this.hide_on_desktop = data.hide_on_desktop;
        this.hide_on_mobile = data.hide_on_mobile;
        this.locations = data.locations;
        this.max_cart_size = data.max_cart_size;
        this.max_cart_value = data.max_cart_value;
        this.max_page_views = data.max_page_views;
        this.min_cart_size = data.min_cart_size;
        this.min_cart_value = data.min_cart_value;
        this.min_page_views = data.min_page_views;
        this.page_types = data.page_types;
        this.referer_urls = data.referer_urls;
        this.tags = data.tags;
        this.treat_url_conditions_as_filters = data.treat_url_conditions_as_filters;
        this.url_parameters = data.url_parameters;
        this.urls = data.urls;
    }
}

export class ConversionItem extends PublicJacksonBean implements CartItemFields {
    name: string;
    price_currency_code: string;
    product_id: string;
    quantity: number;
    sku_id: string;
    unit_price: number;

    constructor(data: ConversionItem) {
        super(data);
        this.name = data.name;
        this.price_currency_code = data.price_currency_code;
        this.product_id = data.product_id;
        this.quantity = data.quantity;
        this.sku_id = data.sku_id;
        this.unit_price = data.unit_price;
    }
}

export class CustomerAffinityResponse extends PublicJacksonBean {
    top_brands: CustomerAffinityResponseItem[];
    top_categories: CustomerAffinityResponseItem[];

    constructor(data: CustomerAffinityResponse) {
        super(data);
        this.top_brands = data.top_brands;
        this.top_categories = data.top_categories;
    }
}

export class CustomerAffinityResponseItem extends JacksonBean {
    name: string;
    score: number;

    constructor(data: CustomerAffinityResponseItem) {
        super(data);
        this.name = data.name;
        this.score = data.score;
    }
}

export class CustomerDTO extends PublicJacksonBean {
    first_name: string;
    id: string;
    last_name: string;
    marketing_permission: boolean;
    ref: string;

    constructor(data: CustomerDTO) {
        super(data);
        this.first_name = data.first_name;
        this.id = data.id;
        this.last_name = data.last_name;
        this.marketing_permission = data.marketing_permission;
        this.ref = data.ref;
    }
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

    constructor(data: DebugRequestParamsDTO) {
        this.at = data.at;
        this.ep = data.ep;
        this.fs = data.fs;
        this.tp = data.tp;
    }
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

    constructor(data: DynamicPlacementDTO) {
        this.cssSelector = data.cssSelector;
        this.enabled = data.enabled;
        this.excludedPageIds = data.excludedPageIds;
        this.id = data.id;
        this.includedPageIds = data.includedPageIds;
        this.mode = data.mode;
        this.preserveClassAttribute = data.preserveClassAttribute;
        this.urlRules = data.urlRules;
        this.urls = data.urls;
    }
}

export class Effect {
    delay_min: number;
    re_entry_tolerance: number;
    scroll_min: number;

    constructor(data: Effect) {
        this.delay_min = data.delay_min;
        this.re_entry_tolerance = data.re_entry_tolerance;
        this.scroll_min = data.scroll_min;
    }
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

    constructor(data: EventRequestMessage) {
        super(data);
        this.cart_cookie_hash = data.cart_cookie_hash;
        this.cart_product_ids = data.cart_product_ids;
        this.cart_total_price = data.cart_total_price;
        this.cart_total_size = data.cart_total_size;
        this.categories = data.categories;
        this.category_ids = data.category_ids;
        this.current_variant = data.current_variant;
        this.customer_reference = data.customer_reference;
        this.date = data.date;
        this.debug = data.debug;
        this.debug_code = data.debug_code;
        this.elements = data.elements;
        this.events = data.events;
        this.mail_ref = data.mail_ref;
        this.mail_type = data.mail_type;
        this.page_type = data.page_type;
        this.preview = data.preview;
        this.recotrace = data.recotrace;
        this.reference = data.reference;
        this.referrer = data.referrer;
        this.render_mode = data.render_mode;
        this.segment_codes = data.segment_codes;
        this.show_cart_popup_recommendations = data.show_cart_popup_recommendations;
        this.sort_order = data.sort_order;
        this.tags = data.tags;
        this.url = data.url;
    }
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

    constructor(data: EventRequestMessageV0) {
        super(data);
        this.catids = data.catids;
        this.cats = data.cats;
        this.ch = data.ch;
        this.cids = data.cids;
        this.cpr = data.cpr;
        this.cpv = data.cpv;
        this.cr = data.cr;
        this.cs = data.cs;
        this.ct = data.ct;
        this.cv = data.cv;
        this.dt = data.dt;
        this.ed = data.ed;
        this.el = data.el;
        this.ev = data.ev;
        this.m = data.m;
        this.mt = data.mt;
        this.ptp = data.ptp;
        this.ref = data.ref;
        this.rm = data.rm;
        this.rt = data.rt;
        this.sc = data.sc;
        this.skipcache = data.skipcache;
        this.skus = data.skus;
        this.so = data.so;
    }
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

    constructor(data: EventRequestMessageV1) {
        super(data);
        this.cart = data.cart;
        this.cart_hash = data.cart_hash;
        this.cart_popup = data.cart_popup;
        this.coupon_campaign = data.coupon_campaign;
        this.coupon_code = data.coupon_code;
        this.coupon_used = data.coupon_used;
        this.current_price_variant = data.current_price_variant;
        this.current_variant_id = data.current_variant_id;
        this.customer = data.customer;
        this.debug_token = data.debug_token;
        this.event_date = data.event_date;
        this.experiments = data.experiments;
        this.ref = data.ref;
        this.response_mode = data.response_mode;
        this.restore_link = data.restore_link;
        this.skipcache = data.skipcache;
    }
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

    constructor(data: EventResponseMessage) {
        super(data);
        this.af = data.af;
        this.cdc = data.cdc;
        this.cmpid = data.cmpid;
        this.cpr = data.cpr;
        this.cs = data.cs;
        this.ct = data.ct;
        this.customer = data.customer;
        this.debug = data.debug;
        this.ed = data.ed;
        this.errors = data.errors;
        this.fb = data.fb;
        this.ga = data.ga;
        this.gl = data.gl;
        this.he = data.he;
        this.hiic = data.hiic;
        this.js = data.js;
        this.nc = data.nc;
        this.pv = data.pv;
        this.recommendations = data.recommendations;
        this.se = data.se;
        this.visit = data.visit;
    }
}

export class Experiment extends PublicJacksonBean {
    id: string;
    id_stamp: string;
    name: string;
    variation: string;
    variation_name: string;

    constructor(data: Experiment) {
        super(data);
        this.id = data.id;
        this.id_stamp = data.id_stamp;
        this.name = data.name;
        this.variation = data.variation;
        this.variation_name = data.variation_name;
    }
}

export class FacebookData {
    a: string;
    e: AbstractFacebookPixelEvent<any>[];
    p: string;
    s: string[];

    constructor(data: FacebookData) {
        this.a = data.a;
        this.e = data.e;
        this.p = data.p;
        this.s = data.s;
    }
}

export class ForcedTestDTO {
    t: TestId;
    v: string;

    constructor(data: ForcedTestDTO) {
        this.t = data.t;
        this.v = data.v;
    }
}

export class GoogleAnalyticsData extends PublicJacksonBean {
    s: string[];

    constructor(data: GoogleAnalyticsData) {
        super(data);
        this.s = data.s;
    }
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

    constructor(data: ObjectId) {
        this.date = data.date;
        this.inc = data.inc;
        this.machine = data.machine;
        this.new = data.new;
        this.time = data.time;
        this.time_second = data.time_second;
        this.timestamp = data.timestamp;
    }
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

    constructor(data: OrderCustomer) {
        super(data);
        this.country = data.country;
        this.country_code = data.country_code;
        this.customer_reference = data.customer_reference;
        this.email = data.email;
        this.first_name = data.first_name;
        this.last_name = data.last_name;
        this.newsletter = data.newsletter;
        this.order_number = data.order_number;
        this.phone = data.phone;
        this.phone_number = data.phone_number;
        this.post_code = data.post_code;
        this.type = data.type;
        this.zip_code = data.zip_code;
    }
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

    constructor(data: PartialVariant) {
        this.availability = data.availability;
        this.list_price = data.list_price;
        this.price = data.price;
        this.price_currency_code = data.price_currency_code;
        this.price_text = data.price_text;
        this.product = data.product;
        this.variant_id = data.variant_id;
        this.variation_id = data.variation_id;
    }
}

export class PlacementId extends NostoIdentifierObjectId<PlacementId> {

    constructor(data: PlacementId) {
        super(data);
    }
}

export class PopupTriggerSettingsDTO {
    condition: ConditionDTO;
    effect: Effect;
    enabled: boolean;
    id: string;
    name: string;
    ordinal: number;
    popup_id: string;

    constructor(data: PopupTriggerSettingsDTO) {
        this.condition = data.condition;
        this.effect = data.effect;
        this.enabled = data.enabled;
        this.id = data.id;
        this.name = data.name;
        this.ordinal = data.ordinal;
        this.popup_id = data.popup_id;
    }
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

    constructor(data: Product) {
        this.age_group = data.age_group;
        this.alternate_image_urls = data.alternate_image_urls;
        this.availability = data.availability;
        this.brand = data.brand;
        this.categories = data.categories;
        this.category = data.category;
        this.category_ids = data.category_ids;
        this.condition = data.condition;
        this.created = data.created;
        this.custom_fields = data.custom_fields;
        this.date_created = data.date_created;
        this.date_published = data.date_published;
        this.description = data.description;
        this.gender = data.gender;
        this.google_category = data.google_category;
        this.gtin = data.gtin;
        this.image_url = data.image_url;
        this.inventory_level = data.inventory_level;
        this.list_price = data.list_price;
        this.name = data.name;
        this.partial_variants = data.partial_variants;
        this.price = data.price;
        this.price_currency_code = data.price_currency_code;
        this.price_text = data.price_text;
        this.product = data.product;
        this.product_id = data.product_id;
        this.rating_value = data.rating_value;
        this.review_count = data.review_count;
        this.scores = data.scores;
        this.skus = data.skus;
        this.supplier_cost = data.supplier_cost;
        this.tags1 = data.tags1;
        this.tags2 = data.tags2;
        this.tags3 = data.tags3;
        this.thumb_url = data.thumb_url;
        this.unit_pricing_base_measure = data.unit_pricing_base_measure;
        this.unit_pricing_measure = data.unit_pricing_measure;
        this.unit_pricing_unit = data.unit_pricing_unit;
        this.updated = data.updated;
        this.url = data.url;
        this.variant_id = data.variant_id;
        this.variation_id = data.variation_id;
        this.variations = data.variations;
    }
}

export class ProductPushResponse extends PublicJacksonBean {
    messages: string[];

    constructor(data: ProductPushResponse) {
        super(data);
        this.messages = data.messages;
    }
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

    constructor(data: ProductSKU) {
        this.availability = data.availability;
        this.custom_fields = data.custom_fields;
        this.gtin = data.gtin;
        this.id = data.id;
        this.image_url = data.image_url;
        this.inventory_level = data.inventory_level;
        this.list_price = data.list_price;
        this.name = data.name;
        this.price = data.price;
        this.product = data.product;
        this.url = data.url;
    }
}

export class ProductScores {

    constructor(data: ProductScores) {
    }
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

    constructor(data: PushedCustomer) {
        super(data);
        this.customer_reference = data.customer_reference;
        this.email = data.email;
        this.first_name = data.first_name;
        this.hcid = data.hcid;
        this.last_name = data.last_name;
        this.newsletter = data.newsletter;
        this.order_number = data.order_number;
        this.source = data.source;
        this.source_id = data.source_id;
        this.type = data.type;
    }
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

    constructor(data: PushedProduct) {
        super(data);
        this.age_group = data.age_group;
        this.alternate_image_urls = data.alternate_image_urls;
        this.availability = data.availability;
        this.brand = data.brand;
        this.categories = data.categories;
        this.category = data.category;
        this.category_id = data.category_id;
        this.category_ids = data.category_ids;
        this.condition = data.condition;
        this.custom_fields = data.custom_fields;
        this.date_published = data.date_published;
        this.description = data.description;
        this.gender = data.gender;
        this.google_category = data.google_category;
        this.gtin = data.gtin;
        this.image_url = data.image_url;
        this.inventory_level = data.inventory_level;
        this.list_price = data.list_price;
        this.name = data.name;
        this.partial_variants = data.partial_variants;
        this.price = data.price;
        this.price_currency_code = data.price_currency_code;
        this.price_text = data.price_text;
        this.product_id = data.product_id;
        this.rating_value = data.rating_value;
        this.review_count = data.review_count;
        this.skus = data.skus;
        this.supplier_cost = data.supplier_cost;
        this.tags1 = data.tags1;
        this.tags2 = data.tags2;
        this.tags3 = data.tags3;
        this.thumb_url = data.thumb_url;
        this.unit_pricing_base_measure = data.unit_pricing_base_measure;
        this.unit_pricing_measure = data.unit_pricing_measure;
        this.unit_pricing_unit = data.unit_pricing_unit;
        this.url = data.url;
        this.variant_id = data.variant_id;
        this.variation_id = data.variation_id;
        this.variations = data.variations;
    }
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

    constructor(data: PushedProductSKU) {
        super(data);
        this.availability = data.availability;
        this.custom_fields = data.custom_fields;
        this.gtin = data.gtin;
        this.id = data.id;
        this.image_url = data.image_url;
        this.inventory_level = data.inventory_level;
        this.list_price = data.list_price;
        this.name = data.name;
        this.price = data.price;
        this.url = data.url;
    }
}

export class PushedVariation extends PublicJacksonBean implements NostoVariant {
    availability: string;
    list_price: number;
    price: number;
    price_currency_code: string;
    price_text: string;

    constructor(data: PushedVariation) {
        super(data);
        this.availability = data.availability;
        this.list_price = data.list_price;
        this.price = data.price;
        this.price_currency_code = data.price_currency_code;
        this.price_text = data.price_text;
    }
}

export class RawEvent extends PublicJacksonBean {
    ref: string;
    refSrc: string;
    target: string;
    type: string;

    constructor(data: RawEvent) {
        super(data);
        this.ref = data.ref;
        this.refSrc = data.refSrc;
        this.target = data.target;
        this.type = data.type;
    }
}

export interface RawEvents {
    events: RawEvent[];
}

export class SegmentId extends NostoIdentifierObjectId<SegmentId> {

    constructor(data: SegmentId) {
        super(data);
    }
}

export class SegmentInfoBean extends JacksonBean {
    id: string;

    constructor(data: SegmentInfoBean) {
        super(data);
        this.id = data.id;
    }
}

export class SegmentsResponseBean extends PublicJacksonBean {
    active_segments: SegmentInfoBean[];

    constructor(data: SegmentsResponseBean) {
        super(data);
        this.active_segments = data.active_segments;
    }
}

export interface Serializable {
}

export class ShopifyRef extends PublicJacksonBean {
    token: string;

    constructor(data: ShopifyRef) {
        super(data);
        this.token = data.token;
    }
}

export class TestId extends CampaignId<TestId> {

    constructor(data: TestId) {
        super(data);
    }
}

export class TestPreviewsDTO {
    d?: ForcedTestDTO;
    t: ForcedTestDTO[];
    u?: any;

    constructor(data: TestPreviewsDTO) {
        this.d = data.d;
        this.t = data.t;
        this.u = data.u;
    }
}

export class UrlRule {
    predicate: UrlRulePredicate;
    value: string;

    constructor(data: UrlRule) {
        this.predicate = data.predicate;
        this.value = data.value;
    }
}

export interface Validated {
}

export class ValidationError extends PublicJacksonBean {
    key: string;
    message: string;

    constructor(data: ValidationError) {
        super(data);
        this.key = data.key;
        this.message = data.message;
    }
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

    constructor(data: Variant) {
        super(data);
        this.age_group = data.age_group;
        this.alternate_image_urls = data.alternate_image_urls;
        this.brand = data.brand;
        this.category = data.category;
        this.category_ids = data.category_ids;
        this.condition = data.condition;
        this.created = data.created;
        this.custom_fields = data.custom_fields;
        this.date_created = data.date_created;
        this.date_published = data.date_published;
        this.description = data.description;
        this.gender = data.gender;
        this.google_category = data.google_category;
        this.gtin = data.gtin;
        this.image_url = data.image_url;
        this.inventory_level = data.inventory_level;
        this.name = data.name;
        this.rating_value = data.rating_value;
        this.review_count = data.review_count;
        this.supplier_cost = data.supplier_cost;
        this.tags1 = data.tags1;
        this.tags2 = data.tags2;
        this.tags3 = data.tags3;
        this.thumb_url = data.thumb_url;
        this.unit_pricing_base_measure = data.unit_pricing_base_measure;
        this.unit_pricing_measure = data.unit_pricing_measure;
        this.unit_pricing_unit = data.unit_pricing_unit;
        this.updated = data.updated;
        this.url = data.url;
    }
}

export class WebsiteOrder extends PublicJacksonBean {
    created_at: Date;
    external_order_ref: string;
    info: OrderCustomer;
    items: ConversionItem[];
    order_status: string;
    order_status_label: string;
    payment_provider: string;

    constructor(data: WebsiteOrder) {
        super(data);
        this.created_at = data.created_at;
        this.external_order_ref = data.external_order_ref;
        this.info = data.info;
        this.items = data.items;
        this.order_status = data.order_status;
        this.order_status_label = data.order_status_label;
        this.payment_provider = data.payment_provider;
    }
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
