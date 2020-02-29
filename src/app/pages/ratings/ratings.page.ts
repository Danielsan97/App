import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.page.html',
  styleUrls: ['./ratings.page.scss'],
})
export class RatingsPage implements OnInit 
{
  public ratings: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() 
  {
    this.ratings = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
