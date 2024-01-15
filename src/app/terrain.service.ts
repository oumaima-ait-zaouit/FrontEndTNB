import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TerrainService {
  private apiUrl = 'http://localhost:9090/terrains'; 

  constructor(private http: HttpClient) { }

  getTerrains(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getTerrainById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  addTerrain(terrainData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, terrainData);
  }

  updateTerrain(id: number, terrainData: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, terrainData);
  }

  deleteTerrain(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}