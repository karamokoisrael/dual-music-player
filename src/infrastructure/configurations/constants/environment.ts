import { EnvironmentType, Environment } from "../../../core/domain/models/environment.model";
const environmentData: Record<EnvironmentType, Environment> = {
  development: {
    websiteName: "Cryptomarket-ci",
    websiteEmail: "contact@cryptomarket-ci.com",
    websitePhone: "+225012345678",
    websiteLocation: " Abidjan, Cocody, Riviera 3",
    websiteMapData: "",
    webUrl: process.env.WEB_URL || "https://cryptomarket-ci.com",
    dashboardUrl:
      process.env.WEB_URL || "https://dashboard.cryptomarket-ci.com",
    // apiUrl: process.env.API_URL || "https://localhost:17423",
    apiUrl: process.env.API_URL || "https://api.cryptomarket-ci.com",
    whatsappNumber: "+2250546941040",
    deepLinkDomain: "cryptomarket-ci.com",
  },
  production: {
    websiteName: "Cryptomarket-ci",
    websiteEmail: "contact@cryptomarket-ci.com",
    websitePhone: "+225012345678",
    websiteLocation: " Abidjan, Cocody, Riviera 3",
    websiteMapData: "",
    webUrl: process.env.WEB_URL || "https://cryptomarket-ci.com",
    dashboardUrl:
      process.env.WEB_URL || "https://dashboard.cryptomarket-ci.com",
    apiUrl: process.env.API_URL || "https://api.cryptomarket-ci.com",
    whatsappNumber: "+2250546941040",
    deepLinkDomain: "cryptomarket-ci.com",
  },
};

const currentEnv: EnvironmentType = process.env.NODE_ENV
  ? (process.env.NODE_ENV as EnvironmentType)
  : "production";
const environment: Environment = (environmentData as Record<string, any>)[
  currentEnv
];
export const envVersion = currentEnv;
export const env = environment;
export default environment;
