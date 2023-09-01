import { TranslationServicePort } from "@domain/ports/services";
import i18n from "@infrastructure/react-native-adapter/helpers/globalization.helper";

export class TranslationService implements TranslationServicePort {
    getLanguage() { return i18n.locale }
    formatDate(dateTime: any) {
        const date = new Date(dateTime);
        return date.toLocaleDateString(`${this.getLanguage()}-${this.getLanguage()}`);
    }
    t(param: any): string {
        return i18n.t(param);
    }
}