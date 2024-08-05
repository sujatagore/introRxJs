import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  interval$ = interval(1000);
  intervalSubScription !: Subscription

  constructor() { }
  
  ngOnInit(): void {
    this.intervalSubScription = this.interval$
                                    .subscribe(res =>{
                                      console.log(res);
                                      // document.write(res.toString())
                                    })
  }

  ngOnDestroy(): void {
    this.intervalSubScription.unsubscribe()
  }

}
