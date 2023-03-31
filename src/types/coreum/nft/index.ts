export enum ClassFeature {
  burning = 0,
  freezing = 1,
  whitelisting = 2,
  disable_sending = 3,
}

export interface Class {
  id: string;
  issuer: string;
  name: string;
  symbol: string;
  description: string;
  uri: string;
  uri_hash: string;
  data: any;
  features: ClassFeature[];
  royalty_rate: string; // Number between 0 and 1.
}

export interface ClassDefinition {
  id: string;
  issuer: string;
  features: ClassFeature[];
  royalty_rate: string;
}
