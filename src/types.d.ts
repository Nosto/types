export interface Res {
    type:       string;
    id:         string;
    properties: ResProperties;
}

export interface ResProperties {
    referrer?:                        AgeGroup;
    url?:                             AgeGroup;
    elements?:                        Elements;
    debug?:                           Debug;
    segment_codes?:                   SegmentCodes;
    show_cart_popup_recommendations?: AgeGroup;
    page_type?:                       PageType;
    sort_order?:                      AgeGroup;
    categories?:                      PurpleCategories;
    category_ids?:                    CategoryIDS;
    tags?:                            FluffyTags;
    mail_ref?:                        AgeGroup;
    mail_type?:                       AgeGroup;
    reference?:                       AgeGroup;
    external_visit_reference?:        AgeGroup;
    debug_code?:                      AgeGroup;
    recotrace?:                       AgeGroup;
    render_mode?:                     RenderMode;
    preview?:                         AgeGroup;
    channel?:                         Channel;
    events?:                          Events;
    order_confirmation_page?:         AgeGroup;
    date?:                            DateClass;
    cart_cookie_hash?:                AgeGroup;
    current_variant?:                 AgeGroup;
    customer_reference?:              AgeGroup;
    allow_caching?:                   AgeGroup;
    cart_product_ids?:                CartProductIDS;
    cart_product_skus?:               CartProductSkus;
    cart_total_size?:                 AgeGroup;
    cart_total_price?:                AgeGroup;
    cart?:                            Cart;
    customer?:                        Customer;
    experiments?:                     Experiments;
    coupon_campaign?:                 AgeGroup;
    coupon_code?:                     AgeGroup;
    coupon_used?:                     AgeGroup;
    restore_link?:                    AgeGroup;
    customer_cookie_hash?:            AgeGroup;
    visit?:                           AgeGroup;
    errors?:                          Errors;
    js?:                              AgeGroup;
    recommendations?:                 Recommendations;
    nc?:                              AgeGroup;
    hiic?:                            AgeGroup;
    he?:                              AgeGroup;
    ct?:                              AgeGroup;
    cs?:                              AgeGroup;
    cdc?:                             AgeGroup;
    pv?:                              AgeGroup;
    gl?:                              Gl;
    cpr?:                             AgeGroup;
    ed?:                              DateClass;
    af?:                              AF;
    cmpid?:                           AgeGroup;
    fb?:                              Fb;
    ga?:                              Ga;
    date_published?:                  DateClass;
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
    category?:                        Category;
    list_price?:                      AgeGroup;
    brand?:                           AgeGroup;
    tags1?:                           Tags1;
    tags2?:                           Tags2;
    tags3?:                           Tags3;
    custom_fields?:                   PurpleCustomFields;
    variation_id?:                    AgeGroup;
    skus?:                            Skus;
    description?:                     AgeGroup;
    partial_variants?:                PartialVariants;
    external_order_ref?:              AgeGroup;
    payment_provider?:                AgeGroup;
    created_at?:                      CreatedAt;
    order_status_code?:               AgeGroup;
    order_status_description?:        AgeGroup;
    purchased_items?:                 PurchasedItems;
}

export interface AF {
    type:       string;
    id:         string;
    properties: AFProperties;
}

export interface AFProperties {
    top_brands:     TopBrands;
    top_categories: TopCategories;
}

export interface TopBrands {
    type:                  string;
    additional_properties: AgeGroup;
}

export interface AgeGroup {
    type: string;
}

export interface TopCategories {
    type:                  string;
    additional_properties: AgeGroup;
}

export interface AlternateImageUrls {
    type:  string;
    items: AgeGroup;
}

export interface Cart {
    type:  string;
    items: CartItems;
}

export interface CartItems {
    type:       string;
    id:         string;
    properties: PurpleProperties;
}

export interface PurpleProperties {
    product_id:          AgeGroup;
    sku_id:              AgeGroup;
    quantity:            AgeGroup;
    name:                AgeGroup;
    unit_price:          AgeGroup;
    price_currency_code: AgeGroup;
}

export interface CartProductIDS {
    type:  string;
    items: AgeGroup;
}

export interface CartProductSkus {
    type:  string;
    items: AgeGroup;
}

export interface PurpleCategories {
    type:  string;
    items: AgeGroup;
}

export interface Category {
    type:  string;
    items: AgeGroup;
}

export interface CategoryIDS {
    type:  string;
    items: AgeGroup;
}

export interface Channel {
    type: string;
    enum: string[];
}

export interface CreatedAt {
    type:  string;
    items: AgeGroup;
}

export interface PurpleCustomFields {
    type:                  string;
    additional_properties: AgeGroup;
}

export interface Customer {
    type:        string;
    id?:         string;
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

export interface DateClass {
    type:   string;
    format: string;
}

export interface Debug {
    type:       string;
    id:         string;
    properties: DebugProperties;
}

export interface DebugProperties {
    test_previews?:                   TestPreviews;
    forced_segments?:                 ForcedSegments;
    serving_time?:                    AgeGroup;
    segments?:                        Segments;
    placements?:                      Placements;
    recommendationCampaigns?:         RecommendationCampaigns;
    contentCampaigns?:                ContentCampaigns;
    runningTests?:                    RunningTests;
    draftTests?:                      DraftTests;
    popupPreviewSettings?:            PopupPreviewSettings;
    loggedIn?:                        AgeGroup;
    dev?:                             AgeGroup;
    showTestsTab?:                    AgeGroup;
    showImprovedCampaignOverlayData?: AgeGroup;
    richSegmentsTab?:                 AgeGroup;
    placementsTab?:                   AgeGroup;
    schedulesTab?:                    AgeGroup;
}

export interface ContentCampaigns {
    type:  string;
    items: ContentCampaignsItems;
}

export interface ContentCampaignsItems {
    type:       string;
    id:         string;
    properties: FluffyProperties;
}

export interface FluffyProperties {
    id:       AgeGroup;
    divIds:   PurpleDivIDS;
    enabled:  AgeGroup;
    rendered: AgeGroup;
    name:     AgeGroup;
}

export interface PurpleDivIDS {
    type:  string;
    items: AgeGroup;
}

export interface DraftTests {
    type:  string;
    items: DraftTestsItems;
}

export interface DraftTestsItems {
    type:       string;
    id:         string;
    properties: TentacledProperties;
}

export interface TentacledProperties {
    id:         AgeGroup;
    name:       AgeGroup;
    segment:    AgeGroup;
    method:     PurpleMethod;
    variations: PurpleVariations;
}

export interface PurpleMethod {
    type: string;
    enum: string[];
}

export interface PurpleVariations {
    type:  string;
    items: DraftClass;
}

export interface DraftClass {
    type: string;
    $ref: string;
}

export interface ForcedSegments {
    type:  string;
    items: AgeGroup;
}

export interface Placements {
    type:  string;
    items: PlacementsItems;
}

export interface PlacementsItems {
    type:       string;
    id:         string;
    properties: StickyProperties;
}

export interface StickyProperties {
    id:         AgeGroup;
    divId:      AgeGroup;
    enabled:    AgeGroup;
    name:       AgeGroup;
    rules:      PurpleRules;
    activeRule: ActiveRule;
}

export interface ActiveRule {
    type:       string;
    id:         string;
    properties: ActiveRuleProperties;
}

export interface ActiveRuleProperties {
    segment: AgeGroup;
    to:      AgeGroup;
    type:    Type;
    test:    Test;
    draft:   DraftClass;
}

export interface Test {
    type:       string;
    id:         string;
    properties: TestProperties;
}

export interface TestProperties {
    id:        AgeGroup;
    variation: AgeGroup;
}

export interface Type {
    type: string;
    enum: string[];
}

export interface PurpleRules {
    type:  string;
    items: PurpleItems;
}

export interface PurpleItems {
    type:       string;
    id:         string;
    properties: IndigoProperties;
}

export interface IndigoProperties {
    to:      AgeGroup;
    segment: AgeGroup;
    feature: PurpleFeature;
}

export interface PurpleFeature {
    type: string;
    enum: string[];
}

export interface PopupPreviewSettings {
    type:  string;
    items: PopupPreviewSettingsItems;
}

export interface PopupPreviewSettingsItems {
    type:       string;
    id:         string;
    properties: IndecentProperties;
}

export interface IndecentProperties {
    enabled:     AgeGroup;
    popup_id:    AgeGroup;
    campaign_id: AgeGroup;
    type:        AgeGroup;
    condition:   Condition;
}

export interface Condition {
    type:       string;
    id:         string;
    properties: ConditionProperties;
}

export interface ConditionProperties {
    categories:         FluffyCategories;
    exc_categories:     ExcCategories;
    brands:             Brands;
    exc_brands:         ExcBrands;
    tags:               PurpleTags;
    exc_tags:           ExcTags;
    urls:               Urls;
    exc_urls:           ExcUrls;
    url_parameters:     URLParameters;
    exc_url_parameters: ExcURLParameters;
    min_cart_value:     AgeGroup;
    min_cart_size:      AgeGroup;
    max_cart_value:     AgeGroup;
    max_cart_size:      AgeGroup;
    min_page_views:     AgeGroup;
    max_page_views:     AgeGroup;
    locations:          Locations;
    exc_locations:      ExcLocations;
    page_types:         PageTypes;
    exc_page_types:     ExcPageTypes;
    hide_on_desktop:    AgeGroup;
    hide_on_mobile:     AgeGroup;
    advanced:           AgeGroup;
    referer_urls:       RefererUrls;
    exc_referer_urls:   ExcRefererUrls;
}

export interface Brands {
    type:  string;
    items: AgeGroup;
}

export interface FluffyCategories {
    type:  string;
    items: AgeGroup;
}

export interface ExcBrands {
    type:  string;
    items: AgeGroup;
}

export interface ExcCategories {
    type:  string;
    items: AgeGroup;
}

export interface ExcLocations {
    type:  string;
    items: ExcLocationsItems;
}

export interface ExcLocationsItems {
    type:  string;
    items: AgeGroup;
}

export interface ExcPageTypes {
    type:  string;
    items: ExcPageTypesItems;
}

export interface ExcPageTypesItems {
    type: string;
    enum: string[];
}

export interface ExcRefererUrls {
    type:  string;
    items: AgeGroup;
}

export interface ExcTags {
    type:  string;
    items: AgeGroup;
}

export interface ExcURLParameters {
    type:  string;
    items: AgeGroup;
}

export interface ExcUrls {
    type:  string;
    items: AgeGroup;
}

export interface Locations {
    type:  string;
    items: LocationsItems;
}

export interface LocationsItems {
    type:  string;
    items: AgeGroup;
}

export interface PageTypes {
    type:  string;
    items: PageTypesItems;
}

export interface PageTypesItems {
    type: string;
    enum: string[];
}

export interface RefererUrls {
    type:  string;
    items: AgeGroup;
}

export interface PurpleTags {
    type:  string;
    items: AgeGroup;
}

export interface URLParameters {
    type:  string;
    items: AgeGroup;
}

export interface Urls {
    type:  string;
    items: AgeGroup;
}

export interface RecommendationCampaigns {
    type:  string;
    items: RecommendationCampaignsItems;
}

export interface RecommendationCampaignsItems {
    type:       string;
    id:         string;
    properties: HilariousProperties;
}

export interface HilariousProperties {
    id:         AgeGroup;
    recoId:     AgeGroup;
    title:      AgeGroup;
    link:       AgeGroup;
    enabled:    AgeGroup;
    filtered:   AgeGroup;
    ittt:       AgeGroup;
    variant:    AgeGroup;
    rendered:   AgeGroup;
    fbTitle:    AgeGroup;
    fbLink:     AgeGroup;
    fbType:     AgeGroup;
    divIds:     FluffyDivIDS;
    resultType: AgeGroup;
    productIds: ProductIDS;
    type:       AgeGroup;
    divId:      AgeGroup;
}

export interface FluffyDivIDS {
    type:  string;
    items: AgeGroup;
}

export interface ProductIDS {
    type:                  string;
    additional_properties: AgeGroup;
}

export interface RunningTests {
    type:  string;
    items: RunningTestsItems;
}

export interface RunningTestsItems {
    type:       string;
    id:         string;
    properties: AmbitiousProperties;
}

export interface AmbitiousProperties {
    id:         AgeGroup;
    name:       AgeGroup;
    segment:    AgeGroup;
    method:     FluffyMethod;
    variations: FluffyVariations;
}

export interface FluffyMethod {
    type: string;
    enum: string[];
}

export interface FluffyVariations {
    type:  string;
    items: FluffyItems;
}

export interface FluffyItems {
    type:       string;
    id:         string;
    properties: CunningProperties;
}

export interface CunningProperties {
    id:   AgeGroup;
    name: AgeGroup;
    base: AgeGroup;
}

export interface Segments {
    type:  string;
    items: SegmentsItems;
}

export interface SegmentsItems {
    type:       string;
    id:         string;
    properties: MagentaProperties;
}

export interface MagentaProperties {
    id:     AgeGroup;
    name:   AgeGroup;
    forced: AgeGroup;
    active: AgeGroup;
}

export interface TestPreviews {
    type:       string;
    id:         string;
    properties: TestPreviewsProperties;
}

export interface TestPreviewsProperties {
    t: T;
    d: D;
    u: U;
}

export interface D {
    type:       string;
    id:         string;
    properties: DProperties;
}

export interface DProperties {
    id:        AgeGroup;
    variation: AgeGroup;
}

export interface T {
    type:  string;
    items: TItems;
}

export interface TItems {
    type:       string;
    id:         string;
    properties: FriskyProperties;
}

export interface FriskyProperties {
    id:        AgeGroup;
    variation: AgeGroup;
}

export interface U {
    type:       string;
    id:         string;
    properties: UProperties;
}

export interface UProperties {
    id:         AgeGroup;
    name:       AgeGroup;
    segment:    AgeGroup;
    method:     TentacledMethod;
    variations: TentacledVariations;
}

export interface TentacledMethod {
    type: string;
    enum: string[];
}

export interface TentacledVariations {
    type:  string;
    items: TentacledItems;
}

export interface TentacledItems {
    type:       string;
    id:         string;
    properties: MischievousProperties;
}

export interface MischievousProperties {
    id:    AgeGroup;
    name:  AgeGroup;
    base:  AgeGroup;
    rules: FluffyRules;
}

export interface FluffyRules {
    type:  string;
    items: StickyItems;
}

export interface StickyItems {
    type:       string;
    id:         string;
    properties: BraggadociousProperties;
}

export interface BraggadociousProperties {
    placement: AgeGroup;
    segment:   AgeGroup;
    to:        AgeGroup;
    feature:   FluffyFeature;
}

export interface FluffyFeature {
    type: string;
    enum: string[];
}

export interface Elements {
    type:  string;
    items: AgeGroup;
}

export interface Errors {
    type:  string;
    items: AgeGroup;
}

export interface Events {
    type:  string;
    items: EventsItems;
}

export interface EventsItems {
    type:       string;
    id:         string;
    properties: Properties1;
}

export interface Properties1 {
    type:   AgeGroup;
    target: AgeGroup;
    ref:    AgeGroup;
    refSrc: AgeGroup;
}

export interface Experiments {
    type:  string;
    items: ExperimentsItems;
}

export interface ExperimentsItems {
    type:       string;
    id:         string;
    properties: Properties2;
}

export interface Properties2 {
    id:             AgeGroup;
    id_stamp:       AgeGroup;
    name:           AgeGroup;
    variation:      AgeGroup;
    variation_name: AgeGroup;
}

export interface Fb {
    type:       string;
    id:         string;
    properties: FbProperties;
}

export interface FbProperties {
    p: AgeGroup;
    a: AgeGroup;
    s: PurpleS;
    e: E;
}

export interface E {
    type:  string;
    items: EItems;
}

export interface EItems {
    type:       string;
    id:         string;
    properties: Properties3;
}

export interface Properties3 {
    n: AgeGroup;
    d: AgeGroup;
}

export interface PurpleS {
    type:  string;
    items: AgeGroup;
}

export interface Ga {
    type:       string;
    id:         string;
    properties: GaProperties;
}

export interface GaProperties {
    s: FluffyS;
}

export interface FluffyS {
    type:  string;
    items: AgeGroup;
}

export interface Gl {
    type:  string;
    items: AgeGroup;
}

export interface PageType {
    type: string;
    enum: string[];
}

export interface PartialVariants {
    type:                  string;
    additional_properties: AdditionalProperties;
}

export interface AdditionalProperties {
    type:       string;
    id:         string;
    properties: AdditionalPropertiesProperties;
}

export interface AdditionalPropertiesProperties {
    availability:        AgeGroup;
    price_text:          AgeGroup;
    price:               AgeGroup;
    list_price:          AgeGroup;
    price_currency_code: AgeGroup;
    variation_id:        AgeGroup;
}

export interface PurchasedItems {
    type:  string;
    items: PurchasedItemsItems;
}

export interface PurchasedItemsItems {
    type:       string;
    id:         string;
    properties: Properties4;
}

export interface Properties4 {
    product_id:          AgeGroup;
    sku_id:              AgeGroup;
    quantity:            AgeGroup;
    name:                AgeGroup;
    unit_price:          AgeGroup;
    price_currency_code: AgeGroup;
}

export interface Recommendations {
    type:                  string;
    additional_properties: AgeGroup;
}

export interface RenderMode {
    type: string;
    enum: string[];
}

export interface SegmentCodes {
    type:  string;
    items: AgeGroup;
}

export interface Skus {
    type:  string;
    items: SkusItems;
}

export interface SkusItems {
    type:       string;
    id:         string;
    properties: Properties5;
}

export interface Properties5 {
    id:              AgeGroup;
    name:            AgeGroup;
    price:           AgeGroup;
    list_price:      AgeGroup;
    url:             AgeGroup;
    image_url:       AgeGroup;
    gtin:            AgeGroup;
    inventory_level: AgeGroup;
    availability:    AgeGroup;
    custom_fields:   FluffyCustomFields;
}

export interface FluffyCustomFields {
    type:                  string;
    additional_properties: AgeGroup;
}

export interface FluffyTags {
    type:  string;
    items: AgeGroup;
}

export interface Tags1 {
    type:  string;
    items: AgeGroup;
}

export interface Tags2 {
    type:  string;
    items: AgeGroup;
}

export interface Tags3 {
    type:  string;
    items: AgeGroup;
}
