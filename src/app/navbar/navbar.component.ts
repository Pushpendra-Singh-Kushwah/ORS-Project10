import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { HttpServiceService} from '../http-service.service';
import { ServiceLocatorService} from '../service-locator.service';
import { LoginComponent} from '../login/login.component';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

 
  constructor(private translate: TranslateService, private route : ActivatedRoute, private httpService : HttpServiceService, private servicelocator : ServiceLocatorService) { 

    translate.setDefaultLang('en');
  }

  changeLocale(locale:string){
    this.translate.use(locale);
     console.log(locale);
   }

   public form = {

    error: false, //error 
    message: null, //error or success message
  
    data: { id: null }, //form data
    inputerror: {}, // form input error messages
    searchParams: {}, //search form
    searchMessage: null, //search result message
    list: [], // search list 
  
  };
  ngOnInit() {
    // var _self = this;
    // this.httpService.get("http://localhost:8080/Auth/menu",function (res){
      
    //   if(res.success){
    //     _self.form.list = res.result.list;
      
    //   }else{
    //     _self.form.error = false;
    //     _self.form.message = res.result.message;
    //   }
    //   console.log('FORM', _self.form);
    // });
  }


  logout() {
    console.log("navbar logout method run");
    
    
}
}
