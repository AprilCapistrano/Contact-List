import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAR3mHihm7lsjdXTLgAR4UgcALihbqp56s",
    authDomain: "contact-list-88311.firebaseapp.com",
    databaseURL: "https://contact-list-88311.firebaseio.com",
    projectId: "contact-list-88311",
    storageBucket: "",
    messagingSenderId: "989033117997"
  };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),  // Add this
    AngularFirestoreModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
