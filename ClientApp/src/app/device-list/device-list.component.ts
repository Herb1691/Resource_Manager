import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDevices } from '../interfaces/idevices';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {

  public devices: IDevices[] = [];

  displayedColumns: string[] = ['systemType', 'maker', 'systemName', 'datePurchased', 'isAssigned', 'organization', 'department'];
  dataSource = [];

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  async ngOnInit() {
    this.devices = await this.http.get<IDevices[]>(this.baseUrl + 'devices').toPromise();
    this.dataSource = this.devices;
  }

}
