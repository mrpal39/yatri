import { HTTPBaseService } from "./interceptor";
import { RequstAccessToken } from "./types";

export class MainApiProtectedVersion extends HTTPBaseService {
  [x: string]: any;
  private primary_key?: number = 0;

  public constructor(
    access_token?: string,
    primary_key?: number,

    params?: any
  ) {
    super("http://localhost:8000/");
    this.primary_key = primary_key;
    this.params = params;
  }

  public requstGetBike = () => this.instance.get(``);
  // public requstGetBikeId = () =>
  //   this.instance.get(`/api/property/property-details/${this.primary_key}/`);

  //#########################################invoice###################################################
}
