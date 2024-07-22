
// /**
//  * @component sm.saas-location-nearby
//  * @permissionGroup saas-tenant-protected
//  */
// declare type saas_location_nearby = {
//     id: number,
//     name: string
//     coordinate: string
// }

// type timestamp = number;

/**
 * @model saas-work-order
 * @permissionGroup saas-tenant-public
 * @dataPermissionField tenant saas-tenant
 * @extensionChild saas-work-order-task saas-work-order-shipment saas-work-order-remark saas-work-order-event-log saas-work-order-shipment-tracking
 * @shotName en Work Order
 * @shotName zh-HK 工作訂單
 * @icon fas-inbox
 */
declare type saas_work_order = {
    id: number, // order id
    tenant: number, // tenant id

    sender: saas_sender,

    /**
     * @defaultNull
     */
    flow: saas_flow,


    /**
     * hub assigned. All work order must be assigned to a hub
     * even though it could involve multiple hub.
     * 
     * it could be direct assigned to a hub, or use flow setting 
     * to assign to a hub
     */
    hub?: saas_hub,

    /**
     * 
     */
    zone?: number,

    /**
     * @listing
     * @description en You could use this field to fill in pre-assigned waybill number
     * @description zh-HK 你可以用這個欄位填入預先分配運單號碼
     * waybill is removed, moved to saas_work_order_shipment.tracking_number
     */
    // waybill_no?: string, // waybill number

    /**
     * @listing
     * @rowLeader
     * use string + dynamicSelection to show pull down
     */
    start_date?: string, // 取件日期, local date
    /**
     * time or time slot
     * @listing
     */
    start_time?: string, // time  (900 for 9:00, 1200 for 12:00) or time-range, (e.g. 9001200 for 9:00-12:00)

    /**
     * 
     */
    end_date?: string, // 派件日期
    end_time?: string, // time  (900 for 9:00, 1200 for 12:00) or time-range, (e.g. 9001200 for 9:00-12:00)

    // group tab_span fas-arrow-alt-circle-up start

    /**
     * @listing
     * @inline
     * @minLength 1
     * @maxLength 1
     * @viewType compact_body
     * start point, e.g. pickup point
     * 
     * both common_address and sm_sender_address are component
     */
    start: common_simple_contact | common_address | sm_sender_address,

    //  group tab_span fas-arrow-alt-circle-down end

    /**
     * @listing
     * @inline
     * @minLength 1
     * @maxLength 1
     * @viewType compact_body
     */
    end: common_simple_contact | common_address | sm_sender_address,


    // location_id: number, // location id, 0 for order not ship from / deliver to a owned location (warehouse, store)
    /**
     * @displayName en item detail
     * @displayName zh-HK 物品名細
     * @description en item detail for this order
     * @viewType compact_body
     * @sortable false
     * @inline
     * parcel item；不同產品，用不同 Component 作描述
     */
    items: saas_work_order_item_basic_box | saas_work_order_item_basic_description,

    /**
     * @viewType compact
     * @noIcon
     * @inline
     */
    references?: saas_order_reference[], // order reference, one to many; 第三方订单号, 第三方运单号, etc

    /**
     * @viewType checkbox_compact
     * group vas
     * order vas, e.g. insurance, etc
     */
    //vas?: saas_work_order_vas[],

    /**
     * @viewType compact
     * @noIcon
     * @inline
     * group fee
     */
    fee?: saas_work_order_fee_basic_parcel | saas_work_order_fee_basic_parcel_item, // parcel fee；不同產品，用不同 Component 作描述； 問題，報表？


    /**
     * 
     * @viewType compact
     * @noIcon 
     */
    // publish?: saas_order_publish, // order publish type, e.g. normal, urgent, etc


    /**
     * remark for different roles
     * @viewType compact
     * @noIcon 
     */
    // remark?: saas_order_remark[], // order remark, one to many

    /**
     * @displayName en reviewed
     * @description en depends on WorkOrderConfig, review is optional
     * if review is NOT required, it should set as `not_applicable` (id: 2)
     */
    reviewed: common_yn_not_applicable,

    /**
     * @displayName en scheduled time
     * @description en scheduled time, if set, the order will start working at the time. null if it is not scheduled order
     * 
     */
    scheduled_time?: TYPE_TIMESTAMP,
    /**
     * @displayName en auto publish time
     * @description en if auto publish time is set, the order will be published automatically at the time. null if it is not auto published order
     */
    auto_publish_time?: TYPE_TIMESTAMP,

    /**
     * @description en Work order status. (not same as Partner Order status/Task status)
     * @description zh-HK 工作訂單狀態。（不同於工作伙伴訂單狀態/工作狀態）
     * 
     * @listing
     * the initial value need to use model hook event to set, so it is optional at first
     * @readOnly true
     */
    status_code?: saas_work_order_status, // order state code

   

    /**
     * @readOnly true
     * usage to be confirmed
     */
    //temp_status_code?: number, // order temp state code,

    /**
     * @viewType compact
     * @-readOnly true
     * @noIcon
     * @inline
     * 不同預計模型返回的時間; should be triggered by backend
     */
    estimation?: saas_work_order_estimation[],

    /**
     * @viewType compact
     * @-readOnly true
     * @noIcon
     * @inline
     */
    distance?: saas_work_order_distance[], // order stat, e.g. distance, etc

    /**
     * @viewType compact
     * @noIcon 
     */
    // promotion?: saas_order_promotion[], // order promotion code, saas_order_promotion
    // remark: string, // internal remark, not for driver / customer

    /**
     * @readOnly
     */
    // alert_type?: number, // order alert type, e.g. 1: no driver, 2: no vehicle, 3: no driver and vehicle, etc 取代  `pending_cs` '待客服處理,0-否,1-是',
    /**
     * @viewType radio_compact
     * @readOnly
     */
    channel?: saas_work_order_channel_type, // order channel source (web, app, etc),

}







/*
`tips` decimal(10, 2) UNSIGNED NOT NULL COMMENT '用戶商家小费',
`cancel_type` int(11) UNSIGNED NOT NULL DEFAULT '0' COMMENT '订单取消原因',
`cancel_reason` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '订单取消其他原因',
`encrypt_level` int(3) NOT NULL DEFAULT '0' COMMENT '已加密等级，十进制，0不加密',
*/




// /**
//  * @component sm.saas-order-promotion
//  * @inline true
//  * promotion related stuff
//  */
// declare type saas_order_promotion = {
//     id: number,
//     code?: string, // promotion code
//     coupon_id?: number, // coupon id
// }