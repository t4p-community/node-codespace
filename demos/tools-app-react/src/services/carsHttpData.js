import { BaseHttpData } from "./baseHttpData";

export class CarsHttpData extends BaseHttpData {

  constructor(baseUrl) {
    super(baseUrl, "cars");
  }
}