import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Contact {
	address : string;
	email : string;
	firstName : string;
	lastName : string;
	mobile : number;
	phone : number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  contactsCol: AngularFirestoreCollection<Contact>;
  contacts: Observable<Contact[]>;

  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
  	this.contactsCol = this.afs.collection('contacts');
  	this.contacts = this.contactsCol.valueChanges();
  }
}
