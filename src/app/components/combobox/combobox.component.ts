import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataCbbService } from '../../../_core/services/data-cbb.service';

@Component({
  selector: 'combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.scss']
})
export class ComboboxComponent implements OnInit {
  resultArr: any = [];
  private subData: Subscription; //Observable: xu ly bat dong bo
  constructor(private dataService: DataCbbService) { }

  selectedObject = null;
  lb_cbb_1:string = "Combobox 1";
  lb_cbb_2:string = "Combobox 2";

  ngOnInit(): void {            //ngOnInit: khoi tao
   this.getData();
  }

  getData() {
    const uri = `users`;     
    this.subData = this.dataService.get(uri).subscribe((res: any) => {   //subscribe: Observable có thay đổi tự động gọi callback

      this.resultArr = res;
      console.log(this.resultArr)
    });
  }

  ngOnDestroy() {           //ngOnDestroy: chạy khi huy~ component(chuyen page,...)
    this.subData.unsubscribe();
  }

}
