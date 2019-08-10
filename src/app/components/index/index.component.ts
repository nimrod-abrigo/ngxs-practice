import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/user/user.model';
import { Store } from '@ngxs/store';
import { DeleteUser } from 'src/app/user/user.actions';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  users: Observable<User>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.users = this.store.select(state => state.user.users);
  }

  delUser(name) {
    this.store.dispatch(new DeleteUser(name))
  }

}
