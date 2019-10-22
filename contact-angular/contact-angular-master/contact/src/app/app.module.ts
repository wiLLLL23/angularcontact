import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserDataComponent } from './components/user-data/user-data.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserListComponent } from './components/user-list/user-list.component';

import { ContactDatabaseService } from './services/contact-database.service';

@NgModule({
  declarations: [
    AppComponent,
    UserDataComponent,
    UserDetailsComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ ContactDatabaseService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
