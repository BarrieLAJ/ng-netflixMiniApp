import { Component, OnInit } from '@angular/core'
import { TvShowsService } from '../services/tvshows.service'
import { ActivatedRoute } from '@angular/router'

@Component({
    templateUrl: './tvshow-details.component.html',
    styles: [`
    .container{
        color: #fff !important;
        font-size: 1.0em !important;
    }
    .backdrop-wraper .bg-img{
        position: absolute;
        background-image: url('mbhvgjthb/.jjh');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 350px;
        z-index: -1;
        opacity: 0.5;
    }
    .backdrop-wraper {
        height: 350px;
        color: #eaeaea;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .backdrop-wraper .content-wrap {
        column: span 2;
        margin-top: 30px;
        margin-bottom: 30px;
    }
    .movie-title{
        color: #eaeaea;
        font-size: 2.0em;
        letter-spacing: 3px;
        font-weight: bolder;
        margin-bottom: 15px;
    }
    .movie-info{
        display: flex;
        flex-flow: wrap;
    }
    .info-wrap{
        flex: 1;
        display: flex;
        flex-flow: wrap;
    }
    .info-wrap .info{
        flex: 2;
        padding: 1em;
        color: #eaeaea;
    }
    .info-wrap .pad-right{
        flex: 1;
        padding: 1em;
        color: #eaeaea;
    }
    movie-overview1{
        color: #eaeaea !important;
        font-size: 0.02em;
        font-weight: 20px;
        text-align: justify;
        max-height: 150px;
        max-width: 300px;
        overflow: hidden;
    }
    .genres ul,
    .casts ul{
        list-style: none;
        display: flex;
        flex-flow: wrap;
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

export class TvShowDetailsComponent implements OnInit {
    tvshow:any
    constructor(private tvshowService:TvShowsService, private router:ActivatedRoute){

    }
    ngOnInit(){
        this.tvshow = this.tvshowService.getTvshow(+this.router.snapshot.params['id'])
        console.log(this.tvshow)
    }
}