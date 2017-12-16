import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment.prod';

import { AppComponent } from './app.component';
import { DishesComponent } from './components/dishes/dishes.component';

import { DishService } from './services/dish.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddDishComponent } from './components/add-dish/add-dish.component';

@NgModule({
  declarations: [
    AppComponent,
    DishesComponent,
    NavbarComponent,
    AddDishComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'cookbookmanager'),
    AngularFirestoreModule
  ],
  providers: [DishService],
  bootstrap: [AppComponent]
})
export class AppModule { }
