import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  postsUrl : string = `${environment.baseUrl}/posts`

  constructor(
    private http : HttpClient
  ) { }

  fetchAllPosts(): Observable<any>{
    return  this.http.get<any>(this.postsUrl)
  }
}
