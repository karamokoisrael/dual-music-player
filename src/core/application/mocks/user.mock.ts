import { User } from "../../domain/models";

export const emptyUserMock: User = {
  id: -1,
  email: "",
  publicKey: "",
  token: "",
  tokenExpiration: new Date(),
  refreshToken: "",
  refreshTokenExpiration: new Date(),
  isLocked: 0,
  alertLevel: 0,
  isActive: 0,
  role: 0,
  referalToken: "",
  balance: 0,
  currency: "XOF",
  address: "",
  address2: "",
  addressDocument: "",
  addressDocumentType: 0,
  addressDocumentVerified: 0,
  apiActivated: 0,
  apiToken: "",
  bio: "",
  city: "",
  country: 0,
  displayName: "",
  emailVerified: 0,
  firstName: "",
  language: "fr",
  lastName: "",
  legalDocument: "",
  legalDocumentType: 0,
  legalDocumentVerified: 0,
  parentReferalToken: "",
  phone: "",
  phoneVerified: 0,
  postalCode: "",
  registrationDate: "",
  securityLevel: 0,
  selfie: "",
  thumb: "",
  totalAffiliates: 0,
  transactionHistory: {
    transactions: [],
    totalMonthlyAmount: 0,
    totalTransactionsAmount: 0,
    totalTransferAmount: 0,
    totalReceptionAmount: 0,
  },
  verificationLevel: 0,
  website: "",
};

export const userMock: User = {
  id: -1,
  email: "",
  publicKey: "",
  token: "",
  tokenExpiration: new Date(),
  refreshToken: "",
  refreshTokenExpiration: new Date(),
  isLocked: 0,
  alertLevel: 0,
  isActive: 0,
  role: 0,
  referalToken: "",
  balance: 0,
  currency: "XOF",
  address: "",
  address2: "",
  addressDocument: "",
  addressDocumentType: 0,
  addressDocumentVerified: 0,
  apiActivated: 0,
  apiToken: "",
  bio: "",
  city: "",
  country: 0,
  displayName: "",
  emailVerified: 0,
  firstName: "",
  language: "fr",
  lastName: "",
  legalDocument: "",
  legalDocumentType: 0,
  legalDocumentVerified: 0,
  parentReferalToken: "",
  phone: "",
  phoneVerified: 0,
  postalCode: "",
  registrationDate: "",
  securityLevel: 0,
  selfie: "",
  thumb: "",
  totalAffiliates: 0,
  transactionHistory: {
    transactions: [],
    totalMonthlyAmount: 0,
    totalTransactionsAmount: 0,
    totalTransferAmount: 0,
    totalReceptionAmount: 0,
  },
  verificationLevel: 0,
  website: "",
};
