import { BaseHttpData } from "./baseHttpData";

export class ColorsHttpData extends BaseHttpData {

  constructor(baseUrl) {
    super(baseUrl, "colors");
  }


  // // Javascript is single threaded. We use async for all the methods running on web
  // // Javascript hosts (web) supports multiple threads

  // async all() {
  //   // calls the rest api to fetch the colors
  //   const res = await fetch(this.collectionUrl());
  //   // deserializes the colors json text into an array of javascript color objects
  //   // the code will run until await - when await is reached, it handing off the process to web browser / other threads on the host
  //   // which uses background threads to complete the operation
  //   // since fetch operation can block the main thread we use await to split the tasks and give to different threads on host
  //  // const colors = await res.json();
  //   // returns array of colors to the caller
  //   return await res.json();
  // }

  // // Client side code 
  // async append(newColor) {
  //   const res = await fetch(this.collectionUrl(), {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(newColor),
  //   });
  //   //const color = await res.json();
  //   return await res.json();
  // }

  // async remove(colorId) {
  //   await fetch(this.memberUrl(colorId), {
  //     method: 'DELETE'
  //   });
  // }

}
