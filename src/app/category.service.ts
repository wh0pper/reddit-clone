import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from "angularfire2/database";

@Injectable()
export class CategoryService {
  categories: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.categories = database.list('categories');
  }

  getCategories() {
    return this.categories;
  }

  getCategoryById(categoryId: string) {
    return this.database.object('categories/' + categoryId);
  }

  addCategory(name) {
    this.categories.push(name);
  }

}
