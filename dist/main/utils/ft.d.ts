import { Feature } from "../coreum/asset/ft/v1/token";
export declare const parseTokenFeatures: (features: Feature[]) => {
    minting: boolean;
    freezing: boolean;
    burning: boolean;
    whitelisting: boolean;
};
