// taxetnb.component.ts
import { Component, OnInit } from '@angular/core';
import { TaxeTNBService } from 'path-to-taxetnb-service';  // Replace with the correct path

@Component({
  selector: 'app-taxetnb',
  templateUrl: './taxetnb.component.html',
  styleUrls: ['./taxetnb.component.css']
})
export class TaxeTNBComponent implements OnInit {
  taxeTNBList: any[] = [];

  constructor(private taxetnbService: TaxeTNBService) { }

  ngOnInit(): void {
    this.loadTaxeTNB();
  }

  loadTaxeTNB(): void {
    this.taxetnbService.getTaxeTNBs().subscribe(data => {
      this.taxeTNBList = data;
    });
  }
}
