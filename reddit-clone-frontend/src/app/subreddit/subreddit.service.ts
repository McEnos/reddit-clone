import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SubredditModel} from '../models/subreddit-model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubredditService {

  constructor(private http: HttpClient) {
  }

  getAllSubreddits(): Observable<SubredditModel[]> {
    return this.http.get<SubredditModel[]>('http://localhost:8050/api/subreddit/');
  }
}
