import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-class',
  templateUrl: './class.page.html',
  styleUrls: ['./class.page.scss'],
})
export class ClassPage implements OnInit 
{
  public class: string;

  constructor( private activatedRoute: ActivatedRoute) { }

  ngOnInit() 
  {
    this.class = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
