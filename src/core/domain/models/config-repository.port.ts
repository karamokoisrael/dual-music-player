import { AppConfig } from "./config.model";
import { BaseHttpResponse } from "./request.model";

export abstract class ConfigRepositoryPort {
    abstract read(): Promise<BaseHttpResponse<AppConfig>>;
}
