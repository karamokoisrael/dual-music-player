import { BaseHttpResponse, PaginatedHttpResponse, Query } from "@domain/models";

export abstract class ItemsRepositoryPort {
  abstract createOne<T>(
    params: Record<string, any>
  ): Promise<BaseHttpResponse<T>>;

  abstract readByQuery<T>(query: Query): Promise<PaginatedHttpResponse<T>>;

  abstract readOne<T>(id: number): Promise<BaseHttpResponse<T>>;

  abstract updateOne<T>(
    id: number | string,
    params: Record<string, any>
  ): Promise<BaseHttpResponse<T>>;

  abstract deleteOne<T>(id: number | string): Promise<BaseHttpResponse<T>>;
}
