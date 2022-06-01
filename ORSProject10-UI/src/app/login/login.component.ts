import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpServiceService } from '../http-service.service';
import { Router } from '@angular/router';
import { DataValidator } from '../utility/data-validator';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  endpoint = "http://localhost:8080/Auth";

  form = {
    error: false,
    message: '',
    loginId: '',
    password: '',
  };

  inputerror = {};
  message = '';

  constructor(private httpService: HttpServiceService, private dataValidator: DataValidator, private router: Router,
    private cookieService: CookieService) {
  }

  /**
   * Initialize component
   */
  ngOnInit() {
  }

  validate() {
    let flag = true;
    flag = flag && this.dataValidator.isNotNull(this.form.loginId);
    console.log(this.form.loginId);
    flag = flag && this.dataValidator.isNotNull(this.form.password);
    console.log(this.form.password);
    return flag;
  }


  signIn() {
    var _self = this;
    console.log('signIn', this.form);
    this.httpService.post(this.endpoint + "/login", this.form, function (res) {

      console.log('MyResponse', res);

      _self.form.message = '';
      _self.inputerror = {};
      _self.form.loginId = res.result.loginId;
      if (_self.dataValidator.isNotNullObject(res.result.message)) {
        _self.form.message = res.result.message;
      }

      _self.form.error = !res.success;

      if (_self.dataValidator.isNotNullObject(res.result.inputerror)) {
        _self.inputerror = res.result.inputerror;
      }

      if (_self.dataValidator.isTrue(res.success)) {
         
          _self.httpService.setToken(res.result.token);
          localStorage.setItem("loginId", res.result.loginId);
          let tokenStr = "Bearer " + res.result.token;
          localStorage.setItem("token", tokenStr);
          localStorage.setItem("role", res.result.role);
          localStorage.setItem("fname", res.result.fname);
          localStorage.setItem("lname", res.result.lname);
          localStorage.setItem("userid", res.result.data.id);
          console.log(res.result.data.id+'sessionId set ----');
        console.log(res.result.token+'Token set ----');

        _self.router.navigateByUrl('/dashboard');
      }

    });
  }

 
}
