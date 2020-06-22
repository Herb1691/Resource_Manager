import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDevices } from '../interfaces/idevices';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  constructor(
    private httpClient: HttpClient,
    @Inject('Base_URL')private baseUrl: string ) { }

    async getDevices(): Promise<IDevices> {
      return await this.httpClient.get<IDevices>(`${this.baseUrl}device`).toPromise();
    }

    async addDevice( device: IDevices ): Promise<IDevices> {
      return await this.httpClient.post<IDevices>(`${this.baseUrl}device`, device).toPromise();
    }
}
