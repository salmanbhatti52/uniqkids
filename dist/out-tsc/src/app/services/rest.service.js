import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let RestService = class RestService {
    constructor(http) {
        this.http = http;
        this.heroko = 'https://cors-anywhere.herokuapp.com/';
        this.baseURL = 'https://dev.eigix.com/uniqkidzs/api';
        this.id = 'post';
    }
    sendRequest(action, data) {
        // let header;
        // if (token) {
        //   header = new HttpHeaders({
        //     "Auth-Key": token,
        //   });
        //   header.append("Access-Control-Allow-Origin", "*");
        //   header.append(
        //     "Access-Control-Allow-Methods",
        //     "POST, GET, DELETE, PUT,OPTIONS"
        //   );
        // } else {
        //   header = new HttpHeaders();
        //   header.append("Access-Control-Allow-Origin", "*");
        //   header.append(
        //     "Access-Control-Allow-Methods",
        //     "POST, GET, DELETE, PUT,OPTIONS"
        //   );
        // }
        // return this.http.post(`${this.baseURL}/${action}/`, JSON.stringify(data), {
        //   headers: header,
        // });
        //   var cors_api_url = 'https://cors-anywhere.herokuapp.com/';
        // function doCORSRequest(options, printResult) {
        //   var x = new XMLHttpRequest();
        //   x.open(options.method, cors_api_url + options.url);
        //   x.onload = x.onerror = function() {
        //     printResult(
        //       options.method + ' ' + options.url + '\n' +
        //       x.status + ' ' + x.statusText + '\n\n' +
        //       (x.responseText || '')
        //     );
        //   };
        //   if (/^POST/i.test(options.method)) {
        //     x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        //   }
        //   x.send(options.data);
        // }
        // // Bind event
        // let val=this
        // var baseURL='https://dev.eigix.com/uniqkidzs/api';
        // (function() {
        //   var urlField = document.getElementById('url');
        //   var dataField = document.getElementById('data');
        //   var outputField = document.getElementById('output');
        //   document.getElementById('get').onclick =
        //   document.getElementById('post').onclick = function(e) {
        //     e.preventDefault();
        //     doCORSRequest({
        //       method: val.id === 'post' ? 'POST' : 'GET', 
        //       url: baseURL,
        //       data: JSON.stringify(data)
        //     }, function printResult(result) {
        //       console.log('fahsjhdgjhsa',result)
        //     });
        //   };
        // })();
        return this.http.post(`${this.baseURL}/${action}`, JSON.stringify(data));
    }
    getRequest(action, data) {
        return this.http.get(`${this.baseURL}/${action}`, data);
    }
};
RestService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], RestService);
export { RestService };
//# sourceMappingURL=rest.service.js.map