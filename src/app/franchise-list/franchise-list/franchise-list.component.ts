import { Component, OnInit } from '@angular/core';
import { Franchise } from 'src/app/model/franchise';
import { FranchiseService } from 'src/app/service/franchise.service'

@Component({
  selector: 'app-franchise-list',
  templateUrl: './franchise-list.component.html',
  styleUrls: ['./franchise-list.component.css']
})
export class FranchiseListComponent implements OnInit {

  franchises: Franchise[] = [];

  constructor(private franchiseService: FranchiseService) {
    this.franchises = [];
   }

  ngOnInit(): void {
    this.franchiseService.findAll().subscribe(data => {
      this.franchises = data;
    });
  }

}
