export enum NonceType {
  Chapter = "chapter",
}

export interface Nonce {
  _id: string;
  type: NonceType;
  chapter?: string;
  createdAt: string;
}
