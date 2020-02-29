import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ApiRestService } from '../../services/api.rest.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit 
{

  public login: string;
  form: FormGroup;
  password: string = 'password';
  eyeIcon: string = 'eye-off';

  constructor
  (
    private activatedRoute: ActivatedRoute,
    public router: Router,
    private authService: AuthService,   
    public ApiRestService:  ApiRestService
  ) {

      this.form = new FormGroup
      (
        {
          // Valida formato de E-mail
        'email': new FormControl('', [Validators.required, Validators.pattern(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)]),
        'password': new FormControl('', Validators.required),
        }
      );
    }


    ShowPassword() 
    {
      this.password = this.password === 'text' ? 'password' : 'text';
      this.eyeIcon = this.eyeIcon === 'eye-off' ? 'eye' : 'eye-off';
    }

    SignIn()
    {
      this.ApiRestService.login(this.form.value).subscribe((data: any) => {
        if(localStorage.getItem('token')) 
        {
          localStorage.removeItem('token');
        } 

        localStorage.setItem('token', data.token);
        localStorage.setItem('user', data.user);
        this.router.navigate(['home'])
      });
    }

    back() 
    {
      this.router.navigate(['home'])
    }

  ngOnInit() 
  {
    this.login = this.activatedRoute.snapshot.paramMap.get('id');
  }


  

}
