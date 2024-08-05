import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'introRxJs';

  // interval$ = interval(1000)

  ngOnInit(): void {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data =>{
        console.log(data)
      })

      // this.interval$
      //     .subscribe(res =>{
      //       console.log(res)
      //     })
  }
}

//observer must contain $ sign at end.
// If we want a data from observer we want to subscribe it but in promise we use then to consume data