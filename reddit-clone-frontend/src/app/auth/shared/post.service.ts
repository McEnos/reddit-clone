import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PostModel} from '../../models/post-model';
import {CreatePostPayload} from '../../models/create-post-payload';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {
  }

  getAllPosts(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>('http://localhost:8050/api/posts/');
  }

  createPost(postPayload: CreatePostPayload): Observable<any> {
    return this.http.post('http://localhost:8050/api/posts/', postPayload);
  }
}
