import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage implements OnInit 
{
  public pay: string

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() 
  {
    this.pay=this.activatedRoute.snapshot.paramMap.get('id');
  }

}
