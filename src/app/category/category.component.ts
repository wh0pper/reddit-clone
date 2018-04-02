import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable, FirebaseListObservable } from "angularfire2/database";

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
  threads: any[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private location: Location, private categoryService: CategoryService) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.categoryId = urlParameters['id'];
    });
    this.categoryService.getCategoryById(this.categoryId).subscribe(data => {
      this.categoryToDisplay = data;
      this.categoryService.getThreads(data.$key).subscribe(threadData => {
        console.log(threadData);
        this.threads = threadData[1];
      });
    });
  }

  goToThreadPage(clickedThread) {
    console.log(clickedThread);
    this.router.navigate(['/category', this.categoryId, 'thread', clickedThread.$key]);
  }

}
