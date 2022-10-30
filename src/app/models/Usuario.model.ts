export class Usuario{
  firstName: string;
  lastName: string;
  isCustomer: boolean;
  isWorker: boolean;
}

export interface LoginDTO{
  userName: string;
  password: string;
}

export interface AccessToken{
  access_token: string;
  refresh_token: string;
}
