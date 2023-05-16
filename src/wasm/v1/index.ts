import {
  MsgStoreCode,
  MsgInstantiateContract,
  MsgInstantiateContract2,
  MsgExecuteContract,
  MsgMigrateContract,
  MsgUpdateAdmin,
  MsgClearAdmin,
  MsgUpdateInstantiateConfig,
  MsgUpdateParams,
  MsgSudoContract,
  MsgPinCodes,
  MsgUnpinCodes,
  MsgStoreAndInstantiateContract,
  Exact,
  DeepPartial,
} from "./tx";

const baseUrl = "/cosmwasm.wasm.v1.";

export namespace CosmWasm {
  export const StoreAndInstantiateContract = function <
    I extends Exact<DeepPartial<MsgStoreAndInstantiateContract>, I>
  >(object: I) {
    return {
      typeUrl: baseUrl + "MsgStoreAndInstantiateContract",
      value: MsgStoreAndInstantiateContract.fromPartial(object),
    };
  };

  export const UnpinCodes = function <
    I extends Exact<DeepPartial<MsgUnpinCodes>, I>
  >(object: I) {
    return {
      typeUrl: baseUrl + "MsgUnpinCodes",
      value: MsgUnpinCodes.fromPartial(object),
    };
  };

  export const PinCodes = function <
    I extends Exact<DeepPartial<MsgPinCodes>, I>
  >(object: I) {
    return {
      typeUrl: baseUrl + "MsgPinCodes",
      value: MsgPinCodes.fromPartial(object),
    };
  };

  export const SudoContract = function <
    I extends Exact<DeepPartial<MsgSudoContract>, I>
  >(object: I) {
    return {
      typeUrl: baseUrl + "MsgSudoContract",
      value: MsgSudoContract.fromPartial(object),
    };
  };

  export const UpdateParams = function <
    I extends Exact<DeepPartial<MsgUpdateParams>, I>
  >(object: I) {
    return {
      typeUrl: baseUrl + "MsgUpdateParams",
      value: MsgUpdateParams.fromPartial(object),
    };
  };
  export const UpdateInstantiateConfig = function <
    I extends Exact<DeepPartial<MsgUpdateInstantiateConfig>, I>
  >(object: I) {
    return {
      typeUrl: baseUrl + "MsgUpdateInstantiateConfig",
      value: MsgUpdateInstantiateConfig.fromPartial(object),
    };
  };

  export const StoreCode = function <
    I extends Exact<DeepPartial<MsgStoreCode>, I>
  >(object: I) {
    return {
      typeUrl: baseUrl + "MsgStoreCode",
      value: MsgStoreCode.fromPartial(object),
    };
  };

  export const InstantiateContract = function <
    I extends Exact<DeepPartial<MsgInstantiateContract>, I>
  >(object: I) {
    return {
      typeUrl: baseUrl + "MsgInstantiateContract",
      value: MsgInstantiateContract.fromPartial(object),
    };
  };

  export const InstantiateContract2 = function <
    I extends Exact<DeepPartial<MsgInstantiateContract2>, I>
  >(object: I) {
    return {
      typeUrl: baseUrl + "MsgInstantiateContract2",
      value: MsgInstantiateContract2.fromPartial(object),
    };
  };

  export const ClearAdmin = function <
    I extends Exact<DeepPartial<MsgClearAdmin>, I>
  >(object: I) {
    return {
      typeUrl: baseUrl + "MsgClearAdmin",
      value: MsgClearAdmin.fromPartial(object),
    };
  };

  export const UpdateAdmin = function <
    I extends Exact<DeepPartial<MsgUpdateAdmin>, I>
  >(object: I) {
    return {
      typeUrl: baseUrl + "MsgUpdateAdmin",
      value: MsgUpdateAdmin.fromPartial(object),
    };
  };

  export const ExecuteContract = function <
    I extends Exact<DeepPartial<MsgExecuteContract>, I>
  >(object: I) {
    return {
      typeUrl: baseUrl + "MsgExecuteContract",
      value: MsgExecuteContract.fromPartial(object),
    };
  };

  export const MigrateContract = function <
    I extends Exact<DeepPartial<MsgMigrateContract>, I>
  >(object: I) {
    return {
      typeUrl: baseUrl + "MsgMigrateContract",
      value: MsgMigrateContract.fromPartial(object),
    };
  };
}
