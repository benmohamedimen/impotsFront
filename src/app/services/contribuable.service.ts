import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContribuableService {

  private uri = 'http://localhost:9099/contribuables/';
  headers = new HttpHeaders();
  constructor(public http: HttpClient) { }

  getAllContribuable() {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.get(this.uri + '/all', options);
  }

  getContribuableById(idCategorie) {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.get(this.uri + 'find/' + idCategorie, options);
  }

  addContribuable(categorie) {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.post(this.uri + 'add', categorie, options);
  }

  updateContribuable(categorie) {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.put(this.uri + 'update', categorie, options);
  }

  deleteContribuable(idCategorie) {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.delete(this.uri + 'delete/' + idCategorie, options);
  }
  authentication(login, pwd) {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.get(this.uri + 'authentication/' + login + '/' + pwd, options);
  }

  getByLogin(login) {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.get(this.uri + 'find-by-login/' + login , options);
  }

  getByLoginAndEmail(login, email) {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.get(this.uri + 'get-by-email-login/' + login + '/' + email, options);
  }

  getCode(): Observable<any> {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.get(this.uri + 'getcode', options);
  }
}
