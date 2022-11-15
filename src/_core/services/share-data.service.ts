import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class ShareDataService {

  private listCbb = new BehaviorSubject([] as any);
  shareListCbb = this.listCbb.asObservable();
  
  constructor() { }

  shareDataCbb(listCbb: any) {
    this.listCbb.next(listCbb);
  }


}