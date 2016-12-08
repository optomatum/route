import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    console.log(router);
    console.log(activatedRoute);

  }

  ngOnInit() {
  }

}
