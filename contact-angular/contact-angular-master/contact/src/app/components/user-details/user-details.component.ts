import { Component, Input } from '@angular/core';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

  @Input() contact: Contact;

}
