"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertStringToAny = void 0;
const any_pb_1 = require("google-protobuf/google/protobuf/any_pb");
const types_1 = require("../coreum/asset/nft/v1/types");
const convertStringToAny = (message) => {
    const formattedValueOfData = btoa(message);
    const dataBytesMessage = types_1.DataBytes.fromJSON({ Data: formattedValueOfData });
    const dataBytesBinary = types_1.DataBytes.encode(dataBytesMessage).finish();
    const formattedAnyDataValue = new any_pb_1.Any();
    formattedAnyDataValue.typeUrl = '/coreum.asset.nft.v1.DataBytes';
    formattedAnyDataValue.value = dataBytesBinary;
    return formattedAnyDataValue;
};
exports.convertStringToAny = convertStringToAny;
