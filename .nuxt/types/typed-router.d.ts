/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

/// <reference types="unplugin-vue-router/client" />

import type {
  // type safe route locations
  RouteLocationTypedList,
  RouteLocationResolvedTypedList,
  RouteLocationNormalizedTypedList,
  RouteLocationNormalizedLoadedTypedList,
  RouteLocationAsString,
  RouteLocationAsRelativeTypedList,
  RouteLocationAsPathTypedList,

  // helper types
  // route definitions
  RouteRecordInfo,
  ParamValue,
  ParamValueOneOrMore,
  ParamValueZeroOrMore,
  ParamValueZeroOrOne,

  // vue-router extensions
  _RouterTyped,
  RouterLinkTyped,
  RouterLinkPropsTyped,
  NavigationGuard,
  UseLinkFnTyped,

  // data fetching
  _DataLoader,
  _DefineLoaderOptions,
} from 'unplugin-vue-router/types'

declare module 'vue-router/auto/routes' {
  export interface RouteNamedMap {
    'index': RouteRecordInfo<'index', '/', Record<never, never>, Record<never, never>>,
    'access-control': RouteRecordInfo<'access-control', '/access-control', Record<never, never>, Record<never, never>>,
    'apps-logistics-dashboard': RouteRecordInfo<'apps-logistics-dashboard', '/apps/logistics/dashboard', Record<never, never>, Record<never, never>>,
    'apps-logistics-fleet': RouteRecordInfo<'apps-logistics-fleet', '/apps/logistics/fleet', Record<never, never>, Record<never, never>>,
    'forgot-password': RouteRecordInfo<'forgot-password', '/forgot-password', Record<never, never>, Record<never, never>>,
    'login': RouteRecordInfo<'login', '/login', Record<never, never>, Record<never, never>>,
    'logistic-abroad-abroadSchedule-abroadSchedule': RouteRecordInfo<'logistic-abroad-abroadSchedule-abroadSchedule', '/logistic/abroad/abroadSchedule/abroadSchedule', Record<never, never>, Record<never, never>>,
    'logistic-abroad-abroadSchedule-modal-AbroadAddModal': RouteRecordInfo<'logistic-abroad-abroadSchedule-modal-AbroadAddModal', '/logistic/abroad/abroadSchedule/modal/AbroadAddModal', Record<never, never>, Record<never, never>>,
    'logistic-abroad-abroadSchedule-modal-AbroadUpdateModal': RouteRecordInfo<'logistic-abroad-abroadSchedule-modal-AbroadUpdateModal', '/logistic/abroad/abroadSchedule/modal/AbroadUpdateModal', Record<never, never>, Record<never, never>>,
    'logistic-base-page-baseInfo-clientInfo-ClientFormPage': RouteRecordInfo<'logistic-base-page-baseInfo-clientInfo-ClientFormPage', '/logistic/base/page/baseInfo/clientInfo/ClientFormPage', Record<never, never>, Record<never, never>>,
    'logistic-base-page-baseInfo-CompanyFormPage': RouteRecordInfo<'logistic-base-page-baseInfo-CompanyFormPage', '/logistic/base/page/baseInfo/CompanyFormPage', Record<never, never>, Record<never, never>>,
    'logistic-base-page-baseInfo-DeptFormPage': RouteRecordInfo<'logistic-base-page-baseInfo-DeptFormPage', '/logistic/base/page/baseInfo/DeptFormPage', Record<never, never>, Record<never, never>>,
    'logistic-base-page-baseInfo-warehouseInfo': RouteRecordInfo<'logistic-base-page-baseInfo-warehouseInfo', '/logistic/base/page/baseInfo/warehouseInfo', Record<never, never>, Record<never, never>>,
    'logistic-base-page-baseInfo-WarehouseModal': RouteRecordInfo<'logistic-base-page-baseInfo-WarehouseModal', '/logistic/base/page/baseInfo/WarehouseModal', Record<never, never>, Record<never, never>>,
    'logistic-base-page-baseInfo-WorkPlaceFormPage': RouteRecordInfo<'logistic-base-page-baseInfo-WorkPlaceFormPage', '/logistic/base/page/baseInfo/WorkPlaceFormPage', Record<never, never>, Record<never, never>>,
    'logistic-base-page-codegridComponent-CodeGrid': RouteRecordInfo<'logistic-base-page-codegridComponent-CodeGrid', '/logistic/base/page/codegridComponent/CodeGrid', Record<never, never>, Record<never, never>>,
    'logistic-base-page-codeInfo-CodeFormPage': RouteRecordInfo<'logistic-base-page-codeInfo-CodeFormPage', '/logistic/base/page/codeInfo/CodeFormPage', Record<never, never>, Record<never, never>>,
    'logistic-base-page-itemInfo-ItemFormPage': RouteRecordInfo<'logistic-base-page-itemInfo-ItemFormPage', '/logistic/base/page/itemInfo/ItemFormPage', Record<never, never>, Record<never, never>>,
    'logistic-clientDelivery-DeliveryDetailFormPage': RouteRecordInfo<'logistic-clientDelivery-DeliveryDetailFormPage', '/logistic/clientDelivery/DeliveryDetailFormPage', Record<never, never>, Record<never, never>>,
    'logistic-clientDelivery-DeliveryFormPage': RouteRecordInfo<'logistic-clientDelivery-DeliveryFormPage', '/logistic/clientDelivery/DeliveryFormPage', Record<never, never>, Record<never, never>>,
    'logistic-outputInfo-ShippingOrderFormPage': RouteRecordInfo<'logistic-outputInfo-ShippingOrderFormPage', '/logistic/outputInfo/ShippingOrderFormPage', Record<never, never>, Record<never, never>>,
    'logistic-outputInfo-ShippingRegistFormPage': RouteRecordInfo<'logistic-outputInfo-ShippingRegistFormPage', '/logistic/outputInfo/ShippingRegistFormPage', Record<never, never>, Record<never, never>>,
    'logistic-outsource-page-forward-forward': RouteRecordInfo<'logistic-outsource-page-forward-forward', '/logistic/outsource/page/forward/forward', Record<never, never>, Record<never, never>>,
    'logistic-outsource-page-forward-fowardModal': RouteRecordInfo<'logistic-outsource-page-forward-fowardModal', '/logistic/outsource/page/forward/fowardModal', Record<never, never>, Record<never, never>>,
    'logistic-outsource-page-inspection-inspection': RouteRecordInfo<'logistic-outsource-page-inspection-inspection', '/logistic/outsource/page/inspection/inspection', Record<never, never>, Record<never, never>>,
    'logistic-outsource-page-order-finalorder': RouteRecordInfo<'logistic-outsource-page-order-finalorder', '/logistic/outsource/page/order/finalorder', Record<never, never>, Record<never, never>>,
    'logistic-outsource-page-order-order': RouteRecordInfo<'logistic-outsource-page-order-order', '/logistic/outsource/page/order/order', Record<never, never>, Record<never, never>>,
    'logistic-outsource-page-order-order1': RouteRecordInfo<'logistic-outsource-page-order-order1', '/logistic/outsource/page/order/order1', Record<never, never>, Record<never, never>>,
    'logistic-productionManagement-page-mps-ContractRegistMps': RouteRecordInfo<'logistic-productionManagement-page-mps-ContractRegistMps', '/logistic/productionManagement/page/mps/ContractRegistMps', Record<never, never>, Record<never, never>>,
    'logistic-productionManagement-page-mps-SalesPlanRegistMps': RouteRecordInfo<'logistic-productionManagement-page-mps-SalesPlanRegistMps', '/logistic/productionManagement/page/mps/SalesPlanRegistMps', Record<never, never>, Record<never, never>>,
    'logistic-productionManagement-page-mrp-MpsModifyModal': RouteRecordInfo<'logistic-productionManagement-page-mrp-MpsModifyModal', '/logistic/productionManagement/page/mrp/MpsModifyModal', Record<never, never>, Record<never, never>>,
    'logistic-productionManagement-page-mrp-MpsRegisteredByContract': RouteRecordInfo<'logistic-productionManagement-page-mrp-MpsRegisteredByContract', '/logistic/productionManagement/page/mrp/MpsRegisteredByContract', Record<never, never>, Record<never, never>>,
    'logistic-productionManagement-page-mrp-MpsRegisteredBySalesPlan': RouteRecordInfo<'logistic-productionManagement-page-mrp-MpsRegisteredBySalesPlan', '/logistic/productionManagement/page/mrp/MpsRegisteredBySalesPlan', Record<never, never>, Record<never, never>>,
    'logistic-productionManagement-page-mrp-MrpGather': RouteRecordInfo<'logistic-productionManagement-page-mrp-MrpGather', '/logistic/productionManagement/page/mrp/MrpGather', Record<never, never>, Record<never, never>>,
    'logistic-productionManagement-page-mrp-MrpGatherResultModal': RouteRecordInfo<'logistic-productionManagement-page-mrp-MrpGatherResultModal', '/logistic/productionManagement/page/mrp/MrpGatherResultModal', Record<never, never>, Record<never, never>>,
    'logistic-productionManagement-page-mrp-MrpInfo': RouteRecordInfo<'logistic-productionManagement-page-mrp-MrpInfo', '/logistic/productionManagement/page/mrp/MrpInfo', Record<never, never>, Record<never, never>>,
    'logistic-productionManagement-page-mrp-MrpProductionPlan': RouteRecordInfo<'logistic-productionManagement-page-mrp-MrpProductionPlan', '/logistic/productionManagement/page/mrp/MrpProductionPlan', Record<never, never>, Record<never, never>>,
    'logistic-productionManagement-page-mrp-MrpPurchasePlan': RouteRecordInfo<'logistic-productionManagement-page-mrp-MrpPurchasePlan', '/logistic/productionManagement/page/mrp/MrpPurchasePlan', Record<never, never>, Record<never, never>>,
    'logistic-productionManagement-page-mrp-MrpRegister': RouteRecordInfo<'logistic-productionManagement-page-mrp-MrpRegister', '/logistic/productionManagement/page/mrp/MrpRegister', Record<never, never>, Record<never, never>>,
    'logistic-productionManagement-page-mrp-MrpRegisterMain': RouteRecordInfo<'logistic-productionManagement-page-mrp-MrpRegisterMain', '/logistic/productionManagement/page/mrp/MrpRegisterMain', Record<never, never>, Record<never, never>>,
    'logistic-productionManagement-page-mrp-MrpSimulationModal': RouteRecordInfo<'logistic-productionManagement-page-mrp-MrpSimulationModal', '/logistic/productionManagement/page/mrp/MrpSimulationModal', Record<never, never>, Record<never, never>>,
    'logistic-productionManagement-page-WorkOrderFormPage': RouteRecordInfo<'logistic-productionManagement-page-WorkOrderFormPage', '/logistic/productionManagement/page/WorkOrderFormPage', Record<never, never>, Record<never, never>>,
    'logistic-productionManagement-page-WorkSiteFormPage': RouteRecordInfo<'logistic-productionManagement-page-WorkSiteFormPage', '/logistic/productionManagement/page/WorkSiteFormPage', Record<never, never>, Record<never, never>>,
    'logistic-purchase-bomInfo-BomInfoFormPage': RouteRecordInfo<'logistic-purchase-bomInfo-BomInfoFormPage', '/logistic/purchase/bomInfo/BomInfoFormPage', Record<never, never>, Record<never, never>>,
    'logistic-purchase-orderRegistInfo-OrderStockFormPage': RouteRecordInfo<'logistic-purchase-orderRegistInfo-OrderStockFormPage', '/logistic/purchase/orderRegistInfo/OrderStockFormPage', Record<never, never>, Record<never, never>>,
    'logistic-purchase-stockInfo-StockInfoFormPage': RouteRecordInfo<'logistic-purchase-stockInfo-StockInfoFormPage', '/logistic/purchase/stockInfo/StockInfoFormPage', Record<never, never>, Record<never, never>>,
    'logistic-returnInfo-ReturnInfoFormPage': RouteRecordInfo<'logistic-returnInfo-ReturnInfoFormPage', '/logistic/returnInfo/ReturnInfoFormPage', Record<never, never>, Record<never, never>>,
    'logistic-returnInfo-ReturnStockInfoFormPage': RouteRecordInfo<'logistic-returnInfo-ReturnStockInfoFormPage', '/logistic/returnInfo/ReturnStockInfoFormPage', Record<never, never>, Record<never, never>>,
    'logistic-sales-page-contract-contractInfo': RouteRecordInfo<'logistic-sales-page-contract-contractInfo', '/logistic/sales/page/contract/contractInfo', Record<never, never>, Record<never, never>>,
    'logistic-sales-page-contract-contractInfoModal': RouteRecordInfo<'logistic-sales-page-contract-contractInfoModal', '/logistic/sales/page/contract/contractInfoModal', Record<never, never>, Record<never, never>>,
    'logistic-sales-page-contract-contractRegist': RouteRecordInfo<'logistic-sales-page-contract-contractRegist', '/logistic/sales/page/contract/contractRegist', Record<never, never>, Record<never, never>>,
    'logistic-sales-page-contract-contractRegistModal': RouteRecordInfo<'logistic-sales-page-contract-contractRegistModal', '/logistic/sales/page/contract/contractRegistModal', Record<never, never>, Record<never, never>>,
    'logistic-sales-page-deliveryInfo-DeliveryInfo': RouteRecordInfo<'logistic-sales-page-deliveryInfo-DeliveryInfo', '/logistic/sales/page/deliveryInfo/DeliveryInfo', Record<never, never>, Record<never, never>>,
    'logistic-sales-page-estimateInfo-EstimateInfo': RouteRecordInfo<'logistic-sales-page-estimateInfo-EstimateInfo', '/logistic/sales/page/estimateInfo/EstimateInfo', Record<never, never>, Record<never, never>>,
    'logistic-sales-page-estimateRegist-EstimateRegist': RouteRecordInfo<'logistic-sales-page-estimateRegist-EstimateRegist', '/logistic/sales/page/estimateRegist/EstimateRegist', Record<never, never>, Record<never, never>>,
    'logistic-sales-page-salesPlan-SalesPlan': RouteRecordInfo<'logistic-sales-page-salesPlan-SalesPlan', '/logistic/sales/page/salesPlan/SalesPlan', Record<never, never>, Record<never, never>>,
    'logistic-transportation-transportationFormPage': RouteRecordInfo<'logistic-transportation-transportationFormPage', '/logistic/transportation/transportationFormPage', Record<never, never>, Record<never, never>>,
    'not-authorized': RouteRecordInfo<'not-authorized', '/not-authorized', Record<never, never>, Record<never, never>>,
    'register': RouteRecordInfo<'register', '/register', Record<never, never>, Record<never, never>>,
  }
}

declare module 'vue-router/auto' {
  import type { RouteNamedMap } from 'vue-router/auto/routes'

  export type RouterTyped = _RouterTyped<RouteNamedMap>

  /**
   * Type safe version of `RouteLocationNormalized` (the type of `to` and `from` in navigation guards).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationNormalized<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationNormalizedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocationNormalizedLoaded` (the return type of `useRoute()`).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationNormalizedLoaded<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocationResolved` (the returned route of `router.resolve()`).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationResolved<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationResolvedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocation` . Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocation<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocationRaw` . Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationRaw<Name extends keyof RouteNamedMap = keyof RouteNamedMap> =
    | RouteLocationAsString<RouteNamedMap>
    | RouteLocationAsRelativeTypedList<RouteNamedMap>[Name]
    | RouteLocationAsPathTypedList<RouteNamedMap>[Name]

  /**
   * Generate a type safe params for a route location. Requires the name of the route to be passed as a generic.
   */
  export type RouteParams<Name extends keyof RouteNamedMap> = RouteNamedMap[Name]['params']
  /**
   * Generate a type safe raw params for a route location. Requires the name of the route to be passed as a generic.
   */
  export type RouteParamsRaw<Name extends keyof RouteNamedMap> = RouteNamedMap[Name]['paramsRaw']

  export function useRouter(): RouterTyped
  export function useRoute<Name extends keyof RouteNamedMap = keyof RouteNamedMap>(name?: Name): RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[Name]

  export const useLink: UseLinkFnTyped<RouteNamedMap>

  export function onBeforeRouteLeave(guard: NavigationGuard<RouteNamedMap>): void
  export function onBeforeRouteUpdate(guard: NavigationGuard<RouteNamedMap>): void

  export const RouterLink: RouterLinkTyped<RouteNamedMap>
  export const RouterLinkProps: RouterLinkPropsTyped<RouteNamedMap>

  // Experimental Data Fetching

  export function defineLoader<
    P extends Promise<any>,
    Name extends keyof RouteNamedMap = keyof RouteNamedMap,
    isLazy extends boolean = false,
  >(
    name: Name,
    loader: (route: RouteLocationNormalizedLoaded<Name>) => P,
    options?: _DefineLoaderOptions<isLazy>,
  ): _DataLoader<Awaited<P>, isLazy>
  export function defineLoader<
    P extends Promise<any>,
    isLazy extends boolean = false,
  >(
    loader: (route: RouteLocationNormalizedLoaded) => P,
    options?: _DefineLoaderOptions<isLazy>,
  ): _DataLoader<Awaited<P>, isLazy>

  export {
    _definePage as definePage,
    _HasDataLoaderMeta as HasDataLoaderMeta,
    _setupDataFetchingGuard as setupDataFetchingGuard,
    _stopDataFetchingScope as stopDataFetchingScope,
  } from 'unplugin-vue-router/runtime'
}

declare module 'vue-router' {
  import type { RouteNamedMap } from 'vue-router/auto/routes'

  export interface TypesConfig {
    beforeRouteUpdate: NavigationGuard<RouteNamedMap>
    beforeRouteLeave: NavigationGuard<RouteNamedMap>

    $route: RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[keyof RouteNamedMap]
    $router: _RouterTyped<RouteNamedMap>

    RouterLink: RouterLinkTyped<RouteNamedMap>
  }
}
