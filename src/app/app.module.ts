// Other imports removed for brevity

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';


  var config = {
    apiKey: "AIzaSyAR3mHihm7lsjdXTLgAR4UgcALihbqp56s",
    authDomain: "contact-list-88311.firebaseapp.com",
    databaseURL: "https://contact-list-88311.firebaseio.com",
    projectId: "contact-list-88311",
    storageBucket: "",
    messagingSenderId: "989033117997"
  };
  firebase.initializeApp(config);




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),  // Add this
    AngularFirestoreModule                            // And this
  ],
  providers: [],
  bootstrap: [AppComponent]
})

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
