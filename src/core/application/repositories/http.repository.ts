import axios from "axios";
import { formatApiUrl } from "../helpers";
import { BaseHttpResponse } from "@domain/models";
import { HttpRepositoryPort } from "@domain/ports/repositories";
import { TranslationServicePort } from "@domain/ports/services";

export class HttpRepository implements HttpRepositoryPort {
  private accessToken?: string;
  constructor(private readonly translationService: TranslationServicePort, accessToken?: string) {
    this.accessToken = accessToken;
  }

  getHeaders(providedHeaders?: Record<string, any>) {
    const defaultHeaders = {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Expose-Headers": "*",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Accept-Language": this.translationService.getLanguage()
    };
    const headers =
      this.accessToken && this.accessToken != ""
        ? { ...defaultHeaders, Authorization: `Bearer ${this.accessToken}` }
        : defaultHeaders;

    return providedHeaders ? { ...headers, ...providedHeaders } : headers;
  }

  getMessage<T>(data: any): BaseHttpResponse<T> {  
    const message =
      data && data.response && data.response.data && data.response.data.message
        ? data.response.data.message
        : this.translationService.t("operation_successful");

    return {
      statusCode: 200,
      message,
      headers: {},
    };
  }

  getErrorMessage<T>(error: any): BaseHttpResponse<T> {
    // if(!error.statusCode) error.statusCode = 200;
    // if (error.message) return error;
    // console.log(error.message);
    let message = this.translationService.t(
      "we_encountered_an_unexpected_error_during_the_operation_check_your_internet_connection_and_try_again"
    );
    let statusCode = 500;
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.message
    )
      message = error.response.data.messagse;

    if (error.response.data.errorMessage)
      message = error.response.data.errorMessage;

    if (error && error.response && error.response.status)
      statusCode = error.response.status;

    return {
      statusCode,
      message,
      headers: {},
    };
  }

  objectToQueryString(query: Record<string, any>) {
    let str = "";
    Object.keys(query).forEach((key) => {
      str += `${key}=${query[key]}&`;
    });
    return str;
  }

  async get<T>(
    path: string,
    params?: Record<string, any>,
    config?: any,
    headers?: any
  ): Promise<BaseHttpResponse<T>> {
    try {
      const response = await axios.get<T>(formatApiUrl(path), {
        ...config,
        params: params,
        headers: this.getHeaders(headers),
      });
      const httpResponse: BaseHttpResponse<T> = {
        statusCode: response.status,
        data: response.data,
        message: (response.data as any).message
          ? (response.data as any).message
          : undefined,
        headers: response.headers,
      };
      return httpResponse;
    } catch (error: any) {
      return this.getErrorMessage(error);
    }
  }

  async post<T>(
    path: string,
    params?: Record<string, any>,
    config?: any,
    headers?: any
  ): Promise<BaseHttpResponse<T>> {
    try {
      const response = await axios.post<T>(
        formatApiUrl(path),
        { ...params },
        { ...config, headers: this.getHeaders(headers) }
      );

      console.log(response.data);
      
      const httpResponse: BaseHttpResponse<T> = {
        statusCode: response.status,
        data: response.data,
        message: (response.data as any).message
          ? (response.data as any).message
          : undefined,
        headers: response.headers,
      };
      return httpResponse;
    } catch (error: any) {
      return this.getErrorMessage(error);
    }
  }

  async put<T>(
    path: string,
    params?: Record<string, any>,
    config?: any,
    headers?: any
  ): Promise<BaseHttpResponse<T>> {
    try {
      const response = await axios.put<T>(
        formatApiUrl(path),
        { ...params },
        { ...config, headers: this.getHeaders(headers) }
      );
      const httpResponse: BaseHttpResponse<T> = {
        statusCode: response.status,
        data: response.data,
        message: (response.data as any).message
          ? (response.data as any).message
          : undefined,
        headers: response.headers,
      };
      return httpResponse;
    } catch (error: any) {
      return this.getErrorMessage(error);
    }
  }

  async patch<T>(
    path: string,
    params?: Record<string, any>,
    config?: any,
    headers?: any
  ): Promise<BaseHttpResponse<T>> {
    try {
      const response = await axios.patch<T>(
        formatApiUrl(path),
        { ...params },
        { ...config, headers: this.getHeaders(headers) }
      );
      const httpResponse: BaseHttpResponse<T> = {
        statusCode: response.status,
        data: response.data,
        message: (response.data as any).message
          ? (response.data as any).message
          : undefined,
        headers: response.headers,
      };
      return httpResponse;
    } catch (error: any) {
      return this.getErrorMessage(error);
    }
  }

  async delete<T>(
    path: string,
    params?: any,
    config?: any,
    headers?: any
  ): Promise<BaseHttpResponse<T>> {
    try {
      const response = await axios.delete<T>(path, {
        ...config,
        params: params,
        headers: this.getHeaders(headers),
      });
      const httpResponse: BaseHttpResponse<T> = {
        statusCode: response.status,
        data: response.data,
        message: (response.data as any).message
          ? (response.data as any).message
          : undefined,
        headers: response.headers,
      };
      return httpResponse;
    } catch (error: any) {
      return this.getErrorMessage(error);
    }
  }

  async postWithFiles<T>(
    path: string,
    files: {
      name: string;
      data: any;
    }[],
    params: Record<string, any> = {},
    config?: any,
    headers?: any
  ): Promise<BaseHttpResponse<T>> {
    try {
      const reqHeaders = this.getHeaders({
        "Content-Type": "multipart/form-data",
      });
      const formData = new FormData();
      for (const file of files) {
        formData.append(file.name, file.data);
      }
      Object.keys(params).forEach((key) => {
        formData.append(key, params[key]);
      });

      const response = await axios.post<T>(
        formatApiUrl(path),
        { ...params },
        {
          ...config,
          headers: headers ? { ...headers, reqHeaders } : reqHeaders,
        }
      );

      const httpResponse: BaseHttpResponse<T> = {
        statusCode: response.status,
        data: response.data,
        message: (response.data as any).message
          ? (response.data as any).message
          : undefined,
        headers: response.headers,
      };
      return httpResponse;
    } catch (error: any) {
      return this.getErrorMessage(error);
    }
  }
}
