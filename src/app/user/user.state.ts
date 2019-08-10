import { State, Action, Selector, StateContext } from '@ngxs/store';
import { AddUser, DeleteUser } from './user.actions';
import { User } from './user.model';

export interface UserStateModel {
  users: User[]
}

@State<UserStateModel>({
  name: 'user',
  defaults: {
    users: []
  }
})
export class UserState {

  @Selector()
  static getUsers(state: UserStateModel) {
    return state.users;
  }

  @Action(AddUser)
  public add(ctx: StateContext<UserStateModel>, { payload }: AddUser) {
    const state = ctx.getState();
    ctx.patchState({
      users: [...state.users, payload]
    })
  }

  @Action(DeleteUser)
    remove(ctx: StateContext<UserStateModel>, { payload }: DeleteUser) {
      ctx.patchState({
        users: ctx.getState().users.filter(a => a.name != payload)
      })
    }
}
