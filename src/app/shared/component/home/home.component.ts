import { Component, OnInit } from '@angular/core';
import { OfService } from '../../services/of.service';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private _ofServices : OfService,
    private _postsService : PostsService
  ) { }

  ngOnInit(): void {
    this._ofServices.of$
      .subscribe(num =>{
        // if (num % 2 === 0) {
        //   console.log(num)
        // }
        console.log(num)
      })
    // this._ofServices.skills$
    //     .subscribe(
    //       (skill) =>{
    //         console.log(skill)
    //         // console.log(`I Love ${skill}`)
    //       }
    //     )

    this._postsService.fetchAllPosts()
        .subscribe(res =>{
          console.log(res)
        });

    this._ofServices.overInterval$
        .subscribe(
          (count) =>{console.log(count)},
          (err) => {console.log(err)},
          () => {console.log(`observable is completed`)}
        )
  }

}

// In Subscribe there are 3 methods >> 1] Success 
                                    // 2] Error 
                                    // 3] Complete