import { Injectable } from '@angular/core';
import { filter, map, Observable, tap } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class OfService {

  of$ = of(1,2,3,4,5,6,7,8,9)
            .pipe(
              //even number only
              filter((num: number) =>{
                return num % 2 === 0
              })
            )
  
  skills$ = of('HTML', 'JS', 'CSS', 'ANGULAR', 'RxJS')
              .pipe(
                tap(skill =>{
                  console.log(`Before map ${skill}`)
                }),
                map(skill =>{
                  return `I Love ${skill}`
                })
              );

  //custom observer:-

  overInterval$ = new Observable((observer) =>{
        let count = 0;
        setInterval(() =>{
            observer.next(count)
            count++ ;
            if (count === 6) {
              observer.complete()
            }
            if (count > 10) {
              observer.error(`Stop Count`)
            }
        }, 1000)
  });

  constructor() { }
}

// tap operator is use for debugging purpose
// pipe observer always return Observable

//Observable >> continuous stream of data