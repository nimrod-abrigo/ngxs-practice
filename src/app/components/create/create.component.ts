import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AddUser } from 'src/app/user/user.actions';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  angForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) { }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      email: ['', Validators.required ]
   });
  }

  addUser(name, email) {
    this.store.dispatch(new AddUser({ name, email}));
  }

  ngOnInit() {
    this.createForm();
  }

}
