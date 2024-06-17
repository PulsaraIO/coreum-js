import { Any } from 'google-protobuf/google/protobuf/any_pb';
import { DataBytes } from '../coreum/asset/nft/v1/types';
export const convertStringToAny = (message) => {
    const formattedValueOfData = btoa(message);
    const dataBytesMessage = DataBytes.fromJSON({ Data: formattedValueOfData });
    const dataBytesBinary = DataBytes.encode(dataBytesMessage).finish();
    const formattedAnyDataValue = new Any();
    formattedAnyDataValue.typeUrl = '/coreum.asset.nft.v1.DataBytes';
    formattedAnyDataValue.value = dataBytesBinary;
    return formattedAnyDataValue;
};
