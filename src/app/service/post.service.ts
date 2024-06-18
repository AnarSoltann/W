import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BasicURL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  createNewPost(data: any):Observable<any>{
    return this.http.post(BasicURL + 'api/posts', data);
  }


  
  getAllPosts():Observable<any>{
    return this.http.get(BasicURL + 'api/posts');
  }


  getPostById(postId:number):Observable<any>{
    return this.http.get(`${BasicURL}api/posts/${postId}`);
}





}
