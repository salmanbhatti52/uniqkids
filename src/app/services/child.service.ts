import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChildService {
  medication=[];
  food=[];
  snack=[];
  likes=[];
  dislikes=[];
  favorite=[];
  childid:any;
  parentid:any;

  page:any;

  childdata:any;

  childarray=[];
  constructor() { }
}
