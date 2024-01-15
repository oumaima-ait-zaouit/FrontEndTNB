import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RedevableService } from '../redevable.service';

@Component({
  selector: 'app-redevable-details',
  templateUrl: './redevable-details.component.html',
  styleUrls: ['./redevable-details.component.css']
})
export class RedevableDetailsComponent implements OnInit {
  redevable: any;

  constructor(
    private route: ActivatedRoute,
    private redevableService: RedevableService
  ) { }

  ngOnInit(): void {
    this.getRedevableDetails();
  }

  getRedevableDetails(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.redevableService.getRedevable(id).subscribe(redevable => this.redevable = redevable);
  }
}
