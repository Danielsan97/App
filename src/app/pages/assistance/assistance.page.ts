import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-assistance',
  templateUrl: './assistance.page.html',
  styleUrls: ['./assistance.page.scss'],
})
export class AssistancePage implements OnInit 
{
  public asist: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() 
  {
    this.asist = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
