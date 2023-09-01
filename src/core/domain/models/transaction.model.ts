export type Transaction = {
  id: number;
  userId: number;
  recipientId: number;
  amount: number;
  number: string;
  relatedTransactionNumber: string;
  placeholder: string;
  responseCode: string | null;
  otp: string;
  status: number;
  paymentMethod: number;
  type: number;
  divider: number;
  registrationDate: string;
  confirmationDate: string;
  currency: string;
  successUrl: string;
  failureUrl: string;
  isManual: string;
  isActive: number;
  isHidden: number;
  relatedTransaction: Array<Transaction>;
};

export type InitialTransactionFormState = {
  transferAmount: number;
  transferData: string;
  receptionData: string;
  memo: string | null;
};

export type TransactionResponseCode = {
  code: string;
  message: string;
  description: string;
};
