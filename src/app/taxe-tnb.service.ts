import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaxeTNBService {
  private apiUrl = 'http://localhost:9090/taxe-tnb';

  constructor(private http: HttpClient) { }

  getTaxeTNBs(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getTaxeTNBById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  addTaxeTNB(taxeTNBData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, taxeTNBData);
  }

  updateTaxeTNB(id: number, taxeTNBData: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, taxeTNBData);
  }

  deleteTaxeTNB(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}