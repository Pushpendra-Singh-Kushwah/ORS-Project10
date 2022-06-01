import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, Observable,timer } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  
  public showloader: boolean = true;      
  private subscription: Subscription;
  private timer: Observable<any>;
  numbers: any;
  
  constructor(){
    
  }
  

  public ngOnInit() {
    console.log(this.showloader+'ngOnit call---');
    // call this setTimer method when you want to set timer
    this.setTimer();
  }
  public ngOnDestroy() {
    if ( this.subscription && this.subscription instanceof Subscription) {
      this.subscription.unsubscribe();
    }
  }
  public setTimer(){

    // set showloader to true to show loading div on view
    

    const numbers = timer(5000); // 5000 millisecond means 5 seconds
    numbers.subscribe(x => console.log(x));
  }
}




 
