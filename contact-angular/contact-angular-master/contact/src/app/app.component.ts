import { Component } from '@angular/core';
import { ContactDatabaseService } from './services/contact-database.service';
import { Contact } from './models/contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Contatos Angular 2';

  contactClicked: Contact;

  constructor(private dataBaseService: ContactDatabaseService){}

  showdetail(id): void {
    this.contactClicked = this.dataBaseService.getContactById(id);
  }

}
