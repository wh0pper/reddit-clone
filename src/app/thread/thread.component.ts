import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from "angularfire2/database";
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css'],
  providers: [CategoryService]
})
export class ThreadComponent implements OnInit {
  threadId: string = '';
  categoryId: string = '';
  threadToDisplay: FirebaseObjectObservable<any>;
  posts: FirebaseObjectObservable<any[]>;

  constructor(private route: ActivatedRoute, private location: Location, private categoryService: CategoryService) { }

  ngOnInit() {
    console.log(this.route.params);
    this.route.params.forEach((urlParameters) => {
      this.categoryId = urlParameters['cId'];
      this.threadId = urlParameters['tId'];
    });
    this.categoryService.getThreadById(this.categoryId, this.threadId).subscribe(data => {
      this.threadToDisplay = data;
    })
  }

}
