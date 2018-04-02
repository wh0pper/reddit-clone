import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { config } from '../api-keys';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoryComponent } from './category/category.component';
import { ThreadComponent } from './thread/thread.component';

export const firebaseConfig = {
  apikey: config.apiKey,
  authDomain: config.authDomain,
  databaseURL: config.databaseURL,
  storageBucket: config.storageBucket
}

@NgModule({
  declarations: [
    AppComponent,
    CategoriesListComponent,
    CategoryComponent,
    ThreadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
