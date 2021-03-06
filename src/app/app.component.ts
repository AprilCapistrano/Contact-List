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
interface ContactId extends Contact {
	id  : string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  contactsCol: AngularFirestoreCollection<Contact>;
  contacts: any;
  firstName: string;
  lastName: string;
  mobile: number;
  phone: number;
  email: string;
  address: string; 

  contactDoc: AngularFirestoreDocument<Contact>;
  contact: Observable<Contact>;

  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
  	this.contactsCol = this.afs.collection('contacts');
  	this.contacts = this.contactsCol.valueChanges();

  	this.contacts = this.contactsCol.snapshotChanges().map(actions => {
  		return actions.map(a => {
  			const data = a.payload.doc.data() as Contact;
  			const id = a.payload.doc.id;
  			return { id, data };
  		});
  	});
  }

  addContact() {
    this.afs.collection('contacts').doc('my-custom-id').set({'firstName': this.firstName, 'lastName': this.lastName, 'mobile': this.mobile, 'phone': this.phone, 'email': this.email, 'address': this.address});
  }

  getContact(contactId) {
    this.contactDoc = this.afs.doc('contacts/'+contactId);
    this.contact = this.contactDoc.valueChanges();
  }

  deleteContact(contactId)
  {
  	this.afs.doc('contacts/'+contactId.delete());
  }
}
