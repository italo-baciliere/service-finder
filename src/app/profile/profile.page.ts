import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IAddress } from '../models/IAddress.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  url = 'http://localhost:8000/';
  profile: string[];
  address: IAddress = {} as IAddress;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getAddress();
  }

  async getAddress() {
    const address = await this.http
      .get<IAddress>(this.url + 'api/address')
      .toPromise();

    this.address = address;
  }

  async updateAddress() {
    const res = await this.http
      .patch<IAddress>(this.url + 'api/address', this.address)
      .toPromise();

    this.address = res;
  }

  handleChange(event) {
    console.log(event.target.value);
    this.profile.push(event.target.value);
  }

  login() {}

  home() {}
}
