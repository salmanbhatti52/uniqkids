import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RestService {
    heroko:any='https://cors-anywhere.herokuapp.com/'
	// baseURL:any='https://dev.eigix.com/uniqkidzs/api';
  baseURL:any='https://admin.uniqkidzapp.com/api';
  id='post';
  constructor(private http: HttpClient) { }


   sendRequest(action, data) {
   
    return this.http.post(`${this.baseURL}/${action}`, JSON.stringify(data), {
      // headers: header,
    });

  
  return this.http.post(`${this.baseURL}/${action}`, JSON.stringify(data));
  }


  getRequest(action) {
    
  return this.http.get(`${this.baseURL}/${action}`);
  }


  formatAMPM(date, am?) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let strTime;
    const ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    if (am == false) {
      strTime = hours + ":" + minutes;
    } else {
      strTime = hours + ":" + minutes + " " + ampm;
    }
    return strTime;
  }
}
