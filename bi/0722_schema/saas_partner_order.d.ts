/**
 * @model saas-partner-order-type
 * @permissionGroup saas-tenant-public
 * @provider json
 * @primaryLabel name
 * @primaryKey code
 */
declare type saas_partner_order_type = {
    code: number,
    /**
     * force as type_name constant name
     */
    type_name: string,
    name: TYPE_LANGUAGE
}




/**
 * @model saas-partner-order
 * @permissionGroup saas-tenant-public
 * @dataPermissionField tenant saas-tenant
 * @description en Dashboard should 
 * @extensionChild saas-partner-task saas-partner-order-dispatch-rule saas-partner-order-assignment-score saas-partner-order-dispatch-partner saas-partner-order-dispatch-response
 * @icon fas-truck
 * @timestamps true
 */
declare type saas_partner_order = {

    id: number, // order id

    tenant: number, // tenant id

    /**
     * partner order should contain task from the same flow 
     * so that it could have the same dispatch setting
     */
    flow: number,

    /**
     * @listing
     */
    sender: saas_sender,

    /**
     * @listing
     * each partner order Must belongs to a hub for monitoring
     * for dashboard
     */
    hub: saas_hub,

    /**
     * @displayName en Dispatch Pool
     * @description! en see also task-pool
     * use in bidding list  / (also partner-task task grouping )
     * note: try to use task pool to search for available 
     * partner-order for bidding list.
     */
    dispatch_pool: number,
    /**
     * based on dispatch method, PO may not available in bidding list
     * note: it better to be a task-pool property
     */
    // show_in_bidding_list: TYPE_BOOLEAN,
    /**
     * @group dispatch
     * @displayName en Allowed Vehicle Type
     * @displayName zh-HK 允許車輛類型
     */
    vehicle_type: saas_vehicle_type[],

    /**
     * @listing
     * @group detail
     * @displayName en Start Working Time
     * @description en the first task working time
     * @readonly
     * show only limit start_time or end_time
     */
    start_time?: TYPE_TIMESTAMP,

    /**
     * @group detail
     * @displayName en End Working Time
     * @readonly
     * show only limit start_time or end_time
     */
    end_time?: TYPE_TIMESTAMP,

    /**
     * @listing
     * @group detail
     * @display name en title
     * @display name zh-HK 標題
     * 
     */
    title: string,

    /**
     * @group detail
     * @displayName en Route Description
     * @displayName zh-HK 路線描述
     */
    route_description: string,

    /**
     * @group detail
     * @displayName en Tags
     * @displayName zh-HK 標籤
     * Note: if feature right order tag required to support (color, type, multiple language, may required to 
     * have a saas-order-tag model
     */
    tags?: string,

    /**
     * @group detail
     * @displayName en overview
     * @displayName zh-HK 概述
     * 
     * show before accept order
     */
    overview: TYPE_TEXT,

    /**
     * @group detail
     * @displayName en content
     * @displayName zh-HK 內容
     * 
     */
    content: TYPE_TEXT,

    /**
     * code: 1S1E,1SME,MS1E,MSME
     * formerly 1PND etc
     */
    type: saas_partner_order_type,


    /**
     * @inline
     * @maxLength 1
     * @viewType compact_body
     * type = 1SME (1pnd), COULD set `start` point in partner order
     * if `start` has defined in partner task, use partner task `start` first
     */
    start?: common_address | sm_sender_address,

    //  group tab_span fas-arrow-alt-circle-down end

    /**
     * @maxLength 1
     * @viewType compact_body
     * type = MS1E (np1d) COULD set `end` point in partner order
     * if `end` has defined in partner task, use partner task `end` first
     * @inline
     */
    end?: common_address | sm_sender_address,

    /**
     * @displayName en service fee
     * @displayName zh-HK 服務費
     * @description en total service fee for this order
     */
    service_fee?: common_service_fee

    /**
     * @inline
     */
    start_task_validation: saas_flow_standard_task_validation_sequence | saas_flow_tenant_task_validation_sequence
    /**
     * @inline
     */
    end_task_validation: saas_flow_standard_task_validation_sequence | saas_flow_tenant_task_validation_sequence

    /**
     * partner task status group. grouping based on partner-task.status_code
     * @default 1
     * default value `1` is `waiting for dispatch`
     */
    status_group: saas_partner_task_status_group
}
