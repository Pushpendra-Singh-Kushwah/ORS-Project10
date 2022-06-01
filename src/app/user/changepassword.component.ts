import { Component, OnInit } from '@angular/core';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./user.component.css']
})

export class ChangepasswordComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(locator.endpoints.USER, locator, route);
  }
  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;
    flag = flag && validator.isNotNullObject(form.oldPassword);
    flag = flag && validator.isNotNullObject(form.newPassword);
    flag = flag && validator.isNotNullObject(form.confirmPassword);
    return flag;
  }

  populateForm(form, data) {
    form.id = data.id;
    form.oldPassword = data.oldPassword;
    form.newPassword = data.newPassword;
  }

  
}