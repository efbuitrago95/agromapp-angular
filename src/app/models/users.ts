import {Countries} from './countries';

export class Users {
  id: number;
  firstName: string;
  lastName: string;
  document: number;
  phone: number;
  email: string;
  address: string;
  state: number;
  profession: string;
  createdAt: string;
  updateAt: string;
  deleteAt: string;
  idCountry: number;
  countries: Countries;
}
