import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TauxService {
  private apiUrl = 'http://localhost:9090/taux';

  constructor(private http: HttpClient) { }

  getTaux(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getTauxById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  addTaux(tauxData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, tauxData);
  }

  updateTaux(id: number, tauxData: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, tauxData);
  }

  deleteTaux(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}