import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from "angularfire2/database";

import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {
  categoryId: string = '';
  categoryToDisplay: FirebaseObjectObservable<any>;

  constructor(private route: ActivatedRoute, private location: Location, private categoryService: CategoryService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.categoryId = urlParameters['id'];
    });
    // this.categoryToDisplay =
    this.categoryService.getCategoryById(this.categoryId).subscribe(data => {
      console.log(data);
      this.categoryToDisplay = data;
    });
  }

}
