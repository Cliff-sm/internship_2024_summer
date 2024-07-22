/*
(Sender)
用戶編號: 300000267
公司名稱: PH218
公司聯絡人電話: 97370642

work-order.reference
第三方訂單號: 757339527906007938
第三方單號: 0705

平台運單編號: ZS-E-15566
客戶運單編號: --
取件碼: 0705
簽收碼: --
簽收檔: --


寄件地址坐標: 114.2377202605,22.2628615365
寄件地址: 香港柴灣環翠邨環翠商埸地下G10號舖 
寄件人姓名1: PH218
寄件人電話1: 23686948

收件地址坐標: 114.23917486690307,22.26282816419459
收件地址: 柴灣 富翠街 6 號 喜翠樓 28 樓 07 室 
收件人姓名1: Tom Lee
收件人電話1: 69373073
收件人姓名2: --
收件人電話2: --

系統生成工作備註 (接單後): --

*/

/**
 * @model saas-partner-task
 * @extends saas-partner-order
 * @extendsKey order
 * @permissionGroup saas-tenant-protected
 * @dataPermissionField tenant saas-tenant 
 * @extensionChild saas-partner-task-partner-fee saas-partner-task-event-log saas-partner-task-validation-step
 * 
 * @icon fas-boxes-stacked
 * @timestamps true
 *
 * formerly 配送工作
 */
declare type saas_partner_task = {
    id: number,
    tenant: number,

    /**
     * partner order id
     * it could be not available at first
     */
    order?: number,

    /**
     * 
     */
    sender: number,

    /**
     * hub managing ths task
     * it could change along the delivery
     * @listing
     */
    hub: number,

    /**
     * zone id or postal code
     */
    zone?: string,

    /**
     * 
     * just name is important here
     */
    flow: number,

    /**
     * use in task grouping / (also PO bidding list)
     */
    task_pool: number,

    /**
     * partner who is currently working on this task （saas user id)
     */
    partner: number,

    /**
     * task title
     * @listing
     * @viewSize full
     */
    title: string,

    /**
     * content of the task, NOT as content for partner before
     * accept the task, as it might have some sensitive information
     * @viewSize full
     */
    content: TYPE_TEXT,

    // 發佈模式及時間處理
    // 分區？ Zone 計費？ Dashboard

    // Partner 費用
    // Sender 費用

    date: TYPE_DATE,

    /**
     * depends on task type, time slot for pickup / dropoff / service.
     *
     */
    time_slot?: string

    type: saas_task_type,

    /**
     * @default 0
     * 定義每個任務在目的地的服務時間 (Why not at start point?)
     */
    service_time: number,

    // tags
    // vas

    /**
     * @inline
     * @maxLength 1
     * @viewType compact_body
     * 1pnd, COULD set `start` point in partner order
     * if `start` has defined in partner task, use partner task `start` first
     */
    start?: ds_start_address[],
    // ds_start_address | ds_end_address,

    //  group tab_span fas-arrow-alt-circle-down end

    /**
     * @inline
     * @maxLength 1
     * @viewType compact_body
     * np1d COULD set `end` point in partner order
     * if `end` has defined in partner task, use partner task `end` first
     */
    end?: ds_end_address[],
    // ds_start_address | ds_end_address,

    /**
     * @displayName en service fee
     * @displayName zh-HK 服務費
     * @description en service fee for this task, could be null (e.g. determine by order)
     */
    service_fee?: common_service_fee

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

    // direct copy from saas_flow_drop_off_config etc
    /**
     * @inline
     */
    start_task_validation: saas_flow_standard_task_validation_sequence | saas_flow_tenant_task_validation_sequence
    /**
     * @inline
     */
    end_task_validation: saas_flow_standard_task_validation_sequence | saas_flow_tenant_task_validation_sequence


    // /**
    //  * @group task_validation
    //  * @rowLeader
    //  * @viewSize full
    //  * @description en Standard start task validation
    //  * @description zh-HK 標準開始工作驗證
    //  * 
    //  * // is model
    //  */
    // standard_start_task_validation?: saas_flow_standard_task_validation[],

    // /**
    //  * @group basic fas-info-circle task_validation
    //  * @rowLeader
    //  * @viewSize full
    //  * @displayName en pickup verification (start)
    //  * @description! en verification for start of pickup 
    //  */
    // custom_start_task_validation?: flow_task_validation_step[],

    // /**
    //  * @group task_validation
    //  * @rowLeader
    //  * @viewSize full
    //  */
    // standard_end_task_validation?: saas_flow_standard_task_validation[],

    // /**
    //  * @group task_validation
    //  * @rowLeader
    //  * @viewSize full
    //  * @displayName en pickup verification (end)
    //  * @description! en verification for end of pickup (to end user/hub)
    //  */
    // custom_end_task_validation?: flow_task_validation_step[],

    status_code: saas_partner_task_status

    /**
     * partner task status group. grouping based on partner-task.status_code
     */
    status_group: saas_partner_task_status_group

}




/**
 * @model saas-partner-task-event-log
 * @extends saas-partner-task
 * @extendsKey task
 * @permissionGroup saas-tenant-protected
 * @dataPermissionField tenant saas-tenant 
 * @shortName en event log
 * @shortName zh-HK 事件日誌
 * @icon fas-boxes-stacked
 * @log
 * 
 */
declare type saas_partner_task_event_log = {
    id: number,
    tenant: number,
    task: number,

    /**
     * @viewType select
     * @rowLeader
     */
    event: saas_core_event,

    /**
     * task status when action took place
     * @viewType select
     * @rowLeader
     */
    status_code: saas_partner_task_status,
    // saas_work_order_status, // order state code


    /**
     * @description en action that is delay submitted will have a actual_time
     * @readonly
     * time when the action occurred,
     */
    actual_time?: TYPE_TIMESTAMP,


    coordinate?: TYPE_POINT,

    /**
     * @viewSize full
     */
    remark?: TYPE_TEXT,

}


/**
 * @model saas-partner-task-validation-step
 * @extends saas-partner-task
 * @extendsKey task
 * @permissionGroup saas-tenant-protected
 * @dataPermissionField tenant saas-tenant 
 * 
 * @icon fas-boxes-stacked
 * @log
 * 
 */
declare type saas_partner_task_validation_step = {
    id: number,
    tenant: number,
    task: number,

    /**
     *  validation steps for this task save here
     */
    dummy: string
    // /**
    //  * @viewType select
    //  * @rowLeader
    //  */
    // event: saas_partner_task_event,

    // /**
    //  * @viewType select
    //  * @rowLeader
    //  */
    // status_code: saas_work_order_status, // order state code

    // /**
    //  * @viewSize full
    //  */
    // remark: TYPE_TEXT,
}


/**
 * @model saas-partner-task-partner-fee
 * @extends saas-partner-task
 * @extendsKey task
 * @permissionGroup saas-tenant-protected
 * @dataPermissionField tenant saas-tenant 
 * 
 */
declare type saas_partner_task_partner_fee = {
    id: number,
    tenant: number,
    task: number,

    /**
     *  validation steps for this task save here
     */
    dummy: string
}