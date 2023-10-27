import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  HeadersDefaults,
} from "axios";
import { LocalStorage } from "./local_storage";

export abstract class HTTPBaseService extends LocalStorage {
  protected instance: AxiosInstance;
  protected readonly baseURL: string;

  public constructor(baseURL: string) {
    super();
    this.baseURL = baseURL;
    this.instance = axios.create({
      baseURL,
      timeout: 5000,
    });
    this.initializeRequestInterceptor();
    this.initializeResponseInterceptor();
  }

  /** Mange localstorage */
  private initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use(this.handleRequest);
  };

  private initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use((response: any) => {
      return response;
    }, this.handleError);
  };

  private handleRequest = (config: AxiosRequestConfig) => {
    return config;
  };

  private handleError = async (error: AxiosError) => {
    const originalRequest = error.config;
    const requestURL = error.response?.config.url;

    /**
     * If status is 403 and not refresh token.
     * If refresh token response is 403 means request access token is must.
     * Other error.
     */
    if (error.response?.status === 400) {
      console.log(error.response?.status);
    } else if (error.response?.status === 403) {
      console.log(error.response?.status);
    } else if (error.response?.status === 500) {
      console.log("Error is 500.");
    } else {
      console.log("Unknown error ....");
    }
  };
}
