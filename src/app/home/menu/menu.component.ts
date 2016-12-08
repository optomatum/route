import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    console.log(router);
    console.log(activatedRoute);
  }

  ngOnInit() {
  }

}
