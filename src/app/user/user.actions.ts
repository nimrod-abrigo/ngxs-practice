import { User } from './user.model';

export class AddUser {
  static readonly type = '[User] Add';
  constructor(public payload: User) {}
}

export class DeleteUser{
  static readonly type = "[User] Delete";
  constructor (public payload: string){}
}