// taux.component.ts
import { Component, OnInit } from '@angular/core';
import { TauxService } from 'path-to-taux-service';  // Replace with the correct path

@Component({
  selector: 'app-taux',
  templateUrl: './taux.component.html',
  styleUrls: ['./taux.component.css']
})
export class TauxComponent implements OnInit {
  tauxList: any[] = [];

  constructor(private tauxService: TauxService) { }

  ngOnInit(): void {
    this.loadTaux();
  }

  loadTaux(): void {
    this.tauxService.getTaux().subscribe(data => {
      this.tauxList = data;
    });
  }
}
