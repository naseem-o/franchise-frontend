import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FranchiseService } from 'src/app/service/franchise.service';
import { Franchise } from 'src/app/model/franchise';


@Component({
  selector: 'app-franchise-form',
  templateUrl: './franchise-form.component.html',
  styleUrls: ['./franchise-form.component.css']
})
export class FranchiseFormComponent implements OnInit {

  franchise: Franchise;

  constructor(
    private route : ActivatedRoute, 
    private router : Router,
    private franchiseService : FranchiseService
  ) { this.franchise = new Franchise()}

  onSubmit() {
    this.franchiseService.save(this.franchise)
    .subscribe({
      next: result => {
        this.gotoFranchiseList();
        alert("Details submitted!!!");
      },
       error:error => {
          alert(error.error.message);
        }}
       );
  }

  gotoFranchiseList() {
    this.router.navigate(['/rest/franchise/list']);
  }


  ngOnInit(): void {
  }

}
