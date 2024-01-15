import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedevableService {
  private apiUrl = 'http://localhost:9090/redevables';

  constructor(private http: HttpClient) { }

  // Get all redevables
  getRedevables(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Get a redevable by ID
  getRedevableById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  // Add a new redevable
  addRedevable(redevableData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, redevableData);
  }

  // Update an existing redevable
  updateRedevable(id: number, redevableData: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, redevableData);
  }

  // Delete a redevable by ID
  deleteRedevable(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}