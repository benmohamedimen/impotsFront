import { Component, OnInit } from '@angular/core';
import { ImpotsSociete } from 'src/app/models/impotsSociete';

@Component({
  selector: 'app-impots-societe',
  templateUrl: './impots-societe.component.html',
  styleUrls: ['./impots-societe.component.css']
})
export class ImpotsSocieteComponent implements OnInit {
  modalRef: BsModalRef;
  filter = false;
  personeMorls;
  noData = true;
  dataLoaded = false;
  employeAdded = false;
  addingError = false;
  employeUpdated = false;
  updatingError = false;
  emplyeToDelete;
  indexTodelete;
  employeToupdate;
  selectedEmployee;
  deleted = false;
  deleteError = false;
  loggedUser;
  confirmationpwd;
  newImpotsSociete = new ImpotsSociete();

  constructor(private modalService: BsModalService, 
    private router: Router,
    private personneMorlsService: PersonneMorlsService,

    ) { }
  ngOnInit() {
        this.getAll();
        this.dataLoaded = true;
      }
    
      openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    
      }
      openDetailsModal(template: TemplateRef<any>, employee) {
        this.openModal(template);
        console.log("emddployee",employee)
  
        this.selectedEmployee = employee;
  
      }
      openUpdateModal(template: TemplateRef<any>, employee) {
        this.openModal(template);
        this.employeToupdate = employee;
  
      }
      openDeleteModal(confirmDelete:  TemplateRef<any>, employee, index) {
        this.emplyeToDelete = employee;
        this.openModal(confirmDelete);
        this.indexTodelete = index;
      }
    
      showFilter() {
        this.filter = !this.filter;
      }
    
      getAll() {
        this.personneMorlsService.getAllContribuable().subscribe(result => {
          this.personeMorls = result;
          if (this.personeMorls.length > 0) {
            this.noData = false;
          }
        });
      }
      updateEmployee() {
        this.personneMorlsService.updateContribuable(this.employeToupdate).subscribe(result => {
          this.employeUpdated = true;
        }, error => {
          this.employeUpdated = false;
          this.updatingError = true;
        });
        this.modalRef.hide();
        location.reload();
      }
      ConifrmerInscriMoral(personeMor){
        console.log("2222personeMor",personeMor)
        this.personneMorlsService.changeStatus(personeMor,"true").subscribe(result => {})
        this.modalRef.hide();
        location.reload();
  
      }
  }
  
}
