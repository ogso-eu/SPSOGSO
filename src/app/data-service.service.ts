import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {


  private dataSource1: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  height: Observable<any> = this.dataSource1.asObservable();


  
  private dataSource2: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  weight: Observable<any> = this.dataSource2.asObservable();



  private dataSource3: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  ski_level: Observable<any> = this.dataSource3.asObservable();



  private dataSource4: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  type_snow: Observable<any> = this.dataSource4.asObservable();



  private dataSource5: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  terrain_type: Observable<any> = this.dataSource5.asObservable();

  private data_source: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  ski_style_fun: Observable<any> = this.data_source.asObservable();



  private data_source_1: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  turns: Observable<any> = this.data_source_1.asObservable();




  private data_source_2: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  stable: Observable<any> = this.data_source_2.asObservable();




  constructor() { }
  sendData(data: any) {
    this.dataSource1.next(data);
  }
  sendData2(data: any) {
    this.dataSource2.next(data);
  }
  sendData3(data: any) {
    this.dataSource3.next(data);
  }
  sendData4(data: any) {
    this.dataSource5.next(data);
  }
  sendDataT(data: string) {
    this.dataSource4.next(data);
  }
  sendDataF(data: string) {
    this.data_source.next(data);
  }
  sendDataTurns(data: string) {
    this.data_source_1.next(data);
  }
  sendDataStable(data: string) {
    this.data_source_2.next(data);
  }

}
