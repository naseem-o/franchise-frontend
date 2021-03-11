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
    this.franchiseService.save(this.franchise).subscribe(result => this.gotoFranchiseList());
  }

  gotoFranchiseList() {
    this.router.navigate(['/rest/franchise/list']);
  }

  public showMyMessage = false

showMessageSoon() {
  setTimeout(() => {
    this.showMyMessage = true
  }, 1000)
}

  ngOnInit(): void {
  }

}
