import { Component, OnInit } from '@angular/core'
import { MoviesService } from '../services/movies.service'
import { ActivatedRoute } from '@angular/router'

@Component({
    templateUrl: './movie-details.component.html',
    styles: [`
        @media(min-width: 50rem){
            .backdrop-wraper .grid .content-wrap{
                position: absolute;
                top: 30%;
                left: 10%;
            }
            .backdrop-wraper {
                display: grid;
                grid-template-columns: 1fr 1fr;
            }
            .movie-info{
                display: flex;
                flex-flow: wrap;
            }
            .info-wrap{
                flex: 1;
                display: flex;
                flex-flow: row wrap;
                align-content: flex-end;
                justify-content: space-around;
            }
        }
        .backdrop-wraper .bg-img{
            position: absolute;
            left: 0px;
            width: 100%;
            height: 300px;
            z-index: -1;
            opacity: 0.5;
        }
        .backdrop-wraper {
            height: 300px;
            color: #eaeaea;
            margin-bottom: 2em;
        }
        .backdrop-wraper .grid {
            column: span 2;
        }
        @media all and (max-width: 515px){
            .backdrop-wraper .grid .content-wrap{
                position: relative;
                top: 10%;
                left: 10%;
            }
        }
        .backdrop-wraper .grid .content-wrap{
            padding: 1rem;
            box-shadow: black -10px 10px 20px;
            height: auto; 
        }
        .movie-title{
            color: #eaeaea;
            font-size: 1.5em;
            letter-spacing: 3px;
            font-weight: bolder;
            margin-bottom: 15px;
        }
        .info-wrap {
            display: flex;
            flex-flow: row nowrap;
            align-content: flex-end;
            justify-content: space-between;
            background-color: rgba(20,20,20,0.4);
            margin: 1em;
            max-height: auto;
            border-radius: 1%;
        }
        .info-wrap .info{
            flex: 2  content auto;
            text-align: left;
            padding: 1em;
            border-left: 1px solid lightgreen;
            font-size: 1em;
            color: rgb(224, 218, 218)
        }
        .info-wrap .pad-right{
            flex: 1;
            padding: 1em;
            text-align: right;
            font-size: 1em;
            color: #eaeaea;
        }
        .movie-overview1{
            color: #eaeaea !important;
            font-size: .8em;
            font-weight: 20px;
            text-align: justify;
            max-height: 110px;
            max-width: 300px;
            overflow: hidden;
        }
        movie-overview{
            font-wight: normal;
            font-size: 2em;
            line-height: 3em;
            letter-spacing: .04em;
            word-spacing: normal;
            text-align: justify;
        }
        .genres ul,
        .casts ul{
            list-style: none;
            display: flex;
            flex-flow: row wrap;
        }
        .genre,
        .cast{ 
            flex: 1;
            padding: 2em;
        }
        .sec-name{
            margin-top: 10px;
        }

`]
})

export class MovieDetailsComponent implements OnInit {
    movie: any
    baseimgUrl = "https://image.tmdb.org/t/p/w1280"
    constructor(private movieService: MoviesService, private router: ActivatedRoute) {

    }
    ngOnInit() {
        this.movieService.getMovie(+this.router.snapshot.params['id']).subscribe((movie) => {
            this.movie = movie;
            console.log(this.movie)
        });
    }
}