export interface Schema {
    type:       Type;
    properties: SchemaProperties;
}

export interface SchemaProperties {
    referrer?:                        AgeGroup;
    url?:                             AgeGroup;
    elements?:                        AlternateImageUrls;
    debug?:                           Debug;
    segment_codes?:                   AlternateImageUrls;
    show_cart_popup_recommendations?: AllowCaching;
    page_type?:                       AgeGroup;
    sort_order?:                      AgeGroup;
    categories?:                      AlternateImageUrls;
    category_ids?:                    AlternateImageUrls;
    tags?:                            AlternateImageUrls;
    mail_ref?:                        AgeGroup;
    mail_type?:                       AgeGroup;
    reference?:                       AgeGroup;
    external_visit_reference?:        AgeGroup;
    debug_code?:                      AgeGroup;
    recotrace?:                       AgeGroup;
    render_mode?:                     Channel;
    preview?:                         AllowCaching;
    channel?:                         Channel;
    events?:                          AgeGroup;
    order_confirmation_page?:         AllowCaching;
    date?:                            AgeGroup;
    cart_cookie_hash?:                AgeGroup;
    allow_caching?:                   AllowCaching;
    cart_product_ids?:                AlternateImageUrls;
    cart_product_skus?:               AlternateImageUrls;
    cart_total_size?:                 AgeGroup;
    cart_total_price?:                AgeGroup;
    customer_reference?:              AgeGroup;
    current_variant?:                 AgeGroup;
    cart?:                            AgeGroup;
    customer?:                        Customer;
    experiments?:                     AgeGroup;
    coupon_campaign?:                 AgeGroup;
    coupon_code?:                     AgeGroup;
    coupon_used?:                     AllowCaching;
    restore_link?:                    AgeGroup;
    customer_cookie_hash?:            AgeGroup;
    visit?:                           AgeGroup;
    errors?:                          AlternateImageUrls;
    js?:                              AgeGroup;
    recommendations?:                 AgeGroup;
    nc?:                              AllowCaching;
    hiic?:                            AllowCaching;
    he?:                              AllowCaching;
    ct?:                              AgeGroup;
    cs?:                              AgeGroup;
    cdc?:                             AgeGroup;
    pv?:                              AgeGroup;
    gl?:                              AlternateImageUrls;
    cpr?:                             AgeGroup;
    ed?:                              AgeGroup;
    af?:                              AF;
    cmpid?:                           AgeGroup;
    fb?:                              Fb;
    ga?:                              Ga;
    date_published?:                  AgeGroup;
    product_id?:                      AgeGroup;
    name?:                            AgeGroup;
    image_url?:                       AgeGroup;
    thumb_url?:                       AgeGroup;
    supplier_cost?:                   AgeGroup;
    inventory_level?:                 AgeGroup;
    review_count?:                    AgeGroup;
    rating_value?:                    AgeGroup;
    alternate_image_urls?:            AlternateImageUrls;
    condition?:                       AgeGroup;
    gender?:                          AgeGroup;
    age_group?:                       AgeGroup;
    gtin?:                            AgeGroup;
    google_category?:                 AgeGroup;
    unit_pricing_measure?:            AgeGroup;
    unit_pricing_base_measure?:       AgeGroup;
    unit_pricing_unit?:               AgeGroup;
    price?:                           AgeGroup;
    price_currency_code?:             AgeGroup;
    availability?:                    AgeGroup;
    category?:                        AlternateImageUrls;
    list_price?:                      AgeGroup;
    brand?:                           AgeGroup;
    tags1?:                           AlternateImageUrls;
    tags2?:                           AlternateImageUrls;
    tags3?:                           AlternateImageUrls;
    custom_fields?:                   AgeGroup;
    variation_id?:                    AgeGroup;
    skus?:                            AgeGroup;
    description?:                     AgeGroup;
    partial_variants?:                AgeGroup;
    external_order_ref?:              AgeGroup;
    payment_provider?:                AgeGroup;
    created_at?:                      AgeGroup;
    order_status_code?:               AgeGroup;
    order_status_description?:        AgeGroup;
    purchased_items?:                 AgeGroup;
}

export interface AF {
    type:       Type;
    properties: AFProperties;
}

export interface AFProperties {
    top_brands:     AgeGroup;
    top_categories: AgeGroup;
}

export interface AgeGroup {
    type: Type;
}

export enum Type {
    Array = "array",
    Boolean = "boolean",
    Integer = "integer",
    Number = "number",
    Object = "object",
    String = "string",
}

export interface AllowCaching {
    type:     Type;
    required: boolean;
}

export interface AlternateImageUrls {
    type:  Type;
    items: AgeGroup;
}

export interface Channel {
    type: Type;
    enum: string[];
}

export interface Customer {
    type:        Type;
    properties?: CustomerProperties;
}

export interface CustomerProperties {
    customer_reference: AgeGroup;
    email:              AgeGroup;
    first_name:         AgeGroup;
    last_name:          AgeGroup;
    order_number:       AgeGroup;
    newsletter:         AgeGroup;
    source:             AgeGroup;
    source_id:          AgeGroup;
    type:               AgeGroup;
}

export interface Debug {
    type:       Type;
    properties: DebugProperties;
}

export interface DebugProperties {
    test_previews?:                   AgeGroup;
    forced_segments?:                 AgeGroup;
    serving_time?:                    AgeGroup;
    segments?:                        AgeGroup;
    placements?:                      AgeGroup;
    recommendationCampaigns?:         AgeGroup;
    contentCampaigns?:                AgeGroup;
    runningTests?:                    AgeGroup;
    draftTests?:                      AgeGroup;
    popupPreviewSettings?:            AgeGroup;
    loggedIn?:                        AllowCaching;
    dev?:                             AllowCaching;
    showTestsTab?:                    AllowCaching;
    showImprovedCampaignOverlayData?: AllowCaching;
    richSegmentsTab?:                 AllowCaching;
    placementsTab?:                   AllowCaching;
    schedulesTab?:                    AllowCaching;
}

export interface Fb {
    type:       Type;
    properties: FbProperties;
}

export interface FbProperties {
    p: AgeGroup;
    a: AgeGroup;
    s: AlternateImageUrls;
    e: AgeGroup;
}

export interface Ga {
    type:       Type;
    properties: GaProperties;
}

export interface GaProperties {
    s: AlternateImageUrls;
}
