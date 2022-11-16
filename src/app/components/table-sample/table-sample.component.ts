import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

import { Subscription } from 'rxjs';
import { TableSampleService } from '../../../_core/services/table-sample.service';

@Component({
  selector: 'ngx-table-sample',
  templateUrl: './table-sample.component.html',
  styleUrls: ['./table-sample.component.scss']
})
export class TableSampleComponent implements AfterViewInit {

  //Delaretion
  private subData: Subscription; //Observable: xu ly bat dong bo
  constructor(private dataService: TableSampleService) {
    this.getData();
  }

  displayedColumns: string[] = ['id', 'email', 'username', 'password', 'phone'];

  //dataSource = new MatTableDataSource<UserElement>(this.resultArr);
  dataSource : UserElement[] = [];
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    
    //this.dataSource.paginator = this.paginator;
  }
  getData() {
    const uri = `users`;     
    this.subData = this.dataService.get(uri).subscribe((res: any) => {   //subscribe: Observable có thay đổi tự động gọi callback
      this.isLoadingResults = false;
      //this.resultArr = res;
      this.dataSource = res;
    });
  }

  ngOnDestroy() {           //ngOnDestroy: chạy khi huy~ component(chuyen page,...)
    this.subData.unsubscribe();
  }

}

export interface UserElement {
  email: string;
  id: number;
  phone: number;
  username: string;
  password: string;
}
