export interface LayoutStore {
  hydrated: boolean;
  termsAndConditionsAccepted: boolean;
  acceptTermsAndConditions: () => void;
}

export interface ValidationBadgeProps {
  condition: boolean;
  warning?: boolean;
}
