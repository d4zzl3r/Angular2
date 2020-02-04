import { Component, OnInit } from '@angular/core';
import {  HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class POSTComponent implements OnInit {

  constructor(private http:HttpClient) { }
  id:string;
  userId:string;
  Body:string;
  Title:string;

  ngOnInit() {
  }
  OnPost()
  {
    console.log(this.id,this.userId,this.Title,this.Body);
    var data= JSON.stringify({ title : this.id,body : this.Body,userId : this.userId});
    this.http.post("https://jsonplaceholder.typicode.com/posts",data).subscribe(data1=>
    alert(data + "POST SUCCESFULL"));
  }

}
