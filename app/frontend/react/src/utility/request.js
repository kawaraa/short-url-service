class Request {
  static fetch(url, method = "GET", responseType = "json") {
    // "json", "text", "document", blob, "arraybuffer"
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.responseType = responseType.toLocaleLowerCase();
      xhr.open(method, url, true);
      xhr.onload = () => {
        const result = xhr.responseType !== "text" ? xhr.response : xhr.responseText;
        if (xhr.status >= 200 && xhr.status < 300 && result) return resolve(result);
        const error = result && result.message ? result.message : result;
        return reject(new Error(error || "Something went wrong please try again(!)"));
      };
      xhr.onerror = (error) => reject(new Error("NetworkError: Please check your connection(!)"));
      xhr.send();
    });
  }
  static send(data, url, method = "POST", type = "application/json", responseType = "json") {
    // "application/json", "x-www-form-urlencoded", "text/plain", text/html
    // Not: if "Content-Type" is "application/json", then the data you send must be json.
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.responseType = responseType;
      xhr.open(method, url, true);
      xhr.setRequestHeader("Content-Type", type);
      xhr.onload = () => {
        const result = xhr.responseType !== "text" ? xhr.response : xhr.responseText;
        if (xhr.status >= 200 && xhr.status < 300 && result) return resolve(result);
        const error = result && result.message ? result.message : result;
        return reject(new Error(error || "Something went wrong please try again(!)"));
      };
      xhr.onerror = (error) => reject(new Error("NetworkError: Please check your connection(!)"));
      xhr.send(data ? JSON.stringify(data) : null);
    });
  }
}

export default Request;
