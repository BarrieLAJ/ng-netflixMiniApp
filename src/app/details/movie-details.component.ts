import { Component, OnInit } from '@angular/core'
import { MoviesService } from '../services/movies.service'
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'movie-details',
    template: `
        <div class="row">
            <h1>{{movie?.title}}</h1>
        </div>
    `
})

export class MovieDetailsComponent implements OnInit {
    movie:any
    constructor(private movieService:MoviesService, private router:ActivatedRoute){

    }
    ngOnInit(){
        this.movie = this.movieService.getMovie(+this.router.snapshot.params['id'])
        console.log(this.movie)
    }
}