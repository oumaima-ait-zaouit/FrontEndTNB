import { Component } from '@angular/core';

import { Component, OnInit } from '@angular/core';
import { RedevableService } from '../redevable.service';

@Component({
  selector: 'app-redevable-list',
  templateUrl: './redevable-list.component.html',
  styleUrls: ['./redevable-list.component.css']
})
export class RedevableListComponent implements OnInit {
  redevables: any[];

  constructor(private redevableService: RedevableService) { }

  ngOnInit(): void {
    this.getRedevables();
  }

  getRedevables(): void {
    this.redevableService.getRedevables().subscribe(redevables => this.redevables = redevables);
  }
}
