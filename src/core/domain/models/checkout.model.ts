import { PaymentMethod } from './paymentMethod.model';

export interface ManualTransDetails {
  paymentMethod: PaymentMethod;
  transferAmount: number;
  orderNumber: string;
  transferData?: string;
}

export type CheckoutStore = {
  manualTransDetails: ManualTransDetails;
  setManualTransDetails: (data: Partial<ManualTransDetails>) => void;
};
