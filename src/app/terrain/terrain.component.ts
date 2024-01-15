// terrain.component.ts
import { Component, OnInit } from '@angular/core';
import { TerrainService } from 'path-to-terrain-service';  // Replace with the correct path

@Component({
  selector: 'app-terrain',
  templateUrl: './terrain.component.html',
  styleUrls: ['./terrain.component.css']
})
export class TerrainComponent implements OnInit {
  terrains: any[] = [];

  constructor(private terrainService: TerrainService) { }

  ngOnInit(): void {
    this.loadTerrains();
  }

  loadTerrains(): void {
    this.terrainService.getTerrains().subscribe(data => {
      this.terrains = data;
    });
  }
}
