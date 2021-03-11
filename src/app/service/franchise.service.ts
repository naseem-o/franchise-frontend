import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Franchise } from 'src/app/model/franchise';
import { Observable,of, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FranchiseService {
  private franchiseAddUrl : string;
  private franchiseListUrl : string;

  constructor(private http: HttpClient) { 
    this.franchiseAddUrl =  'http://localhost:8080/rest/franchise/save';
    this.franchiseListUrl = 'http://localhost:8080/rest/franchise/list';
  }

  public findAll(): Observable<Franchise[]> {
    return this.http.get<Franchise[]>(this.franchiseListUrl);
  }

  public save(franchise: Franchise) {
    return this.http.post<Franchise>(this.franchiseAddUrl, franchise);
  }
}
