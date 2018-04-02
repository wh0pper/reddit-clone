import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable } from "angularfire2/database";

import { CategoryService } from '../category.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css'],
  providers: [CategoryService]
})

export class CategoriesListComponent implements OnInit {
  categories: FirebaseListObservable<any[]>;
  constructor(private router: Router, private categoryService: CategoryService) { }

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
  }

  goToCategoryPage(clickedCategory) {
    this.router.navigate(['category', clickedCategory.$key]);
  }

}
