import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from "angularfire2/database";

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {
  posts: FirebaseObjectObservable<any[]>;

  constructor(private route: ActivatedRoute, private location: Location, private categoryService: CategoryService) { }

  ngOnInit() {
  }

}
