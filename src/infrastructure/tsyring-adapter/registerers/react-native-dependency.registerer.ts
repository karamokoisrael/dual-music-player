import { InjectionToken } from "tsyringe";
import { DIContainer } from "../containers/react-native-dependency.container";
export function registerReactNativeDependencies() {
  // const apiExtensionContext = new ApiExtensionContextProvider({
  //   ...extensionContext,
  //   exceptions: { ...extensionContext.exceptions, ...exceptions },
  // });
  // DIContainer.registerInstance(
  //   DependenciesEnum.ApiExtensionContextProvider,
  //   apiExtensionContext
  // );
  // DIContainer.registerInstance<TranslationServicePort>(
  //   DependenciesEnum.TranslationServicePort,
  //   new TranslationService()
  // );
}

export function injectDependency<T>(token: InjectionToken<T>, instance: T) {
  DIContainer.registerInstance(token, instance);
}
