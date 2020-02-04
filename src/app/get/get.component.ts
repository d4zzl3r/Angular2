import { Component, OnInit } from '@angular/core';
import {  HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})


export class GETComponent implements OnInit {
 id:any;
 Userid:any;
 Body:any;
 Title:any;
  constructor(private http: HttpClient) {
    this.http.get("https://jsonplaceholder.typicode.com/posts/1").toPromise().then(data => {
      console.log(data);
      this.id=data["id"];
      this.Userid=data["userId"];
      this.Body=data["body"]
      this.Title=data["title"];
    });
  }

  ngOnInit() {
    
  }
}
