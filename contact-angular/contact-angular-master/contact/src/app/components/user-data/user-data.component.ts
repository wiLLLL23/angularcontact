import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact';
import { ContactDatabaseService } from '../../services/contact-database.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  isSave: boolean = false;

  _name: string;
  _telephone: string;
  _email: string;
  _type: string;

  types: string[] = ['Particular', 'Trabalho', 'Amigos', 'Família'];

  constructor(private dataBaseService: ContactDatabaseService) { }

  ngOnInit() {}

  saveAction() {
    if (this._type == undefined) {
      this._type = this.types[0];
    }

    let contact = new Contact(this._name, this._telephone, this._email, this._type);
    this.dataBaseService.setContact(contact);
    this.isSave = !this.isSave;
  }

  backAction() {
    this._name = '';
    this._telephone = '';
    this._email = '';
    this._type = '';
    this.isSave = !this.isSave;
  }

}
