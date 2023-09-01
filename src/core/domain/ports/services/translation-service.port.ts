export abstract class TranslationServicePort {
    abstract getLanguage(): string;
    abstract formatDate(dateTime: any): string;
    abstract t(param: any): string;
}