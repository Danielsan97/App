import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit
 {
  public courses: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() 
  {
    this.courses = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
