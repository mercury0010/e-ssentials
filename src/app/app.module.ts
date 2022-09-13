import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { CarouselComponent } from './components/carousel/carousel.component';
/**const firebaseConfig = {
  apiKey: "AIzaSyDwe8-YnFMP39ZyFDMroQQW7kVjaKV5MiY",
  authDomain: "e-ssentials-44a91.firebaseapp.com",
  projectId: "e-ssentials-44a91",
  storageBucket: "e-ssentials-44a91.appspot.com",
  messagingSenderId: "172988100276",
  appId: "1:172988100276:web:cf08df7c1282af41aff1e1",
  measurementId: "G-KVYSMBM117"
};**/
const config = {
  apiKey: 'AIzaSyDwe8-YnFMP39ZyFDMroQQW7kVjaKV5MiY',
  authDomain: 'e-ssentials-44a91.firebaseapp.com',
  databaseURL: '<your-database-URL>',
  projectId: 'e-ssentials-44a91',
  storageBucket: 'e-ssentials-44a91.appspot.com',
  messagingSenderId: '172988100276'
};
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CarouselComponent,


  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,

    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
