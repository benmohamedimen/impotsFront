import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routing } from './app.routing';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ChartModule } from 'angular-highcharts';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BodyComponent } from './component/body/body.component';
import { AsideComponent } from './component/aside/aside.component';
import { HeaderComponent } from './component/header/header.component';
import { LoginComponent } from './component/login/login.component';
import { PrincipalComponent } from './component/principal/principal.component';
import { MonProfilComponent } from './component/mon-profil/mon-profil.component';
import { ExerciceComponent } from './component/exercice/exercice.component';
import { DeclarationExistencesComponent } from './component/declaration-existences/declaration-existences.component';
import { DeclarationImpotssComponent } from './component/declaration-impotss/declaration-impotss.component';
import { EmployeesComponent } from './component/employees/employees.component';
import { ImpotsRPPsComponent } from './component/impots-rpps/impots-rpps.component';
import { LoyersComponent } from './component/loyers/loyers.component';
import { ContribuablesComponent } from './component/contribuables/contribuables.component';
import { PersonnePhyzComponent } from './component/personne-phyz/personne-phyz.component';
import { PersonneMorlComponent } from './component/personne-morl/personne-morl.component';
import { ImpotsSocieteComponent } from './component/impots-societe/impots-societe.component';
import { InscritComponent } from './component/inscrit/inscrit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    BodyComponent,
    LoginComponent,
    PrincipalComponent,
    MonProfilComponent,
    ExerciceComponent,
    DeclarationExistencesComponent,
    DeclarationImpotssComponent,
    EmployeesComponent,
    ImpotsRPPsComponent,
    LoyersComponent,
    ContribuablesComponent,
    PersonnePhyzComponent,
    PersonneMorlComponent,
    ImpotsSocieteComponent,
    InscritComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    ChartModule,
    HttpClientModule,
    FormsModule,
    TypeaheadModule.forRoot(),
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    AlertModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
