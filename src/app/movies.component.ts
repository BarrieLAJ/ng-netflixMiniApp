import { Component, OnInit } from '@angular/core'
import { MoviesService } from './services/movies.service'


@Component({
    selector: 'movies-list',
    template: `
    <div class="row">
        <h4 class="col-sm-5 text-white" style="margin-left: 0px">Movies</h4>
        <div class="col-sm-7"></div>
        <div class="row">
                <div class="well thumbnail m-2 col-md-3" [routerLink]="['/movie', movie.id]"  *ngFor="let movie of movies"> 
                            <img class="img-responsive img-border" height="80%" my-5 width="100%"  [src]="baseimgUrl+movie?.poster_path" [alt]="movie?.title"/><br>
                            <span class="movie-title text-white font-weight-16">{{movie?.title}}</span><br>
                            <span class="ml-1 text-white font-weight-16">Popularity:<em class="badge bg-danger text-white">{{movie?.popularity}}</em></span>
                            <span class="ml-1 float-right text-white font-weight-16">Vote:<em class="badge bg-success text-white">{{movie?.vote_count}}</em></span><br>
                            <span class="clearfix ml-1 text-white font-weight-16">Released: {{movie?.release_date}}</span>
                            
                </div>
        </div>
    </div>`,
    styles: [`
        .thumbnail{ 
          cursor: pointer;
        }
        .thumbnail:hover{
          background-color: rgba(50,50,50,0.5);
        }
        .thumbnail > img{
          margin-top: 5px;
        }
        .movie-title {
          font-family: Helvertica Verdana ;
          font-size: 1.0em;
          text-align: center;
        }
    `]
})

export class MoviesComponent implements OnInit {
    movies: any
    baseimgUrl =  "https://image.tmdb.org/t/p/w154"
    constructor(private movieService:MoviesService){

    }
    ngOnInit(){
      this.movies = this.movieService.getMovies()
      console.log(this.movies)
    }

}