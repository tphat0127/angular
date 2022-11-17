import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

import { Subscription } from 'rxjs';
import { TableSampleService } from '../../../_core/services/table-sample.service';
import { FormBuilder, FormGroup,FormControl,FormArray,AbstractControl, Validators } from '@angular/forms';


export interface UserElement { 
  email: string;
  id: number;
  phone: string;
  username: string;
  password: string;
}

const ELEMENT_DATA: UserElement[] = [
{
  
  "id": 1,
  "email": "john@gmail.com",
  "username": "johnd",
  "password": "m38rmF$",
  "phone": "1-570-236-7033",
},
{
  
  "id": 2,
  "email": "john@gmail.com",
  "username": "phat dz",
  "password": "m38rmF$",
  "phone": "1-570-236-7033",
},
  
]

@Component({
  selector: 'ngx-table-sample',
  templateUrl: './table-sample.component.html',
  styleUrls: ['./table-sample.component.scss']
})

export class TableSampleComponent implements OnInit {

  //Delaretion
  private subData: Subscription; //Observable: xu ly bat dong bo
  pageNumber: number = 1;
  dataSource = new MatTableDataSource<any>();
  form: FormGroup;
  isEditableNew: boolean = true;
  data = Object.assign( ELEMENT_DATA);
  submitted = false;

  constructor(
    private dataService: TableSampleService, 
    private fb: FormBuilder,
    private _formBuilder: FormBuilder) {
    
    //this.getData();
  }

  displayedColumns: string[] = ['id', 'email', 'username', 'password', 'phone', 'action'];

  ngAfterViewInit() {

  }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      Rows: this._formBuilder.array([])
    });

    this.form = this.fb.group({
      Rows: this.fb.array(ELEMENT_DATA.map(val => this.fb.group({
          id: new FormControl(val.id, Validators.required),
          email: new FormControl(val.email),
          phone: new FormControl(val.phone),
          username: new FormControl(val.username),
          password: new FormControl(val.password),
          action: new FormControl('existingRecord'),
          isEditable: new FormControl(true),
          isNewRow: new FormControl(false),
        })
      )) //end of fb array
    }); // end of form group cretation

    this.dataSource = new MatTableDataSource((this.form.get('Rows') as FormArray).controls);
    this.dataSource.paginator = this.paginator;

    const filterPredicate = this.dataSource.filterPredicate;
    this.dataSource.filterPredicate = (data: AbstractControl, filter) => {
      return filterPredicate.call(this.dataSource, data.value, filter);
    }
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;


  getData() {
    const uri = `users`;     
    this.subData = this.dataService.get(uri).subscribe((res: any) => {   //subscribe: Observable có thay đổi tự động gọi callback
      this.dataSource = res;
      console.log(this.dataSource )
    });
  }

  AddNewRow() {
    const control = this.form.get('Rows') as FormArray;
    control.insert(0,this.initiateVOForm());
    this.dataSource = new MatTableDataSource(control.controls)
  }

  deleteInline(FormElement, i) {
    const control = this.form.get('Rows') as FormArray;
    //control.removeAt(i);
    //this.data.splice(i,1)
    //this.dataSource = new MatTableDataSource(control.controls)
   //FormElement.get('Rows').at(i).removeAt(i)
   //this.dataSource = new MatTableDataSource(data)
   this.dataSource = new MatTableDataSource(control.controls)
   console.log(i);
   console.log(FormElement.get('Rows').at(i).get('username').value)

   this.data.splice(i,1);
   //this.dataSource = new MatTableDataSource(data)
  }

  editInline(FormElement, i) {

    FormElement.get('Rows').at(i).get('isEditable').patchValue(false);
  }

  // get f(): FormGroup {
  //   return  this.fb
  // }


  // On click of correct button in table (after click on edit) this method will call
  saveInline(FormElement, i) {
    console.log(this.form.invalid)

    FormElement.get('Rows').at(i).setErrors({'incorrect': true});

    FormElement.get('Rows').at(i).get('isEditable').patchValue(true);
    this.submitted = true;
    console.log(FormElement.get('Rows').at(i).get('id').errors);
    
  }

  // On click of cancel button in the table (after click on edit) this method will call and reset the previous data
  cancelInline(FormElement, i) {
    FormElement.get('Rows').at(i).get('isEditable').patchValue(true);
  }

  ngOnDestroy() {           //ngOnDestroy: chạy khi huy~ component(chuyen page,...)
    this.subData.unsubscribe();
  }

  initiateVOForm(): FormGroup {
    return this.fb.group({

      id: new FormControl(234),
      email: new FormControl(''),
      phone: new FormControl(''),
      username: new FormControl(''),
      password: new FormControl(''),
      action: new FormControl('newRecord'),
      isEditable: new FormControl(false),
      isNewRow: new FormControl(true),
    });
  }

}

