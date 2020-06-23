import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDevices } from '../interfaces/idevices';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
    public device: IDevices =
    {
      systemType: '',
      maker: '',
      systemName: '',
      datePurchased: new Date(),
      isAssigned: false,
      organization: '',
      department: ''
    };

    public devices: IDevices[] = [];

    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {}

    async ngOnInit() {
        this.devices = await this.http.get<IDevices[]>(this.baseUrl + 'devices').toPromise();
    }
    async save() {
        await this.http.post<IDevices[]>(this.baseUrl + 'devices', this.device).toPromise();
        this.device = {
          systemType: '',
          maker: '',
          systemName: '',
          datePurchased: new Date(),
          isAssigned: false,
          organization: '',
          department: ''
        };
        this.devices = await this.http.get<IDevices[]>(this.baseUrl + 'devices').toPromise();
    }


}
