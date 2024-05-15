

// Java, C#, C++, Python - all use what's known as classical inheritance
// Javascript - use protoype inheritance, infact JavaScript classes are not classes but functions


export class BaseHttpData {

  #baseUrl;
  #resourceName;

  constructor(baseUrl, resourceName)  {
    this.#baseUrl = baseUrl;
    this.#resourceName = resourceName;
  }

  collectionUrl() {
    return `${this.#baseUrl}/${this.#resourceName}`;  // base Url for calling color endpoints

  }

  memberUrl(resourceId) {
    return `${this.#baseUrl}/${this.#resourceName}/${resourceId}`;
  }

  // Javascript is single threaded. We use async for all the methods running on web
  // Javascript hosts (web) supports multiple threads
  async all() {
    // calls the rest api to fetch the colors
    const res = await fetch(this.collectionUrl());
    // deserializes the colors json text into an array of javascript color objects
    // the code will run until await - when await is reached, it handing off the process to web browser / other threads on the host
    // which uses background threads to complete the operation
    // since fetch operation can block the main thread we use await to split the tasks and give to different threads on host
   // const colors = await res.json();
    // returns array of colors to the caller
    return await res.json();
  }

    // Client side code 
    async append(newResource) {
      const res = await fetch(this.collectionUrl(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newResource),
      });
      //const color = await res.json();
      return await res.json();
    }
  
    async remove(resourceId) {
      await fetch(this.memberUrl(resourceId), {
        method: 'DELETE'
      });
    }
}
