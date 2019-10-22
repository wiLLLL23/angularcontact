import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Contact } from '../../models/contact';
import { ContactDatabaseService } from '../../services/contact-database.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  contacts: Contact[] = [];
  @Output() idSelected = new EventEmitter();

  constructor(private dataBaseService: ContactDatabaseService) { }

  ngOnInit() {
    this.dataBaseService.sendContact.subscribe(cts => this.contacts = cts);
  }

  contactSelected(item: number) {
    this.idSelected.emit(item);
  }

}
