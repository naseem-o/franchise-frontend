import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FranchiseListComponent } from './franchise-list/franchise-list/franchise-list.component';
import { FranchiseFormComponent } from './franchise-form/franchise-form/franchise-form.component';
import { FranchiseService } from './service/franchise.service';

@NgModule({
  declarations: [
    AppComponent,
    FranchiseListComponent,
    FranchiseFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [FranchiseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
