// categorie.component.ts
import { Component, OnInit } from '@angular/core';
import { CategorieService } from 'path-to-categorie-service';  // Replace with the correct path

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  categories: any[] = [];

  constructor(private categorieService: CategorieService) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categorieService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }
}
