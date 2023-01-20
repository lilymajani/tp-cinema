export interface IUser {
  name?: string;
  firstname?: string;
  birthDate?: Date;
  email?: string;
  password?: string;
  role?: string;
  id? :number;
}

export class User implements IUser {
  constructor(
    public name?: string,
    public firstname?: string,
    public birthDate?: Date,
    public email?: string,
    public password?: string,
    public role?: string,
    public id? :number,
  ) {
  }
}
